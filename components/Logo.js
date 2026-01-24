'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

export function LogoMonogram({ size = 60, variant = 'primary' }) {
  const variants = {
    primary: { bg: '#1C2B39', border: '#B8860B', corner: '#D4A012', dot: '#B8860B', text: '#FFFFFF' },
    gold: { bg: '#B8860B', border: 'rgba(255,255,255,0.4)', corner: 'rgba(255,255,255,0.6)', dot: 'rgba(255,255,255,0.5)', text: '#FFFFFF' },
  };
  const c = variants[variant] || variants.primary;

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-label="Michael Blem Construction Logo">
      <rect x="20" y="20" width="160" height="160" fill={c.bg} />
      <rect x="20" y="20" width="160" height="160" stroke={c.border} strokeWidth="2.5" fill="none" />
      <path d="M20 48 Q20 20 48 20" stroke={c.corner} strokeWidth="3" fill="none" />
      <path d="M152 20 Q180 20 180 48" stroke={c.corner} strokeWidth="3" fill="none" />
      <path d="M180 152 Q180 180 152 180" stroke={c.corner} strokeWidth="3" fill="none" />
      <path d="M48 180 Q20 180 20 152" stroke={c.corner} strokeWidth="3" fill="none" />
      <circle cx="20" cy="20" r="4" fill={c.dot} />
      <circle cx="180" cy="20" r="4" fill={c.dot} />
      <circle cx="180" cy="180" r="4" fill={c.dot} />
      <circle cx="20" cy="180" r="4" fill={c.dot} />
      <text x="100" y="115" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="64" fontWeight="700" fill={c.text}>MB</text>
    </svg>
  );
}

export function LogoFooter({ size = 55 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" style={{ opacity: 0.35 }} aria-hidden="true">
      <rect x="20" y="20" width="160" height="160" stroke="#B8860B" strokeWidth="3" fill="none" />
      <path d="M20 50 Q20 20 50 20" stroke="#D4A012" strokeWidth="4" fill="none" />
      <path d="M150 20 Q180 20 180 50" stroke="#D4A012" strokeWidth="4" fill="none" />
      <path d="M180 150 Q180 180 150 180" stroke="#D4A012" strokeWidth="4" fill="none" />
      <path d="M50 180 Q20 180 20 150" stroke="#D4A012" strokeWidth="4" fill="none" />
      <circle cx="20" cy="20" r="5" fill="#B8860B" />
      <circle cx="180" cy="20" r="5" fill="#B8860B" />
      <circle cx="180" cy="180" r="5" fill="#B8860B" />
      <circle cx="20" cy="180" r="5" fill="#B8860B" />
      <text x="100" y="118" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="68" fontWeight="700" fill="white">MB</text>
    </svg>
  );
}

export default LogoMonogram;
