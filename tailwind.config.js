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
        'copper-accent': '#C17F59',
        'stone-gray': '#9CA3AF',
        'residential-sage': '#6B8E73',
        'commercial-steel': '#64748B',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 8px 40px rgba(28, 43, 57, 0.08)',
      },
      screens: {
        'xs': '375px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}
