'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { useState } from 'react';
import { LogoMonogram } from '@/components/Logo';

export default function ClientAccessPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'blem2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return (
      <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#1C2B39', color: '#FFFFFF', minHeight: '100vh', paddingTop: '120px' }}>
        <section style={{ padding: '80px 5%' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <LogoMonogram size={80} variant="primary" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ fontSize: '14px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>🔓 Secure Client Portal</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '42px', fontWeight: 600, marginBottom: '24px' }}>Welcome to Your Project Portal</h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px' }}>Direct, secure access—streamlining communication for lower costs.</p>
            
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>📐</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Blueprints</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Access project drawings</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>📝</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Documents</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Contracts and specs</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>Progress</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Track milestones</p>
              </div>
            </div>
            
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Need assistance? Contact us at <a href="mailto:mike@blemconstruction.com" style={{ color: '#B8860B' }}>mike@blemconstruction.com</a></p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#1C2B39', color: '#FFFFFF', minHeight: '100vh', paddingTop: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '450px', width: '100%', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <LogoMonogram size={70} variant="primary" />
          </div>
          <span style={{ fontSize: '12px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>🔒 Secure Area</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, marginTop: '12px', marginBottom: '12px' }}>Client Portal</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>Enter your project password to access documents.</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          {error && (
            <div style={{ backgroundColor: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)', padding: '12px 16px', borderRadius: '8px', marginBottom: '24px', fontSize: '14px', color: '#FCA5A5' }}>
              {error}
            </div>
          )}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: '11px', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600 }}>Project Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ width: '100%', padding: '18px', border: '1px solid rgba(255,255,255,0.2)', fontSize: '16px', fontFamily: "'Outfit', sans-serif", backgroundColor: 'rgba(255,255,255,0.05)', color: '#FFFFFF', outline: 'none', boxSizing: 'border-box', borderRadius: '8px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '18px 32px', border: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Access Portal</button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
          Don't have a password? Contact us at <a href="tel:9417772536" style={{ color: '#B8860B' }}>(941) 777-BLEM</a>
        </p>
      </div>
    </div>
  );
}
