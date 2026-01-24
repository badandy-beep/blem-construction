'use client';
import { useState } from 'react';
import { useResponsive } from '@/lib/useResponsive';
import SocialIcons from '@/components/SocialIcons';

export default function ContactPage() {
  const { rs } = useResponsive();
  const [projectType, setProjectType] = useState('Custom Home Build');
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', paddingTop: rs('120px', '100px') }}>
      <section style={{ padding: rs('60px 5%', '40px 16px'), backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('52px', '32px'), fontWeight: 600, marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: rs('18px', '15px'), color: '#4A5568' }}>Ready to build your legacy? Schedule a free consultation with Mike today.</p>
        </div>
      </section>
      <section style={{ padding: rs('80px 5%', '50px 16px'), backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: rs('80px', '40px') }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('32px', '26px'), fontWeight: 600, marginBottom: '32px' }}>Get In Touch</h2>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Phone</div>
                <a href="tel:9417772536" style={{ fontSize: rs('36px', '28px'), color: '#1C2B39', textDecoration: 'none', fontFamily: "'Playfair Display', Georgia, serif", display: 'block' }}>(941) 777-BLEM</a>
                <div style={{ fontSize: '15px', color: '#4A5568', marginTop: '6px' }}>(941) 777-2536</div>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                <a href="mailto:mike@blemconstruction.com" style={{ fontSize: rs('20px', '16px'), color: '#1C2B39', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, wordBreak: 'break-all' }}>mike@blemconstruction.com</a>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#B8860B', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Location</div>
                <div style={{ fontSize: '17px', color: '#4A5568' }}>Nokomis, FL 34275</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '4px' }}>Serving all of Southwest Florida</div>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#B8860B', marginBottom: '16px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>Follow Us</div>
                <SocialIcons size={28} />
              </div>
              <div style={{ display: 'flex', gap: rs('32px', '20px'), marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #E5E7EB', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', marginBottom: '6px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>General Contractor</div>
                  <div style={{ fontSize: '16px', color: '#1C2B39', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>CGC 1508400</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '2px', color: '#B8860B', marginBottom: '6px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Building Contractor</div>
                  <div style={{ fontSize: '16px', color: '#1C2B39', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>CBC 047796</div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: '#F8F6F3', padding: rs('48px', '24px'), borderRadius: '16px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: rs('24px', '20px'), fontWeight: 600, marginBottom: '32px' }}>Request a Quote</h3>
              <form>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: '#1C2B39', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600 }}>Name *</label>
                  <input type="text" required placeholder="Your Name" style={{ width: '100%', padding: rs('18px', '14px'), border: '1px solid #E5E7EB', fontSize: '16px', fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', borderRadius: '8px' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: rs('1fr 1fr', '1fr'), gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: '#1C2B39', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600 }}>Email *</label>
                    <input type="email" required placeholder="Email" style={{ width: '100%', padding: rs('18px', '14px'), border: '1px solid #E5E7EB', fontSize: '16px', fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', borderRadius: '8px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: '#1C2B39', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600 }}>Phone</label>
                    <input type="tel" placeholder="Phone" style={{ width: '100%', padding: rs('18px', '14px'), border: '1px solid #E5E7EB', fontSize: '16px', fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', borderRadius: '8px' }} />
                  </div>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: '#1C2B39', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600 }}>Project Type *</label>
                  <select value={projectType} onChange={(e) => setProjectType(e.target.value)} style={{ width: '100%', padding: rs('18px', '14px'), border: '1px solid #E5E7EB', fontSize: '16px', fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', borderRadius: '8px' }}>
                    <option>Custom Home Build</option><option>Home Remodel / Addition</option><option>Commercial New Construction</option><option>Commercial Retrofit</option><option>Storm / Fire Damage</option><option>General Inquiry</option><option>Career Inquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: '#1C2B39', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600 }}>Project Details *</label>
                  <textarea required rows="4" placeholder="Tell us about your project..." style={{ width: '100%', padding: rs('18px', '14px'), border: '1px solid #E5E7EB', fontSize: '16px', fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', resize: 'vertical', borderRadius: '8px' }} />
                </div>
                <button type="submit" style={{ width: '100%', backgroundColor: '#1C2B39', color: '#FFFFFF', padding: rs('20px 32px', '16px 24px'), border: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Request Free Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
