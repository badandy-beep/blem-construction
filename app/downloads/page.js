'use client';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { downloads, floridaBuildingCodes, sarasotaResources } from '@/lib/data';

export default function DownloadsPage() {
  const { rs, isMobile } = useResponsive();
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, marginBottom: '20px' }}>Resources & Downloads</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568' }}>Access our business materials and essential industry resources.</p>
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>COMPANY MATERIALS</span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, marginTop: '12px', marginBottom: '32px' }}>Business Documents</h2>
          {downloads.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: rs('24px', '16px'), padding: rs('28px', '20px'), backgroundColor: '#F8F6F3', borderRadius: '12px', marginBottom: '16px', border: '1px solid #E5E7EB', opacity: item.available ? 1 : 0.7, flexDirection: isMobile ? 'column' : 'row' }}>
              <div style={{ fontSize: '40px' }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: rs('18px', '16px'), fontWeight: 600, marginBottom: '6px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#4A5568', marginBottom: '4px' }}>{item.description}</p>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.type} • {item.size}</span>
              </div>
              {item.available ? (
                <a href={item.file} download style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '14px 28px', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textDecoration: 'none', textAlign: 'center', width: isMobile ? '100%' : 'auto' }}>DOWNLOAD</a>
              ) : (
                <span style={{ backgroundColor: '#E5E7EB', color: '#9CA3AF', padding: '14px 28px', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 600, textAlign: 'center', width: isMobile ? '100%' : 'auto' }}>COMING SOON</span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>OFFICIAL CODES</span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#FFFFFF', marginTop: '12px', marginBottom: '32px' }}>Florida Building Codes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: '20px' }}>
            {floridaBuildingCodes.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: rs('28px', '20px'), backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '32px' }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: rs('16px', '14px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>{item.name}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>{item.description}</p>
                    <div style={{ fontSize: '12px', color: '#D4A012', marginTop: '12px', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>View Resource →</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Need Custom Materials?</h3>
          <p style={{ fontSize: rs('16px', '14px'), color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Contact us for project-specific documentation or proposals.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '16px 36px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Request Materials</Link>
        </div>
      </section>
    </div>
  );
}
