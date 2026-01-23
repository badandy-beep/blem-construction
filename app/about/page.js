'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { manifesto, testimonials } from '@/lib/data';

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 6000); return () => clearInterval(timer); }, []);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      {/* Hero */}
      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>About Michael Blem</h1>
          <p style={{ fontSize: '18px', color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>40+ Years of Building Excellence in Southwest Florida</p>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            In the heart of Sarasota's evolving landscape, Michael Blem Construction stands as a testament to enduring craftsmanship. Michael's story spans <strong style={{ color: '#1C2B39', fontWeight: 600 }}>three generations of builders</strong> who have shaped Florida's skyline with integrity and precision.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            With a <strong style={{ color: '#1C2B39', fontWeight: 600 }}>BS in Architectural Construction Engineering Technology</strong> from Florida A&M University (1987) and <strong style={{ color: '#1C2B39', fontWeight: 600 }}>19 years leading Emblem Construction LLC</strong>, Michael has delivered over 500 projects—from the $13M Candlewood Suites to the $4.6M Englewood Sports Complex.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: '#4A5568', marginBottom: '28px' }}>
            Our philosophy? <strong style={{ color: '#1C2B39', fontWeight: 600 }}>Build with purpose, build with integrity.</strong> Every project receives the personal attention and expertise that only a master builder with four decades of experience can provide.
          </p>
          
          {/* Stats Grid */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '40px', padding: '40px', backgroundColor: '#F8F6F3', borderRadius: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', flex: '1', minWidth: '120px' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#B8860B' }}>40+</div>
              <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '4px' }}>Years Experience</div>
            </div>
            <div style={{ textAlign: 'center', flex: '1', minWidth: '120px' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#B8860B' }}>500+</div>
              <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '4px' }}>Projects Completed</div>
            </div>
            <div style={{ textAlign: 'center', flex: '1', minWidth: '120px' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#B8860B' }}>$500M+</div>
              <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '4px' }}>Project Value</div>
            </div>
            <div style={{ textAlign: 'center', flex: '1', minWidth: '120px' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#B8860B' }}>0</div>
              <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '4px' }}>Claims Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section style={{ padding: '80px 5%', backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '40px', textAlign: 'center' }}>Education & Credentials</h2>
          
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', marginBottom: '12px' }}>Education</div>
              <h3 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 600, marginBottom: '8px' }}>Florida A&M University</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>BS in Architectural Construction Engineering Technology, 1987</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', marginBottom: '12px' }}>Experience</div>
              <h3 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 600, marginBottom: '8px' }}>Emblem Construction LLC</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>19 years as principal, managing $500M+ in projects</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', marginBottom: '12px' }}>License</div>
              <h3 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 600, marginBottom: '8px' }}>CGC 1508400</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>Florida Certified General Contractor</p>
            </div>
            
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', marginBottom: '12px' }}>License</div>
              <h3 style={{ fontSize: '20px', color: '#FFFFFF', fontWeight: 600, marginBottom: '8px' }}>CBC 047796</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>Florida Certified Building Contractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>The Michael Blem Construction Manifesto</h2>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {manifesto.map((item, i) => (
              <div key={i} style={{ padding: '28px', backgroundColor: '#FFFFFF', borderLeft: '3px solid #B8860B', borderRadius: '0 16px 16px 0' }}>
                <div style={{ fontSize: '12px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, marginBottom: '8px' }}>0{i + 1}</div>
                <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '16px', fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.65 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Legacy */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '24px' }}>Community Legacy</h2>
          <p style={{ fontSize: '18px', color: '#4A5568', lineHeight: 1.8, marginBottom: '24px' }}>
            For three generations, the Blem family has been building Southwest Florida. From the $4.6M Englewood Sports Complex that serves thousands of local families to the infrastructure projects that keep our communities running, we're invested in the places we build.
          </p>
          <p style={{ fontSize: '18px', color: '#4A5568', lineHeight: 1.8 }}>
            This isn't just a business—it's a legacy. When you work with Michael Blem Construction, you're partnering with a family that has roots here, relationships here, and a reputation built over four decades of delivering on our promises.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px' }}>Client Voices</h2>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', color: '#1C2B39', lineHeight: 1.6, marginBottom: '40px', fontStyle: 'italic' }}>"{testimonials[activeTestimonial].quote}"</div>
          <div style={{ fontSize: '18px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{testimonials[activeTestimonial].author}</div>
          <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '6px' }}>{testimonials[activeTestimonial].project}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '40px' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '14px', height: '14px', borderRadius: '50%', border: 'none', backgroundColor: i === activeTestimonial ? '#B8860B' : '#E5E7EB', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 5%', backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Meet Mike—Contact for Personal Consultation</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Experience the difference of working directly with a third-generation master builder.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Schedule Consultation</Link>
        </div>
      </section>
    </div>
  );
}
