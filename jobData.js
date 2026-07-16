// Job data generator - deterministically generates 100,000 jobs for New Zealand
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aviation Engineer", "Pilot", "Flight Attendant", "Airport Manager",
  "Farm Manager", "Agricultural Scientist", "Viticulturist", "Dairy Farm Manager",
  "Wine Maker", "Tourism Manager", "Adventure Guide", "Kiwi Conservation Specialist"
];

// 75+ New Zealand based companies + global companies with NZ presence
const companies = [
  // New Zealand based
  "Fonterra", "Fletcher Building", "Air New Zealand", "Spark NZ", "Fisher & Paykel Healthcare",
  "Xero", "Rocket Lab", "The Warehouse Group", "2degrees", "Vodafone NZ",
  "ANZ NZ", "Westpac NZ", "ASB Bank", "BNZ", "Kiwibank",
  "Meridian Energy", "Genesis Energy", "Contact Energy", "Mercury NZ",
  "Auckland Council", "Wellington City Council", "Christchurch City Council",
  "NZ Post", "KiwiRail", "Ports of Auckland", "Lyttelton Port Company",
  "Z Energy", "BP NZ", "Mobil NZ", "Shell NZ",
  "University of Auckland", "University of Otago", "Victoria University", "Massey University",
  "Canterbury University", "Waikato University", "Lincoln University",
  "Auckland University of Technology", "Otago Polytechnic", "Unitec",
  "NZ Ministry of Education", "Ministry of Health", "Ministry of Justice",
  "NZ Police", "NZ Defence Force", "NZ Department of Conservation",
  "NZ Tourism Board", "NZ Trade & Enterprise", "NZ Immigration",
  "Horticulture NZ", "NZ Dairy Industry", "Beef + Lamb NZ",
  "NZ Winegrowers", "NZ Forest Products", "NZ Steel",
  "Mainfreight", "Toll NZ", "Freightways", "Allied Pickfords",
  "SkyCity Entertainment", "Sky TV", "NZME", "MediaWorks",
  "Briscoe Group", "Hallenstein Glasson", "Kathmandu", "Icebreaker",
  // Global with NZ presence
  "Google NZ", "Amazon", "Microsoft", "Apple", "Meta", "Tesla", "Netflix",
  "IBM", "Oracle", "Cisco", "Dell", "HP", "SAP", "Salesforce",
  "Accenture", "Deloitte", "PwC", "KPMG", "EY", "McKinsey", "Boston Consulting Group",
  "HSBC", "Citibank", "JPMorgan Chase", "Goldman Sachs",
  "Unilever", "P&G", "Nestle", "Coca-Cola", "PepsiCo",
  "Shell", "BP", "TotalEnergies", "ExxonMobil",
  "Siemens", "GE", "Schneider Electric", "ABB", "Honeywell",
  "Boeing", "Airbus", "Rolls-Royce",
  "Pfizer", "Novartis", "Roche", "GSK", "Johnson & Johnson",
  "Samsung", "LG", "Sony", "Panasonic", "Toshiba",
  "Toyota", "Honda", "Nissan", "BMW", "Mercedes-Benz",
  "LVMH", "Kering", "Chanel", "Gucci", "Rolex"
];

const nzLocations = [
  // North Island
  "Auckland CBD, Auckland", "Ponsonby, Auckland", "Parnell, Auckland", "Newmarket, Auckland",
  "Takapuna, Auckland", "North Shore, Auckland", "Manukau, Auckland", "Albany, Auckland",
  "Wellington CBD, Wellington", "Te Aro, Wellington", "Lambton Quay, Wellington",
  "Lower Hutt, Wellington", "Porirua, Wellington", "Kapiti Coast, Wellington",
  "Hamilton CBD, Hamilton", "Frankton, Hamilton", "Rototuna, Hamilton",
  "Tauranga, Bay of Plenty", "Mount Maunganui, Bay of Plenty",
  "Rotorua, Bay of Plenty", "Whakatane, Bay of Plenty",
  "Napier, Hawke's Bay", "Hastings, Hawke's Bay", "Havelock North, Hawke's Bay",
  "Palmerston North, Manawatu", "Feilding, Manawatu", "Dannevirke, Manawatu",
  "New Plymouth, Taranaki", "Stratford, Taranaki", "Waitara, Taranaki",
  "Whanganui, Manawatu-Whanganui", "Rangitikei, Manawatu-Whanganui",
  "Gisborne, Gisborne", "Turangi, Waikato", "Taupo, Waikato",
  "Whangarei, Northland", "Kerikeri, Northland", "Paihia, Northland",
  "Mangawhai, Northland", "Dargaville, Northland", "Kaipara, Northland",
  "Thames, Waikato", "Paeroa, Waikato", "Waihi, Waikato",
  "Matamata, Waikato", "Morrinsville, Waikato", "Te Awamutu, Waikato",
  // South Island
  "Christchurch CBD, Canterbury", "Riccarton, Canterbury", "Merivale, Canterbury",
  "Addington, Canterbury", "Sydenham, Canterbury", "Hornby, Canterbury",
  "Dunedin CBD, Otago", "North Dunedin, Otago", "South Dunedin, Otago",
  "Mosgiel, Otago", "Port Chalmers, Otago",
  "Queenstown, Otago", "Arrowtown, Otago", "Wanaka, Otago",
  "Nelson, Nelson", "Richmond, Nelson", "Motueka, Nelson",
  "Blenheim, Marlborough", "Renwick, Marlborough", "Picton, Marlborough",
  "Timaru, Canterbury", "Geraldine, Canterbury", "Waimate, Canterbury",
  "Oamaru, Waitaki", "Kurow, Waitaki", "Twizel, Mackenzie",
  "Franz Josef, West Coast", "Hokitika, West Coast", "Greymouth, West Coast",
  "Invercargill, Southland", "Bluff, Southland", "Gore, Southland",
  "Ashburton, Canterbury", "Rangiora, Canterbury", "Kaiapoi, Canterbury",
  // Remote
  "Remote — New Zealand", "Remote — Auckland", "Remote — Wellington", "Remote — Christchurch"
];

const salaryRanges = [
  { display: "NZD 50,000 – 65,000/year", min: 50000, max: 65000 },
  { display: "NZD 65,000 – 85,000/year", min: 65000, max: 85000 },
  { display: "NZD 85,000 – 110,000/year", min: 85000, max: 110000 },
  { display: "NZD 110,000 – 140,000/year", min: 110000, max: 140000 },
  { display: "NZD 140,000 – 180,000/year", min: 140000, max: 180000 },
  { display: "NZD 180,000 – 230,000/year", min: 180000, max: 230000 },
  { display: "NZD 230,000 – 300,000/year", min: 230000, max: 300000 },
  { display: "NZD 300,000 – 400,000/year", min: 300000, max: 400000 },
  { display: "NZD 400,000+/year", min: 400000, max: 500000 },
  { display: "NZD 45,000 – 55,000/year", min: 45000, max: 55000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Agriculture",
  "Dairy Industry", "Wine Industry", "Tourism", "Construction", "Logistics & Shipping",
  "Healthcare", "Education", "Consulting", "Aviation", "Real Estate",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Forestry", "Fishing Industry", "Mining", "Retail", "Media & Entertainment"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in New Zealand. ${isRemote ? "This is a fully remote role open to qualified candidates across NZ." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in New Zealand and the Asia-Pacific region.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global tech/business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in NZD
• Health insurance for you and family
• 4 weeks annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Great work-life balance in New Zealand`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in New Zealand looking for experienced professionals to scale our impact across NZ and the Asia-Pacific.

${isRemote ? "This remote-first position allows you to work from anywhere in New Zealand with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission in one of the world's most beautiful countries.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in New Zealand
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive NZD salary • Health insurance • 4 weeks annual leave • Bonus potential • Flexible working arrangements • Great NZ lifestyle`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of New Zealand's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in New Zealand" : `📍 ${location}`}

We're building the future of business in the Asia-Pacific region and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while enjoying the incredible lifestyle of New Zealand.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the region.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive NZD salary | Health insurance | 4 weeks leave | Performance bonus | Learning budget | Flexible working | Amazing NZ lifestyle`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * nzLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — New Zealand" : nzLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, nzLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-NZ-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "Auckland" : job.location.split(',')[0],
        "addressCountry": "NZ"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "NZD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "YEAR"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, nzLocations, industries };
