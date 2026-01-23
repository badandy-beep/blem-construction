'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState } from 'react';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const getFilteredPosts = () => activeFilter === 'all' ? blogPosts : blogPosts.filter(p => p.categoryType === activeFilter);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Builder's Insights</h1>
          <p style={{ fontSize: '18px', color: '#4A5568' }}>40 years of hard-won wisdom from Mike's desk.</p>
        </div>
      </section>

      <section style={{ padding: '60px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '50px', flexWrap: 'wrap' }}>
            {[{ key: 'all', label: 'All Posts' }, { key: 'commercial', label: 'Commercial' }, { key: 'residential', label: 'Residential' }, { key: 'general', label: 'General' }].map((f) => (
              <button key={f.key} onClick={() => setActiveFilter(f.key)} style={{ padding: '14px 28px', border: activeFilter === f.key ? 'none' : '1px solid #E5E7EB', backgroundColor: activeFilter === f.key ? '#1C2B39' : '#FFFFFF', color: activeFilter === f.key ? '#FFFFFF' : '#1C2B39', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', cursor: 'pointer', fontWeight: 600, borderRadius: '8px' }}>{f.label}</button>
            ))}
          </div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {getFilteredPosts().map((post, i) => (
              <article key={i} style={{ backgroundColor: '#FFFFFF', overflow: 'hidden', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
                <div style={{ height: '8px', background: 'linear-gradient(90deg, #1C2B39 0%, #B8860B 100%)' }} />
                <div style={{ padding: '36px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{post.category}</span>
                    <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', fontWeight: 600, color: '#1C2B39', marginBottom: '16px', lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.7 }}>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
