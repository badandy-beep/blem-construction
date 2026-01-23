'use client';
/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */
import Link from 'next/link';

const companyDownloads = [
  {
    name: "Michael Blem Resume",
    description: "Detailed professional background, credentials, CGC/CBC licenses, and 40+ year career timeline.",
    type: "PDF",
    size: "241 KB",
    icon: "📄",
    file: "/downloads/MBC-MichaelBlem-Resume.pdf",
    available: true
  },
  {
    name: "Company Overview Deck",
    description: "Comprehensive presentation featuring our capabilities, portfolio highlights, and approach.",
    type: "PDF",
    size: "4.2 MB",
    icon: "📊",
    file: null,
    available: false
  },
  {
    name: "Services Brochure",
    description: "Overview of commercial and residential services with project examples.",
    type: "PDF",
    size: "3.5 MB",
    icon: "📋",
    file: null,
    available: false
  }
];

const floridaBuildingCodes = [
  {
    name: "Florida Building Code - Building (Commercial)",
    description: "8th Edition (2023) - Complete commercial building code for offices, hotels, medical facilities, and industrial structures.",
    url: "https://codes.iccsafe.org/content/FLBC2023P1",
    icon: "🏢",
    tag: "Commercial"
  },
  {
    name: "Florida Building Code - Residential",
    description: "8th Edition (2023) - Complete residential building code for single-family homes, townhouses, and duplexes.",
    url: "https://codes.iccsafe.org/content/FLRC2023P1",
    icon: "🏡",
    tag: "Residential"
  },
  {
    name: "Florida Building Code Portal",
    description: "Official Florida Building Commission hub with all code volumes, amendments, and declaratory statements.",
    url: "https://www.floridabuilding.org/bc/bc_default.aspx",
    icon: "📚",
    tag: "All Codes"
  },
  {
    name: "Florida Codes Library (UpCodes)",
    description: "Easy-to-navigate library of all Florida codes including plumbing, electrical, mechanical, and fire.",
    url: "https://up.codes/codes/florida",
    icon: "🔍",
    tag: "All Codes"
  }
];

const sarasotaResources = [
  {
    name: "Sarasota County Building Division",
    description: "Official building department - permits, inspections, contractor licensing, and flood zone information.",
    url: "https://www.scgov.net/government/planning-and-development-services/building",
    icon: "🏛️"
  },
  {
    name: "Sarasota County Online Permitting",
    description: "Digital plan room for electronic permit applications, plan submissions, and inspection scheduling.",
    url: "https://www.scgov.net/government/planning-and-development-services/online-permitting",
    icon: "💻"
  },
  {
    name: "Sarasota County Permit Search",
    description: "Search existing permits by address, parcel ID, or permit number.",
    url: "https://building.scgov.net/",
    icon: "🔎"
  },
  {
    name: "Sarasota County Code of Ordinances",
    description: "Complete local ordinances including zoning, land development, and building regulations.",
    url: "https://library.municode.com/fl/sarasota_county/codes/code_of_ordinances",
    icon: "📖"
  },
  {
    name: "Planning & Development Services",
    description: "Zoning, environmental permits, impact fees, and development review information.",
    url: "https://www.scgov.net/government/planning-and-development-services",
    icon: "📐"
  }
];

const femaResources = [
  {
    name: "Wind Retrofit Guide for Residential Buildings",
    description: "FEMA P-804 - Comprehensive guide for retrofitting homes to resist hurricane winds. Covers roofs, openings, connections.",
    url: "https://www.fema.gov/sites/default/files/documents/fema_rsl_fema-p-804-wind-retrofit-guide_042025.pdf",
    icon: "🌀",
    type: "PDF"
  },
  {
    name: "Homeowner's Guide to Retrofitting (Flood)",
    description: "FEMA P-312 - Six ways to protect your home from flooding including elevation, barriers, and floodproofing.",
    url: "https://www.fema.gov/sites/default/files/2020-07/fema_homeowners-guide-to-retrofitting_guide.pdf",
    icon: "🌊",
    type: "PDF"
  },
  {
    name: "Building Codes Toolkit for Homeowners",
    description: "Plain-language guide explaining why building codes matter and how they protect your investment.",
    url: "https://www.fema.gov/sites/default/files/documents/fema_building-codes-basics.pdf",
    icon: "🛠️",
    type: "PDF"
  },
  {
    name: "FEMA Building Science Publications",
    description: "Complete library of FEMA guides for hurricane, flood, and wind mitigation.",
    url: "https://www.fema.gov/emergency-managers/risk-management/building-science",
    icon: "📚",
    type: "Website"
  }
];

const contractorResources = [
  {
    name: "Florida DBPR License Verification",
    description: "Verify any Florida contractor's license status, disciplinary history, and insurance.",
    url: "https://www.myfloridalicense.com/wl11.asp",
    icon: "✅"
  },
  {
    name: "Gulf Coast Builders Exchange",
    description: "Trade association serving Manatee, Sarasota, and Charlotte Counties with plan rooms and networking.",
    url: "https://gcbx.com",
    icon: "🤝"
  },
  {
    name: "Florida Home Builders Association",
    description: "Statewide association with legislative advocacy, education, and industry resources.",
    url: "https://www.fhba.com",
    icon: "🏠"
  }
];

export default function DownloadsPage() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", backgroundColor: '#FFFFFF', color: '#1C2B39', paddingTop: '120px' }}>
      {/* Hero */}
      <section style={{ padding: '60px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '52px', fontWeight: 600, color: '#1C2B39', marginBottom: '20px' }}>Resources & Downloads</h1>
          <p style={{ fontSize: '18px', color: '#4A5568', maxWidth: '700px', margin: '0 auto' }}>Access our business materials and essential industry resources for construction in Southwest Florida.</p>
        </div>
      </section>

      {/* Company Downloads */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>COMPANY MATERIALS</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '16px' }}>Business Documents</h2>
            <p style={{ fontSize: '16px', color: '#4A5568' }}>Download our credentials, presentations, and company information.</p>
          </div>
          
          {companyDownloads.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '28px', backgroundColor: '#F8F6F3', borderRadius: '12px', marginBottom: '16px', border: '1px solid #E5E7EB', opacity: item.available ? 1 : 0.7 }}>
              <div style={{ fontSize: '40px' }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1C2B39', marginBottom: '6px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#4A5568', marginBottom: '4px' }}>{item.description}</p>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{item.type} • {item.size}</span>
              </div>
              {item.available ? (
                <a 
                  href={item.file}
                  download
                  style={{ 
                    backgroundColor: '#1C2B39', 
                    color: '#FFFFFF', 
                    padding: '14px 28px', 
                    border: 'none', 
                    borderRadius: '8px', 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    letterSpacing: '1px', 
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#B8860B'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#1C2B39'}
                >
                  DOWNLOAD
                </a>
              ) : (
                <span style={{ 
                  backgroundColor: '#E5E7EB', 
                  color: '#9CA3AF', 
                  padding: '14px 28px', 
                  borderRadius: '8px', 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  letterSpacing: '1px'
                }}>
                  COMING SOON
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Florida Building Codes */}
      <section style={{ padding: '80px 5%', backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#D4A012', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>OFFICIAL CODES</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#FFFFFF', marginTop: '12px', marginBottom: '16px' }}>Florida Building Codes</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>Free access to the 8th Edition (2023) Florida Building Code — effective December 31, 2023.</p>
          </div>
          
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {floridaBuildingCodes.map((item, i) => (
              <a 
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'block',
                  padding: '28px', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = '#B8860B';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '32px' }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>{item.name}</h3>
                      <span style={{ 
                        fontSize: '10px', 
                        padding: '4px 8px', 
                        backgroundColor: item.tag === 'Commercial' ? '#64748B' : item.tag === 'Residential' ? '#6B8E73' : '#B8860B',
                        color: '#FFFFFF',
                        borderRadius: '4px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600
                      }}>{item.tag}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>{item.description}</p>
                    <div style={{ fontSize: '12px', color: '#D4A012', marginTop: '12px', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>View Resource →</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sarasota County Resources */}
      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>LOCAL GOVERNMENT</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '16px' }}>Sarasota County Resources</h2>
            <p style={{ fontSize: '16px', color: '#4A5568' }}>Essential links for permits, inspections, and local building requirements.</p>
          </div>
          
          {sarasotaResources.map((item, i) => (
            <a 
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex',
                alignItems: 'center', 
                gap: '20px', 
                padding: '24px', 
                backgroundColor: '#FFFFFF', 
                borderRadius: '12px', 
                marginBottom: '12px', 
                border: '1px solid #E5E7EB',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#B8860B';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(28,43,57,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '32px' }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1C2B39', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{item.description}</p>
              </div>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* FEMA Hurricane & Flood Resources */}
      <section style={{ padding: '80px 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>STORM PROTECTION</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '16px' }}>Hurricane & Flood Guides</h2>
            <p style={{ fontSize: '16px', color: '#4A5568' }}>Official FEMA resources for protecting your home from Florida's storm hazards.</p>
          </div>
          
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {femaResources.map((item, i) => (
              <a 
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'block',
                  padding: '28px', 
                  backgroundColor: '#F8F6F3', 
                  borderRadius: '12px', 
                  border: '1px solid #E5E7EB',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#B8860B';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.backgroundColor = '#F8F6F3';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ fontSize: '32px' }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1C2B39', marginBottom: '8px' }}>{item.name}</h3>
                    <p style={{ fontSize: '13px', color: '#4A5568', margin: 0, lineHeight: 1.5 }}>{item.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <span style={{ 
                        fontSize: '10px', 
                        padding: '4px 8px', 
                        backgroundColor: '#E5E7EB',
                        color: '#4A5568',
                        borderRadius: '4px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600
                      }}>{item.type}</span>
                      <span style={{ fontSize: '12px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>View Resource →</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Resources */}
      <section style={{ padding: '80px 5%', backgroundColor: '#F8F6F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '3px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', fontWeight: 600 }}>INDUSTRY</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '32px', fontWeight: 600, color: '#1C2B39', marginTop: '12px', marginBottom: '16px' }}>Contractor Resources</h2>
            <p style={{ fontSize: '16px', color: '#4A5568' }}>Verify licenses, find associations, and access industry resources.</p>
          </div>
          
          {contractorResources.map((item, i) => (
            <a 
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex',
                alignItems: 'center', 
                gap: '20px', 
                padding: '24px', 
                backgroundColor: '#FFFFFF', 
                borderRadius: '12px', 
                marginBottom: '12px', 
                border: '1px solid #E5E7EB',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#B8860B';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(28,43,57,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '32px' }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1C2B39', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: '#4A5568', margin: 0 }}>{item.description}</p>
              </div>
              <div style={{ fontSize: '14px', color: '#B8860B', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>→</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 5%', backgroundColor: '#1C2B39' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>Need Custom Materials?</h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Contact us for project-specific documentation, proposals, or credentials.</p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#B8860B', color: '#FFFFFF', padding: '16px 36px', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', borderRadius: '8px' }}>Request Materials</Link>
        </div>
      </section>
    </div>
  );
}
