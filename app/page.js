'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMonogram } from '@/components/Logo';
import { stats, testimonials, innovations, manifesto, featured, comparisonData, hiringData, downloads } from '@/lib/data';

// Professional SVG Icons to replace emojis
const Icons = {
  commercial: (color = '#64748B', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="13" rx="1" />
      <path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2" />
      <line x1="9" y1="22" x2="9" y2="9" />
      <line x1="15" y1="22" x2="15" y2="9" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  residential: (color = '#6B8E73', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  ai: (color = '#D4A012', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  bim: (color = '#D4A012', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9M15 21V9" />
      <path d="M3 15h6M15 15h6" />
    </svg>
  ),
  digital: (color = '#D4A012', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M6 8h.01M9 8h.01M12 8h6" />
    </svg>
  ),
  owner: (color = '#D4A012', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  quote: (color = '#B8860B', size = 32) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity="0.3">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.004z"/>
    </svg>
  ),
  download: (color = '#B8860B', size = 32) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  users: (color = '#FFFFFF', size = 40) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

const innovationIcons = { '🤖': 'ai', '📐': 'bim', '📱': 'digital', '👤': 'owner' };

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const rs = (desktop, mobile) => isMobile ? mobile : desktop;

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', overflowX: 'hidden' }}>
      
      {/* HERO SECTION */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: rs('160px 5% 100px', '120px 16px 60px'), position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(145deg, rgba(28,43,57,0.92) 0%, rgba(28,43,57,0.8) 50%, rgba(28,43,57,0.75) 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: rs('16px', '12px'), marginBottom: rs('28px', '20px') }}>
            <div style={{ width: rs('60px', '40px'), height: '2px', backgroundColor: '#B8860B' }} />
            <span style={{ fontSize: rs('13px', '11px'), letterSpacing: rs('4px', '3px'), color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Since 1987</span>
          </div>
          
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('56px', '32px'), fontWeight: 600, color: '#FFFFFF', marginBottom: rs('24px', '16px'), lineHeight: 1.15, maxWidth: '850px' }}>
            Crafting Legacies with Precision and Integrity Since 1987
          </h1>
          
          <p style={{ fontSize: rs('20px', '16px'), color: 'rgba(255,255,255,0.9)', maxWidth: '700px', marginBottom: rs('32px', '24px'), lineHeight: 1.8, fontWeight: 300 }}>
            As a third-generation Sarasota master builder, we deliver tailored excellence in commercial, industrial, municipal, and residential projects. <strong style={{ color: '#D4A012' }}>Zero claims in 40 years</strong>—blending AI innovation with personal accountability for 20-30% cost savings and unmatched quality.
          </p>
          
          {/* Stats Grid - Pronounced with Gold Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(4, 1fr)', 'repeat(2, 1fr)'), gap: rs('24px', '16px'), marginBottom: rs('40px', '30px'), maxWidth: rs('700px', '100%') }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: rs('16px', '12px'), border: '2px solid #B8860B', borderRadius: '8px', backgroundColor: 'rgba(184, 134, 11, 0.1)' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '28px'), fontWeight: 600, color: '#D4A012' }}>{s.number}</div>
                <div style={{ fontSize: rs('12px', '10px'), letterSpacing: '1px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: rs('14px', '12px'), color: '#D4A012', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, marginBottom: '16px', letterSpacing: '2px' }}>CHOOSE YOUR PATH:</p>
            <div style={{ display: 'flex', gap: rs('16px', '12px'), flexWrap: 'wrap' }}>
              <Link href="/commercial" style={{ backgroundColor: '#64748B', color: '#FFFFFF', padding: rs('20px 36px', '16px 24px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: rs('14px', '13px'), letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', flex: isMobile ? '1' : 'none', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                {Icons.commercial('#FFFFFF', 24)} Commercial
              </Link>
              <Link href="/residential" style={{ backgroundColor: '#6B8E73', color: '#FFFFFF', padding: rs('20px 36px', '16px 24px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: rs('14px', '13px'), letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', flex: isMobile ? '1' : 'none', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                {Icons.residential('#FFFFFF', 24)} Residential
              </Link>
            </div>
          </div>
          
          {/* License Info */}
          <div style={{ display: rs('flex', 'none'), gap: '40px', marginTop: '40px' }}>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '20px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>General Contractor</div>
              <div style={{ fontSize: '16px', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginTop: '4px' }}>CGC 1508400</div>
            </div>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '20px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Building Contractor</div>
              <div style={{ fontSize: '16px', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginTop: '4px' }}>CBC 047796</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BLEM */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>The Blem Difference</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginTop: '16px', marginBottom: '16px' }}>Elite Craftsmanship Over Mass Production</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>Like a bespoke tailor versus fast fashion—or a private chef over chain restaurants—we provide superior results at competitive costs through direct expertise.</p>
          </div>
          
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
              {comparisonData.map((row, i) => (
                <div key={i} style={{ backgroundColor: '#F8F6F3', borderRadius: '12px', padding: '16px', border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C2B39', marginBottom: '12px', borderBottom: '2px solid #B8860B', paddingBottom: '8px' }}>{row.aspect}</div>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '10px', color: '#6B7280', fontFamily: "'Montserrat', sans-serif", letterSpacing: '1px', marginBottom: '4px' }}>MEGA-BUILDERS</div>
                    <div style={{ fontSize: '14px', color: '#6B7280' }}>{row.megaBuilders}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", letterSpacing: '1px', marginBottom: '4px' }}>MICHAEL BLEM</div>
                    <div style={{ fontSize: '14px', color: '#1C2B39', fontWeight: 500 }}>{row.blem}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.1)', marginBottom: '40px', border: '1px solid #E5E7EB' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '20px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'left', width: '20%' }}>Aspect</th>
                    <th style={{ backgroundColor: '#4A5568', color: '#FFFFFF', padding: '20px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'left', width: '40%' }}>Mega-Builders</th>
                    <th style={{ backgroundColor: '#B8860B', color: '#FFFFFF', padding: '20px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'left', width: '40%' }}>Michael Blem Construction</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                      <td style={{ padding: '18px 24px', fontSize: '15px', fontWeight: 600, color: '#1C2B39', borderBottom: '1px solid #E5E7EB' }}>{row.aspect}</td>
                      <td style={{ padding: '18px 24px', fontSize: '15px', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>{row.megaBuilders}</td>
                      <td style={{ padding: '18px 24px', fontSize: '15px', color: '#1C2B39', fontWeight: 500, borderBottom: '1px solid #E5E7EB' }}>{row.blem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Gold Quote Box */}
          <div style={{ background: '#B8860B', padding: rs('32px 40px', '24px 20px'), borderRadius: '12px', boxShadow: '0 8px 30px rgba(184, 134, 11, 0.3)', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>{Icons.quote('#FFFFFF', 40)}</div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('22px', '18px'), color: '#FFFFFF', fontWeight: 500, margin: 0, fontStyle: 'italic', lineHeight: 1.5 }}>
              "Half the Cost, Double the Quality – Experience the Navy SEALs of Construction."
            </p>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('60px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Our Expertise</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>Excellence in every structure, tailored to your specific needs</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('40px', '24px') }}>
            <Link href="/commercial" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: rs('50px', '24px'), borderRadius: '16px', border: '2px solid #64748B', boxShadow: '0 8px 40px rgba(28,43,57,0.08)', borderTop: '4px solid #64748B' }}>
                <div style={{ width: rs('80px', '60px'), height: rs('80px', '60px'), backgroundColor: 'rgba(100, 116, 139, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '2px solid #64748B' }}>
                  {Icons.commercial('#64748B', rs(40, 30))}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>Commercial / Industrial</h3>
                <p style={{ fontSize: rs('14px', '12px'), color: '#64748B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '1px', marginBottom: '16px' }}>BUILT TO PERFORM</p>
                <p style={{ fontSize: rs('16px', '14px'), lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>ROI-driven builds with 95% on-time delivery and AI for 20-30% savings. From hotels to municipal infrastructure.</p>
                <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Explore Commercial Services →</div>
              </div>
            </Link>

            <Link href="/residential" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: rs('50px', '24px'), borderRadius: '16px', border: '2px solid #6B8E73', boxShadow: '0 8px 40px rgba(28,43,57,0.08)', borderTop: '4px solid #6B8E73' }}>
                <div style={{ width: rs('80px', '60px'), height: rs('80px', '60px'), backgroundColor: 'rgba(107, 142, 115, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '2px solid #6B8E73' }}>
                  {Icons.residential('#6B8E73', rs(40, 30))}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>Residential</h3>
                <p style={{ fontSize: rs('14px', '12px'), color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '1px', marginBottom: '16px' }}>YOUR VISION, OUR MASTERY</p>
                <p style={{ fontSize: rs('16px', '14px'), lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Storm-resilient custom homes with direct owner access—half the cost of mega-builders, double the quality.</p>
                <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Explore Residential Services →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Technology & Innovation</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>Modern methods delivering 20-30% cost savings without compromising quality</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(4, 1fr)', 'repeat(2, 1fr)'), gap: rs('24px', '16px') }}>
            {innovations.map((item, i) => {
              const iconKey = innovationIcons[item.icon] || 'ai';
              return (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: rs('36px', '20px'), textAlign: 'center', border: '1px solid rgba(212, 160, 18, 0.3)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  <div style={{ width: rs('70px', '50px'), height: rs('70px', '50px'), backgroundColor: 'rgba(212, 160, 18, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: rs('20px', '12px'), border: '2px solid #D4A012' }}>
                    {Icons[iconKey] && Icons[iconKey]('#D4A012', rs(36, 28))}
                  </div>
                  <h3 style={{ fontSize: rs('17px', '14px'), fontWeight: 600, color: '#FFFFFF', marginBottom: rs('14px', '8px'), fontFamily: "'Montserrat', sans-serif" }}>{item.name}</h3>
                  <p style={{ fontSize: rs('14px', '12px'), color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '16px', display: isMobile ? 'none' : 'block' }}>{item.description}</p>
                  <div style={{ fontSize: rs('14px', '12px'), color: '#1C2B39', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, backgroundColor: '#D4A012', padding: '8px 16px', borderRadius: '20px', display: 'inline-block' }}>{item.savings} Savings</div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: rs('50px', '30px'), textAlign: 'center', padding: rs('32px', '20px 16px'), background: 'linear-gradient(135deg, rgba(212, 160, 18, 0.2) 0%, rgba(212, 160, 18, 0.1) 100%)', borderRadius: '12px', border: '2px solid #D4A012' }}>
            <p style={{ fontSize: rs('22px', '16px'), color: '#FFFFFF', fontWeight: 600, margin: 0, lineHeight: 1.6 }}>
              <span style={{ color: '#D4A012', fontWeight: 700 }}>Total Savings Potential: 35%+</span> Through Innovation and Elite Efficiency
            </p>
            <p style={{ fontSize: rs('16px', '14px'), color: 'rgba(255,255,255,0.8)', marginTop: '8px' }}>Join the Ranks of Satisfied Clients</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Featured Projects</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>$500M+ in project value delivered across Southwest Florida</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(3, 1fr)', '1fr'), gap: rs('28px', '20px') }}>
            {featured.slice(0, 3).map((p, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
                <div style={{ position: 'relative' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: rs('220px', '180px'), objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '8px 16px', borderRadius: '6px', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 700, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>{p.value}</div>
                </div>
                <div style={{ padding: rs('28px', '20px') }}>
                  <div style={{ fontSize: '11px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{p.type}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('20px', '18px'), color: '#1C2B39', fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: rs('50px', '30px') }}>
            <Link href="/projects" style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('18px 40px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 600, textTransform: 'uppercase', borderRadius: '8px', display: 'inline-block' }}>View All Projects</Link>
          </div>
        </div>
      </section>

      {/* NOW HIRING BANNER */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#1C2B39', backgroundImage: 'linear-gradient(135deg, #1C2B39 0%, #2A3F52 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: rs('60px', '30px'), flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '16px' }}>NOW HIRING</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.2 }}>{hiringData.headline}</h2>
              <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '600px' }}>
                We're expanding rapidly with our 40+ year legacy of precision and zero claims. We hire with elite discernment—seeking top talent who thrive in high-stakes, team-driven environments.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                {hiringData.positions.slice(0, 3).map((pos, i) => (
                  <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '8px', border: '1px solid rgba(212, 160, 18, 0.3)' }}>
                    <span style={{ color: '#D4A012', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 600 }}>{pos.title}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/careers" style={{ display: 'inline-block', backgroundColor: '#B8860B', color: '#FFFFFF', padding: rs('18px 40px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px', boxShadow: '0 4px 15px rgba(184, 134, 11, 0.3)' }}>Apply Now</Link>
            </div>
            
            {!isMobile && (
              <div style={{ width: '300px', height: '300px', backgroundColor: 'rgba(212, 160, 18, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(212, 160, 18, 0.3)' }}>
                {Icons.users('#D4A012', 120)}
              </div>
            )}
          </div>
          
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '40px', lineHeight: 1.6, maxWidth: '800px' }}>
            Michael Blem Construction is an equal opportunity employer. All applicants will be considered without regard to race, color, religion, sex, national origin, disability, or veteran status.
          </p>
        </div>
      </section>

      {/* COMMITMENTS/MANIFESTO */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: rs('60px', '0'), flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: rs('50px', '30px') }}>
                <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Innovative Builds Rooted in Tradition</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginTop: '16px' }}>Our Commitment to Excellence</h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(2, 1fr)', '1fr'), gap: rs('24px', '16px') }}>
                {manifesto.slice(0, 6).map((item, i) => (
                  <div key={i} style={{ padding: rs('32px', '20px'), backgroundColor: i % 2 === 0 ? '#F8F6F3' : '#B8860B', color: i % 2 === 0 ? '#1C2B39' : '#FFFFFF', borderLeft: i % 2 === 0 ? '3px solid #B8860B' : 'none', borderRadius: i % 2 === 0 ? '0 16px 16px 0' : '16px', boxShadow: i % 2 !== 0 ? '0 8px 30px rgba(184, 134, 11, 0.3)' : 'none' }}>
                    <div style={{ fontSize: '12px', color: i % 2 === 0 ? '#B8860B' : 'rgba(255,255,255,0.8)', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, marginBottom: '12px' }}>0{i + 1}</div>
                    <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('18px', '16px'), fontWeight: 600, marginBottom: '12px' }}>{item.title}</h4>
                    <p style={{ fontSize: rs('15px', '14px'), color: i % 2 === 0 ? '#4A5568' : 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {!isMobile && (
              <div style={{ width: '280px', flexShrink: 0 }}>
                <div style={{ backgroundColor: '#B8860B', padding: '32px 24px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(184, 134, 11, 0.3)', position: 'sticky', top: '120px' }}>
                  <div style={{ marginBottom: '16px' }}>{Icons.quote('#FFFFFF', 40)}</div>
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#FFFFFF', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                    "Rooted in Tradition, Powered by Innovation – Third-Generation Excellence."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: rs('50px', '30px') }}>Client Voices</h2>
          
          <div style={{ backgroundColor: '#B8860B', padding: rs('48px 40px', '32px 20px'), borderRadius: '16px', boxShadow: '0 8px 40px rgba(184, 134, 11, 0.3)', marginBottom: rs('40px', '24px') }}>
            <div style={{ marginBottom: '20px' }}>{Icons.quote('#FFFFFF', 48)}</div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('26px', '18px'), color: '#FFFFFF', lineHeight: 1.6, marginBottom: rs('24px', '16px'), fontStyle: 'italic' }}>"{testimonials[activeTestimonial].quote}"</div>
            <div style={{ fontSize: rs('18px', '16px'), color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{testimonials[activeTestimonial].author}</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginTop: '6px' }}>{testimonials[activeTestimonial].project}</div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '14px', height: '14px', borderRadius: '50%', border: 'none', backgroundColor: i === activeTestimonial ? '#B8860B' : '#E5E7EB', cursor: 'pointer', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label={`View testimonial ${i + 1}`}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: i === activeTestimonial ? '#B8860B' : '#D1D5DB', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES & DOWNLOADS */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Resources & Downloads</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>Tools for Your Build</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('60px', '40px') }}>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#1C2B39', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #B8860B' }}>Industry Resources</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Associated General Contractors (AGC)', url: 'https://www.agc.org', desc: 'Advocacy and resources for commercial builders' },
                  { name: 'National Association of Home Builders', url: 'https://www.nahb.org', desc: 'Home building guides and best practices' },
                  { name: 'Florida Building Code', url: 'https://floridabuilding.org', desc: 'Official Florida construction codes' },
                  { name: 'OSHA Construction Safety', url: 'https://www.osha.gov/construction', desc: 'Safety standards and regulations' },
                ].map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '16px 20px', backgroundColor: '#F8F6F3', borderRadius: '8px', textDecoration: 'none', border: '1px solid #E5E7EB' }}>
                    <div style={{ fontSize: '16px', fontWeight: 500, color: '#1C2B39', marginBottom: '4px' }}>{link.name} →</div>
                    <div style={{ fontSize: '13px', color: '#4A5568' }}>{link.desc}</div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#1C2B39', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #B8860B' }}>Downloads</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {downloads.slice(0, 4).map((item, i) => (
                  <Link key={i} href="/downloads" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', backgroundColor: '#B8860B', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(184, 134, 11, 0.2)' }}>
                    <div style={{ flexShrink: 0 }}>{Icons.download('#FFFFFF', 28)}</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>{item.name}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>{item.type} • {item.size}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/downloads" style={{ display: 'inline-block', marginTop: '24px', color: '#B8860B', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 600 }}>View All Downloads →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Ready to Build Your Legacy?</h2>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Let's discuss your vision. Schedule a free consultation with Mike today.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('20px 50px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: rs('3px', '2px'), fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Schedule Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
