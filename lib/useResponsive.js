'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import { useState, useEffect } from 'react';

export function useResponsive() {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width <= 480,
        isTablet: width > 480 && width <= 768,
        isDesktop: width > 768,
        width,
      });
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Helper function for responsive styles
  const rs = (desktop, mobile, tablet = null) => {
    if (screenSize.isMobile) return mobile;
    if (screenSize.isTablet) return tablet || mobile;
    return desktop;
  };

  return { ...screenSize, rs };
}

// Responsive section padding
export const sectionPadding = {
  desktop: '100px 5%',
  tablet: '70px 4%',
  mobile: '50px 16px',
};

// Responsive font sizes
export const fontSizes = {
  heroHeading: { desktop: '56px', tablet: '42px', mobile: '32px' },
  sectionHeading: { desktop: '42px', tablet: '32px', mobile: '26px' },
  cardHeading: { desktop: '24px', tablet: '20px', mobile: '18px' },
  bodyText: { desktop: '18px', tablet: '16px', mobile: '15px' },
  smallText: { desktop: '14px', tablet: '13px', mobile: '12px' },
};
