# Michael Blem Construction - Mobile Optimized Website v4.1

A premium, mobile-responsive Next.js website for Michael Blem Construction, a third-generation master builder serving Southwest Florida since 1987.

## Mobile Optimization Summary

This version includes comprehensive mobile responsiveness fixes:

### Key Improvements

1. **Responsive Hook (`useResponsive`)** - All pages use a consistent responsive system
2. **Flexible Layouts** - Grid systems that collapse properly on mobile
3. **Touch-Friendly** - 44px minimum touch targets for all interactive elements
4. **No Horizontal Overflow** - Content properly contained within viewport
5. **Readable Typography** - Font sizes scale appropriately (32px-56px headlines)
6. **Mobile Navigation** - Slide-out drawer menu with proper z-index handling
7. **Responsive Tables** - Stack into cards on mobile devices
8. **Form Optimization** - 16px font sizes to prevent iOS zoom

### Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

### CSS Classes

- `.grid-2`, `.grid-3`, `.grid-4` - Responsive grid systems
- `.hide-mobile` / `.show-mobile` - Visibility utilities
- `.hide-small-mobile` - Hide on phones < 480px

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS + Responsive inline styles
- **Fonts**: Google Fonts (Playfair Display, Outfit, Montserrat)
- **Deployment**: Vercel

## Project Structure

```
blem-construction-mobile-optimized/
├── app/
│   ├── about/page.js
│   ├── blog/page.js
│   ├── client-access/page.js
│   ├── commercial/page.js
│   ├── contact/page.js
│   ├── downloads/page.js
│   ├── projects/page.js
│   ├── residential/page.js
│   ├── resources/page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Footer.js
│   ├── Header.js
│   ├── Logo.js
│   └── SocialIcons.js
├── lib/
│   ├── data.js
│   └── useResponsive.js    # NEW: Responsive helper hook
├── public/
│   ├── favicon.svg
│   └── logo-primary.svg
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Brand Package Colors

- **Charcoal Navy** (#1C2B39) - Primary headers, logo, navigation
- **Antique Gold** (#B8860B) - CTAs, highlights, accents
- **Bright Gold** (#D4A012) - Logo corners, hover states
- **Warm Slate** (#4A5568) - Body text, secondary elements
- **Warm White** (#F8F6F3) - Backgrounds, cards
- **Residential Sage** (#6B8E73) - Residential section accent
- **Commercial Steel** (#64748B) - Commercial section accent

## Client Portal Access

Password: `blem2026`

## Testing Mobile

Test the site on these devices/simulators:

1. iPhone SE (375px)
2. iPhone 12/13/14 (390px)
3. iPhone 12/13/14 Pro Max (428px)
4. iPad Mini (768px)
5. iPad Pro (1024px)

Check for:
- No horizontal scrolling
- All text readable without zooming
- All buttons/links easily tappable
- Forms don't trigger zoom on iOS
- Navigation menu works smoothly

## License & Ownership

© 2026 Noetic Dharma Group, LLC | www.noeticdharma.com

CONFIDENTIAL & PROPRIETARY - This project contains confidential, proprietary, and trade secret information belonging exclusively to Noetic Dharma Group, LLC.

---

**Contact**: mike@blemconstruction.com | (941) 777-BLEM
