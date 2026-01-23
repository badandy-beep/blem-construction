'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import Link from 'next/link';

const downloads = [
  {
    name: "Company Overview Deck",
    description: "Comprehensive presentation featuring our capabilities, portfolio highlights, and approach.",
    type: "PDF",
    size: "4.2 MB",
    icon: "📊",
    file: null,
    available: false
  },
  {
    name: "Michael Blem Resume",
    description: "Detailed professional background, credentials, and 40+ year career timeline.",
    type: "PDF",
    size: "241 KB",
    icon: "📄",
    file: "/downloads/MBC-MichaelBlem-Resume.pdf",
    available: true
  },
  {
    name: "Services Brochure",
    description: "Overview of commercial and residential services with project examples.",
    type: "PDF",
    size: "3.5 MB",
    icon: "📋",
    file: null,
    available: false
  },
  {
    name: "Florida Building Code Guide",
    description: "Essential guide for understanding Florida's construction requirements.",
    type: "PDF",
    size: "2.1 MB",
    icon: "📘",
    file: null,
    available: false
  }
];

export default function DownloadsPage() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Downloads</h1>
          <p style={{ fontSize: '18px', color: '#4A5568' }}>Access our business materials, credentials, and resources.</p>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 600, color: '#1C2B39', marginBottom: '32px' }}>Business Materials</h2>
            
            {downloads.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '28px', backgroundColor: '#F8F6F3', borderRadius: '12px', marginBottom: '16px', border: '1px solid #E5E7EB', opacity: item.available ? 1 : 0.7 }}>
                <div style={{ fontSize: '40px' }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1C2B39', marginBottom: '6px' }}>{item.name}</h3>
                  <p style={{ fontSize: '14px', color: '#4A5568', marginBottom: '4px' }}>{item.description}</p>
                  <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.type} • {item.size}</span>
                </div>
                {item.available ? (
                  <a 
                    href={item.file}
                    download
                    style={{ 
                      backgroundColor: '#1C2B39', 
                      color: '#FFFFFF', 
                      padding: '14px 28px', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontFamily: "'Montserrat', sans-serif", 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      letterSpacing: '1px', 
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#B8860B'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#1C2B39'}
                  >
                    DOWNLOAD
                  </a>
                ) : (
                  <span style={{ 
                    backgroundColor: '#E5E7EB', 
                    color: '#9CA3AF', 
                    padding: '14px 28px', 
                    borderRadius: '8px', 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    letterSpacing: '1px'
                  }}>
                    COMING SOON
                  </span>
                )}
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#1C2B39', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Need Custom Materials?</h3>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Contact us for project-specific documentation, proposals, or credentials.</p>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '16px 36px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Request Materials</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
