'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoFooter } from './Logo';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer style={{ backgroundColor: '#1C2B39', padding: isMobile ? '40px 16px' : '60px 40px', color: '#FFFFFF' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '0' : '50px', marginBottom: isMobile ? '30px' : '40px', flexDirection: isMobile ? 'column' : 'row' }}>
          {!isMobile && <LogoFooter size={55} />}
          <div style={{ textAlign: 'center', flex: 1, maxWidth: '500px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '22px' : '26px', fontWeight: 700, marginBottom: '8px' }}>Michael Blem Construction</h3>
            <p style={{ fontSize: isMobile ? '13px' : '14px', color: '#B8860B', marginBottom: '16px' }}>Crafting Legacies in Southwest Florida Since 1987</p>
            <div style={{ fontSize: isMobile ? '13px' : '14px', color: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '8px' : '0' }}>
              <a href="tel:9417772536" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>(941) 777-BLEM</a>
              {!isMobile && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
              <a href="mailto:mike@blemconstruction.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>mike@blemconstruction.com</a>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>Nokomis, FL 34275 • Serving All of Southwest Florida</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}><SocialIcons size={22} /></div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '16px' : '24px', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
              {['Home', 'Commercial', 'Residential', 'Projects', 'About', 'Careers', 'Contact'].map((item) => (
                <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ fontSize: isMobile ? '12px' : '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '8px 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}>{item}</Link>
              ))}
            </div>
          </div>
          {!isMobile && <LogoFooter size={55} />}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '24px' : '40px', marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", marginBottom: '4px' }}>GENERAL CONTRACTOR</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>CGC 1508400</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", marginBottom: '4px' }}>BUILDING CONTRACTOR</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>CBC 047796</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
          © 2026 Michael Blem Construction. All Rights Reserved.<br />
          <span style={{ fontSize: '11px', marginTop: '4px', display: 'inline-block' }}>Licenses: CGC 1508400 | CBC 047796</span>
        </div>
      </div>
    </footer>
  );
}
