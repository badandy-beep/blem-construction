'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { colors, manifesto, testimonials } from '@/lib/data';

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 6000); return () => clearInterval(timer); }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text, paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>About Mike: 40+ Years of Building Excellence</h1>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: colors.textLight, marginBottom: '28px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>In the heart of Sarasota's evolving landscape, Michael Blem Construction stands as a testament to enduring craftsmanship. Michael's story spans <strong style={{ color: colors.text, fontWeight: '500' }}>three generations of builders</strong> who have shaped Florida's skyline.</p>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: colors.textLight, marginBottom: '28px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>With a <strong style={{ color: colors.text, fontWeight: '500' }}>BS in Architectural Construction Engineering Technology</strong> from Florida A&M University (1987) and <strong style={{ color: colors.text, fontWeight: '500' }}>19 years leading Emblem Construction LLC</strong>, Michael has delivered over 500 projects—from the $13M Candlewood Suites to the $4.6M Englewood Sports Complex.</p>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: colors.textLight, marginBottom: '40px', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Our philosophy? <strong style={{ color: colors.text, fontWeight: '500' }}>Build with purpose, build with integrity.</strong></p>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.cream }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '40px', textAlign: 'center' }}>The Michael Blem Construction Manifesto</h2>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {manifesto.map((item, i) => (<div key={i} style={{ padding: '28px', backgroundColor: colors.background, borderLeft: '3px solid ' + colors.accent }}><div style={{ fontSize: '12px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700', marginBottom: '8px' }}>0{i + 1}</div><h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.primary, marginBottom: '12px', fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h4><p style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300', lineHeight: 1.65 }}>{item.description}</p></div>))}
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '40px' }}>Client Voices</h2>
          <div style={{ fontSize: '30px', color: colors.primary, lineHeight: 1.6, marginBottom: '40px', fontStyle: 'italic' }}>"{testimonials[activeTestimonial].quote}"</div>
          <div style={{ fontSize: '18px', color: colors.accent, fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>{testimonials[activeTestimonial].author}</div>
          <div style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", marginTop: '6px' }}>{testimonials[activeTestimonial].project}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>{testimonials.map((_, i) => (<button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '14px', height: '14px', borderRadius: '50%', border: 'none', backgroundColor: i === activeTestimonial ? colors.accent : colors.mediumGray, cursor: 'pointer' }} />))}</div>
        </div>
      </section>
    </div>
  );
}
