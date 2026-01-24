'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

// MB Monogram Logo Component - Brand Package G6 Ornate Frame
export function LogoMonogram({ size = 60, variant = 'primary', className = '' }) {
  const variants = {
    primary: {
      bg: '#1C2B39',
      border: '#B8860B',
      corner: '#D4A012',
      dot: '#B8860B',
      text: '#FFFFFF',
    },
    gold: {
      bg: '#B8860B',
      border: 'rgba(255,255,255,0.4)',
      corner: 'rgba(255,255,255,0.6)',
      dot: 'rgba(255,255,255,0.5)',
      text: '#FFFFFF',
    },
    light: {
      bg: '#FFFFFF',
      border: '#B8860B',
      corner: '#D4A012',
      dot: '#B8860B',
      text: '#1C2B39',
    },
  };

  const colors = variants[variant] || variants.primary;
  const scale = size / 200;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      className={className}
      aria-label="Michael Blem Construction Logo"
    >
      {/* Background */}
      <rect x="20" y="20" width="160" height="160" fill={colors.bg} />
      
      {/* Border */}
      <rect 
        x="20" y="20" 
        width="160" height="160" 
        stroke={colors.border} 
        strokeWidth={Math.max(2.5, 2.5 / scale)} 
        fill="none" 
      />
      
      {/* Ornate Corner Flourishes */}
      <path d="M20 48 Q20 20 48 20" stroke={colors.corner} strokeWidth={Math.max(3, 3 / scale)} fill="none" />
      <path d="M152 20 Q180 20 180 48" stroke={colors.corner} strokeWidth={Math.max(3, 3 / scale)} fill="none" />
      <path d="M180 152 Q180 180 152 180" stroke={colors.corner} strokeWidth={Math.max(3, 3 / scale)} fill="none" />
      <path d="M48 180 Q20 180 20 152" stroke={colors.corner} strokeWidth={Math.max(3, 3 / scale)} fill="none" />
      
      {/* Corner Dots */}
      <circle cx="20" cy="20" r={Math.max(4, 4 / scale)} fill={colors.dot} />
      <circle cx="180" cy="20" r={Math.max(4, 4 / scale)} fill={colors.dot} />
      <circle cx="180" cy="180" r={Math.max(4, 4 / scale)} fill={colors.dot} />
      <circle cx="20" cy="180" r={Math.max(4, 4 / scale)} fill={colors.dot} />
      
      {/* MB Monogram */}
      <text 
        x="100" 
        y="115" 
        textAnchor="middle" 
        fontFamily="'Playfair Display', Georgia, serif" 
        fontSize="64" 
        fontWeight="700" 
        fill={colors.text}
      >
        MB
      </text>
    </svg>
  );
}

// Horizontal Banner Logo
export function LogoHorizontal({ height = 60, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <LogoMonogram size={height} variant="primary" />
      <div className="flex flex-col" style={{ lineHeight: 1.1 }}>
        <span 
          style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: `${height * 0.4}px`,
            fontWeight: 700,
            color: '#1C2B39',
            letterSpacing: '0.02em',
          }}
        >
          MICHAEL BLEM
        </span>
        <span 
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            fontSize: `${height * 0.16}px`,
            fontWeight: 600,
            color: '#B8860B',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          CONSTRUCTION
        </span>
      </div>
    </div>
  );
}

// Stacked Logo
export function LogoStacked({ size = 120, className = '' }) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <LogoMonogram size={size * 0.5} variant="primary" />
      <span 
        style={{ 
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: `${size * 0.18}px`,
          fontWeight: 700,
          color: '#1C2B39',
          letterSpacing: '0.05em',
          marginTop: `${size * 0.08}px`,
        }}
      >
        MICHAEL BLEM
      </span>
      <span 
        style={{ 
          fontFamily: "'Montserrat', sans-serif",
          fontSize: `${size * 0.09}px`,
          fontWeight: 600,
          color: '#B8860B',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginTop: '2px',
        }}
      >
        CONSTRUCTION
      </span>
    </div>
  );
}

// Footer Logo with reduced opacity
export function LogoFooter({ size = 55, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      className={className}
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    >
      <rect x="20" y="20" width="160" height="160" stroke="#B8860B" strokeWidth="3" fill="none" />
      <path d="M20 50 Q20 20 50 20" stroke="#D4A012" strokeWidth="4" fill="none" />
      <path d="M150 20 Q180 20 180 50" stroke="#D4A012" strokeWidth="4" fill="none" />
      <path d="M180 150 Q180 180 150 180" stroke="#D4A012" strokeWidth="4" fill="none" />
      <path d="M50 180 Q20 180 20 150" stroke="#D4A012" strokeWidth="4" fill="none" />
      <circle cx="20" cy="20" r="5" fill="#B8860B" />
      <circle cx="180" cy="20" r="5" fill="#B8860B" />
      <circle cx="180" cy="180" r="5" fill="#B8860B" />
      <circle cx="20" cy="180" r="5" fill="#B8860B" />
      <text 
        x="100" 
        y="118" 
        textAnchor="middle" 
        fontFamily="'Playfair Display', Georgia, serif" 
        fontSize="68" 
        fontWeight="700" 
        fill="white"
      >
        MB
      </text>
    </svg>
  );
}

export default LogoMonogram;
