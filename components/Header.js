'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, navItems } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: isScrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)', boxShadow: isScrolled ? '0 2px 30px rgba(27,54,93,0.1)' : 'none', transition: 'all 0.3s ease' }}>
      <div style={{ height: '4px', background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 50%, ${colors.gold} 100%)` }} />
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isScrolled ? '12px 5%' : '20px 5%', maxWidth: '1600px', margin: '0 auto', width: '100%', transition: 'all 0.3s ease' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src="/BLEM-Logo-Monogram.svg" alt="MB" style={{ height: isScrolled ? '55px' : '65px', width: 'auto', transition: 'all 0.3s' }} />
          <div style={{ borderLeft: `2px solid ${colors.accent}`, paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: isScrolled ? '28px' : '34px', fontWeight: '700', color: colors.primary, fontFamily: "'Dancing Script', cursive", lineHeight: 1, letterSpacing: '1px', transition: 'all 0.3s' }}>Michael Blem</span>
            <span style={{ fontSize: '11px', letterSpacing: '6px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: '600', marginTop: '4px' }}>Construction</span>
          </div>
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', padding: '8px', color: colors.primary }} className="mobile-menu-btn">{mobileMenuOpen ? '✕' : '☰'}</button>
        <div className="nav-links" style={{ display: 'flex', gap: '24px', alignItems: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: '12px' }}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} style={{ color: colors.primary, textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '2px', padding: '8px 0' }}>{item.name}</Link>
          ))}
          <a href="tel:9417772536" style={{ backgroundColor: colors.primary, color: '#FFF', padding: '14px 28px', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', fontWeight: '700', border: `2px solid ${colors.primary}`, transition: 'all 0.3s' }}>(941) 777-BLEM</a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '20px 5%' }}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '12px 0', color: colors.primary, textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '2px', fontSize: '13px', fontFamily: "'Montserrat', sans-serif", borderBottom: `1px solid ${colors.lightGray}` }}>{item.name}</Link>
          ))}
        </div>
      )}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
