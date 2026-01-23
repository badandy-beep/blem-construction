'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState } from 'react';
import Link from 'next/link';
import { projects, testimonials, residentialBenefits, faqData } from '@/lib/data';

export default function ResidentialPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [faqType, setFaqType] = useState('newConstruction');
  const residentialTestimonials = testimonials.filter(t => t.type === 'residential');

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      {/* Hero */}
      <section style={{ padding: '80px 5%', background: 'linear-gradient(145deg, #1C2B39 0%, #243342 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '16px' }}>YOUR VISION, OUR CRAFTSMANSHIP</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#FFFFFF', marginBottom: '20px' }}>Residential Mastery</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>For families seeking dream homes or remodels—personalized builds at half the cost of mega-communities, with direct Mike access and tech for superior quality.</p>
          
          {/* Quick Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '50px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, color: '#6B8E73' }}>200+</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>Homes Completed</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, color: '#6B8E73' }}>98%</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>Budget Adherence</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, color: '#6B8E73' }}>50%</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>Lower Overhead</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      <section id="new-construction" style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>NEW CONSTRUCTION</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '24px' }}>Build Your Dream Home</h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>Custom homes built to your vision—not cookie-cutter designs. Direct access to Mike Blem means your home reflects exactly what you want, with storm-resilient designs engineered for Florida's climate.</p>
              
              {/* Benefits List */}
              <div style={{ marginBottom: '32px' }}>
                {residentialBenefits.newConstruction.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#6B8E73', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '14px' }}>✓</span>
                    </div>
                    <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ backgroundColor: '#F8F6F3', padding: '40px', borderRadius: '16px', borderLeft: '4px solid #6B8E73' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏡</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Custom Homes</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>From ground-up builds to complete renovations. Storm-resistant designs engineered for Florida's climate, premium finishes throughout, and personalized craftsmanship.</p>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>200+ Homes Completed</div>
            </div>
          </div>
          
          {/* Factoid Box */}
          <div style={{ marginTop: '50px', background: 'linear-gradient(135deg, #1C2B39 0%, #243342 100%)', padding: '28px 32px', borderRadius: '12px', borderLeft: '4px solid #6B8E73', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '32px' }}>💡</div>
            <div>
              <p style={{ fontSize: '18px', color: '#FFFFFF', fontWeight: 500, margin: 0 }}>Like charter schools vs. public—better value, double the quality.</p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: '8px 0 0 0' }}>No mega-builder overhead means superior materials at comparable prices, with direct access to the decision-maker on every detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Section */}
      <section id="remodeling" style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', borderLeft: '4px solid #6B8E73' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔨</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Remodels & Restoration</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Transform existing spaces with thoughtful renovations. Rapid-response storm damage restoration with insurance coordination, seamless execution, and quality that exceeds the original.</p>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>100+ Renovations</div>
            </div>
            
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>REMODELING & ADDITIONS</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '24px' }}>Transform Your Space</h2>
              <p style={{ fontSize: '16px', color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>Whether updating a kitchen, adding a room, or restoring storm damage, our experienced team delivers quality renovations that increase your home's value and livability.</p>
              
              {/* Benefits List */}
              <div>
                {residentialBenefits.remodeling.map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#6B8E73', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
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

      {/* Top 10 Reasons Infographic */}
      <section style={{ padding: '80px 5%', backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px', textAlign: 'center' }}>Top 10 Reasons to Choose Blem</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '50px' }}>Why local, personalized builds beat mega-developer communities</p>
          
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { num: '01', title: 'Customization', desc: 'Tailored to your exact needs and vision' },
              { num: '02', title: 'Energy Efficiency', desc: 'Modern systems for lower utility costs' },
              { num: '03', title: 'Storm Resilience', desc: 'Built to withstand Florida weather' },
              { num: '04', title: 'Direct Access', desc: 'Talk to Mike, not a call center' },
              { num: '05', title: 'Lower Overhead', desc: 'No corporate bureaucracy costs' },
              { num: '06', title: 'Quality Materials', desc: 'Premium finishes standard' },
              { num: '07', title: 'Budget Control', desc: '98% on-budget track record' },
              { num: '08', title: 'Timeline Accuracy', desc: '95% on-time completion' },
              { num: '09', title: 'Warranty Backed', desc: 'Comprehensive protection included' },
              { num: '10', title: 'Local Legacy', desc: '40+ years serving SW Florida' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px 24px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '24px', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, color: '#6B8E73' }}>{item.num}</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Residential Projects</h2>
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
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '40px', textAlign: 'center' }}>Homeowner Testimonials</h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {residentialTestimonials.slice(0, 2).map((t, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '16px', borderLeft: '4px solid #6B8E73' }}>
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
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#1C2B39', marginBottom: '24px', textAlign: 'center' }}>Residential FAQ</h2>
          
          {/* FAQ Type Toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            <button 
              onClick={() => { setFaqType('newConstruction'); setOpenFaq(null); }}
              style={{ padding: '14px 28px', backgroundColor: faqType === 'newConstruction' ? '#6B8E73' : '#FFFFFF', color: faqType === 'newConstruction' ? '#FFFFFF' : '#1C2B39', border: faqType === 'newConstruction' ? 'none' : '1px solid #E5E7EB', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
            >
              New Construction
            </button>
            <button 
              onClick={() => { setFaqType('remodeling'); setOpenFaq(null); }}
              style={{ padding: '14px 28px', backgroundColor: faqType === 'remodeling' ? '#6B8E73' : '#FFFFFF', color: faqType === 'remodeling' ? '#FFFFFF' : '#1C2B39', border: faqType === 'remodeling' ? 'none' : '1px solid #E5E7EB', borderRadius: '8px', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
            >
              Remodeling
            </button>
          </div>
          
          <div style={{ borderTop: '1px solid #E5E7EB' }}>
            {faqData.residential[faqType].map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontSize: '18px', fontWeight: 500, color: '#1C2B39', textAlign: 'left' }}
                >
                  {faq.question}
                  <span style={{ fontSize: '24px', color: '#6B8E73', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>+</span>
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
      <section style={{ padding: '80px 5%', backgroundColor: '#6B8E73' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Build Your Dream Home</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Whether building new or renovating, let's discuss how we can bring your vision to life with quality craftsmanship and personalized service.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '20px 50px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Get Your Free Residential Quote</Link>
        </div>
      </section>
    </div>
  );
}
