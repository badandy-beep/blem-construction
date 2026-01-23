/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import { resources } from '@/lib/data';

export const metadata = { title: 'Industry Resources | Michael Blem Construction', description: 'Construction industry resources for Florida builders and homeowners.' };

export default function ResourcesPage() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Industry Resources</h1>
          <p style={{ fontSize: '18px', color: '#4A5568' }}>Helpful resources for commercial and residential construction in Florida.</p>
        </div>
      </section>

      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#1C2B39', marginBottom: '32px', borderBottom: '3px solid #64748B', paddingBottom: '16px' }}>Commercial Resources</h2>
              {resources.commercial.map((r, i) => (
                <div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #F8F6F3' }}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: '#1C2B39', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '6px' }}>{r.name} →</a>
                  <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{r.description}</p>
                  <span style={{ fontSize: '11px', color: '#64748B', fontFamily: "'Montserrat', sans-serif" }}>{r.scope}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#1C2B39', marginBottom: '32px', borderBottom: '3px solid #6B8E73', paddingBottom: '16px' }}>Residential Resources</h2>
              {resources.residential.map((r, i) => (
                <div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #F8F6F3' }}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: '#1C2B39', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '6px' }}>{r.name} →</a>
                  <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{r.description}</p>
                  <span style={{ fontSize: '11px', color: '#6B8E73', fontFamily: "'Montserrat', sans-serif" }}>{r.scope}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 600, color: '#1C2B39', marginBottom: '32px', textAlign: 'center' }}>General Resources</h2>
          {resources.general.map((r, i) => (
            <div key={i} style={{ marginBottom: '20px', padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: '#1C2B39', textDecoration: 'none', fontWeight: 500 }}>{r.name} →</a>
              <p style={{ fontSize: '14px', color: '#4A5568', margin: '8px 0 0 0' }}>{r.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
