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

  const rs = (desktop, mobile) => isMobile ? mobile : desktop;

  return (
    <footer 
      style={{ 
        backgroundColor: '#1C2B39',
        padding: rs('60px 40px', '40px 16px'),
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
            gap: rs('50px', '0'),
            marginBottom: rs('40px', '30px'),
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          {/* Left Logo - Desktop only */}
          {!isMobile && <LogoFooter size={55} />}
          
          {/* Center Content */}
          <div style={{ textAlign: 'center', flex: 1, maxWidth: '500px' }}>
            <h3 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: rs('26px', '22px'),
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              Michael Blem Construction
            </h3>
            <p 
              style={{ 
                fontSize: rs('14px', '13px'),
                color: '#B8860B',
                marginBottom: '16px',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Crafting Legacies in Southwest Florida Since 1987
            </p>
            
            {/* Contact Info - Stack on mobile */}
            <div style={{ 
              fontSize: rs('14px', '13px'),
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "'Outfit', sans-serif",
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '8px' : '0',
            }}>
              <a href="tel:9417772536" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>(941) 777-BLEM</a>
              {!isMobile && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
              <a href="mailto:mike@blemconstruction.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>mike@blemconstruction.com</a>
            </div>
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
                gap: rs('24px', '16px'),
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                flexWrap: 'wrap',
              }}
            >
              {['Home', 'Commercial', 'Residential', 'Projects', 'About', 'Resources', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={{ 
                    fontSize: rs('13px', '12px'),
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    fontFamily: "'Outfit', sans-serif",
                    padding: '8px 0',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Logo - Desktop only */}
          {!isMobile && <LogoFooter size={55} />}
        </div>

        {/* License Info */}
        <div 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: rs('40px', '24px'),
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
            Licenses: <span style={{ color: '#D4A012', fontWeight: 600 }}>CGC 1508400</span> | <span style={{ color: '#D4A012', fontWeight: 600 }}>CBC 047796</span>
          </span>
        </div>

        {/* Disclaimers - per dev instructions */}
        <div 
          style={{ 
            textAlign: 'center',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: "'Outfit', sans-serif",
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            maxWidth: '800px',
            margin: '20px auto 0',
          }}
        >
          All projects subject to Florida regulations. Results vary based on project scope and requirements; consult for specific details. 
          Michael Blem Construction is an equal opportunity employer.
        </div>
      </div>
    </footer>
  );
}
