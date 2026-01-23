'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { manifesto, testimonials } from '@/lib/data';

export default function AboutPage() {
  const { rs, isMobile, isTablet } = useResponsive();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  useEffect(() => { 
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 6000); 
    return () => clearInterval(timer); 
  }, []);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: rs('120px', '100px') }}>
      {/* Hero */}
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>About Michael Blem</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>40+ Years of Building Excellence in Southwest Florida</p>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: rs('18px', '15px'), lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            In the heart of Sarasota's evolving landscape, Michael Blem Construction stands as a testament to enduring craftsmanship. Michael's story spans <strong style={{ color: '#1C2B39', fontWeight: 600 }}>three generations of builders</strong> who have shaped Florida's skyline with integrity and precision.
          </p>
          <p style={{ fontSize: rs('18px', '15px'), lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            With a <strong style={{ color: '#1C2B39', fontWeight: 600 }}>BS in Architectural Construction Engineering Technology</strong> from Florida A&M University (1987) and <strong style={{ color: '#1C2B39', fontWeight: 600 }}>19 years leading Emblem Construction LLC</strong>, Michael has delivered over 500 projects—from the $13M Candlewood Suites to the $4.6M Englewood Sports Complex.
          </p>
          <p style={{ fontSize: rs('18px', '15px'), lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            Our philosophy? <strong style={{ color: '#1C2B39', fontWeight: 600 }}>Build with purpose, build with integrity.</strong> Every project receives the personal attention and expertise that only a master builder with four decades of experience can provide.
          </p>
          
          {/* Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: rs('repeat(4, 1fr)', 'repeat(2, 1fr)'), 
            gap: rs('40px', '20px'), 
            marginTop: '40px', 
            padding: rs('40px', '24px'), 
            backgroundColor: '#F8F6F3', 
            borderRadius: '16px' 
          }}>
            {[
              { num: '40+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '$500M+', label: 'Project Value' },
              { num: '0', label: 'Claims Record' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '28px'), fontWeight: 600, color: '#B8860B' }}>{stat.num}</div>
                <div style={{ fontSize: rs('14px', '12px'), color: '#4A5568', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '40px', textAlign: 'center' }}>Education & Credentials</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('32px', '16px') }}>
            {[
              { label: 'Education', title: 'Florida A&M University', desc: 'BS in Architectural Construction Engineering Technology, 1987' },
              { label: 'Experience', title: 'Emblem Construction LLC', desc: '19 years as principal, managing $500M+ in projects' },
              { label: 'License', title: 'CGC 1508400', desc: 'Florida Certified General Contractor' },
              { label: 'License', title: 'CBC 047796', desc: 'Florida Certified Building Contractor' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: rs('32px', '20px'), borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', marginBottom: '12px' }}>{item.label}</div>
                <h3 style={{ fontSize: rs('20px', '18px'), color: '#FFFFFF', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: rs('16px', '14px'), color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>The Michael Blem Construction Manifesto</h2>
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(3, 1fr)', '1fr'), gap: rs('24px', '16px') }}>
            {manifesto.slice(0, 6).map((item, i) => (
              <div key={i} style={{ padding: rs('28px', '20px'), backgroundColor: '#FFFFFF', borderLeft: '3px solid #B8860B', borderRadius: '0 16px 16px 0' }}>
                <div style={{ fontSize: '12px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, marginBottom: '8px' }}>0{i + 1}</div>
                <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('16px', '15px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ fontSize: rs('14px', '13px'), color: '#4A5568', lineHeight: 1.65 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: '40px' }}>Client Voices</h2>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '18px'), color: '#1C2B39', lineHeight: 1.6, marginBottom: '40px', fontStyle: 'italic', padding: rs('0', '0 8px') }}>"{testimonials[activeTestimonial].quote}"</div>
          <div style={{ fontSize: rs('18px', '16px'), color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{testimonials[activeTestimonial].author}</div>
          <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '6px' }}>{testimonials[activeTestimonial].project}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '44px', height: '44px', borderRadius: '50%', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: i === activeTestimonial ? '#B8860B' : '#E5E7EB', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Meet Mike—Contact for Personal Consultation</h2>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Experience the difference of working directly with a third-generation master builder.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('20px 50px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: rs('3px', '2px'), fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Schedule Consultation</Link>
        </div>
      </section>
    </div>
  );
}
