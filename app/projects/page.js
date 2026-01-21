'use client';
import { useState } from 'react';
import Link from 'next/link';
import { colors, featured, projects } from '@/lib/data';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const getProjects = () => {
    if (activeCategory === 'all') return [...projects.hotel, ...projects.municipal, ...projects.commercial, ...projects.residential];
    return projects[activeCategory] || [];
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text, paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>Completed Projects</h1>
          <p style={{ fontSize: '18px', color: colors.textLight, maxWidth: '800px', margin: '0 auto', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', lineHeight: 1.7 }}>Over $50M+ in projects completed across Southwest Florida and beyond.</p>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '40px', textAlign: 'center' }}>Featured Projects</h2>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {featured.map((p, i) => (<div key={i} style={{ backgroundColor: colors.lightGray, overflow: 'hidden' }}><img src={p.img} alt={p.name} style={{ width: '100%', height: '280px', objectFit: 'cover' }} /><div style={{ padding: '28px' }}><div style={{ fontSize: '11px', color: colors.accent, marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>{p.type} • {p.value}</div><div style={{ fontSize: '20px', color: colors.primary, fontWeight: '500', marginBottom: '8px' }}>{p.name}</div><div style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif" }}>{p.location}</div></div></div>))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {[{ key: 'all', label: 'All' }, { key: 'hotel', label: 'Hotel' }, { key: 'municipal', label: 'Municipal' }, { key: 'commercial', label: 'Commercial' }, { key: 'residential', label: 'Residential' }].map((c) => (<button key={c.key} onClick={() => setActiveCategory(c.key)} style={{ padding: '14px 28px', border: activeCategory === c.key ? 'none' : '1px solid ' + colors.mediumGray, backgroundColor: activeCategory === c.key ? colors.primary : colors.background, color: activeCategory === c.key ? '#FFF' : colors.text, fontFamily: "'Montserrat', sans-serif", fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}>{c.label}</button>))}
          </div>
          <div style={{ backgroundColor: colors.background, border: '1px solid ' + colors.mediumGray, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '18px 32px', backgroundColor: colors.primary, color: '#FFF', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '700' }}><div>Project</div><div>Location</div><div style={{ textAlign: 'right' }}>Value</div></div>
            {getProjects().map((p, i) => (<div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid ' + colors.lightGray, fontFamily: "'Montserrat', sans-serif" }}><div style={{ fontSize: '15px', color: colors.primary, fontWeight: '500' }}>{p.name}</div><div style={{ fontSize: '14px', color: colors.textLight }}>{p.location}</div><div style={{ fontSize: '15px', color: colors.accent, textAlign: 'right', fontWeight: '600' }}>{p.value}</div></div>))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.accent }}><div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}><h2 style={{ fontSize: '36px', fontWeight: '400', color: '#FFF', marginBottom: '24px' }}>Have a Project in Mind?</h2><Link href="/contact" style={{ display: 'inline-block', backgroundColor: colors.primary, color: '#FFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Start Your Project</Link></div></section>
    </div>
  );
}
