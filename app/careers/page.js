'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { hiringData } from '@/lib/data';

// Professional SVG Icons to replace emojis
const Icons = {
  trophy: (color = '#B8860B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2" />
      <path d="M18 9h2a2 2 0 002-2V5a2 2 0 00-2-2h-2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M6 3v6a6 6 0 0012 0V3" />
    </svg>
  ),
  growth: (color = '#B8860B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  handshake: (color = '#B8860B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
      <path d="M2 12h4M18 12h4" />
      <path d="M12 2v4M12 18v4" />
    </svg>
  ),
  dollar: (color = '#B8860B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  shield: (color = '#B8860B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  target: (color = '#B8860B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const benefitIcons = ['trophy', 'growth', 'handshake', 'dollar', 'shield', 'target'];

export default function CareersPage() {
  const { rs, isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: rs('120px', '100px') }}>
      {/* Hero Section */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '16px' }}>JOIN OUR TEAM</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.15 }}>{hiringData.headline}</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.85)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>{hiringData.description}</p>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Open Positions</h2>
          
          <div style={{ display: 'grid', gap: '24px' }}>
            {hiringData.positions.map((pos, i) => (
              <div key={i} style={{ backgroundColor: '#F8F6F3', padding: rs('32px', '24px'), borderRadius: '16px', borderLeft: '4px solid #B8860B' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('24px', '20px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>{pos.title}</h3>
                <p style={{ fontSize: rs('16px', '14px'), color: '#4A5568', lineHeight: 1.7, marginBottom: '20px' }}>{pos.description}</p>
                <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '12px 24px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', letterSpacing: '1px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '6px' }}>Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('24px', '20px'), fontWeight: 600, color: '#1C2B39', marginBottom: '32px', textAlign: 'center' }}>Why Join Michael Blem Construction?</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(3, 1fr)', '1fr'), gap: '24px' }}>
            {[
              { icon: 'trophy', title: 'Elite Team', desc: 'Work with the best craftsmen in Southwest Florida construction' },
              { icon: 'growth', title: 'Growth', desc: 'Continuous learning and career advancement opportunities' },
              { icon: 'handshake', title: 'Culture', desc: 'Family atmosphere with professional standards and integrity' },
              { icon: 'dollar', title: 'Competitive Pay', desc: 'Top-tier compensation for top-tier talent' },
              { icon: 'shield', title: 'Stability', desc: '40+ years of continuous operation and growth' },
              { icon: 'target', title: 'Impact', desc: 'Build projects that matter to the community' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  backgroundColor: 'rgba(184, 134, 11, 0.1)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  border: '2px solid #B8860B'
                }}>
                  {Icons[item.icon] && Icons[item.icon]('#B8860B', 32)}
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#1C2B39', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Ready to Join the Elite?</h2>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>Contact us today to discuss career opportunities.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('20px 50px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Contact Us</Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: rs('40px 5%', '30px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, textAlign: 'center' }}>{hiringData.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
