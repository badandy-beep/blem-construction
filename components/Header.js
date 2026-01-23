'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMonogram } from './Logo';
import { navItems, colors } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.98)' : '#FFFFFF',
        boxShadow: isScrolled ? '0 4px 20px rgba(28,43,57,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Gold Accent Bar - 4px per brand spec */}
      <div 
        style={{ 
          height: '4px', 
          background: '#B8860B',
        }} 
      />
      
      <nav 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: isScrolled ? '10px 5%' : '16px 5%',
          maxWidth: '1600px', 
          margin: '0 auto',
          width: '100%',
          height: isScrolled ? '66px' : '84px',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo Area */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <LogoMonogram size={isScrolled ? 48 : 52} variant="primary" />
          <div 
            style={{ 
              borderLeft: '2px solid #B8860B',
              paddingLeft: '16px',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.1,
            }}
          >
            <span 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isScrolled ? '22px' : '24px',
                fontWeight: 700,
                color: '#1C2B39',
                letterSpacing: '0.03em',
                transition: 'all 0.3s ease',
              }}
            >
              MICHAEL BLEM
            </span>
            <span 
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '10px',
                fontWeight: 600,
                color: '#B8860B',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              CONSTRUCTION
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          style={{ 
            display: 'none',
            background: 'none', 
            border: 'none', 
            fontSize: '28px', 
            cursor: 'pointer',
            padding: '8px',
            color: '#1C2B39',
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <div 
          className="nav-links"
          style={{ 
            display: 'flex', 
            gap: '32px', 
            alignItems: 'center',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          {navItems.map((item) => (
            item.dropdown ? (
              <div 
                key={item.name}
                className="dropdown-trigger"
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  style={{ 
                    color: '#1C2B39',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {item.name}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" style={{ marginTop: '2px' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-12px',
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    boxShadow: '0 8px 30px rgba(28, 43, 57, 0.15)',
                    padding: '8px 0',
                    minWidth: '200px',
                    opacity: activeDropdown === item.name ? 1 : 0,
                    visibility: activeDropdown === item.name ? 'visible' : 'hidden',
                    transform: activeDropdown === item.name ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.2s ease',
                    marginTop: '8px',
                  }}
                >
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name}
                      href={subItem.href}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        color: '#1C2B39',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#F8F6F3';
                        e.target.style.color = '#B8860B';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#1C2B39';
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={item.name} 
                href={item.href}
                style={{ 
                  color: '#1C2B39',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#B8860B'}
                onMouseLeave={(e) => e.target.style.color = '#1C2B39'}
              >
                {item.name}
              </Link>
            )
          ))}
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            style={{ 
              backgroundColor: '#1C2B39',
              color: '#FFFFFF',
              padding: '14px 24px',
              textDecoration: 'none',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              letterSpacing: '1px',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#B8860B';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1C2B39';
            }}
          >
            SCHEDULE FREE CONSULTATION
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          style={{ 
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(28,43,57,0.15)',
            padding: '20px 5%',
            borderTop: '1px solid #E5E7EB',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <Link 
                href={item.href}
                onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                style={{ 
                  display: 'block',
                  padding: '14px 0',
                  color: '#1C2B39',
                  textDecoration: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  borderBottom: '1px solid #F8F6F3',
                }}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div style={{ paddingLeft: '16px', background: '#F8F6F3', marginBottom: '8px' }}>
                  {item.dropdown.map((subItem) => (
                    <Link 
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ 
                        display: 'block',
                        padding: '12px 0',
                        color: '#4A5568',
                        textDecoration: 'none',
                        fontSize: '14px',
                        borderBottom: '1px solid #E5E7EB',
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ 
              display: 'block',
              marginTop: '16px',
              backgroundColor: '#1C2B39',
              color: '#FFFFFF',
              padding: '16px',
              textAlign: 'center',
              textDecoration: 'none',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '8px',
            }}
          >
            SCHEDULE FREE CONSULTATION
          </Link>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 1200px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
