import { colors, resources } from '@/lib/data';

export const metadata = { title: 'Industry Resources | Michael Blem Construction', description: 'Construction industry resources for Florida builders.' };

export default function ResourcesPage() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: colors.background, color: colors.text, paddingTop: '120px' }}>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '400', color: colors.primary, marginBottom: '20px' }}>Industry Resources</h1>
        </div>
      </section>
      <section style={{ padding: '80px 5%', backgroundColor: colors.background }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '32px', borderBottom: '3px solid ' + colors.accent, paddingBottom: '16px' }}>Commercial Resources</h2>
              {resources.commercial.map((r, i) => (<div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid ' + colors.lightGray }}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: colors.primary, textDecoration: 'none', fontWeight: '500', display: 'block', marginBottom: '6px' }}>{r.name} →</a><p style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300', margin: 0 }}>{r.description}</p><span style={{ fontSize: '11px', color: colors.accent, fontFamily: "'Montserrat', sans-serif" }}>{r.scope}</span></div>))}
            </div>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '400', color: colors.primary, marginBottom: '32px', borderBottom: '3px solid ' + colors.accent, paddingBottom: '16px' }}>Residential Resources</h2>
              {resources.residential.map((r, i) => (<div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid ' + colors.lightGray }}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: colors.primary, textDecoration: 'none', fontWeight: '500', display: 'block', marginBottom: '6px' }}>{r.name} →</a><p style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300', margin: 0 }}>{r.description}</p><span style={{ fontSize: '11px', color: colors.accent, fontFamily: "'Montserrat', sans-serif" }}>{r.scope}</span></div>))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '60px 5%', backgroundColor: colors.lightGray }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '400', color: colors.primary, marginBottom: '32px', textAlign: 'center' }}>General Resources</h2>
          {resources.general.map((r, i) => (<div key={i} style={{ marginBottom: '20px', padding: '24px', backgroundColor: colors.background, border: '1px solid ' + colors.mediumGray }}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: colors.primary, textDecoration: 'none', fontWeight: '500' }}>{r.name} →</a><p style={{ fontSize: '14px', color: colors.textLight, fontFamily: "'Montserrat', sans-serif", fontWeight: '300', margin: '8px 0 0 0' }}>{r.description}</p></div>))}
        </div>
      </section>
    </div>
  );
}
