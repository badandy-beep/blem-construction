'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMonogram } from './Logo';
import { navItems } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: isScrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF', boxShadow: isScrolled ? '0 4px 20px rgba(28,43,57,0.1)' : 'none', transition: 'all 0.3s ease' }}>
        <div style={{ height: '4px', background: '#B8860B' }} />
        
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '10px 16px' : (isScrolled ? '8px 4%' : '12px 4%'), maxWidth: '1600px', margin: '0 auto', width: '100%', minHeight: isMobile ? '56px' : (isScrolled ? '60px' : '70px'), transition: 'all 0.3s ease' }}>
          
          {/* Logo - Links to Home */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: isMobile ? '0' : '12px', flexShrink: 0 }} onClick={() => setMobileMenuOpen(false)}>
            {isMobile ? (
              /* MOBILE: Text only - NO monogram */
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', fontWeight: 700, color: '#1C2B39', letterSpacing: '0.02em' }}>MICHAEL BLEM</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, color: '#B8860B', letterSpacing: '0.2em', textTransform: 'uppercase' }}>CONSTRUCTION</span>
              </div>
            ) : (
              /* DESKTOP: Monogram + Full Text */
              <>
                <LogoMonogram size={isScrolled ? 44 : 48} variant="primary" />
                <div style={{ borderLeft: '2px solid #B8860B', paddingLeft: '12px', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isScrolled ? '18px' : '20px', fontWeight: 700, color: '#1C2B39', letterSpacing: '0.03em', transition: 'all 0.3s ease' }}>MICHAEL BLEM</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', fontWeight: 600, color: '#B8860B', letterSpacing: '0.25em', textTransform: 'uppercase' }}>CONSTRUCTION</span>
                </div>
              </>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: isMobile ? 'flex' : 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '10px', color: '#1C2B39', zIndex: 1001, minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }} aria-label="Toggle menu">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <div style={{ display: isMobile ? 'none' : 'flex', gap: '24px', alignItems: 'center', fontFamily: "'Outfit', sans-serif", fontSize: '14px', fontWeight: 500 }}>
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} style={{ position: 'relative' }} onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={item.href} style={{ color: '#1C2B39', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 0' }}>
                    {item.name}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" style={{ marginTop: '2px' }}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                  </Link>
                  <div style={{ position: 'absolute', top: '100%', left: '-12px', background: '#FFFFFF', borderRadius: '8px', boxShadow: '0 8px 30px rgba(28, 43, 57, 0.15)', padding: '8px 0', minWidth: '200px', opacity: activeDropdown === item.name ? 1 : 0, visibility: activeDropdown === item.name ? 'visible' : 'hidden', transform: activeDropdown === item.name ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.2s ease', marginTop: '4px' }}>
                    {item.dropdown.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} style={{ display: 'block', padding: '12px 20px', color: '#1C2B39', textDecoration: 'none', fontSize: '14px' }}>{subItem.name}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} style={{ color: '#1C2B39', textDecoration: 'none', fontWeight: 500, padding: '8px 0' }}>{item.name}</Link>
              )
            ))}
            <Link href="/contact" style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '12px 20px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 600, borderRadius: '6px', letterSpacing: '1px' }}>FREE CONSULTATION</Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 998 }} onClick={() => setMobileMenuOpen(false)} />}

      {/* Mobile Menu Drawer */}
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '85%', maxWidth: '320px', backgroundColor: '#FFFFFF', zIndex: 999, transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease', overflowY: 'auto', boxShadow: mobileMenuOpen ? '-4px 0 20px rgba(0,0,0,0.15)' : 'none' }}>
        <div style={{ padding: '16px 20px', borderBottom: '4px solid #B8860B', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1C2B39' }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <LogoMonogram size={36} variant="gold" />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF' }}>MICHAEL BLEM</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '8px', fontWeight: 600, color: '#B8860B', letterSpacing: '0.2em' }}>CONSTRUCTION</div>
            </div>
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', color: '#FFFFFF', cursor: 'pointer', padding: '8px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
        </div>

        <div style={{ padding: '16px 20px 20px' }}>
          {navItems.map((item) => (
            <div key={item.name}>
              <Link href={item.href} onClick={() => !item.dropdown && setMobileMenuOpen(false)} style={{ display: 'block', padding: '16px 0', color: '#1C2B39', textDecoration: 'none', fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '16px', borderBottom: '1px solid #F8F6F3' }}>{item.name}</Link>
              {item.dropdown && (
                <div style={{ paddingLeft: '16px', background: '#F8F6F3', marginBottom: '8px', borderRadius: '8px' }}>
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '14px 16px', color: '#4A5568', textDecoration: 'none', fontSize: '14px', borderBottom: '1px solid #E5E7EB' }}>{subItem.name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', marginTop: '20px', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '16px', textAlign: 'center', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 600, borderRadius: '8px', letterSpacing: '1px' }}>FREE CONSULTATION</Link>
          
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
            <a href="tel:9417772536" style={{ display: 'flex', alignItems: 'center', color: '#B8860B', textDecoration: 'none', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', marginBottom: '8px', minHeight: '44px' }}>(941) 777-BLEM</a>
            <a href="mailto:mike@blemconstruction.com" style={{ display: 'flex', alignItems: 'center', color: '#4A5568', textDecoration: 'none', fontSize: '14px', minHeight: '44px' }}>mike@blemconstruction.com</a>
          </div>

          <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#F8F6F3', borderRadius: '8px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', marginBottom: '8px' }}>Licensed & Insured</div>
            <div style={{ fontSize: '13px', color: '#1C2B39', fontWeight: 500 }}>CGC 1508400 • CBC 047796</div>
          </div>
        </div>
      </div>
    </>
  );
}
