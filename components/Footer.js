'use client';
import Link from 'next/link';
import { colors, navItems } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', padding: '70px 5% 50px', color: '#FFF' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img src="/BLEM-Logo-Monogram.svg" alt="MB" style={{ height: '50px', filter: 'brightness(0) invert(1)' }} />
              <div style={{ borderLeft: `2px solid ${colors.accent}`, paddingLeft: '16px' }}>
                <div style={{ fontSize: '28px', fontWeight: '700', fontFamily: "'Dancing Script', cursive" }}>Michael Blem</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '10px', letterSpacing: '4px', color: colors.accent, fontWeight: '600', marginTop: '2px' }}>CONSTRUCTION</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif", lineHeight: 1.7 }}>Third-generation craftsmanship serving Southwest Florida for over 40 years.</p>
          </div>
          <div>
            <div style={{ color: colors.accent, letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase', fontWeight: '700', fontSize: '11px', fontFamily: "'Montserrat', sans-serif" }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {navItems.map((item) => (<Link key={item.name} href={item.href} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '14px' }}>{item.name}</Link>))}
            </div>
          </div>
          <div>
            <div style={{ color: colors.accent, letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase', fontWeight: '700', fontSize: '11px', fontFamily: "'Montserrat', sans-serif" }}>Contact</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>Nokomis, FL 34275</div>
              <div>(941) 777-BLEM</div>
              <div>mike@blemconstruction.com</div>
            </div>
          </div>
          <div>
            <div style={{ color: colors.accent, letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase', fontWeight: '700', fontSize: '11px', fontFamily: "'Montserrat', sans-serif" }}>Licenses</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '6px' }}>CGC 1508400</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginBottom: '16px' }}>General Contractor</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '6px' }}>CBC 047796</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>Building Contractor</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '36px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>© 2026 Michael Blem Construction. All rights reserved.</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Serving Southwest Florida for 40+ Years</div>
        </div>
      </div>
    </footer>
  );
}
