'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, stats, testimonials, innovations, manifesto } from '@/lib/data';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 6000); return () => clearInterval(timer); }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text }}>
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '160px 5% 100px', position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(27,54,93,0.92) 0%, rgba(27,54,93,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}><div style={{ width: '60px', height: '2px', backgroundColor: colors.accent }} /><span style={{ fontSize: '13px', letterSpacing: '4px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: '600' }}>Since 1987</span></div>
          <h1 style={{ fontSize: '62px', fontWeight: '400', color: '#FFF', marginBottom: '24px', lineHeight: 1.1, maxWidth: '800px' }}>Crafting Legacies in<br />Southwest Florida</h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', marginBottom: '44px', lineHeight: 1.85, fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Third-generation craftsmanship. Over 40 years of excellence. From custom homes to $13M hotel developments, we build with integrity.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ backgroundColor: colors.accent, color: '#FFF', padding: '20px 44px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Start Your Project</Link>
            <Link href="/projects" style={{ backgroundColor: 'transparent', color: '#FFF', padding: '20px 44px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: '600', textTransform: 'uppercase', border: '2px solid rgba(255,255,255,0.4)' }}>View Our Work</Link>
          </div>
          <div style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '20px' }}><div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>License</div><div style={{ fontSize: '18px', color: '#FFF', fontFamily: "'Montserrat', sans-serif", fontWeight: '600', marginTop: '4px' }}>CGC 1508400</div></div>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '20px' }}><div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>License</div><div style={{ fontSize: '18px', color: '#FFF', fontFamily: "'Montserrat', sans-serif", fontWeight: '600', marginTop: '4px' }}>CBC 047796</div></div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: colors.primary, padding: '50px 5%' }}>
        <div className="grid-4" style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {stats.map((s, i) => (<div key={i} style={{ textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none', padding: '10px 0' }}><div style={{ fontSize: '52px', fontWeight: '400', color: '#FFF', marginBottom: '8px' }}>{s.number}</div><div style={{ fontSize: '12px', letterSpacing: '3px', color: colors.accent, textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>{s.label}</div></div>))}
        </div>
      </section>

      <section style={{ padding: '100px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}><h2 style={{ fontSize: '42px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>Choose Your Project Type</h2></div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <Link href="/commercial" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: colors.background, padding: '50px', border: `1px solid ${colors.mediumGray}`, cursor: 'pointer' }}>
                <div style={{ fontSize: '60px', marginBottom: '24px' }}>🏢</div>
                <h3 style={{ fontSize: '28px', fontWeight: '500', color: colors.primary, marginBottom: '16px', fontFamily: "'Montserrat', sans-serif" }}>Commercial / Industrial</h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: colors.textLight, marginBottom: '24px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Tailored retrofits and new builds for businesses, focusing on efficiency, compliance, and scalability. Reference our $13M Candlewood Suites project.</p>
                <div style={{ fontSize: '14px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Explore Commercial Services →</div>
              </div>
            </Link>
            <Link href="/residential" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: colors.background, padding: '50px', border: `1px solid ${colors.mediumGray}`, cursor: 'pointer' }}>
                <div style={{ fontSize: '60px', marginBottom: '24px' }}>🏡</div>
                <h3 style={{ fontSize: '28px', fontWeight: '500', color: colors.primary, marginBottom: '16px', fontFamily: "'Montserrat', sans-serif" }}>Residential</h3>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: colors.textLight, marginBottom: '24px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Custom homes and remodels designed for comfort and resilience. See our $1.5M Winston Palms Condominium for examples.</p>
                <div style={{ fontSize: '14px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>Explore Residential Services →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 5%', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '40px', textAlign: 'center' }}>Our Commitment</h3>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {manifesto.slice(0, 4).map((item, i) => (<div key={i} style={{ padding: '28px', backgroundColor: colors.background, borderLeft: `3px solid ${colors.accent}` }}><h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.primary, marginBottom: '12px', fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h4><p style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300', lineHeight: 1.65 }}>{item.description}</p></div>))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 5%', backgroundColor: colors.primary }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '400', color: '#FFF', marginBottom: '40px', textAlign: 'center' }}>Technology & Innovation</h2>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {innovations.map((item, i) => (<div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '36px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}><div style={{ fontSize: '44px', marginBottom: '20px' }}>{item.icon}</div><h3 style={{ fontSize: '17px', fontWeight: '600', color: '#FFF', marginBottom: '14px', fontFamily: "'Montserrat', sans-serif" }}>{item.name}</h3><p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Montserrat', sans-serif", fontWeight: '300', lineHeight: 1.65 }}>{item.description}</p></div>))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '40px' }}>Client Voices</h2>
          <div style={{ fontSize: '30px', color: colors.primary, lineHeight: 1.6, marginBottom: '40px', fontStyle: 'italic' }}>"{testimonials[activeTestimonial].quote}"</div>
          <div style={{ fontSize: '18px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>{testimonials[activeTestimonial].author}</div>
          <div style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", marginTop: '6px' }}>{testimonials[activeTestimonial].project}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>{testimonials.map((_, i) => (<button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '14px', height: '14px', borderRadius: '50%', border: 'none', backgroundColor: i === activeTestimonial ? colors.accent : colors.mediumGray, cursor: 'pointer' }} />))}</div>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: colors.accent }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#FFF', marginBottom: '24px' }}>Ready to Build Your Legacy?</h2>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: colors.primary, color: '#FFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Schedule Consultation</Link>
        </div>
      </section>
    </div>
  );
}
