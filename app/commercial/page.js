import Link from 'next/link';
import { colors, projects, innovations, manifesto } from '@/lib/data';

export const metadata = { title: 'Commercial Construction Sarasota FL | Michael Blem Construction', description: 'Commercial & industrial construction in Southwest Florida. $50M+ in completed projects.' };

export default function CommercialPage() {
  const allCommercial = [...projects.hotel, ...projects.municipal, ...projects.commercial];
  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text, paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>Commercial & Industrial Excellence</h1>
          <p style={{ fontSize: '18px', color: colors.textLight, maxWidth: '800px', margin: '0 auto', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', lineHeight: 1.7 }}>From the $13M Candlewood Suites to the $4.6M Englewood Sports Complex, we deliver large-scale commercial projects with precision.</p>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ backgroundColor: colors.lightGray, padding: '44px', border: '1px solid ' + colors.mediumGray }}><div style={{ fontSize: '48px', marginBottom: '24px' }}>🏢</div><h3 style={{ fontSize: '26px', fontWeight: '400', color: colors.primary, marginBottom: '16px' }}>Commercial & Medical</h3><p style={{ fontSize: '16px', lineHeight: 1.75, color: colors.textLight, marginBottom: '24px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Office buildings, medical facilities, hotels, and retail spaces with regulatory compliance and value engineering.</p><div style={{ fontSize: '14px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>$50M+ Managed</div></div>
            <div style={{ backgroundColor: colors.lightGray, padding: '44px', border: '1px solid ' + colors.mediumGray }}><div style={{ fontSize: '48px', marginBottom: '24px' }}>🏛️</div><h3 style={{ fontSize: '26px', fontWeight: '400', color: colors.primary, marginBottom: '16px' }}>Municipal Infrastructure</h3><p style={{ fontSize: '16px', lineHeight: 1.75, color: colors.textLight, marginBottom: '24px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Public infrastructure, sports complexes, water facilities with community focus and long-term durability.</p><div style={{ fontSize: '14px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>15+ Projects</div></div>
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '40px', textAlign: 'center' }}>Commercial Projects</h2>
          <div style={{ backgroundColor: colors.background, border: '1px solid ' + colors.mediumGray, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '18px 32px', backgroundColor: colors.primary, color: '#FFF', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '700' }}><div>Project</div><div>Location</div><div style={{ textAlign: 'right' }}>Value</div></div>
            {allCommercial.map((p, i) => (<div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid ' + colors.lightGray, fontFamily: "'Montserrat', sans-serif" }}><div style={{ fontSize: '15px', color: colors.primary, fontWeight: '500' }}>{p.name}</div><div style={{ fontSize: '14px', color: colors.textLight }}>{p.location}</div><div style={{ fontSize: '15px', color: colors.accent, textAlign: 'right', fontWeight: '600' }}>{p.value}</div></div>))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.accent }}><div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}><h2 style={{ fontSize: '36px', fontWeight: '400', color: '#FFF', marginBottom: '24px' }}>Discuss Your Commercial Project</h2><Link href="/contact" style={{ display: 'inline-block', backgroundColor: colors.primary, color: '#FFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Contact Us</Link></div></section>
    </div>
  );
}
