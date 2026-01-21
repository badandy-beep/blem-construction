'use client';
import { useState } from 'react';
import Link from 'next/link';
import { colors, blogPosts } from '@/lib/data';

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const getFilteredPosts = () => activeFilter === 'all' ? blogPosts : blogPosts.filter(p => p.categoryType === activeFilter);

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text, paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>Builder's Insights</h1>
          <p style={{ fontSize: '18px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>40 years of hard-won wisdom from Mike's desk.</p>
        </div>
      </section>
      <section style={{ padding: '60px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '50px', flexWrap: 'wrap' }}>
            {[{ key: 'all', label: 'All Posts' }, { key: 'commercial', label: 'Commercial' }, { key: 'residential', label: 'Residential' }, { key: 'general', label: 'General' }].map((f) => (<button key={f.key} onClick={() => setActiveFilter(f.key)} style={{ padding: '14px 28px', border: activeFilter === f.key ? 'none' : '1px solid ' + colors.mediumGray, backgroundColor: activeFilter === f.key ? colors.primary : colors.background, color: activeFilter === f.key ? '#FFF' : colors.text, fontFamily: "'Montserrat', sans-serif", fontSize: '13px', cursor: 'pointer', fontWeight: '600' }}>{f.label}</button>))}
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {getFilteredPosts().map((post, i) => (<article key={i} style={{ backgroundColor: colors.background, overflow: 'hidden', border: '1px solid ' + colors.mediumGray }}><div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)` }} /><div style={{ padding: '36px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}><span style={{ fontSize: '11px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>{post.category}</span><span style={{ fontSize: '12px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif" }}>{post.date}</span></div><h3 style={{ fontSize: '20px', fontWeight: '500', color: colors.primary, marginBottom: '16px', lineHeight: 1.4 }}>{post.title}</h3><p style={{ fontSize: '15px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300', lineHeight: 1.7 }}>{post.excerpt}</p></div></article>))}
          </div>
        </div>
      </section>
    </div>
  );
}
