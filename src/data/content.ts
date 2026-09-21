// ---------------------------------------------------------------------------
// Single source of truth for every piece of real content on the site.
// Edit THIS file to update copy anywhere — components just read from here.
// ---------------------------------------------------------------------------

// Real client-site screenshots, kept in src/images (Vite resolves these to
// hashed build URLs automatically).
import wipoGroup from '../images/wipo-group.png';
import fpsSubtitle from '../images/fps-subtitle.png';
import ganeshCreation from '../images/ganesh-creation.png';
import morphicSpaces from '../images/morphic-spaces.png';
import vamaClinics from '../images/vama-clinics.png';
import gadcoZen from '../images/gadco-zen.png';
import alins from '../images/alins.png';

export const personal = {
  name: 'Kritika Jain',
  rotatingRoles: ['Full Stack Developer', 'MERN Stack Developer', 'React Specialist'],
  tagline:
    'Crafting scalable web solutions and engaging digital experiences with modern tech stacks.',
  availability: 'Available for new opportunities',
  bioParagraphs: [
    "I'm Kritika Jain, a passionate Full Stack Developer building clean, performant, and user-friendly digital products with the MERN stack.",
    'My work spans the full web stack — pixel-perfect React interfaces on the frontend, and REST APIs, authentication, and database-backed systems on the backend.',
    "When I'm not shipping features, you'll find me competing in hackathons, exploring new frameworks, or sharpening my problem-solving on data & analytics projects.",
  ],
  email: 'kritika098jain@gmail.com',
  phone: '+91 7505802687',
  location: 'Noida, India · Remote Available',
  socials: {
    github: 'https://github.com/Kjain-Code',
    linkedin: 'https://linkedin.com/in/kritika-jain-dev',
  },
  resumeHref: '/resume.html',
  photoUrl: '/photo.png',
};

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4', label: 'Projects Shipped' },
  { value: '4', label: 'Hackathons Competed' },
  { value: '∞', label: 'Lines of Code' },
];

export const aboutTechMarquee = ['React.js', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind'];

// Mirrors the original template's Services section (same 5-item numbered
// layout) with real MERN-stack services in place of the 3D-creator ones.
export const services: [string, string, string][] = [
  [
    '01',
    'Frontend Development',
    'Pixel-perfect, responsive interfaces built with React.js and Next.js — clean component architecture, smooth interactions, and accessible markup.',
  ],
  [
    '02',
    'Backend & APIs',
    'Scalable REST APIs and backend systems with Node.js, Express, and Fastify — authentication, real-time features, and clean data workflows.',
  ],
  [
    '03',
    'Full-Stack Web Apps',
    'End-to-end applications from database to deployment — dashboards, portals, and internal tools built on the MERN stack.',
  ],
  [
    '04',
    'Database Design',
    'Schema design and querying across MongoDB and SQL/MySQL, built for performance and built to scale with the product.',
  ],
  [
    '05',
    'Data Analytics & Dashboards',
    'Turning raw data into decisions — Power BI dashboards, Python/Pandas analysis, and optimized SQL reporting.',
  ],
];

export const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Alins Technologies',
    period: 'Aug 2026 — Present',
    type: 'Full-time',
    points: [
      'Developed end-to-end client websites and web applications, including responsive frontends, backend systems, dashboards, and database functionality.',
      'Built and integrated REST APIs, authentication systems, third-party services, and dynamic data workflows.',
      'Worked across the complete development lifecycle — development, testing, debugging, and deployment.',
    ],
  },
  {
    role: 'Web Development & AI Intern',
    company: 'OpenBlockAI',
    period: 'Aug 2024 — Sep 2024',
    type: 'Internship · Remote',
    points: [
      'Built 10+ responsive, reusable frontend components using React.js, improving UI consistency across the platform.',
      'Integrated REST APIs, authentication flows, and real-time data handling to enable seamless user experiences.',
      'Collaborated with cross-functional backend and product teams in an Agile/Scrum environment.',
    ],
  },
];

export const education = {
  degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
  school: 'Panipat Institute of Engineering and Technology, Haryana, India',
  period: '2022 — 2026',
};

export const achievements = [
  'Finalist — Smart India Hackathon (SIH) 2024 & 2023 — College Internal Selection Round (Team Leader)',
  'Participant — Hackathon at IIT Roorkee (Team Leader)',
  'Top 10 — HackJNU 3.0 (Team Leader)',
  'Introduction to Deep Learning — Great Learning',
  'C++ Training Certification — IIT Bombay',
];

export type Project = {
  num: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
};

// The real client website builds — screenshots from src/images, live links
// to the actual sites so "Live Project" goes straight to the real thing.
export const projects: Project[] = [
  {
    num: '01',
    name: 'Wipo Group',
    category: 'Fintech Platform',
    description: 'Full client website for a fractional real-estate investment platform — properties, committees, and coin trading.',
    tech: ['React', 'Tailwind', 'Deployment'],
    link: 'https://wipogroupinllc.com/',
    image: wipoGroup,
  },
  {
    num: '02',
    name: 'FPS Subtitle',
    category: 'Media & Localization',
    description: 'Website UI and layout for a subtitling & translation studio serving media production clients.',
    tech: ['UI Design', 'Web Design', 'Media'],
    link: 'https://fpssubtitle.com/',
    image: fpsSubtitle,
  },
  {
    num: '03',
    name: 'Ganesh Creation',
    category: 'Photography Studio',
    description: 'Premium photography & cinematography studio site — destination weddings, portfolio, and booking flow.',
    tech: ['Web Design', 'UI/UX', 'Client Project'],
    link: 'https://www.ganeshcreation.online/',
    image: ganeshCreation,
  },
  {
    num: '04',
    name: 'Morphic Spaces',
    category: 'Architecture Studio',
    description: 'Site for a premium spatial design studio — residential, commercial, and hospitality architecture.',
    tech: ['Web Design', 'UI/UX', 'Client Project'],
    link: 'https://morphicspaces.com/',
    image: morphicSpaces,
  },
  {
    num: '05',
    name: 'Vama Clinics',
    category: 'Healthcare Clinic',
    description: 'Multi-location hair, skin & aesthetics clinic website with treatments, clinics, and booking.',
    tech: ['Web Design', 'UI/UX', 'Client Project'],
    link: 'https://www.vamaclinics.com/',
    image: vamaClinics,
  },
  {
    num: '06',
    name: 'Gadco Zen',
    category: 'Skincare E-commerce',
    description: 'E-commerce storefront for a skincare brand — product catalog, cart, and checkout experience.',
    tech: ['Web Design', 'E-commerce', 'Client Project'],
    link: 'https://www.gadcozen.com/',
    image: gadcoZen,
  },
  {
    num: '07',
    name: 'Alins Technologies',
    category: 'Digital Agency',
    description: 'Agency website for a full-service digital studio — web, app, marketing & design — with an immersive 3D animated hero.',
    tech: ['Web Design', 'UI/UX', 'Agency Site'],
    link: 'https://alins.in/',
    image: alins,
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚛️',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'Redux', level: 75 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '🟢',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Fastify', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'Socket.io', level: 78 },
      { name: 'Authentication', level: 80 },
    ],
  },
  {
    id: 'data',
    label: 'Database & Data',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'SQL / MySQL', level: 80 },
      { name: 'Python (Pandas, NumPy)', level: 80 },
      { name: 'Power BI', level: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Languages',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'C / C++', level: 75 },
      { name: 'C#.NET', level: 60 },
      { name: 'Postman', level: 85 },
      { name: 'Agile / Scrum', level: 80 },
      { name: 'WordPress', level: 65 },
    ],
  },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];
