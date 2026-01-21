'use client';
import { useState } from 'react';
import { colors } from '@/lib/data';

export default function ContactPage() {
  const [projectType, setProjectType] = useState('Custom Home Build');

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text, paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: '18px', color: colors.textLight, maxWidth: '600px', margin: '0 auto', fontFamily: "'Montserrat', sans-serif", fontWeight: '300' }}>Ready to build? Contact us for a consultation.</p>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '32px' }}>Get In Touch</h2>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: colors.accent, marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: '600' }}>Phone</div>
                <a href="tel:9417772536" style={{ fontSize: '36px', color: colors.primary, textDecoration: 'none' }}>(941) 777-BLEM</a>
                <div style={{ fontSize: '15px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", marginTop: '6px' }}>(941) 777-2536</div>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: colors.accent, marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: '600' }}>Email</div>
                <a href="mailto:mike@blemconstruction.com" style={{ fontSize: '20px', color: colors.primary, textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontWeight: '500' }}>mike@blemconstruction.com</a>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: colors.accent, marginBottom: '10px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: '600' }}>Location</div>
                <div style={{ fontSize: '17px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif" }}>Nokomis, FL 34275</div>
              </div>
              <div style={{ display: 'flex', gap: '32px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid ' + colors.mediumGray }}>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '2px', color: colors.accent, marginBottom: '6px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>General Contractor</div>
                  <div style={{ fontSize: '16px', color: colors.primary, fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>CGC 1508400</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '2px', color: colors.accent, marginBottom: '6px', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}>Building Contractor</div>
                  <div style={{ fontSize: '16px', color: colors.primary, fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>CBC 047796</div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: colors.lightGray, padding: '48px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '400', color: colors.primary, marginBottom: '32px' }}>Request a Quote</h3>
              <form>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: colors.text, marginBottom: '10px', textTransform: 'uppercase', fontWeight: '600' }}>Name *</label>
                  <input type="text" required placeholder="Your Name" style={{ width: '100%', padding: '18px', border: '1px solid ' + colors.mediumGray, fontSize: '16px', fontFamily: "'Montserrat', sans-serif", backgroundColor: colors.background, outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: colors.text, marginBottom: '10px', textTransform: 'uppercase', fontWeight: '600' }}>Email *</label>
                    <input type="email" required placeholder="Email" style={{ width: '100%', padding: '18px', border: '1px solid ' + colors.mediumGray, fontSize: '16px', fontFamily: "'Montserrat', sans-serif", backgroundColor: colors.background, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: colors.text, marginBottom: '10px', textTransform: 'uppercase', fontWeight: '600' }}>Phone</label>
                    <input type="tel" placeholder="Phone" style={{ width: '100%', padding: '18px', border: '1px solid ' + colors.mediumGray, fontSize: '16px', fontFamily: "'Montserrat', sans-serif", backgroundColor: colors.background, outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: colors.text, marginBottom: '10px', textTransform: 'uppercase', fontWeight: '600' }}>Project Type *</label>
                  <select value={projectType} onChange={(e) => setProjectType(e.target.value)} style={{ width: '100%', padding: '18px', border: '1px solid ' + colors.mediumGray, fontSize: '16px', fontFamily: "'Montserrat', sans-serif", backgroundColor: colors.background, outline: 'none', boxSizing: 'border-box' }}>
                    <option>Custom Home Build</option>
                    <option>Home Remodel / Addition</option>
                    <option>Commercial Build-Out</option>
                    <option>Medical / Professional Office</option>
                    <option>Storm / Fire Damage</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: colors.text, marginBottom: '10px', textTransform: 'uppercase', fontWeight: '600' }}>Details *</label>
                  <textarea required rows="4" placeholder="Tell us about your project..." style={{ width: '100%', padding: '18px', border: '1px solid ' + colors.mediumGray, fontSize: '16px', fontFamily: "'Montserrat', sans-serif", backgroundColor: colors.background, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" style={{ width: '100%', backgroundColor: colors.primary, color: '#FFF', padding: '20px 32px', border: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '3px', cursor: 'pointer', fontWeight: '700', textTransform: 'uppercase' }}>Request Free Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
