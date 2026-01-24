'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { hiringData } from '@/lib/data';

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
              { icon: '🏆', title: 'Elite Team', desc: 'Work with the best craftsmen in Southwest Florida construction' },
              { icon: '📈', title: 'Growth', desc: 'Continuous learning and career advancement opportunities' },
              { icon: '🤝', title: 'Culture', desc: 'Family atmosphere with professional standards and integrity' },
              { icon: '💰', title: 'Competitive Pay', desc: 'Top-tier compensation for top-tier talent' },
              { icon: '🛡️', title: 'Stability', desc: '40+ years of continuous operation and growth' },
              { icon: '🎯', title: 'Impact', desc: 'Build projects that matter to the community' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
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
