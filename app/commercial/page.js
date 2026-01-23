'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState } from 'react';
import Link from 'next/link';
import { projects, innovations, testimonials, commercialBenefits, faqData } from '@/lib/data';

export default function CommercialPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const allCommercial = [...projects.hotel, ...projects.municipal, ...projects.commercial];
  const commercialTestimonials = testimonials.filter(t => t.type === 'commercial');

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 5%', background: 'linear-gradient(145deg, #1C2B39 0%, #243342 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#64748B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '16px' }}>BUILT TO PERFORM</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#FFFFFF', marginBottom: '20px' }}>Commercial & Industrial Excellence</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>For industrial, commercial, and municipal clients demanding ROI, compliance, and minimal downtime. New construction or retrofits—save 15-20% with our tech-driven approach and direct owner access.</p>
          
          {/* Quick Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '50px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, color: '#D4A012' }}>$500M+</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>Value Delivered</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, color: '#D4A012' }}>95%</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>On-Time Delivery</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, color: '#D4A012' }}>20-30%</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      <section id="new-construction" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#64748B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>NEW CONSTRUCTION</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '24px' }}>Build From the Ground Up</h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>From hotels and medical facilities to municipal infrastructure, we deliver large-scale commercial projects with precision, compliance, and value engineering that improves outcomes while reducing costs.</p>
              
              {/* Benefits List */}
              <div style={{ marginBottom: '32px' }}>
                {commercialBenefits.newConstruction.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#64748B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '14px' }}>✓</span>
                    </div>
                    <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ backgroundColor: '#F8F6F3', padding: '40px', borderRadius: '16px', borderLeft: '4px solid #64748B' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏢</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Commercial & Medical</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Office buildings, medical facilities, hotels, and retail spaces. Complete regulatory compliance, minimal disruption to operations, and value engineering.</p>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>$500M+ Managed</div>
            </div>
          </div>
          
          {/* Factoid Box */}
          <div style={{ marginTop: '50px', background: 'linear-gradient(135deg, #1C2B39 0%, #243342 100%)', padding: '28px 32px', borderRadius: '12px', borderLeft: '4px solid #D4A012', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '32px' }}>📊</div>
            <div>
              <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 500, margin: 0 }}>From $13M hotels to $2.8M pumping stations—$500M+ value delivered.</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '8px 0 0 0' }}>Our AI scheduling (ALICE) reduces delays by 20-30%, while BIM saves 15-20% through clash detection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofits Section */}
      <section id="retrofits" style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', borderLeft: '4px solid #64748B' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏛️</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Municipal Infrastructure</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Public infrastructure, sports complexes, water treatment facilities. Community-focused builds with long-term durability, safety compliance, and taxpayer value.</p>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>15+ Public Projects</div>
            </div>
            
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#64748B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>REMODELING & RETROFITS</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '24px' }}>Upgrade Without Disruption</h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>Transform existing commercial spaces with minimal disruption to your operations. Our phased approach and after-hours scheduling keeps your business running while we work.</p>
              
              {/* Benefits List */}
              <div>
                {commercialBenefits.retrofits.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#64748B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '14px' }}>✓</span>
                    </div>
                    <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Savings Infographic */}
      <section style={{ padding: '80px 5%', backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '40px' }}>Cost Savings Breakdown</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px 40px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '48px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, color: '#D4A012' }}>20%</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>AI Optimization</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#D4A012', fontSize: '32px' }}>+</div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px 40px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '48px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, color: '#D4A012' }}>15%</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>Direct Access</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#D4A012', fontSize: '32px' }}>=</div>
            <div style={{ backgroundColor: 'rgba(212,160,18,0.2)', padding: '32px 40px', borderRadius: '12px', border: '1px solid rgba(212,160,18,0.5)' }}>
              <div style={{ fontSize: '48px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, color: '#D4A012' }}>35%</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginTop: '8px' }}>Total Savings</div>
            </div>
          </div>
          
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>vs. traditional mega-builder approaches with layered administrative overhead</p>
        </div>
      </section>

      {/* Projects List */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Commercial Projects Portfolio</h2>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '18px 32px', backgroundColor: '#1C2B39', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700 }}>
              <div>Project</div><div>Location</div><div style={{ textAlign: 'right' }}>Value</div>
            </div>
            {allCommercial.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid #F8F6F3', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                <div style={{ fontSize: '15px', color: '#1C2B39', fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                <div style={{ fontSize: '15px', color: '#B8860B', textAlign: 'right', fontWeight: 600 }}>{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Commercial Client Testimonials</h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {commercialTestimonials.slice(0, 2).map((t, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', borderLeft: '4px solid #64748B' }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', color: '#1C2B39', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>"{t.quote}"</p>
                <div style={{ fontSize: '16px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{t.author}</div>
                <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '4px' }}>{t.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Commercial FAQ</h2>
          
          <div style={{ borderTop: '1px solid #E5E7EB' }}>
            {faqData.commercial.general.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 500, color: '#1C2B39', textAlign: 'left' }}
                >
                  {faq.question}
                  <span style={{ fontSize: '24px', color: '#B8860B', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 0 24px 0', fontSize: '16px', lineHeight: 1.8, color: '#4A5568' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 5%', backgroundColor: '#64748B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Discuss Your Commercial Project</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>From hotels to municipal infrastructure, let's discuss how we can deliver your project under budget and on time.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Inquire About Commercial Partnerships</Link>
        </div>
      </section>
    </div>
  );
}
