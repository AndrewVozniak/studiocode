# Studiakodu

## Project Info
- ID: ecbbce85-6526-4f61-827f-0ec77258f042
- Type: imported
- Source: https://github.com/AndrewVozniak/studiocode
- Domain: studiocode.com.ua
- Hosting: CityHost
- Test URL: https://testnetwork.top/studiakodu

## Architecture
- Next.js 16.1.6 with Turbopack
- React 19, TypeScript
- Tailwind CSS 4 (existing — kept as-is)
- Lucide React for icons
- Nodemailer for SMTP email sending
- Geist + Geist Mono fonts
- basePath: /studiakodu (for testnetwork.top deployment)

## Deployment (testnetwork.top)
- **Process**: pm2 process "studiakodu" running `next start -p 3003`
- **Nginx**: proxy pass from `/studiakodu` to `http://127.0.0.1:3003`
- **Config**: `/etc/nginx/proxima-projects/Studiakodu.conf`
- **Auto-start**: pm2 startup configured for systemd
- **Rebuild**: `npm run build && pm2 restart studiakodu`

## Completed Work

### Session 1 — Initial Setup + Rebrand
- Full rebrand Oria Agency → Studio Code
- Removed Russian locale (EN + UA only)
- Added About section, Privacy Policy page
- Contact form with SMTP via Nodemailer
- SEO metadata configured

### Session 2 — Complete Redesign + Deployment Fix
- **403 Fix**: Changed from static file serving to pm2 + nginx proxy
- **Complete visual redesign** — new color scheme (navy/blue), new layout, new typography
  - Old: Oria-style dark theme with lime green accent (#c8ff00), noise texture, marquee
  - New: Professional dark blue (#0B1121) with blue accent (#3B82F6), clean minimal design
- **Removed sections not in TZ**: Portfolio, Stats, Reviews, AnimateIn
- **Removed data files**: services.ts, process.ts, portfolio.ts, reviews.ts
- **Kept sections per TZ**: Header, Hero, Services, About, Tech Stack, Process, Contact Form, Footer
- **Light theme**: Clean white (#FFFFFF) with blue accent (#2563EB)
- **Footer**: Uses Next.js Link for privacy page (basePath-aware)

### Site Structure
1. Header (sticky, EN/UA toggle, dark/light theme)
2. Hero (badge, title, subtitle, CTAs, mini-stats)
3. Services (6 cards with icons)
4. About (description + 3 value cards)
5. Tech Stack (4 category cards with tech tags)
6. Process / How We Work (4 numbered steps)
7. Contact (form + info sidebar)
8. Footer (brand, quick links, services, legal)

### Build Status
- ✅ Builds successfully
- ✅ Deployed at https://testnetwork.top/studiakodu (200 OK)
- ✅ Privacy page works (/studiakodu/privacy)
- ✅ API route works (/studiakodu/api/contact)

### TODO for Production (studiocode.com.ua)
- Configure SMTP credentials in `.env.local` on CityHost
- Set up email accounts: info@studiocode.com.ua, hr@studiocode.com.ua
- Update social links (Telegram, LinkedIn, GitHub)
- Add favicon/OG image assets
- Deploy to CityHost with domain studiocode.com.ua
- Remove basePath when deploying to own domain (it's only for testnetwork.top)
