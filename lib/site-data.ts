
import Image from "next/image";
export const company = {
  name: 'KETHU INFOTECH',
  phone: '+91 86602 12995',
  phoneHref: 'tel:+918660212995',
  whatsapp: 'https://wa.me/918660212995',
  email: 'kethuinfotech@gmail.com',
  website: 'https://www.kethuinfotech.in',
}

export const navLinks = [
  { label: 'Courses', href: '/#courses' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Process', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Clients', href: '/#clients' },
  { label: 'Contact', href: '/#contact' },
]

export const stats = [
  { value: 5000, suffix: '+', label: 'Professionals Trained' },
  { value: 150, suffix: '+', label: 'Corporate Clients' },
  { value: 98, suffix: '%', label: 'Placement Success' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 30, suffix: '+', label: 'Enterprise Trainers' },
]

export const trustedCompanies = [
  'Infosys',
  'Accenture',
  'TCS',
  'Cognizant',
  'Wipro',
  'Capgemini',
  'Tech Mahindra',
  'IBM',
  'Oracle',
  'Salesforce',
]

export interface Course {
  name: string
  icon: string
  logo?: string
  duration: string
  level: string
  certification: string
  blurb: string
  tag?: string
}

export const courses: Course[] = [
  {
    name: 'Workato',
    icon: "Workflow",
    logo: '/logos/workato.png',
    duration: '6 Weeks',
    level: 'Advanced',
    certification: 'Automation Pro I–III',
    blurb: 'Recipe design, connectors, error handling and enterprise governance.',
    tag: 'Most Requested',
  },
  {
    name: 'MuleSoft',
    logo: '/logos/mulesoft.png',
     icon: "Network",
    duration: '8 Weeks',
    level: 'Advanced',
    certification: 'MCD Level 1 & 2',
    blurb: 'API-led connectivity, Anypoint Platform, DataWeave and CloudHub.',
  },
  {
    name: 'Salesforce',
    logo: '/logos/salesforce.png',
     icon: "CloudCog",
    duration: '8 Weeks',
    level: 'Intermediate',

    certification: 'Admin + Platform Dev I',
    blurb: 'Admin, Apex, LWC, Flows and integration architecture.',
  },
  {
  name: 'Python',
  logo: '/logos/python.png',
  icon: 'Code2',
  duration: '6 Weeks',
  level: 'Foundation',
  certification: 'PCEP / PCAP aligned',
  blurb: 'Core Python, data handling, automation scripting and testing.',
},
 {
  name: 'DevOps',
  logo: '/logos/devops.png',
  icon: 'Container',
  duration: '8 Weeks',
  level: 'Advanced',
  certification: 'CKA + Terraform aligned',
  blurb: 'CI/CD, Docker, Kubernetes, Terraform, observability and SRE basics.',
},
  {
  name: 'AI & Automation',
  logo: '/logos/ai-automation.png',
  icon: 'Sparkles',
  duration: '6 Weeks',
  level: 'Intermediate',
  certification: 'Applied AI Certificate',
  blurb: 'LLM workflows, RAG, prompt engineering and agentic automation.',
  tag: 'New',
},
  {
  name: 'Microsoft Azure',
  logo: '/logos/microsoft-azure.png',
  icon: 'Cloud',
  duration: '6 Weeks',
  level: 'Intermediate',
  certification: 'AZ-104 / AZ-204',
  blurb: 'Landing zones, identity, app services and cost governance.',
},
 {
  name: 'AWS',
  logo: '/logos/aws.png',
  icon: 'Server',
  duration: '6 Weeks',
  level: 'Intermediate',
  certification: 'SAA-C03',
  blurb: 'Compute, networking, storage, IAM and well-architected reviews.',
},
  {
  name: 'Java Enterprise',
  logo: '/logos/java.png',
  icon: 'Coffee',
  duration: '10 Weeks',
  level: 'Intermediate',
  certification: 'Spring Professional',
  blurb: 'Core Java, Spring Boot, microservices and secure REST APIs.',
},
  {
    name: 'QA & Automation Testing',
    logo: "/logos/ai-automation.png",
    icon: 'TestTubes',
    duration: '6 Weeks',
    level: 'Foundation',
    certification: 'ISTQB aligned',
    blurb: 'Selenium, Playwright, API testing and CI-integrated suites.',
  },
 {
  name: 'Power BI',
  logo: '/logos/power-bi.png',
  icon: 'BarChart3',
  duration: '4 Weeks',
  level: 'Foundation',
  certification: 'PL-300',
  blurb: 'Data modelling, DAX, dashboards and executive reporting.',
},
  {
  name: 'US Healthcare',
  logo: '/logos/us-health-care.png',
  icon: 'HeartPulse',
  duration: '4 Weeks',
  level: 'Domain',
  certification: 'RCM Specialist',
  blurb: 'RCM lifecycle, claims, denials, HIPAA and payer processes.',
},
  {
  name: 'US IT Recruitment',
  logo: '/logos/us-recruitment.jpg',
  icon: 'Users',
  duration: '4 Weeks',
  level: 'Domain',
  certification: 'Talent Acquisition Pro',
  blurb: 'Sourcing, tax terms, visa classifications and closing strategy.',
},
]

export const whyUs = [
  {
    title: 'Enterprise Trainers',
    detail: 'Practitioners with 10+ years delivering at Fortune 500 programs.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Live Projects',
    detail: 'Every batch ships a production-style project with code review.',
    icon: 'FolderCode',
  },
  {
    title: 'Real-Time Scenarios',
    detail: 'Incident, migration and integration case studies from the field.',
    icon: 'Activity',
  },
  {
    title: 'Customized Curriculum',
    detail: 'Content mapped to your stack, tooling and internal standards.',
    icon: 'Settings2',
  },
  {
    title: 'Flexible Batches',
    detail: 'Weekday, weekend, fast-track and shift-friendly schedules.',
    icon: 'CalendarClock',
  },
  {
    title: 'Online & Onsite',
    detail: 'Virtual instructor-led, onsite bootcamps or blended delivery.',
    icon: 'MonitorSmartphone',
  },
  {
    title: 'Corporate Workshops',
    detail: 'One to five day intensive workshops for focused upskilling.',
    icon: 'Presentation',
  },
  {
    title: 'Certification Support',
    detail: 'Exam blueprints, mock tests and voucher guidance included.',
    icon: 'Award',
  },
  {
    title: 'Interview Preparation',
    detail: 'Mock panels, resume clinics and architecture deep-dives.',
    icon: 'MessagesSquare',
  },
  {
    title: 'Placement Assistance',
    detail: 'Active hiring network across 150+ partner organisations.',
    icon: 'Briefcase',
  },
  {
    title: 'Manager Reporting',
    detail: 'Attendance, assessment and skill-gap dashboards for L&D teams.',
    icon: 'ClipboardList',
  },
  {
    title: '24×7 Doubt Support',
    detail: 'Dedicated channel with SLA-backed trainer responses.',
    icon: 'LifeBuoy',
  },
]

export const processSteps = [
  { step: '01', title: 'Requirement Discussion', detail: 'Skill-gap analysis with your L&D and delivery leads.' },
  { step: '02', title: 'Training Plan', detail: 'Curriculum, outcomes, duration and success metrics.' },
  { step: '03', title: 'Trainer Allocation', detail: 'Matched practitioner with domain and tooling fit.' },
  { step: '04', title: 'Live Sessions', detail: 'Instructor-led delivery with hands-on labs.' },
  { step: '05', title: 'Assignments', detail: 'Graded exercises after every module.' },
  { step: '06', title: 'Capstone Projects', detail: 'Real enterprise scenarios, reviewed end to end.' },
  { step: '07', title: 'Assessment', detail: 'Skill scoring plus manager-ready reporting.' },
  { step: '08', title: 'Certification', detail: 'Completion credential and exam readiness.' },
]

export const industries = [
  { name: 'Banking & Fintech', icon: 'Landmark' },
  { name: 'Healthcare', icon: 'Stethoscope' },
  { name: 'Retail & E-commerce', icon: 'ShoppingBag' },
  { name: 'Insurance', icon: 'ShieldCheck' },
  { name: 'Manufacturing', icon: 'Factory' },
  { name: 'Telecom', icon: 'RadioTower' },
  { name: 'IT Services', icon: 'Cpu' },
  { name: 'Logistics', icon: 'Truck' },
  { name: 'Education', icon: 'GraduationCap' },
  { name: 'Government', icon: 'Building2' },
]

export const testimonials = [
  {
    quote:
      'KETHU INFOTECH rebuilt our integration capability. 42 engineers were Workato-ready in eight weeks, and our automation backlog dropped by 60%.',
    name: 'Ramesh Iyer',
    role: 'VP, Enterprise Integration',
    company: 'Global Banking Group',
    rating: 5,
  },
  {
    quote:
      'The MuleSoft programme was the most practical training our team has attended. Real API scenarios, real code reviews, zero filler content.',
    name: 'Anita Sharma',
    role: 'Head of Learning & Development',
    company: 'IT Services Major',
    rating: 5,
  },
  {
    quote:
      'Weekly progress dashboards made it easy to report ROI to leadership. Attendance, assessments and skill gaps were all visible.',
    name: 'David Mathew',
    role: 'Director, Talent Enablement',
    company: 'US Healthcare Provider',
    rating: 5,
  },
  {
    quote:
      'We ran a DevOps bootcamp across three cities with one consistent trainer standard. Deployment frequency doubled the next quarter.',
    name: 'Sneha Reddy',
    role: 'Engineering Manager',
    company: 'Retail Technology Firm',
    rating: 5,
  },
]

export const comparison = [
  'Certified enterprise practitioners',
  'Live production-grade projects',
  'Customized corporate content',
  'Manager reporting & analytics',
  'Flexible global timings',
  'Certification exam readiness',
  'Post-training support',
  'Transparent corporate pricing',
]

export const technologies = [
  'Workato',
  'MuleSoft',
  'Salesforce',
  'Python',
  'DevOps',
  'AI & Automation',
  'Microsoft Azure',
  'AWS',
  'Java Enterprise',
  'QA Automation',
  'Power BI',
  'US Healthcare',
  'US IT Recruitment',
  'Other',
]

export const teamSizes = [
  '1 – 10',
  '11 – 25',
  '26 – 50',
  '51 – 100',
  '100 – 500',
  '500+',
]
