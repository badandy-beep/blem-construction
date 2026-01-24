'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LogoMonogram } from '@/components/Logo';
import { stats, testimonials, innovations, manifesto, featured, comparisonData } from '@/lib/data';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const rs = (desktop, mobile) => isMobile ? mobile : desktop;

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', overflowX: 'hidden' }}>
      
      {/* HERO SECTION */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: rs('160px 5% 100px', '120px 16px 60px'), position: 'relative', backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(145deg, rgba(28,43,57,0.92) 0%, rgba(28,43,57,0.8) 50%, rgba(28,43,57,0.75) 100%)' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: rs('16px', '12px'), marginBottom: rs('28px', '20px') }}>
            <div style={{ width: rs('60px', '40px'), height: '2px', backgroundColor: '#B8860B' }} />
            <span style={{ fontSize: rs('13px', '11px'), letterSpacing: rs('4px', '3px'), color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Since 1987</span>
          </div>
          
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('56px', '32px'), fontWeight: 600, color: '#FFFFFF', marginBottom: rs('24px', '16px'), lineHeight: 1.15, maxWidth: '850px' }}>
            Michael Blem Construction: Crafting Legacies with Precision and Integrity
          </h1>
          
          <p style={{ fontSize: rs('20px', '16px'), color: 'rgba(255,255,255,0.9)', maxWidth: '700px', marginBottom: rs('32px', '24px'), lineHeight: 1.8, fontWeight: 300 }}>
            Third-generation master builder in Southwest Florida delivering custom excellence in residential, commercial, and municipal projects. <strong style={{ color: '#D4A012' }}>Zero claims in 40 years</strong>—AI innovation meets personal accountability.
          </p>
          
          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(4, 1fr)', 'repeat(2, 1fr)'), gap: rs('24px', '16px'), marginBottom: rs('40px', '30px'), maxWidth: rs('600px', '100%') }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '24px'), fontWeight: 600, color: '#D4A012' }}>{s.number}</div>
                <div style={{ fontSize: rs('11px', '10px'), letterSpacing: '1px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: rs('14px', '12px'), color: '#D4A012', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginBottom: '16px', letterSpacing: '1px' }}>CHOOSE YOUR PATH:</p>
            <div style={{ display: 'flex', gap: rs('16px', '12px'), flexWrap: 'wrap' }}>
              <Link href="/commercial" style={{ backgroundColor: '#64748B', color: '#FFFFFF', padding: rs('18px 32px', '14px 20px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: rs('13px', '12px'), letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', flex: isMobile ? '1' : 'none', justifyContent: 'center' }}>
                <span style={{ fontSize: '20px' }}>🏢</span> Commercial
              </Link>
              <Link href="/residential" style={{ backgroundColor: '#6B8E73', color: '#FFFFFF', padding: rs('18px 32px', '14px 20px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: rs('13px', '12px'), letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', flex: isMobile ? '1' : 'none', justifyContent: 'center' }}>
                <span style={{ fontSize: '20px' }}>🏡</span> Residential
              </Link>
            </div>
          </div>
          
          {/* License Info - Desktop only */}
          <div style={{ display: rs('flex', 'none'), gap: '40px', marginTop: '40px' }}>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '20px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif" }}>GENERAL CONTRACTOR</div>
              <div style={{ fontSize: '16px', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginTop: '4px' }}>CGC 1508400</div>
            </div>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '20px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontFamily: "'Montserrat', sans-serif" }}>BUILDING CONTRACTOR</div>
              <div style={{ fontSize: '16px', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginTop: '4px' }}>CBC 047796</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BLEM - COMPARISON TABLE */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>The Blem Difference</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginTop: '16px', marginBottom: '16px' }}>Why Choose Michael Blem Construction?</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>Like a personal doctor vs. big hospital—better results at lower costs.</p>
          </div>
          
          {/* Mobile-Friendly Comparison */}
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
              {comparisonData.map((row, i) => (
                <div key={i} style={{ backgroundColor: '#F8F6F3', borderRadius: '12px', padding: '16px', border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C2B39', marginBottom: '12px', borderBottom: '2px solid #B8860B', paddingBottom: '8px' }}>{row.aspect}</div>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '10px', color: '#6B7280', fontFamily: "'Montserrat', sans-serif", letterSpacing: '1px', marginBottom: '4px' }}>MEGA-BUILDERS</div>
                    <div style={{ fontSize: '14px', color: '#6B7280' }}>{row.megaBuilders}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", letterSpacing: '1px', marginBottom: '4px' }}>MICHAEL BLEM</div>
                    <div style={{ fontSize: '14px', color: '#1C2B39', fontWeight: 500 }}>{row.blem}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.1)', marginBottom: '40px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '18px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'left', width: '20%' }}>Aspect</th>
                    <th style={{ backgroundColor: '#4A5568', color: '#FFFFFF', padding: '18px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'left', width: '40%' }}>Mega-Builders</th>
                    <th style={{ backgroundColor: '#B8860B', color: '#FFFFFF', padding: '18px 24px', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'left', width: '40%' }}>Michael Blem</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                      <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: '#1C2B39', borderBottom: '1px solid #E5E7EB' }}>{row.aspect}</td>
                      <td style={{ padding: '16px 24px', fontSize: '14px', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>{row.megaBuilders}</td>
                      <td style={{ padding: '16px 24px', fontSize: '14px', color: '#1C2B39', fontWeight: 500, borderBottom: '1px solid #E5E7EB' }}>{row.blem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Factoid Box */}
          <div style={{ background: 'linear-gradient(135deg, #1C2B39 0%, #243342 100%)', padding: rs('28px 32px', '20px 16px'), borderRadius: '12px', borderLeft: '4px solid #D4A012', display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: rs('20px', '12px'), flexDirection: isMobile ? 'column' : 'row' }}>
            <div style={{ fontSize: '32px' }}>💡</div>
            <div>
              <p style={{ fontSize: rs('18px', '16px'), color: '#FFFFFF', fontWeight: 500, margin: 0 }}>"Half the Cost, Double the Quality"</p>
              <p style={{ fontSize: rs('14px', '13px'), color: 'rgba(255,255,255,0.7)', margin: '8px 0 0 0' }}>Better value through personalized attention and lean operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('60px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Our Expertise</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>Excellence in every structure, tailored to your specific needs</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('40px', '24px') }}>
            <Link href="/commercial" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: rs('50px', '24px'), borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(28,43,57,0.08)', borderTop: '4px solid #64748B' }}>
                <div style={{ width: rs('80px', '60px'), height: rs('80px', '60px'), backgroundColor: '#64748B', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <span style={{ fontSize: rs('40px', '30px') }}>🏢</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>Commercial / Industrial</h3>
                <p style={{ fontSize: rs('14px', '12px'), color: '#64748B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '1px', marginBottom: '16px' }}>BUILT TO PERFORM</p>
                <p style={{ fontSize: rs('16px', '14px'), lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>ROI-focused builds for industrial, commercial, and municipal clients. 95% on-time delivery, 20-30% cost savings via AI/BIM.</p>
                <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Explore Commercial Services →</div>
              </div>
            </Link>

            <Link href="/residential" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: rs('50px', '24px'), borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 8px 40px rgba(28,43,57,0.08)', borderTop: '4px solid #6B8E73' }}>
                <div style={{ width: rs('80px', '60px'), height: rs('80px', '60px'), backgroundColor: '#6B8E73', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <span style={{ fontSize: rs('40px', '30px') }}>🏡</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('28px', '22px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>Residential</h3>
                <p style={{ fontSize: rs('14px', '12px'), color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '1px', marginBottom: '16px' }}>YOUR VISION, OUR CRAFTSMANSHIP</p>
                <p style={{ fontSize: rs('16px', '14px'), lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Personalized builds at half the cost of mega-communities. Storm-resilient designs, direct Mike access.</p>
                <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Explore Residential Services →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Technology & Innovation</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>Modern methods delivering 20-30% cost savings without compromising quality</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(4, 1fr)', 'repeat(2, 1fr)'), gap: rs('24px', '16px') }}>
            {innovations.map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: rs('36px', '20px'), textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                <div style={{ fontSize: rs('44px', '32px'), marginBottom: rs('20px', '12px') }}>{item.icon}</div>
                <h3 style={{ fontSize: rs('17px', '14px'), fontWeight: 600, color: '#FFFFFF', marginBottom: rs('14px', '8px'), fontFamily: "'Montserrat', sans-serif" }}>{item.name}</h3>
                <p style={{ fontSize: rs('14px', '12px'), color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '16px', display: isMobile ? 'none' : 'block' }}>{item.description}</p>
                <div style={{ fontSize: rs('13px', '12px'), color: '#D4A012', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{item.savings} Savings</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: rs('50px', '30px'), textAlign: 'center', padding: rs('32px', '20px 16px'), background: 'rgba(212, 160, 18, 0.1)', borderRadius: '12px', border: '1px solid rgba(212, 160, 18, 0.3)' }}>
            <p style={{ fontSize: rs('20px', '14px'), color: '#FFFFFF', fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ color: '#D4A012', fontWeight: 700 }}>Save 20-30%</span> with AI + <span style={{ color: '#D4A012', fontWeight: 700 }}>15% More</span> with Direct Access = <span style={{ color: '#D4A012', fontWeight: 700 }}>35% Total Savings</span>
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginBottom: '16px' }}>Featured Projects</h2>
            <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568', maxWidth: '600px', margin: '0 auto' }}>$500M+ in project value delivered across Southwest Florida</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(3, 1fr)', '1fr'), gap: rs('28px', '20px') }}>
            {featured.slice(0, 3).map((p, i) => (
              <div key={i} style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,43,57,0.08)' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: rs('220px', '180px'), objectFit: 'cover' }} />
                <div style={{ padding: rs('28px', '20px') }}>
                  <div style={{ fontSize: '11px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{p.type} • {p.value}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('20px', '18px'), color: '#1C2B39', fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: rs('50px', '30px') }}>
            <Link href="/projects" style={{ backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('18px 40px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 600, textTransform: 'uppercase', borderRadius: '8px', display: 'inline-block' }}>View All Projects</Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: rs('50px', '30px') }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Innovative Builds Rooted in Tradition</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#1C2B39', marginTop: '16px' }}>Our Commitment to Excellence</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: rs('repeat(3, 1fr)', '1fr'), gap: rs('24px', '16px') }}>
            {manifesto.slice(0, 6).map((item, i) => (
              <div key={i} style={{ padding: rs('32px', '20px'), backgroundColor: '#F8F6F3', borderLeft: '3px solid #B8860B', borderRadius: '0 16px 16px 0' }}>
                <div style={{ fontSize: '12px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, marginBottom: '12px' }}>0{i + 1}</div>
                <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('18px', '16px'), fontWeight: 600, color: '#1C2B39', marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ fontSize: rs('15px', '14px'), color: '#4A5568', lineHeight: 1.7 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: rs('100px 5%', '60px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#1C2B39', marginBottom: rs('50px', '30px') }}>Client Voices</h2>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('26px', '18px'), color: '#1C2B39', lineHeight: 1.6, marginBottom: rs('40px', '24px'), fontStyle: 'italic', padding: rs('0', '0 8px') }}>"{testimonials[activeTestimonial].quote}"</div>
          <div style={{ fontSize: rs('18px', '16px'), color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{testimonials[activeTestimonial].author}</div>
          <div style={{ fontSize: '14px', color: '#4A5568', marginTop: '6px' }}>{testimonials[activeTestimonial].project}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: rs('40px', '24px') }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: '14px', height: '14px', borderRadius: '50%', border: 'none', backgroundColor: i === activeTestimonial ? '#B8860B' : '#E5E7EB', cursor: 'pointer', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label={`View testimonial ${i + 1}`}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: i === activeTestimonial ? '#B8860B' : '#D1D5DB', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#B8860B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Ready to Build Your Legacy?</h2>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.9)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>Let's discuss your vision. Schedule a free consultation with Mike today.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('20px 50px', '16px 32px'), textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: rs('3px', '2px'), fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Get a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
