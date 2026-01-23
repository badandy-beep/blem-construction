'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import Link from 'next/link';
import { LogoFooter } from './Logo';
import SocialIcons from './SocialIcons';
import { navItems, colors } from '@/lib/data';

export default function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: '#1C2B39',
        padding: '60px 40px',
        color: '#FFFFFF',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            marginBottom: '40px',
          }}
        >
          {/* Left Logo */}
          <LogoFooter size={55} className="hide-mobile" />
          
          {/* Center Content */}
          <div style={{ textAlign: 'center', flex: 1, maxWidth: '500px' }}>
            <h3 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '26px',
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              Michael Blem Construction
            </h3>
            <p 
              style={{ 
                fontSize: '14px',
                color: '#B8860B',
                marginBottom: '16px',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Crafting Legacies in Southwest Florida Since 1987
            </p>
            <p 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              (941) 777-BLEM&nbsp;&nbsp;|&nbsp;&nbsp;mike@blemconstruction.com
            </p>
            <p 
              style={{ 
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: "'Outfit', sans-serif",
                marginTop: '8px',
              }}
            >
              Nokomis, FL 34275 • Serving All of Southwest Florida
            </p>
            
            {/* Social Media Icons */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <SocialIcons size={22} />
            </div>
            
            {/* Navigation Links */}
            <div 
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                flexWrap: 'wrap',
              }}
            >
              {['Home', 'Commercial', 'Residential', 'Projects', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={{ 
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontFamily: "'Outfit', sans-serif",
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#B8860B'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Logo */}
          <LogoFooter size={55} className="hide-mobile" />
        </div>

        {/* License Info */}
        <div 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '30px',
            paddingBottom: '30px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#B8860B',
                fontFamily: "'Montserrat', sans-serif",
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              General Contractor
            </div>
            <div 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255,255,255,0.8)',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              CGC 1508400
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#B8860B',
                fontFamily: "'Montserrat', sans-serif",
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              Building Contractor
            </div>
            <div 
              style={{ 
                fontSize: '14px',
                color: 'rgba(255,255,255,0.8)',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              CBC 047796
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div 
          style={{ 
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          © 2026 Michael Blem Construction. All Rights Reserved.
          <br />
          <span style={{ fontSize: '11px', marginTop: '4px', display: 'inline-block' }}>
            Licenses: CGC 1508400 | CBC 047796
          </span>
        </div>
      </div>
    </footer>
  );
}
