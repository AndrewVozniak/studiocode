# Studiakodu

## Project Info
- ID: ecbbce85-6526-4f61-827f-0ec77258f042
- Type: imported
- Source: https://github.com/AndrewVozniak/oria.git
- Domain: studiocode.com.ua
- Hosting: CityHost

## Architecture
- Next.js 16.1.6 with Turbopack
- React 19, TypeScript
- Tailwind CSS 4 (existing — kept as-is)
- Framer Motion for animations
- Lucide React for icons
- Nodemailer for SMTP email sending
- Geist + Geist Mono fonts

## Completed Work (Session 1)

### Full Rebrand: Oria Agency → Studio Code
- Renamed all branding references from "Oria" to "Studio Code"
- Removed Russian (ru) locale — site now only supports EN + UA
- Updated Locale type, translations, and all components
- Updated package.json name to "studiocode"

### New Sections & Pages
- **About section** (`/src/components/About.tsx`) — company description + 3 values
- **Privacy Policy page** (`/src/app/privacy/`) — full EN + UA privacy policy
  - Uses dynamic import with `ssr: false` to avoid prerender issues with AppContext

### Contact Form with Email
- **API route** (`/src/app/api/contact/route.ts`)
  - Sends to info@studiocode.com.ua (primary)
  - CC to hr@studiocode.com.ua
  - Honeypot anti-spam field
  - Rate limiting (5 submissions/hour per IP)
  - Input sanitization
  - Falls back to console.log if SMTP not configured
- **SMTP config** via `.env.local`:
  - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
  - Template: `.env.local.example`

### SEO
- Title: "Studio Code — Custom Software Development in Ukraine"
- OpenGraph tags configured for studiocode.com.ua
- metadataBase set to https://studiocode.com.ua
- Ukrainian + English keywords

### Site Structure
1. Header (sticky, EN/UA toggle, dark/light theme)
2. Hero
3. Tech Stack (marquee)
4. Services (4 cards)
5. About (new)
6. Portfolio (filterable)
7. Stats
8. Process / How We Work
9. Reviews (auto-rotating)
10. Contact (CTA banner + form)
11. Footer (sitemap, connect, legal)

### Build Status
- ✅ Builds successfully (`npm run build`)
- Static pages: /, /privacy, /_not-found
- Dynamic: /api/contact

### TODO for Deployment
- Configure SMTP credentials in `.env.local` on CityHost
- Set up email accounts: info@studiocode.com.ua, hr@studiocode.com.ua
- Update social links (Telegram, LinkedIn, GitHub) in Footer and Contact components
- Add favicon/OG image assets
- Deploy to CityHost with domain studiocode.com.ua
