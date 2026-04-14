export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  intro: string;
  whatWeHandle: string[];
  whatToExpect: string[];
  safetyNotes: string[];
  cta: string;
};

export type City = {
  slug: string;
  name: string;
  stateSlug: "utah" | "idaho";
  title: string;
  description: string;
  neighborhoods: string[];
};

export const siteConfig = {
  companyName: "Pure Pest Solutions",
  domain: "pure-pest.com",
  phoneDisplay: "(801) 686-8124",
  phoneHref: "+18016868124",
  smsDisplay: "Text us at (801) 686-8124",
  email: "contact@purepestutah.com",
  address: "1185 N Washington Blvd, Ogden, UT 84404",
  hours: [
    "Monday: 8:00 AM - 6:00 PM",
    "Tuesday: 8:00 AM - 6:00 PM",
    "Wednesday: 8:00 AM - 6:00 PM",
    "Thursday: 8:00 AM - 6:00 PM",
    "Friday: 8:00 AM - 6:00 PM",
    "Saturday: 8:00 AM - 6:00 PM",
    "Sunday: Closed",
  ],
  ctaPrimary: "Call for Fast Service",
  ctaSecondary: "Get a Free Quote",
  coverageLine: "Serving homes and businesses across Utah and Idaho",
  socialLinks: {
    googleBusiness:
      "https://www.google.com/maps/place/?q=place_id:ChIJbwQKyHTyQ64RsMoxAg7FTwc",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

export const services: Service[] = [
  {
    slug: "general-pest-control",
    name: "General Pest Control",
    shortDescription:
      "Year-round protection plans for common interior and exterior pest pressure.",
    intro:
      "Our general pest control service is designed for families and property managers who want dependable protection without guesswork. We inspect, treat, and maintain your property so pests do not regain momentum.",
    whatWeHandle: [
      "Ants, spiders, earwigs, beetles, and occasional invaders",
      "Perimeter and entry-point pest pressure",
      "Seasonal infestations that return every year",
    ],
    whatToExpect: [
      "Detailed inspection and pest activity mapping",
      "Customized treatment for inside and outside zones",
      "Follow-up recommendations to reduce reinfestation risk",
    ],
    safetyNotes: [
      "Treatments are applied by trained technicians using label-directed methods",
      "We focus on targeted applications, not unnecessary overuse",
      "Clear prep and post-service instructions are provided every visit",
    ],
    cta: "Start your year-round protection plan today.",
  },
  {
    slug: "ant-control",
    name: "Ant Control",
    shortDescription:
      "Find the colony source and stop recurring ant trails at the root.",
    intro:
      "Ant problems usually start outside and show up inside where food and moisture are available. We identify the species, isolate the nesting pattern, and apply treatments where they actually work.",
    whatWeHandle: [
      "Little black ants and pavement ants",
      "Kitchen, bathroom, and wall-void trail activity",
      "Recurring ant issues during warm months",
    ],
    whatToExpect: [
      "Species-informed treatment strategy",
      "Exterior perimeter and foundation targeting",
      "Guidance for sanitation and exclusion improvements",
    ],
    safetyNotes: [
      "Family and pet considerations reviewed before treatment",
      "Low-impact methods prioritized whenever effective",
      "Service notes documented for easy follow-up",
    ],
    cta: "Get rid of ant trails before they spread through your home.",
  },
  {
    slug: "spider-control",
    name: "Spider Control",
    shortDescription:
      "Reduce spider activity and web buildup around your home and business.",
    intro:
      "Spider pressure is often a sign of broader insect activity. Our spider program reduces both spiders and the prey insects that attract them, helping your property stay cleaner and more comfortable.",
    whatWeHandle: [
      "Web-building spiders around eaves, garages, and basements",
      "Black widow risk zones around exterior structures",
      "Seasonal interior spider sightings",
    ],
    whatToExpect: [
      "Web knockdown and harborage treatment",
      "Exterior barrier service around doors, windows, and trim",
      "Monitoring and maintenance recommendations",
    ],
    safetyNotes: [
      "Technicians use targeted placement to minimize disruption",
      "High-touch family zones receive careful treatment planning",
      "Re-service options available if pressure returns",
    ],
    cta: "Keep your property clear, comfortable, and spider-resistant.",
  },
  {
    slug: "wasp-control",
    name: "Wasp Control",
    shortDescription:
      "Safe nest removal and aggressive stinging-insect prevention.",
    intro:
      "Wasps and other stinging insects can quickly turn outdoor spaces into high-risk areas. We remove active nests and treat likely build sites so your family and guests can use your property confidently.",
    whatWeHandle: [
      "Paper wasps, yellow jackets, and hornets",
      "Nests near doors, patios, soffits, and sheds",
      "Recurring warm-season nesting activity",
    ],
    whatToExpect: [
      "Rapid response for active nesting",
      "Nest removal and targeted treatment",
      "Preventive recommendations for common nesting points",
    ],
    safetyNotes: [
      "Stinging insect jobs are handled with protective equipment",
      "Approach and treatment plan are communicated before work begins",
      "We prioritize occupant and pet safety during active treatments",
    ],
    cta: "Schedule fast wasp control before activity escalates.",
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    shortDescription:
      "Comprehensive rodent control with exclusion and monitoring.",
    intro:
      "Rodents are persistent and can create sanitation, wiring, and structural risks. Our rodent service combines active control with long-term entry-point reduction to protect your home or business.",
    whatWeHandle: [
      "Mice and rats in crawl spaces, attics, and garages",
      "Droppings, gnaw marks, and contamination concerns",
      "Entry-point vulnerabilities around utility lines and gaps",
    ],
    whatToExpect: [
      "Inspection with activity and access-point mapping",
      "Control plan with traps and strategic placement",
      "Exclusion recommendations and follow-up checks",
    ],
    safetyNotes: [
      "Placement is designed to reduce non-target contact",
      "Clear communication around monitoring stations",
      "Ongoing maintenance options for high-risk properties",
    ],
    cta: "Protect your property from rodent damage and contamination.",
  },
  {
    slug: "termite-control",
    name: "Termite Control",
    shortDescription:
      "Proactive termite detection and treatment for structural protection.",
    intro:
      "Termites can cause costly hidden damage over time. We inspect vulnerable zones, identify signs early, and deliver treatment options built around long-term structural protection.",
    whatWeHandle: [
      "Subterranean termite risk and active findings",
      "Mud tubes, wood damage, and moisture-linked conditions",
      "Prevention support for high-risk properties",
    ],
    whatToExpect: [
      "Thorough inspection and condition report",
      "Treatment recommendations based on severity and layout",
      "Monitoring guidance for long-term defense",
    ],
    safetyNotes: [
      "Applications follow strict label and regulatory guidance",
      "Clear documentation supports real-estate and maintenance needs",
      "We explain each option in plain language before treatment",
    ],
    cta: "Schedule a termite inspection before hidden damage grows.",
  },
  {
    slug: "commercial-pest-control",
    name: "Commercial Pest Control",
    shortDescription:
      "Reliable pest management for offices, retail, and facilities.",
    intro:
      "Commercial properties need responsive service, clear communication, and dependable documentation. We build practical treatment programs around your operating hours and compliance expectations.",
    whatWeHandle: [
      "Office, retail, hospitality, and facility pest pressure",
      "Recurring service plans and emergency callouts",
      "Documentation support for inspections and records",
    ],
    whatToExpect: [
      "Site walk-through and risk assessment",
      "Service schedule aligned with business operations",
      "Consistent reporting and account support",
    ],
    safetyNotes: [
      "Technicians coordinate with on-site contacts before each service",
      "Treatments prioritize occupant safety and continuity",
      "Escalation paths are defined for urgent issues",
    ],
    cta: "Build a dependable commercial pest program with our team.",
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    shortDescription:
      "Outdoor mosquito reduction for more usable yards and patios.",
    intro:
      "Mosquito activity can limit how you use your outdoor space. Our treatment program targets resting and breeding zones to help reduce bites and improve comfort through peak season.",
    whatWeHandle: [
      "Yard, patio, and landscape mosquito pressure",
      "Standing-water risk zones",
      "Seasonal peak mosquito conditions",
    ],
    whatToExpect: [
      "Property assessment focused on breeding and resting areas",
      "Targeted treatment around key activity zones",
      "Practical recommendations for long-term reduction",
    ],
    safetyNotes: [
      "Treatment timing is planned around weather and occupancy",
      "Instructions provided for re-entry and best results",
      "Programs can be adjusted for event-heavy schedules",
    ],
    cta: "Reclaim your yard with targeted mosquito control.",
  },
  {
    slug: "bed-bug-control",
    name: "Bed Bug Control",
    shortDescription:
      "Discreet, thorough bed bug treatment and follow-up strategy.",
    intro:
      "Bed bug infestations require precision and consistency. We provide clear prep guidance, targeted treatment, and structured follow-up so you can resolve the issue with confidence.",
    whatWeHandle: [
      "Early-stage and established bed bug infestations",
      "Bedrooms, furniture, and adjacent hiding zones",
      "Multi-room and repeat-activity scenarios",
    ],
    whatToExpect: [
      "Inspection with scope assessment",
      "Detailed prep checklist before service",
      "Treatment and follow-up verification steps",
    ],
    safetyNotes: [
      "We explain prep and post-treatment expectations clearly",
      "Work is handled discreetly and professionally",
      "Documentation is provided for property records",
    ],
    cta: "Get a focused bed bug treatment plan that works.",
  },
];

export const stateAreas = [
  {
    slug: "utah",
    name: "Utah",
    summary:
      "From Wasatch Front neighborhoods to growing suburban corridors, we provide responsive pest control tailored to Utah climate patterns.",
  },
  {
    slug: "idaho",
    name: "Idaho",
    summary:
      "We serve Idaho homes and businesses with practical treatment programs built for local seasonal pressure and property types.",
  },
] as const;

export const cities: City[] = [
  {
    slug: "ogden",
    name: "Ogden",
    stateSlug: "utah",
    title: "Pest Control in Ogden, UT",
    description:
      "Local, dependable pest control for Ogden homes and businesses with fast response and year-round protection options.",
    neighborhoods: ["East Bench", "Downtown Ogden", "South Ogden", "North Ogden"],
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    stateSlug: "utah",
    title: "Pest Control in Salt Lake City, UT",
    description:
      "Practical, professional pest control services designed for busy Salt Lake City households and commercial properties.",
    neighborhoods: ["Sugar House", "The Avenues", "Millcreek", "Downtown"],
  },
  {
    slug: "layton",
    name: "Layton",
    stateSlug: "utah",
    title: "Pest Control in Layton, UT",
    description:
      "Reliable pest management for Layton homes with clear service plans and consistent follow-through.",
    neighborhoods: ["East Layton", "West Layton", "Kaysville Border", "Hill Field Area"],
  },
  {
    slug: "provo",
    name: "Provo",
    stateSlug: "utah",
    title: "Pest Control in Provo, UT",
    description:
      "Responsive pest control for Provo residences, rentals, and businesses with safe and effective treatment methods.",
    neighborhoods: ["Downtown Provo", "North Park", "River Bottoms", "Grand View"],
  },
  {
    slug: "logan",
    name: "Logan",
    stateSlug: "utah",
    title: "Pest Control in Logan, UT",
    description:
      "Seasonal and year-round pest control programs for Logan homes and local business properties.",
    neighborhoods: ["Hillcrest", "Bridger", "Adams", "Downtown Logan"],
  },
  {
    slug: "boise",
    name: "Boise",
    stateSlug: "idaho",
    title: "Pest Control in Boise, ID",
    description:
      "Premium pest control service for Boise homeowners and businesses with dependable scheduling and clear communication.",
    neighborhoods: ["North End", "Meridian Border", "Southeast Boise", "Downtown Boise"],
  },
  {
    slug: "meridian",
    name: "Meridian",
    stateSlug: "idaho",
    title: "Pest Control in Meridian, ID",
    description:
      "High-quality pest control for Meridian neighborhoods and commercial properties with proactive prevention plans.",
    neighborhoods: ["Downtown Meridian", "South Meridian", "Eagle Road Corridor", "West Ada"],
  },
  {
    slug: "nampa",
    name: "Nampa",
    stateSlug: "idaho",
    title: "Pest Control in Nampa, ID",
    description:
      "Trusted pest control for Nampa homes and facilities with practical treatment and maintenance recommendations.",
    neighborhoods: ["Downtown Nampa", "South Nampa", "Northwest Nampa", "Midland Corridor"],
  },
  {
    slug: "idaho-falls",
    name: "Idaho Falls",
    stateSlug: "idaho",
    title: "Pest Control in Idaho Falls, ID",
    description:
      "Reliable pest protection for Idaho Falls properties with responsive service and long-term prevention options.",
    neighborhoods: ["Ammon", "Downtown Idaho Falls", "Westside", "Broadway District"],
  },
  {
    slug: "pocatello",
    name: "Pocatello",
    stateSlug: "idaho",
    title: "Pest Control in Pocatello, ID",
    description:
      "Professional pest control in Pocatello for families and businesses that want consistent results.",
    neighborhoods: ["University Area", "Old Town", "Highland", "West Pocatello"],
  },
];

export const testimonials = [
  {
    author: "Sarah M.",
    rating: 5,
    text: "They showed up on time, explained everything clearly, and the difference was immediate. Professional from start to finish.",
    relativeDate: "2 weeks ago",
  },
  {
    author: "Jason R.",
    rating: 5,
    text: "Pure Pest made the process simple. Fast response, respectful technicians, and solid follow-up after treatment.",
    relativeDate: "1 month ago",
  },
  {
    author: "Emily T.",
    rating: 5,
    text: "We had recurring ant issues and they finally fixed it. Great communication and no-pressure service recommendations.",
    relativeDate: "1 month ago",
  },
  {
    author: "Chris B.",
    rating: 5,
    text: "Our commercial property has been much easier to manage since switching to Pure Pest Solutions. Reliable and consistent.",
    relativeDate: "2 months ago",
  },
];

export const whyChooseUs = [
  "Locally focused team serving Utah and Idaho",
  "Licensed and insured technicians with practical experience",
  "Fast scheduling and responsive customer communication",
  "Safe, effective treatment plans tailored to each property",
  "Residential and commercial service programs",
  "Clear pricing, clear expectations, and no fluff",
];

export const pestsWeHandle = [
  "Ants",
  "Spiders",
  "Wasps & Stinging Insects",
  "Rodents",
  "Termites",
  "Mosquitoes",
  "Bed Bugs",
  "Occasional Invaders",
];

export const careers = {
  headline: "Build a Career With Pure Pest Solutions",
  intro:
    "We are building a reliable, professional team that takes pride in quality service and real customer care.",
  roles: [
    {
      title: "Pest Control Technician",
      type: "Full-time",
      location: "Utah & Idaho",
      summary:
        "Deliver residential and commercial pest control services with professionalism, safety, and strong communication.",
    },
    {
      title: "Customer Experience Coordinator",
      type: "Full-time",
      location: "Remote / Office Hybrid",
      summary:
        "Support scheduling, customer communication, and service follow-up with speed and accuracy.",
    },
  ],
};
