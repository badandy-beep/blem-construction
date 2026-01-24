'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { featured, projects } from '@/lib/data';

export default function ProjectsPage() {
  const { rs, isMobile } = useResponsive();
  const [activeCategory, setActiveCategory] = useState('all');
  const getProjects = () => {
    if (activeCategory === 'all') return [...projects.hotel, ...projects.municipal, ...projects.commercial, ...projects.residential];
    return projects[activeCategory] || [];
  };
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, marginBottom: '20px' }}>Completed Projects</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568' }}>Over $500M+ in projects completed across Southwest Florida and beyond.</p>
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, marginBottom: '40px', textAlign: 'center' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(3, 1fr)', '1fr'), gap: rs('28px', '20px') }}>
            {featured.slice(0, 3).map((p, i) => (
              <div key={i} style={{ backgroundColor: '#F8F6F3', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: rs('220px', '180px'), objectFit: 'cover' }} />
                <div style={{ padding: rs('28px', '20px') }}>
                  <div style={{ fontSize: '11px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{p.type} • {p.value}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('20px', '18px'), fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: rs('12px', '8px'), marginBottom: '40px', flexWrap: 'wrap' }}>
            {[{ key: 'all', label: 'All' }, { key: 'hotel', label: 'Hotel' }, { key: 'municipal', label: 'Municipal' }, { key: 'commercial', label: 'Commercial' }, { key: 'residential', label: 'Residential' }].map((c) => (
              <button key={c.key} onClick={() => setActiveCategory(c.key)} style={{ padding: rs('14px 28px', '10px 16px'), border: activeCategory === c.key ? 'none' : '1px solid #E5E7EB', backgroundColor: activeCategory === c.key ? '#1C2B39' : '#FFFFFF', color: activeCategory === c.key ? '#FFFFFF' : '#1C2B39', fontFamily: "'Montserrat', sans-serif", fontSize: rs('13px', '11px'), cursor: 'pointer', fontWeight: 600, borderRadius: '8px' }}>{c.label}</button>
            ))}
          </div>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {getProjects().map((p, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</span>
                    <span style={{ fontSize: '15px', color: '#B8860B', fontWeight: 600 }}>{p.value}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '18px 32px', backgroundColor: '#1C2B39', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700 }}>
                <div>Project</div><div>Location</div><div style={{ textAlign: 'right' }}>Value</div>
              </div>
              {getProjects().map((p, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid #F8F6F3', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                  <div style={{ fontSize: '15px', fontWeight: 500 }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                  <div style={{ fontSize: '15px', color: '#B8860B', textAlign: 'right', fontWeight: 600 }}>{p.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Have a Project in Mind?</h2>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '16px 32px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
