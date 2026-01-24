'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState } from 'react';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { projects, testimonials, residentialBenefits, faqData } from '@/lib/data';

export default function ResidentialPage() {
  const { rs, isMobile } = useResponsive();
  const [openFaq, setOpenFaq] = useState(null);
  const [faqType, setFaqType] = useState('newConstruction');

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: rs('120px', '100px') }}>
      {/* Hero */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), background: 'linear-gradient(145deg, #1C2B39 0%, #243342 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '16px' }}>YOUR VISION, OUR CRAFTSMANSHIP</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '20px' }}>Residential Mastery</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>Personalized builds at half the cost of mega-communities, with direct Mike access.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: rs('60px', '24px'), marginTop: '50px', flexWrap: 'wrap' }}>
            <div><div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#6B8E73' }}>200+</div><div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase' }}>Homes Completed</div></div>
            <div><div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#6B8E73' }}>98%</div><div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase' }}>Budget Adherence</div></div>
            <div><div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#6B8E73' }}>50%</div><div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase' }}>Lower Overhead</div></div>
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      <section id="new-construction" style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('60px', '30px'), alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>NEW CONSTRUCTION</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '24px' }}>Build Your Dream Home</h2>
              <p style={{ fontSize: rs('16px', '14px'), color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>Custom homes built to your vision with storm-resilient designs engineered for Florida's climate.</p>
              
              <div style={{ marginBottom: '32px' }}>
                {residentialBenefits.newConstruction.slice(0, 4).map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#6B8E73', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '14px' }}>✓</span>
                    </div>
                    <p style={{ fontSize: rs('15px', '13px'), color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ backgroundColor: '#F8F6F3', padding: rs('40px', '24px'), borderRadius: '16px', borderLeft: '4px solid #6B8E73' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏡</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('24px', '20px'), fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Custom Homes</h3>
              <p style={{ fontSize: rs('15px', '14px'), lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Storm-resistant designs, premium finishes, and personalized craftsmanship throughout.</p>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>200+ Homes Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Residential Projects</h2>
          
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {projects.residential.map((p, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '15px', color: '#1C2B39', fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
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
              {projects.residential.map((p, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid #F8F6F3', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                  <div style={{ fontSize: '15px', color: '#1C2B39', fontWeight: 500 }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                  <div style={{ fontSize: '15px', color: '#B8860B', textAlign: 'right', fontWeight: 600 }}>{p.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: '24px', textAlign: 'center' }}>Residential FAQ</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <button onClick={() => { setFaqType('newConstruction'); setOpenFaq(null); }} style={{ padding: rs('14px 28px', '12px 20px'), backgroundColor: faqType === 'newConstruction' ? '#6B8E73' : '#FFFFFF', color: faqType === 'newConstruction' ? '#FFFFFF' : '#1C2B39', border: faqType === 'newConstruction' ? 'none' : '1px solid #E5E7EB', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: rs('13px', '12px'), fontWeight: 600, cursor: 'pointer' }}>New Construction</button>
            <button onClick={() => { setFaqType('remodeling'); setOpenFaq(null); }} style={{ padding: rs('14px 28px', '12px 20px'), backgroundColor: faqType === 'remodeling' ? '#6B8E73' : '#FFFFFF', color: faqType === 'remodeling' ? '#FFFFFF' : '#1C2B39', border: faqType === 'remodeling' ? 'none' : '1px solid #E5E7EB', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: rs('13px', '12px'), fontWeight: 600, cursor: 'pointer' }}>Remodeling</button>
          </div>
          
          <div style={{ borderTop: '1px solid #E5E7EB' }}>
            {faqData.residential[faqType].map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: rs('24px 0', '20px 0'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontSize: rs('18px', '15px'), fontWeight: 500, color: '#1C2B39', textAlign: 'left', gap: '16px' }}>
                  <span>{faq.question}</span>
                  <span style={{ fontSize: '24px', color: '#6B8E73', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: '0 0 24px 0', fontSize: rs('16px', '14px'), lineHeight: 1.8, color: '#4A5568' }}>{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#6B8E73' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Build Your Dream Home</h2>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Let's bring your vision to life with quality craftsmanship and personalized service.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('20px 50px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: rs('3px', '2px'), fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Get Your Free Residential Quote</Link>
        </div>
      </section>
    </div>
  );
}
