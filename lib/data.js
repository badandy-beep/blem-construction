/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY */

export const stats = [
  { number: "40+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "$500M+", label: "Project Value" },
  { number: "0", label: "Claims Record" }
];

export const comparisonData = [
  { aspect: "Costs", megaBuilders: "High overhead, HOA fees ($500+/mo)", blem: "Half the cost—direct owner involvement eliminates bureaucracy" },
  { aspect: "Personalization", megaBuilders: "Cookie-cutter designs", blem: "100% custom solutions tailored to your vision" },
  { aspect: "Access", megaBuilders: "Call centers, endless voicemails", blem: "Direct access to Mike Blem—personal cell, any time" },
  { aspect: "Technology", megaBuilders: "Basic project management", blem: "AI/BIM optimization delivering 20-30% cost savings" },
  { aspect: "Track Record", megaBuilders: "High turnover, inconsistent quality", blem: "Zero claims in 40+ years, same trusted team" }
];

export const testimonials = [
  { quote: "Michael's attention to detail and personal involvement exceeded every expectation.", author: "Dr. James Craighead", project: "Residential Addition - Osprey, FL", type: "residential" },
  { quote: "Delivered our $13M hotel 15% under budget with impeccable coordination.", author: "Sarah Mitchell", project: "Candlewood Suites - Hazleton, PA", type: "commercial" },
  { quote: "Three generations of Blem builders. That legacy of quality is evident in everything they do.", author: "Sarasota County Official", project: "Municipal Infrastructure", type: "commercial" },
  { quote: "When our home suffered storm damage, Michael's team responded immediately with remarkable integrity.", author: "The Olesnycky Family", project: "Storm Restoration - $293K", type: "residential" },
];

export const featured = [
  { name: "Candlewood Suites & Convention Center", location: "Hazleton, PA", value: "$13M", type: "Hotel", img: "/images/candlewood-suites.jpg" },
  { name: "Englewood Sports Complex Phase IV", location: "Englewood, FL", value: "$4.6M", type: "Municipal", img: "/images/englewood-sports-complex.jpg" },
  { name: "Holiday Inn Express", location: "Savannah, GA", value: "$4.7M", type: "Hotel", img: "/images/holiday-inn-express.jpg" },
];

export const projects = {
  hotel: [
    { name: "Candlewood Suites & Convention Center", location: "Hazleton, PA", value: "$13M" },
    { name: "Candlewood Suites", location: "Bluffton, SC", value: "$6.5M" },
    { name: "Candlewood Suites", location: "Columbia, SC", value: "$5.8M" },
    { name: "Holiday Inn Express", location: "Savannah, GA", value: "$4.7M" },
  ],
  municipal: [
    { name: "Englewood Sports Complex Phase IV", location: "Englewood, FL", value: "$4.6M" },
    { name: "NW Water Storage & Pumping Station", location: "Florida", value: "$2.8M" },
    { name: "FAA Base Building Expansion", location: "Florida", value: "$950K" },
  ],
  commercial: [
    { name: "Merrill Lynch at Venetia Bay Centre", location: "Venice, FL", value: "$2.4M" },
    { name: "Fruitville Office Building", location: "Sarasota, FL", value: "$1.1M" },
    { name: "O'Donoghue Dermatology", location: "Sarasota, FL", value: "$549K" },
  ],
  residential: [
    { name: "Winston Palms Condominium", location: "Englewood, FL", value: "$1.5M" },
    { name: "Alafia Apartment Complex", location: "Riverview, FL", value: "$925K" },
    { name: "King's Gate Club House", location: "Nokomis, FL", value: "$740K" },
    { name: "Dr. Craighead Residential Addition", location: "Osprey, FL", value: "$702K" },
  ]
};

export const innovations = [
  { name: "AI-Powered Supply Chain", description: "Predictive scheduling delivering 20-30% cost savings.", icon: "🤖", savings: "20-30%" },
  { name: "BIM Technology", description: "Building Information Modeling for precise planning and coordination.", icon: "📐", savings: "15-20%" },
  { name: "Value Engineering", description: "Strategic analysis to improve value while reducing costs.", icon: "💡", savings: "10-15%" },
  { name: "Digital Management", description: "Real-time tracking and transparent reporting.", icon: "📊", savings: "Transparency" }
];

export const manifesto = [
  { title: "Uphold Uncompromising Integrity", description: "We maintain the highest ethical standards, fostering trust through transparent communication." },
  { title: "Deliver Customized Solutions", description: "Rejecting cookie-cutter methods, we tailor each project to your unique vision." },
  { title: "Meet Budgets and Timelines", description: "We guarantee adherence to established financial and scheduling parameters." },
  { title: "Harness Advanced Technology", description: "We integrate AI and BIM for precise planning, reducing costs by 20-30%." },
  { title: "Build on Long-Term Relationships", description: "Decades-long partnerships ensure seamless coordination and reliable execution." },
  { title: "Honor Our Third-Generation Legacy", description: "Rooted in Sarasota for generations, we infuse every project with proven expertise." },
];

export const hiringData = {
  headline: "Join the Navy SEALs of Construction",
  description: "Michael Blem Construction is growing rapidly. We seek elite professionals who embody precision, teamwork, and unwavering standards.",
  positions: [
    { title: "Architect", description: "Design innovative residential and commercial structures." },
    { title: "Project Manager", description: "Oversee high-impact builds with AI integration." },
    { title: "Site Superintendent", description: "Lead on-site operations with precision." },
    { title: "Subcontractor Opportunities", description: "Join our vetted network for plumbing, electrical, HVAC." }
  ],
  disclaimer: "Michael Blem Construction is an equal opportunity employer. All applicants considered without regard to race, color, religion, sex, national origin, disability, or veteran status. Background checks and drug screening required."
};

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Commercial', href: '/commercial', dropdown: [
    { name: 'New Construction', href: '/commercial#new-construction' },
    { name: 'Remodeling/Retrofits', href: '/commercial#retrofits' }
  ]},
  { name: 'Residential', href: '/residential', dropdown: [
    { name: 'New Construction', href: '/residential#new-construction' },
    { name: 'Remodeling/Additions', href: '/residential#remodeling' }
  ]},
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export const faqData = {
  residential: {
    newConstruction: [
      { question: "How do you ensure lower costs than mega-builders?", answer: "No overhead layers—direct Mike access saves time and money. Our AI-powered scheduling optimizes for 20-30% cost reductions." },
      { question: "What about storm resilience?", answer: "All homes designed compliant with Florida's stringent building codes for wind resistance with impact-resistant windows and reinforced roof connections." },
      { question: "How long does a custom home take?", answer: "Typical custom homes take 8-14 months. We maintain 95% on-time delivery rates with weekly progress updates." },
    ],
    remodeling: [
      { question: "How do you minimize disruption?", answer: "We create detailed phasing plans with separate work zones, dust barriers, and dedicated entry points." },
      { question: "Can you work with my insurance?", answer: "Yes, we have extensive experience documenting damage and communicating with adjusters." },
    ]
  },
  commercial: {
    general: [
      { question: "How do you minimize business downtime?", answer: "Detailed phasing plans, after-hours work schedules, and isolated work zones." },
      { question: "What's your approach to budget management?", answer: "Predictive analytics and AI scheduling. Track record shows 15% under budget on average." },
      { question: "How do you handle compliance?", answer: "40+ years of relationships with building departments and zero-incident record." },
    ]
  }
};

export const residentialBenefits = {
  newConstruction: [
    "Lower overhead than mega-builders—superior materials at comparable prices",
    "Direct access to Mike Blem for custom solutions",
    "Storm-resilient designs compliant with Florida codes",
    "Over 200 homes completed with 98% budget adherence",
    "Third-generation expertise with zero claims record"
  ],
};

export const commercialBenefits = {
  newConstruction: [
    "20-30% savings via AI scheduling and direct oversight",
    "95% on-time delivery for critical sectors",
    "Zero incidents in 40 years of commercial work",
    "BIM for clash detection, reducing rework by 15-20%",
    "$500M+ value delivered"
  ],
};

export const blogPosts = [
  { slug: "why-i-reject-cookie-cutter", title: "Why I Reject Cookie-Cutter Construction", date: "January 2026", category: "Philosophy", categoryType: "general", excerpt: "After 40 years building, here's why customization is the only way to build something that truly lasts." },
  { slug: "hurricane-season-guide", title: "Navigating Florida's Hurricane Season", date: "December 2025", category: "Industry", categoryType: "residential", excerpt: "What 40 years of storm restoration has taught me about building resilient structures." },
  { slug: "hidden-costs", title: "The Hidden Costs of Choosing the Wrong Contractor", date: "November 2025", category: "Education", categoryType: "general", excerpt: "That low bid might cost you three times as much in the long run." },
];

export const resources = {
  commercial: [
    { name: "Gulf Coast Builders Exchange", url: "https://gcbx.com", description: "Contractors in Manatee, Sarasota, and Charlotte Counties.", scope: "Local" },
    { name: "ABC of Florida", url: "https://abcflorida.com", description: "Largest commercial construction association in Florida.", scope: "State" },
  ],
  residential: [
    { name: "Suncoast Builders Association", url: "https://suncoastbuilders.org", description: "Supports residential builders in Sarasota area.", scope: "Local" },
    { name: "Florida Home Builders Association", url: "https://www.fhba.com", description: "Statewide homebuilding advocacy.", scope: "State" },
  ],
  general: [
    { name: "Florida License Verification", url: "https://www.myfloridalicense.com", description: "Verify contractor licenses before hiring." },
    { name: "Florida Building Code", url: "https://floridabuilding.org", description: "Official Florida Building Code requirements." },
  ]
};

export const downloads = [
  { name: "Michael Blem Resume", description: "Professional background and 40+ year career.", type: "PDF", size: "241 KB", icon: "📄", file: "/downloads/MBC-MichaelBlem-Resume.pdf", available: true },
  { name: "Company Overview Deck", description: "Capabilities and portfolio highlights.", type: "PDF", size: "4.2 MB", icon: "📊", file: null, available: false },
];

export const floridaBuildingCodes = [
  { name: "Florida Building Code - Building", description: "8th Edition (2023) commercial code.", url: "https://codes.iccsafe.org/content/FLBC2023P1", icon: "🏢", tag: "Commercial" },
  { name: "Florida Building Code - Residential", description: "8th Edition (2023) residential code.", url: "https://codes.iccsafe.org/content/FLRC2023P1", icon: "🏡", tag: "Residential" },
];

export const sarasotaResources = [
  { name: "Sarasota County Building Division", description: "Permits, inspections, contractor licensing.", url: "https://www.scgov.net/government/planning-and-development-services/building", icon: "🏛️" },
  { name: "Sarasota County Permit Search", description: "Search permits by address.", url: "https://building.scgov.net/", icon: "🔎" },
];
