'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState } from 'react';
import Link from 'next/link';
import { featured, projects } from '@/lib/data';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const getProjects = () => {
    if (activeCategory === 'all') return [...projects.hotel, ...projects.municipal, ...projects.commercial, ...projects.residential];
    return projects[activeCategory] || [];
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Completed Projects</h1>
          <p style={{ fontSize: '18px', color: '#4A5568', maxWidth: '800px', margin: '0 auto' }}>Over $500M+ in projects completed across Southwest Florida and beyond.</p>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Featured Projects</h2>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {featured.map((p, i) => (
              <div key={i} style={{ backgroundColor: '#F8F6F3', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '28px' }}>
                  <div style={{ fontSize: '11px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{p.type} • {p.value}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#1C2B39', fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568', marginBottom: '12px' }}>{p.location}</div>
                  <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.6 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {[{ key: 'all', label: 'All' }, { key: 'hotel', label: 'Hotel' }, { key: 'municipal', label: 'Municipal' }, { key: 'commercial', label: 'Commercial' }, { key: 'residential', label: 'Residential' }].map((c) => (
              <button key={c.key} onClick={() => setActiveCategory(c.key)} style={{ padding: '14px 28px', border: activeCategory === c.key ? 'none' : '1px solid #E5E7EB', backgroundColor: activeCategory === c.key ? '#1C2B39' : '#FFFFFF', color: activeCategory === c.key ? '#FFFFFF' : '#1C2B39', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', cursor: 'pointer', fontWeight: 600, borderRadius: '8px' }}>{c.label}</button>
            ))}
          </div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '18px 32px', backgroundColor: '#1C2B39', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700 }}>
              <div>Project</div><div>Location</div><div style={{ textAlign: 'right' }}>Value</div>
            </div>
            {getProjects().map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid #F8F6F3', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                <div style={{ fontSize: '15px', color: '#1C2B39', fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                <div style={{ fontSize: '15px', color: '#B8860B', textAlign: 'right', fontWeight: 600 }}>{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Have a Project in Mind?</h2>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
