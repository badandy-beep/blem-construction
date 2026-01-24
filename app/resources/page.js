'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useResponsive } from '@/lib/useResponsive';
import { resources } from '@/lib/data';

export default function ResourcesPage() {
  const { rs, isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Industry Resources</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568' }}>Helpful resources for commercial and residential construction in Florida.</p>
        </div>
      </section>

      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('60px', '40px') }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#1C2B39', marginBottom: '32px', borderBottom: '3px solid #64748B', paddingBottom: '16px' }}>Commercial Resources</h2>
              {resources.commercial.map((r, i) => (
                <div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #F8F6F3' }}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: rs('18px', '16px'), color: '#1C2B39', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '6px' }}>{r.name} →</a>
                  <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{r.description}</p>
                  <span style={{ fontSize: '11px', color: '#64748B', fontFamily: "'Montserrat', sans-serif" }}>{r.scope}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#1C2B39', marginBottom: '32px', borderBottom: '3px solid #6B8E73', paddingBottom: '16px' }}>Residential Resources</h2>
              {resources.residential.map((r, i) => (
                <div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #F8F6F3' }}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: rs('18px', '16px'), color: '#1C2B39', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '6px' }}>{r.name} →</a>
                  <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{r.description}</p>
                  <span style={{ fontSize: '11px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif" }}>{r.scope}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#1C2B39', marginBottom: '32px', textAlign: 'center' }}>General Resources</h2>
          {resources.general.map((r, i) => (
            <div key={i} style={{ marginBottom: '20px', padding: rs('24px', '20px'), backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: rs('18px', '16px'), color: '#1C2B39', textDecoration: 'none', fontWeight: 500 }}>{r.name} →</a>
              <p style={{ fontSize: '14px', color: '#4A5568', margin: '8px 0 0 0' }}>{r.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
