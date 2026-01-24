'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState, useEffect } from 'react';

export function useResponsive() {
  const [screenSize, setScreenSize] = useState({ isMobile: false, isTablet: false, isDesktop: true, width: 1200 });

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setScreenSize({ isMobile: width <= 480, isTablet: width > 480 && width <= 768, isDesktop: width > 768, width });
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const rs = (desktop, mobile, tablet = null) => {
    if (screenSize.isMobile) return mobile;
    if (screenSize.isTablet) return tablet || mobile;
    return desktop;
  };

  return { ...screenSize, rs };
}
