import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting: simple in-memory store
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = submissions.get(ip) || [];
  const recent = attempts.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  return recent.length >= MAX_SUBMISSIONS;
}

function recordSubmission(ip: string): void {
  const attempts = submissions.get(ip) || [];
  attempts.push(Date.now());
  submissions.set(ip, attempts);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, projectType, budget, message, website } = body;

    // Honeypot check
    if (website) {
      // Bot detected — silently accept
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) =>
      str.replace(/[<>]/g, "").trim().slice(0, 1000);

    const safeData = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ""),
      projectType: sanitize(projectType),
      budget: sanitize(budget || "Not specified"),
      message: sanitize(message),
    };

    // Build email content
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #c8ff00; padding-bottom: 10px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold; width: 140px;">Name:</td>
            <td style="padding: 10px 0;">${safeData.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold;">Email:</td>
            <td style="padding: 10px 0;"><a href="mailto:${safeData.email}">${safeData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold;">Phone:</td>
            <td style="padding: 10px 0;">${safeData.phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold;">Project Type:</td>
            <td style="padding: 10px 0;">${safeData.projectType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold;">Budget:</td>
            <td style="padding: 10px 0;">${safeData.budget}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${safeData.message}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">Sent from studiocode.com.ua contact form</p>
      </div>
    `;

    const textContent = `
New Contact Form Submission
---
Name: ${safeData.name}
Email: ${safeData.email}
Phone: ${safeData.phone || "—"}
Project Type: ${safeData.projectType}
Budget: ${safeData.budget}
Message: ${safeData.message}
---
Sent from studiocode.com.ua contact form
    `.trim();

    // SMTP configuration — set these in .env.local:
    // SMTP_HOST=mail.studiocode.com.ua
    // SMTP_PORT=465
    // SMTP_USER=info@studiocode.com.ua
    // SMTP_PASS=your_password
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local");
      // Still record the submission data in server logs
      console.log("Contact form submission:", JSON.stringify(safeData, null, 2));
      recordSubmission(ip);
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Send to info@
    await transporter.sendMail({
      from: `"Studio Code Website" <${smtpUser}>`,
      to: "info@studiocode.com.ua",
      replyTo: safeData.email,
      subject: `New inquiry from ${safeData.name} — ${safeData.projectType}`,
      text: textContent,
      html: htmlContent,
    });

    // CC to hr@
    try {
      await transporter.sendMail({
        from: `"Studio Code Website" <${smtpUser}>`,
        to: "hr@studiocode.com.ua",
        replyTo: safeData.email,
        subject: `[CC] New inquiry from ${safeData.name} — ${safeData.projectType}`,
        text: textContent,
        html: htmlContent,
      });
    } catch (ccError) {
      // Don't fail if CC to hr@ fails
      console.error("Failed to send CC to hr@:", ccError);
    }

    recordSubmission(ip);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
