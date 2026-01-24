'use client';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';

export default function AboutPage() {
  const { rs } = useResponsive();
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, marginBottom: '20px' }}>About Michael Blem</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568' }}>40+ Years of Building Excellence in Southwest Florida</p>
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: rs('18px', '15px'), lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            Michael Blem Construction stands as a testament to enduring craftsmanship. Michael's story spans <strong style={{ color: '#1C2B39' }}>three generations of builders</strong> who have shaped Florida's skyline with integrity.
          </p>
          <p style={{ fontSize: rs('18px', '15px'), lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            With a <strong style={{ color: '#1C2B39' }}>BS in Architectural Construction Engineering Technology</strong> from Florida A&M University (1987) and 19 years leading Emblem Construction LLC, Michael has delivered over 500 projects.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(4, 1fr)', 'repeat(2, 1fr)'), gap: '20px', marginTop: '40px', padding: '24px', backgroundColor: '#F8F6F3', borderRadius: '16px' }}>
            {[{ num: '40+', label: 'Years' }, { num: '500+', label: 'Projects' }, { num: '$500M+', label: 'Value' }, { num: '0', label: 'Claims' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '28px'), fontWeight: 600, color: '#B8860B' }}>{s.num}</div>
                <div style={{ fontSize: '12px', color: '#4A5568' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Schedule a Consultation</h2>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '16px 32px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Contact Mike</Link>
        </div>
      </section>
    </div>
  );
}
