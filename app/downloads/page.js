'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';

const companyDownloads = [
  { name: "Michael Blem Resume", description: "Professional background, credentials, CGC/CBC licenses, and 40+ year career timeline.", type: "PDF", size: "241 KB", icon: "📄", file: "/downloads/MBC-MichaelBlem-Resume.pdf", available: true },
  { name: "Company Overview Deck", description: "Comprehensive presentation featuring capabilities and portfolio highlights.", type: "PDF", size: "4.2 MB", icon: "📊", file: null, available: false },
  { name: "Services Brochure", description: "Overview of commercial and residential services with project examples.", type: "PDF", size: "3.5 MB", icon: "📋", file: null, available: false }
];

const floridaBuildingCodes = [
  { name: "Florida Building Code - Building", description: "8th Edition (2023) - Complete commercial building code.", url: "https://codes.iccsafe.org/content/FLBC2023P1", icon: "🏢", tag: "Commercial" },
  { name: "Florida Building Code - Residential", description: "8th Edition (2023) - Complete residential building code.", url: "https://codes.iccsafe.org/content/FLRC2023P1", icon: "🏡", tag: "Residential" },
  { name: "Florida Building Code Portal", description: "Official hub with all code volumes and amendments.", url: "https://www.floridabuilding.org/bc/bc_default.aspx", icon: "📚", tag: "All Codes" },
];

const sarasotaResources = [
  { name: "Sarasota County Building Division", description: "Permits, inspections, and contractor licensing.", url: "https://www.scgov.net/government/planning-and-development-services/building", icon: "🏛️" },
  { name: "Sarasota County Permit Search", description: "Search existing permits by address or parcel ID.", url: "https://building.scgov.net/", icon: "🔎" },
];

export default function DownloadsPage() {
  const { rs, isMobile } = useResponsive();

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Resources & Downloads</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>Access our business materials and essential industry resources.</p>
        </div>
      </section>

      {/* Company Downloads */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>COMPANY MATERIALS</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#1C2B39', marginTop: '12px' }}>Business Documents</h2>
          </div>
          
          {companyDownloads.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: rs('24px', '16px'), padding: rs('28px', '20px'), backgroundColor: '#F8F6F3', borderRadius: '12px', marginBottom: '16px', border: '1px solid #E5E7EB', opacity: item.available ? 1 : 0.7, flexDirection: isMobile ? 'column' : 'row' }}>
              <div style={{ fontSize: '40px' }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: rs('18px', '16px'), fontWeight: 600, color: '#1C2B39', marginBottom: '6px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#4A5568', marginBottom: '4px' }}>{item.description}</p>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.type} • {item.size}</span>
              </div>
              {item.available ? (
                <a href={item.file} download style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '14px 28px', border: 'none', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textDecoration: 'none', display: 'inline-block', width: isMobile ? '100%' : 'auto', textAlign: 'center' }}>DOWNLOAD</a>
              ) : (
                <span style={{ backgroundColor: '#E5E7EB', color: '#9CA3AF', padding: '14px 28px', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textAlign: 'center', width: isMobile ? '100%' : 'auto', display: 'inline-block' }}>COMING SOON</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Florida Building Codes */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>OFFICIAL CODES</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#FFFFFF', marginTop: '12px' }}>Florida Building Codes</h2>
          </div>
          
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

      {/* Sarasota County Resources */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>LOCAL GOVERNMENT</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#1C2B39', marginTop: '12px' }}>Sarasota County Resources</h2>
          </div>
          
          {sarasotaResources.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: rs('24px', '16px'), backgroundColor: '#FFFFFF', borderRadius: '12px', marginBottom: '12px', border: '1px solid #E5E7EB', textDecoration: 'none' }}>
              <div style={{ fontSize: '32px' }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: rs('16px', '14px'), fontWeight: 600, color: '#1C2B39', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{item.description}</p>
              </div>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Need Custom Materials?</h3>
          <p style={{ fontSize: rs('16px', '14px'), color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Contact us for project-specific documentation or proposals.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8860B', color: '#FFFFFF', padding: rs('16px 36px', '14px 28px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Request Materials</Link>
        </div>
      </section>
    </div>
  );
}
