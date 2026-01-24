'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useResponsive } from '@/lib/useResponsive';
import { projects, commercialBenefits, faqData } from '@/lib/data';

export default function CommercialPage() {
  const { rs, isMobile } = useResponsive();
  const [openFaq, setOpenFaq] = useState(null);
  const allCommercial = [...projects.hotel, ...projects.municipal, ...projects.commercial];
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('80px 5%', '50px 16px'), background: 'linear-gradient(145deg, #1C2B39 0%, #243342 100%)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#64748B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '16px' }}>BUILT TO PERFORM</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '20px' }}>Commercial & Industrial Excellence</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>ROI-focused builds for industrial, commercial, and municipal clients. Save 15-20% with our tech-driven approach.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: rs('60px', '24px'), marginTop: '50px', flexWrap: 'wrap' }}>
            {[{ num: '$500M+', label: 'Value Delivered' }, { num: '95%', label: 'On-Time Delivery' }, { num: '20-30%', label: 'Cost Savings' }].map((stat, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('42px', '28px'), fontWeight: 600, color: '#D4A012' }}>{stat.num}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="new-construction" style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('60px', '30px'), alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#64748B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>NEW CONSTRUCTION</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, marginTop: '12px', marginBottom: '24px' }}>Build From the Ground Up</h2>
              <p style={{ fontSize: rs('16px', '14px'), color: '#4A5568', lineHeight: 1.8, marginBottom: '32px' }}>Hotels, medical facilities, and municipal infrastructure with precision, compliance, and value engineering.</p>
              <div style={{ marginBottom: '32px' }}>
                {commercialBenefits.newConstruction.slice(0, 4).map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#64748B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <span style={{ color: '#FFFFFF', fontSize: '14px' }}>✓</span>
                    </div>
                    <p style={{ fontSize: rs('15px', '13px'), color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: '#F8F6F3', padding: rs('40px', '24px'), borderRadius: '16px', borderLeft: '4px solid #64748B' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏢</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('24px', '20px'), fontWeight: 600, marginBottom: '16px' }}>Commercial & Medical</h3>
              <p style={{ fontSize: rs('15px', '14px'), lineHeight: 1.75, color: '#4A5568', marginBottom: '20px' }}>Office buildings, medical facilities, hotels, and retail spaces with complete regulatory compliance.</p>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>$500M+ Managed</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, marginBottom: '40px', textAlign: 'center' }}>Commercial Projects Portfolio</h2>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {allCommercial.map((p, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>{p.name}</div>
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
              {allCommercial.map((p, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 120px', padding: '20px 32px', borderBottom: '1px solid #F8F6F3', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8F6F3' }}>
                  <div style={{ fontSize: '15px', fontWeight: 500 }}>{p.name}</div>
                  <div style={{ fontSize: '14px', color: '#4A5568' }}>{p.location}</div>
                  <div style={{ fontSize: '15px', color: '#B8860B', textAlign: 'right', fontWeight: 600 }}>{p.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, marginBottom: '40px', textAlign: 'center' }}>Commercial FAQ</h2>
          <div style={{ borderTop: '1px solid #E5E7EB' }}>
            {faqData.commercial.general.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: rs('24px 0', '20px 0'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontSize: rs('18px', '15px'), fontWeight: 500, color: '#1C2B39', textAlign: 'left', gap: '16px' }}>
                  <span>{faq.question}</span>
                  <span style={{ fontSize: '24px', color: '#B8860B', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && <div style={{ padding: '0 0 24px 0', fontSize: rs('16px', '14px'), lineHeight: 1.8, color: '#4A5568' }}>{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#64748B' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('36px', '26px'), fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>Discuss Your Commercial Project</h2>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: '16px 32px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Inquire About Commercial Partnerships</Link>
        </div>
      </section>
    </div>
  );
}
