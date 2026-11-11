# PickProDeals

A premium affiliate marketing website featuring curated top-10 product reviews for luxury lifestyle categories.

## Tech Stack

- **Framework**: Astro 4.15 (static site generator)
- **Styling**: Tailwind CSS v4
- **Animations**: AOS (Animate on Scroll)
- **Fonts**: Playfair Display + Inter (Google Fonts)
- **Icons**: Inline SVGs
- **Image Processing**: Sharp

## Features

- 23 fully built pages (home, blog index, 15 review articles, categories, about, contact, legal pages)
- Luxury champagne gold (#C9A962) design on cream backgrounds
- Reading progress bar, back-to-top button, cookie consent banner
- Responsive mobile-first design with hamburger menu
- SEO-optimized with Schema.org JSON-LD structured data
- Open Graph and Twitter Card meta tags
- Sitemap.xml and robots.txt
- AOS scroll animations throughout

## Product Categories Covered

1. Portable Blenders for Smoothies
2. LED Desk Lamps for Working From Home
3. Yoga Mats for Beginners
4. Robot Vacuums Under $300
5. Essential Oil Diffusers
6. Air Fryers for Small Kitchens
7. Weighted Blankets for Better Sleep
8. Electric Kettles with Precise Temperature
9. Standing Desk Converters
10. Cordless Vacuums (Lightweight)
11. Mini Skincare Fridges
12. Insulated Water Bottles
13. Massage Guns for Recovery
14. Single-Serve Coffee Makers
15. Area Rugs for Living Room

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:4321

## Build

```bash
npm run build
```

Output in `dist/`

## Deployment

### Cloudflare Pages (Recommended)

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Alternative: Manual Upload

Upload the `dist/` folder contents directly to your hosting provider.

## Design System

- **Primary Gold**: #C9A962
- **Gold Light**: #E8D5B0
- **Dark**: #1A1A1A
- **Cream**: #F7F4EF
- **Cream Dark**: #EDE8DD
- **Font Heading**: Playfair Display (serif)
- **Font Body**: Inter (sans-serif)

## Affiliate Disclosure

All product links use placeholder `href="#"` values. Replace with your actual Amazon Associates or affiliate network links before going live. See [affiliate-disclosure](/affiliate-disclosure) page.
