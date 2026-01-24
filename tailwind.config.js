/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal-navy': '#1C2B39',
        'antique-gold': '#B8860B',
        'bright-gold': '#D4A012',
        'warm-slate': '#4A5568',
        'warm-white': '#F8F6F3',
        'residential-sage': '#6B8E73',
        'commercial-steel': '#64748B',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
