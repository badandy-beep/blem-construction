# MBC Update Package - 23-Jan-2026

## Quick Install

Unzip and copy these folders directly into your project root:
- `components/` → replaces Header.js (centered mobile logo)
- `public/images/` → adds 3 project photos

## Then update lib/data.js

Find the `featured` array and change these image URLs:

```javascript
// Candlewood Suites - change img to:
img: "/images/candlewood-suites.jpg",

// Englewood Sports Complex - change img to:
img: "/images/englewood-sports-complex.jpg",

// Holiday Inn Express - change img to:
img: "/images/holiday-inn-express.jpg",
```

## What Changed

**Header.js:**
- Mobile logo now CENTERED and LARGER
- Hamburger menu on LEFT side

**Images (800x600, 4:3 ratio):**
- englewood-sports-complex.jpg - aerial map
- candlewood-suites.jpg - hotel exterior  
- holiday-inn-express.jpg - hotel exterior

---
© 2026 Noetic Dharma Group, LLC
