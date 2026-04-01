# MarveyPixel - Photography & Design Portfolio Website

## Project Overview

Multi-page static HTML/CSS/JS photography and graphic design portfolio website for MarveyPixel. Professional photography services including portraits, weddings, events, creative direction, and graphic design.

## Technology Stack

- **HTML5** - Multi-page semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, no dependencies
- **Font Awesome 6.5** - Icons (CDN)
- **Type**: Static website (no build step required)

## Site Pages

| Page           | File                | Description                                                             |
| -------------- | ------------------- | ----------------------------------------------------------------------- |
| Home           | index.html          | Hero slideshow, masonry featured works, services, testimonials, contact |
| About          | about.html          | Company story, philosophy, style, values                                |
| Pricing        | pricing.html        | Photography packages and pricing                                        |
| Gallery        | gallery.html        | Filterable photo gallery with categories                                |
| Blog           | blog.html           | Photography tips and articles                                           |
| Booking        | booking.html        | Interactive calendar booking system                                     |
| Invoice        | invoice.html        | Invoice generator for completed sessions                                |
| Client Gallery | client-gallery.html | Password-protected client photo downloads                               |
| Design         | design.html         | Graphic design portfolio (logos, branding, social media, posters)       |
| Portrait       | portrait.html       | Portrait photography gallery                                            |
| Wedding        | wedding.html        | Wedding photography gallery                                             |
| Events         | events.html         | Event photography gallery                                               |
| Creative       | creative.html       | Creative direction gallery                                              |

## Key Features Implemented

1. **Header Redesign** - Sticky header with blurred backdrop, Contact button (pill-shaped) on desktop & mobile
2. **Full-Screen Mobile Nav** - Animated overlay with staggered link transitions, contact CTA, social links
3. **Hero Slideshow** - 4 rotating images with crossfade transitions, navigation indicators, scroll-down prompt
4. **Masonry Layout** - CSS Grid masonry with varied heights/widths, hover overlays on featured works
5. **Booking Calendar** - Interactive date picker (disabled past/Sundays), time slots, WhatsApp booking confirmation
6. **Invoice Generator** - Auto-generated invoice numbers, line items, tax calculation, print/PDF export
7. **Client Gallery** - Per-client unique galleries with personalized access codes, welcome banner with session details, select/download photos, session persistence via localStorage
8. **Graphic Design Portfolio** - Design services, filterable masonry gallery, 4-step design process
9. **Scroll Animations** - IntersectionObserver-powered fade-in animations on all sections
10. **Dark Mode** - Theme toggle with localStorage persistence across all pages

## Client Gallery System (Unique Per-Client)

The client gallery (`client-gallery.html`) now supports **unique galleries per client**.

### How It Works

- Each client gets a **unique access code** (e.g., `SARAH-W2026`, `JOHN-PORTRAIT`)
- Client data is configured in `client-galleries.js` (not hardcoded in HTML)
- After entering their code, clients see a **personalized welcome banner** with their name, session type, date, and a custom message
- Only their photos are displayed in the gallery grid
- Session persists via localStorage — returning clients don't need to re-enter their code

### Adding a New Client

1. Open `client-galleries.js`
2. Copy an existing client object
3. Set a unique `code`, `name`, `sessionType`, `date`, `message`, and `photos` array
4. Save — the gallery page automatically picks up the changes

### Sample Access Codes (demo clients)

| Code            | Client           | Session Type       |
| --------------- | ---------------- | ------------------ |
| `SARAH-W2026`   | Sarah & James    | Wedding            |
| `JOHN-PORTRAIT` | John Adewale     | Portrait           |
| `FUNKE-EVENT`   | Funke's Birthday | Event              |
| `TOBI-CREATIVE` | Tobi Akinola     | Creative Direction |

### Files

- `client-galleries.js` — Client data configuration (codes, names, photos)
- `client-gallery.html` — Gallery page with password gate and dynamic grid
- `script.js` — Auth logic, gallery rendering, download functionality
- `style.css` — Welcome banner, gallery grid, and gate styling

## Contact Information

- **WhatsApp**: +234 814 321 2398
- **Email**: marveypixel@gmail.com
- **Instagram**: @marveypixel\_
- **Facebook**: facebook.com/marveypixel
- **Twitter**: @marveyboy01

## Design System

- **Primary Color**: #007bff (blue)
- **Accent Color**: #90EE90 (light green)
- **Dark Background**: #0b1c2d
- **Border Radius**: 12-16px for cards, 50px for buttons
- **Font**: Helvetica family
- **Transitions**: 0.3s ease (standard), cubic-bezier for mobile nav
