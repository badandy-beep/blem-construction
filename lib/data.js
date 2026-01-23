/* © 2026 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */

// Brand Package Colors - January 2026
export const colors = {
  // Primary Palette
  charcoalNavy: '#1C2B39',
  antiqueGold: '#B8860B',
  brightGold: '#D4A012',
  warmSlate: '#4A5568',
  
  // Secondary Palette
  warmWhite: '#F8F6F3',
  copperAccent: '#C17F59',
  stoneGray: '#9CA3AF',
  
  // Sector Accents
  residentialSage: '#6B8E73',
  commercialSteel: '#64748B',
  
  // Legacy mapping for compatibility
  primary: '#1C2B39',
  accent: '#B8860B',
  gold: '#D4A012',
  text: '#1C2B39',
  textLight: '#4A5568',
  background: '#FFFFFF',
  lightGray: '#F8F6F3',
  mediumGray: '#E5E7EB',
  cream: '#F8F6F3',
};

export const stats = [
  { number: "40+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "$500M+", label: "Project Value" },
  { number: "0", label: "Claims Record" }
];

// Comparison table data for Blem vs Mega-Builders
export const comparisonData = [
  {
    aspect: "Costs",
    megaBuilders: "High overhead/HOA fees ($500+/mo)",
    blem: "Half the cost, lower overhead—no bureaucracy"
  },
  {
    aspect: "Personalization",
    megaBuilders: "Cookie-cutter designs",
    blem: "Direct access to Mike Blem for custom solutions"
  },
  {
    aspect: "Access",
    megaBuilders: "Call centers/low-paid reps",
    blem: "Personal interaction with owner at all times"
  },
  {
    aspect: "Tech",
    megaBuilders: "Basic",
    blem: "AI/BIM for 20-30% savings, higher quality"
  }
];

export const services = [
  { 
    title: "Custom Homes", 
    description: "From ground-up builds to complete renovations, we craft homes that reflect your vision with storm-resistant designs and premium finishes.", 
    icon: "🏡", 
    stat: "200+ Completed", 
    benefits: ["Timely completion", "Budget adherence", "Storm-resistant"], 
    category: "residential" 
  },
  { 
    title: "Commercial & Medical", 
    description: "Office buildings, medical facilities, hotels, and retail spaces. From the $2.4M Merrill Lynch to specialized medical build-outs with regulatory compliance.", 
    icon: "🏢", 
    stat: "$500M+ Managed", 
    benefits: ["Regulatory compliance", "Minimal disruption", "Value engineering"], 
    category: "commercial" 
  },
  { 
    title: "Municipal Infrastructure", 
    description: "Public infrastructure, sports complexes, water facilities. The $4.6M Englewood Sports Complex showcases our community commitment.", 
    icon: "🏛️", 
    stat: "15+ Projects", 
    benefits: ["Community-focused", "Safety standards", "Long-term durability"], 
    category: "commercial" 
  },
  { 
    title: "Remodels & Restoration", 
    description: "Transform existing spaces with thoughtful renovations and storm damage restoration with rapid response capabilities.", 
    icon: "🔨", 
    stat: "100+ Renovations", 
    benefits: ["Rapid response", "Insurance coordination", "Seamless execution"], 
    category: "residential" 
  }
];

export const testimonials = [
  { 
    quote: "Michael's attention to detail and personal involvement exceeded every expectation. He was on-site daily, ensuring quality at every step.", 
    author: "Dr. James Craighead", 
    project: "Residential Addition - Osprey, FL",
    value: "$702K",
    type: "residential"
  },
  { 
    quote: "Delivered our $13M hotel 15% under budget with impeccable coordination across multiple states.", 
    author: "Sarah Mitchell", 
    project: "Candlewood Suites - Hazleton, PA",
    value: "$13M",
    type: "commercial"
  },
  { 
    quote: "Three generations of Blem builders. That legacy of quality and integrity is evident in every aspect of how they operate.", 
    author: "Sarasota County Official", 
    project: "Municipal Infrastructure Project",
    type: "commercial"
  },
  { 
    quote: "When our home suffered severe storm damage, Michael's team responded immediately with remarkable integrity and professionalism.", 
    author: "The Olesnycky Family", 
    project: "Storm Restoration - $293K",
    type: "residential"
  },
  { 
    quote: "Michael's on-site supervision ensured precision on every detail. Unlike large firms, we had direct access to the decision-maker.", 
    author: "Industrial Client", 
    project: "Commercial Build-Out",
    type: "commercial"
  },
  { 
    quote: "Transformed our vision into a resilient home that has weathered multiple storms without issue.", 
    author: "Residential Client", 
    project: "Custom Home Build",
    type: "residential"
  }
];

export const featured = [
  { 
    name: "Candlewood Suites & Convention Center", 
    location: "Hazleton, PA", 
    value: "$13M", 
    type: "Hotel", 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop", 
    description: "Full design coordination across multiple states, permitting, and FF&E installation. Multi-state coordination delivered 15% under budget." 
  },
  { 
    name: "Englewood Sports Complex Phase IV", 
    location: "Englewood, FL", 
    value: "$4.6M", 
    type: "Municipal", 
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop", 
    description: "Community-focused recreational facility with multiple fields, amenities, and infrastructure improvements." 
  },
  { 
    name: "Holiday Inn Express", 
    location: "Savannah, GA", 
    value: "$4.7M", 
    type: "Hotel", 
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop", 
    description: "Value engineering and meticulous project management delivered on time and under budget." 
  },
  { 
    name: "NW Water Storage Station", 
    location: "Florida", 
    value: "$2.8M", 
    type: "Municipal", 
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop", 
    description: "Critical infrastructure serving Southwest Florida communities with long-term durability." 
  },
  { 
    name: "Merrill Lynch at Venetia Bay", 
    location: "Venice, FL", 
    value: "$2.4M", 
    type: "Commercial", 
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", 
    description: "Premium build-out meeting exacting financial services standards with minimal disruption." 
  },
  { 
    name: "Winston Palms Condominium", 
    location: "Englewood, FL", 
    value: "$1.5M", 
    type: "Residential", 
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", 
    description: "Custom residential project with storm-resistant design and premium finishes throughout." 
  }
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
    { name: "North Metro Park", location: "Florida", value: "$490K" },
  ],
  commercial: [
    { name: "Merrill Lynch at Venetia Bay Centre", location: "Venice, FL", value: "$2.4M" },
    { name: "Fruitville Office Building", location: "Sarasota, FL", value: "$1.1M" },
    { name: "O'Donoghue Dermatology", location: "Sarasota, FL", value: "$549K" },
    { name: "Physicians Clinic", location: "Venice, FL", value: "$510K" },
  ],
  residential: [
    { name: "Winston Palms Condominium", location: "Englewood, FL", value: "$1.5M" },
    { name: "Alafia Apartment Complex", location: "Riverview, FL", value: "$925K" },
    { name: "King's Gate Club House", location: "Nokomis, FL", value: "$740K" },
    { name: "Dr. Craighead Residential Addition", location: "Osprey, FL", value: "$702K" },
    { name: "Olesnycky Storm Damage Restoration", location: "Florida", value: "$293K" },
  ]
};

export const innovations = [
  { 
    name: "AI-Powered Supply Chain", 
    description: "Predictive scheduling and procurement optimization delivering 20-30% cost savings through intelligent resource allocation.", 
    icon: "🤖",
    savings: "20-30%"
  },
  { 
    name: "BIM Technology", 
    description: "Building Information Modeling for precise planning, clash detection, and seamless coordination across all trades.", 
    icon: "📐",
    savings: "15-20%"
  },
  { 
    name: "Value Engineering", 
    description: "Strategic analysis to improve project value while reducing costs without compromising quality or vision.", 
    icon: "💡",
    savings: "10-15%"
  },
  { 
    name: "Digital Management", 
    description: "Real-time project tracking, transparent reporting, and instant communication for complete visibility.", 
    icon: "📊",
    savings: "Transparency"
  }
];

export const manifesto = [
  { 
    title: "Uphold Uncompromising Integrity", 
    description: "We maintain the highest ethical standards in all interactions, fostering trust through transparent communication and honest dealing." 
  },
  { 
    title: "Deliver Customized Solutions", 
    description: "Rejecting cookie-cutter methods, we tailor each project to your unique vision, requirements, and budget." 
  },
  { 
    title: "Meet Budgets and Timelines", 
    description: "We guarantee adherence to established financial and scheduling parameters—your project, delivered as promised." 
  },
  { 
    title: "Harness Advanced Technology", 
    description: "We integrate AI and BIM for precise planning, reducing costs by up to 20-30% while improving outcomes." 
  },
  { 
    title: "Build on Long-Term Relationships", 
    description: "With decades-long partnerships with subcontractors and suppliers, we ensure seamless coordination and reliable execution." 
  },
  { 
    title: "Honor Our Third-Generation Legacy", 
    description: "Rooted in Sarasota's community for generations, we infuse every project with hard-won wisdom and proven expertise." 
  },
  { 
    title: "Prioritize Client Satisfaction", 
    description: "We commit to selective, high-impact projects that allow us to exceed expectations on every build." 
  },
  { 
    title: "Differentiate Through Proven Expertise", 
    description: "Unlike fly-by-night contractors, we apply comprehensive skills backed by licenses CGC 1508400 and CBC 047796." 
  },
  { 
    title: "Foster Community and Sustainability", 
    description: "We build with a forward-thinking mindset, incorporating eco-friendly practices and community-focused designs." 
  }
];

export const blogPosts = [
  { 
    slug: "why-i-reject-cookie-cutter-construction", 
    title: "Why I Reject Cookie-Cutter Construction", 
    date: "January 2026", 
    category: "Philosophy", 
    categoryType: "general", 
    excerpt: "After 40 years building in Southwest Florida, here's why customization isn't just a preference—it's the only way to build something that truly lasts and serves its owners." 
  },
  { 
    slug: "navigating-floridas-hurricane-season", 
    title: "Navigating Florida's Hurricane Season: A Builder's Guide", 
    date: "December 2025", 
    category: "Industry Insights", 
    categoryType: "residential", 
    excerpt: "What 40 years of storm damage restoration has taught me about building resilient structures that protect families and investments." 
  },
  { 
    slug: "hidden-costs-wrong-contractor", 
    title: "The Hidden Costs of Choosing the Wrong Contractor", 
    date: "November 2025", 
    category: "Client Education", 
    categoryType: "general", 
    excerpt: "That low bid might cost you three times as much in the long run. Here's how to evaluate contractors beyond the bottom line." 
  },
  { 
    slug: "ai-in-construction", 
    title: "AI in Construction: Separating Hype from Reality", 
    date: "October 2025", 
    category: "Technology", 
    categoryType: "commercial", 
    excerpt: "Here's how we're actually using AI to deliver better commercial projects at lower costs—no buzzwords, just results." 
  },
  { 
    slug: "commercial-build-out-secrets", 
    title: "What Your Commercial Build-Out Contractor Won't Tell You", 
    date: "September 2025", 
    category: "Commercial", 
    categoryType: "commercial", 
    excerpt: "Insider knowledge that protects your investment and ensures your commercial project succeeds from day one." 
  },
  { 
    slug: "local-vs-mega-builders", 
    title: "Local vs. Mega-Builders: Why Personalized Builds Win", 
    date: "August 2025", 
    category: "Residential", 
    categoryType: "residential", 
    excerpt: "The real cost comparison between working with a local master builder versus large development companies." 
  },
  { 
    slug: "storm-resilient-design-florida", 
    title: "Storm-Resilient Design: Lessons from 40 Years in Florida", 
    date: "July 2025", 
    category: "Residential", 
    categoryType: "residential", 
    excerpt: "How modern building techniques and materials create homes that stand strong through Florida's hurricane season." 
  }
];

export const resources = {
  commercial: [
    { 
      name: "Gulf Coast Builders Exchange", 
      url: "https://gcbx.com", 
      description: "Represents contractors in Manatee, Sarasota, and Charlotte Counties with plan rooms and networking.", 
      scope: "Local" 
    },
    { 
      name: "Associated Builders and Contractors of Florida", 
      url: "https://abcflorida.com", 
      description: "Largest commercial construction association in Florida with training and advocacy programs.", 
      scope: "State" 
    },
    { 
      name: "Associated General Contractors of America", 
      url: "https://www.agc.org", 
      description: "Leading association for the construction industry with resources and industry standards.", 
      scope: "National" 
    },
  ],
  residential: [
    { 
      name: "Suncoast Builders Association", 
      url: "https://suncoastbuilders.org", 
      description: "Supports residential builders in Sarasota area with education, advocacy, and networking.", 
      scope: "Local" 
    },
    { 
      name: "Florida Home Builders Association", 
      url: "https://www.fhba.com", 
      description: "Represents homebuilding interests statewide with legislative advocacy and industry resources.", 
      scope: "State" 
    },
    { 
      name: "National Association of Home Builders", 
      url: "https://www.nahb.org", 
      description: "Focuses on home building and remodeling with extensive educational resources.", 
      scope: "National" 
    },
  ],
  general: [
    { 
      name: "Florida DBPR License Verification", 
      url: "https://www.myfloridalicense.com", 
      description: "Verify contractor licenses and check disciplinary history before hiring." 
    },
    { 
      name: "Florida Building Code", 
      url: "https://floridabuilding.org", 
      description: "Official source for Florida Building Code requirements and updates." 
    },
  ]
};

// FAQ Data - Segmented by Persona
export const faqData = {
  residential: {
    newConstruction: [
      {
        question: "How do you ensure lower costs than mega-builders?",
        answer: "No overhead layers—direct Mike access saves time/money. Our AI-powered scheduling optimizes for 20-30% cost reductions. Unlike mega-builders with administrative staff, marketing departments, and corporate overhead, we operate lean with direct owner involvement on every project."
      },
      {
        question: "What about storm resilience?",
        answer: "All our homes are designed compliant with Florida's stringent building codes for wind resistance. Post-Hurricane Ian, our homes held strong while neighboring properties suffered significant damage. We use impact-resistant windows, reinforced roof connections, and elevated designs where appropriate."
      },
      {
        question: "How long does a custom home take to build?",
        answer: "Typical custom homes take 8-14 months depending on size and complexity. Our AI scheduling tools help us maintain 95% on-time delivery rates. We provide a detailed timeline upfront and communicate weekly progress updates."
      },
      {
        question: "What warranties do you provide?",
        answer: "We offer comprehensive warranties including 1-year workmanship, 2-year mechanical systems, and 10-year structural. Plus, with 40+ years of local presence, we're always available for any concerns that arise."
      },
      {
        question: "Can I make changes during construction?",
        answer: "Yes, within reason. Early changes are easier and less costly. We use BIM technology that lets you visualize changes before implementation, helping you make informed decisions about timing and costs."
      },
      {
        question: "How do you handle permits and inspections?",
        answer: "We manage all permitting and inspections as part of our service. With 40+ years of relationships with local building departments, we navigate the process efficiently and know exactly what inspectors look for."
      },
      {
        question: "What's included in your pricing?",
        answer: "Our quotes are comprehensive—no hidden fees or surprise change orders. We detail every aspect from foundation to finishes, and our value engineering process identifies ways to maximize your budget."
      },
      {
        question: "Do you help with design and architecture?",
        answer: "We work with select architects and designers, or we can work with your existing team. Our experience helps translate designs into buildable, cost-effective solutions while maintaining your vision."
      }
    ],
    remodeling: [
      {
        question: "How do you minimize disruption during a remodel?",
        answer: "We create detailed phasing plans to keep as much of your home livable as possible. For major remodels, we establish separate work zones with dust barriers and dedicated entry points for crews."
      },
      {
        question: "Can you work with my insurance company for storm damage?",
        answer: "Absolutely. We have extensive experience with insurance claims and can help document damage, provide detailed estimates, and communicate directly with adjusters to ensure fair coverage."
      },
      {
        question: "Will a remodel increase my home's value?",
        answer: "Properly executed remodels typically yield 60-80% ROI, with some improvements like kitchen and bathroom renovations returning even more. We focus on improvements that add both livability and equity."
      },
      {
        question: "How do you handle unexpected issues?",
        answer: "Older homes often hide surprises. We build contingencies into our planning, communicate immediately when issues arise, and provide options before proceeding. Our experience means fewer surprises."
      },
      {
        question: "What's the advantage of hiring a full contractor vs. subcontractors?",
        answer: "As general contractor, we coordinate all trades, ensure code compliance, maintain warranties, and provide single-point accountability. You get professional management without juggling multiple vendors."
      }
    ]
  },
  commercial: {
    general: [
      {
        question: "How do you minimize business downtime during construction?",
        answer: "We develop detailed phasing plans, offer after-hours work schedules, and create isolated work zones. For the Merrill Lynch project, we maintained full office operations throughout the $2.4M build-out."
      },
      {
        question: "What's your approach to budget management?",
        answer: "We use predictive analytics and AI scheduling (ALICE platform) to forecast costs accurately. Our track record shows 15% under budget on average, with the $13M Candlewood Suites delivered at 15% savings."
      },
      {
        question: "How do you handle compliance and permitting?",
        answer: "We have 40+ years of relationships with building departments and deep expertise in commercial codes. Our zero-incident record and licenses (CGC 1508400, CBC 047796) reflect our commitment to compliance."
      },
      {
        question: "What ROI can I expect from your tech investments?",
        answer: "BIM reduces rework by 15-20% through clash detection. AI scheduling saves 20-30% on overall project costs. Digital management provides transparency that prevents costly miscommunications."
      },
      {
        question: "Do you handle multi-state projects?",
        answer: "Yes. Our Candlewood Suites project spanned multiple states with coordinated permitting, logistics, and trades. We have the experience and systems to manage complex, geographically distributed projects."
      },
      {
        question: "What types of commercial projects do you specialize in?",
        answer: "Hotels, medical facilities, office build-outs, municipal infrastructure, and retail spaces. Our $500M+ portfolio includes everything from the $13M Candlewood convention center to specialized medical suites."
      },
      {
        question: "How do you ensure quality on large projects?",
        answer: "Direct owner involvement on every project—not delegated to project managers. BIM coordination catches issues before construction. Long-term subcontractor relationships ensure consistent quality."
      },
      {
        question: "What financing or payment terms do you offer?",
        answer: "We work with standard commercial construction draws tied to milestones. Our detailed scheduling and transparent reporting help align cash flow with project progress."
      }
    ]
  }
};

// Why Choose Blem - Benefits Lists
export const residentialBenefits = {
  newConstruction: [
    "Lower overhead than mega-builders—no high HOA fees, superior materials at comparable prices",
    "Direct access to Mike Blem for custom solutions—no cookie-cutter flaws",
    "Storm-resilient designs compliant with Florida codes, reducing long-term maintenance",
    "Over 200 homes completed with 98% budget adherence and comprehensive warranties",
    "VR walkthroughs and IoT integration for efficient space planning",
    "Third-generation expertise with zero claims record in 40+ years"
  ],
  remodeling: [
    "Efficient project management with minimal downtime and disruption",
    "Direct access to experienced subcontractor network built over decades",
    "Comprehensive warranties protecting your investment",
    "Increased home value and equity through quality improvements",
    "Insurance coordination expertise for storm damage restoration",
    "Same-day response for emergency storm damage situations"
  ]
};

export const commercialBenefits = {
  newConstruction: [
    "Lower costs: Direct Mike Blem oversight cuts bureaucracy, saving 20-30% via AI scheduling",
    "95% on-time delivery for critical sectors like healthcare and hospitality",
    "Expertise in codes/permits—zero incidents in 40 years of commercial work",
    "Custom value engineering vs. mega-firm assembly line approaches",
    "BIM for clash detection, reducing rework by 15-20%",
    "From $13M hotels to $2.8M pumping stations—$500M+ value delivered"
  ],
  retrofits: [
    "Minimal disruption through phased work and after-hours scheduling",
    "Cost control via predictive analytics—typically 15% under budget",
    "Sustainability and green practice integration available",
    "Compliance expertise for occupied building renovations",
    "Direct owner communication—no layers of project managers"
  ]
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
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Client Portal', href: '/client-access' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/michael-blem-construction',
    color: '#0A66C2'
  },
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/michaelblemconstruction',
    color: '#1877F2'
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/michaelblemconstruction',
    color: '#E4405F'
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/@michaelblemconstruction',
    color: '#FF0000'
  },
];

// Downloads/Resources for download page
export const downloads = [
  {
    name: "Company Overview Deck",
    description: "Comprehensive presentation featuring our capabilities, portfolio highlights, and approach.",
    type: "PDF",
    size: "4.2 MB",
    icon: "📊"
  },
  {
    name: "Michael Blem Resume",
    description: "Detailed professional background, credentials, and 40+ year career timeline.",
    type: "PDF",
    size: "1.8 MB",
    icon: "📄"
  },
  {
    name: "Services Brochure",
    description: "Overview of commercial and residential services with project examples.",
    type: "PDF",
    size: "3.5 MB",
    icon: "📋"
  },
  {
    name: "Florida Building Code Guide",
    description: "Essential guide for understanding Florida's construction requirements.",
    type: "PDF",
    size: "2.1 MB",
    icon: "📘"
  }
];
