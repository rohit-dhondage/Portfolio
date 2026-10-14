/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rohit Ramkrishna Dhondage',
  displayName: 'Rohit Dhondage',
  firstName: 'ROHIT',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A DHONDAGE PRODUCTION',
  role: 'Software Developer',
  tagline: ['Software Developer', 'Java', 'Python', 'ML/AI'],
  intro:
    'A final-year B.E. Information Technology student (CGPA 8.18) and Software Developer building AI-powered platforms and scalable web applications using Java, Spring Boot, Python, AI/ML, React, PostgreSQL.',
  location: 'Nashik, Maharashtra',
  email: 'rohitdhondage110@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rohit-dhondage-72478a343/',
    github: 'https://github.com/rohit-dhondage',
  },
  resumePdf: '/assets/Rohit_Dhondage_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rohit Dhondage',
  },
  interests: ['Software Devlopment', 'Machine Learning', 'Cloud Computing (AWS)'],
};

export const education = [
  {
    school: 'PVG Collage Of Engineering & Technology',
    place: 'Nashik',
    degree: 'Bachelor of Engineering — Information Technology',
    period: '2024 – 2027',
    score: 'CGPA 8.50',
  },
  {
    school: 'MSBTE',
    place: 'Nashik',
    degree: 'Diploma In Computer Engineering',
    period: '2021 – 2024',
    score: 'First class with Distinction 89.97%',
  },
];

export const experience = [
  {
    company: 'Softcrowd Solution Pvt Ltd',
    role: 'Software Developer',
    place: 'Nashik, Maharashtra',
    period: 'Dec 2026 – Feb 2027',
    points: [
      "Developed and maintained backend functionality using Java and Spring Boot, building RESTful APIs and integrating relational databases to support application features. Implemented secure authentication, database operations, and API testing while following structured backend development practices. Collaborated on application development and debugging, improving code reliability and gaining hands-on experience with full-stack development workflows.",
    ]
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};
export const projects: Project[] = [
  {
    id: 'policyguard-ai',
    title: 'InterviewIQ Pro',
    year: '2026',
    genre: 'AI • Full-Stack • CareerTech',
    logline:
      'An AI-powered placement preparation platform combining interview preparation, resume tracking, personalized roadmaps, and contextual doubt solving.',
    stack: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'Spring AI',
      'JWT',
    ],
    build: [
      'Developed an AI-powered placement preparation platform using Java, Spring Boot, React, and PostgreSQL, integrating resume management, job application tracking, and personalized learning roadmaps.',
      'Implemented JWT-based authentication, role-based access control, and LLM-powered doubt solving with vector embeddings for contextual question answering and interview preparation.',
    ],
    features: [
      'AI-powered doubt-solving assistant',
      'Resume and job application tracking',
      'Personalized learning roadmaps',
      'JWT authentication and role-based access control',
      'LLM integration and vector embeddings',
      'Student and administrator/TPO workflows',
    ],
    metrics: [
      { value: 'AI / LLM', label: 'OpenAI API & Vector Search' },
      { value: 'JWT', label: 'Secured Authentication' },
      { value: 'Full-Stack', label: 'React + Spring Boot' },
    ],
    github: 'https://github.com/rohit-dhondage/InterviewIQ-Pro',
    live: 'https://interview-iq-pro-front-end.vercel.app/',
    palette: {
      from: '#04121f',
      via: '#0f4c6e',

      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'shield',
  },
  {
    id: 'payment-gateway',
    title: 'Vegetable Delivery Application',
    year: '2026',
    genre: 'Full-Stack • E-Commerce • Payments',
    logline:
      'A full-stack vegetable delivery platform with product catalog, cart, and order management, deployed live on Vercel.',
    stack: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'JWT',
      'Razorpay',
    ],
    build: [
      'Built a full-stack vegetable delivery platform with product catalog, cart, and order management; deployed live on Vercel.',
      'Designed REST APIs in Spring Boot for product listing, order lifecycle, and JWT-secured authentication.',
      'Integrated Razorpay API for end-to-end payment processing and MySQL/Hibernate schema for orders and users.',
    ],
    features: [
      'Vegetable catalog and product management',
      'RESTful backend APIs in Spring Boot',
      'JWT-based authentication and endpoint protection',
      'PostgreSQL/MySQL database integration with Hibernate',
      'Razorpay payment gateway integration',
      'Deployed live on Vercel',
    ],
    metrics: [
      { value: 'Live', label: 'Deployed on Vercel' },
      { value: 'Razorpay', label: 'Payment Gateway' },
      { value: '15+ APIs', label: 'RESTful Endpoints' },
    ],
    github: 'https://github.com/rohit-dhondage/vegetable-app-backend',
    live: 'https://vg-delivery.vercel.app',
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'flow',
  },
  {
    id: 'multi-tenant-saas',
    title: 'Diabetic Retinopathy Detection System',
    year: '2026',
    genre: 'AI • Deep Learning • Healthcare',
    logline:
      'A multimodal deep learning system for diabetic retinopathy staging using retinal images and clinical information, with a deferral mechanism for uncertain predictions.',
    stack: [
      'Python',
      'Deep Learning',
      'Computer Vision',
      'Multimodal AI',
    ],
    build: [
      'Developed a multimodal deep learning system to classify diabetic retinopathy into No DR, Mild, Moderate, and Severe stages using retinal images and clinical information.',
      'Designed a clinical deferral mechanism to flag uncertain predictions for further review rather than relying on potentially unreliable automated classifications.',
    ],
    features: [
      'Four-stage diabetic retinopathy classification',
      'Retinal image analysis',
      'Clinical information integration',
      'Multimodal deep learning approach',
      'Uncertainty-aware clinical deferral',
    ],
    metrics: [
      { value: '4-Stage', label: 'DR Classification' },
      { value: 'Multimodal', label: 'Deep Learning Model' },
      { value: 'Deferral', label: 'Uncertainty Clinical Logic' },
    ],
    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },
    motif: 'tenants',
  },
];


export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'algouniversity',
    title: 'Special Prize Winner',
    org: 'Blockverse Hackathon • GDG NASHIK',
    detail:
      'Received a special prize at the Blockverse Hackathon organized by GDG NASHIK.',
    laurel: 'Hackathon Recognition',
  },
  {
    id: 'flipkart-grid',
    title: '180+ Problems Solved',
    org: 'LeetCode',
    detail:
      'Solved 180+ coding problems on LeetCode covering arrays, strings, dynamic programming, and graphs.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'branch-topper',
    title: 'B.E. Information Technology',
    org: "Pune Vidyarthi Griha's College of Engineering, Nashik",
    detail:
      'Engineering student with CGPA 8.18 / 10 and 89% in Diploma in Computer Engineering.',
    laurel: 'Academic Achievement',
  },
];


export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Database Management System', link: 'https://drive.google.com/file/d/1MqkJHchXeaGD4S8mzPmEGxEYddAsxAjN/view?usp=drive_link' },
  { issuer: 'NPTEL', name: 'Fundamentals of Artificial Intelligence', link: 'https://drive.google.com/file/d/1GqyUQ-lrE-bHaN457t6fIdssgGG4HMXf/view?usp=drive_link' },
  { issuer: 'NPTEL', name: 'Deep Learning', link: 'https://drive.google.com/file/d/1PWSRP5SQDPzkoTCF3A24eIJoSpTwgsff/view?usp=sharing' },
  { issuer: 'AWS', name: 'AWS Certified AI Practitioner', link: 'https://drive.google.com/file/d/1h8e5p0a9T6f5gBaOP2ROfwWHZfkkspGn/view?usp=drive_link' },
  { issuer: 'AWS', name: 'AWS Academy Graduate – Cloud Foundations', link: 'https://www.credly.com/badges/2d4810f9-3dbe-444d-99b9-61312ea5e7df/public_url' },
  { issuer: 'MongoDB', name: 'MongoDB Certified Associate Developer', link: 'https://www.credly.com/badges/fd3362bd-743a-4c4d-a68e-b1fdc5d46811/public_url' },
  { issuer: 'GitHub', name: 'GitHub Foundations', link: 'https://drive.google.com/file/d/1o0fkCAMRWTg1oMwxlqu6t6wnOpBv66Vq/view?usp=sharing' },
  { issuer: 'Pearson', name: 'IT Specialist – HTML and CSS', link: 'https://www.credly.com/badges/e4a55298-e396-41d8-a032-283aafe9fab7/public_url' },
  { issuer: 'Oracle', name: 'Java Certified Foundations Associate', link: 'https://drive.google.com/file/d/1g-yyceHtLg_k2RWiOIJqH0MMcGlaH90P/view?usp=sharing' },
  { issuer: 'Oracle', name: 'Oracle Certified Foundations Associate – Database', link: 'https://drive.google.com/file/d/10-DzabbcH2vHrI6bAohoT8czKRZMa2kV/view?usp=drive_link' },
  { issuer: 'Cisco', name: 'HTML Essentials', link: 'https://www.credly.com/badges/eb27ca95-3b2a-4948-bef9-0385d1d49055/public_url' },
  { issuer: 'Cisco', name: 'CSS Essentials', link: 'https://www.credly.com/badges/3b37497f-6a61-4889-af3c-ed337a460a0b/public_url' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 1', link: 'https://www.credly.com/badges/9cdd4d55-6ecc-463f-b254-811ccdd0539c/public_url' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 2', link: 'https://www.credly.com/badges/0e1b036e-4318-4c8e-b750-2aca77314442/public_url' },
  { issuer: 'Cisco', name: 'Python Essentials 1', link: 'https://www.credly.com/badges/0e21e3eb-d8ef-4770-95d7-dcbd6f8696b1/public_url' },
  { issuer: 'Udemy', name: 'Microsoft Azure Hands-On Training (AZ-900, AZ-104, AZ-305)', link: 'https://drive.google.com/file/d/1KrXClhY0nJ3Acxs7DioNf4Q1rpaMvgPT/view?usp=sharing' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Spring-Boot', mono: 'Sp' },

    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [

      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Hibernate', mono: 'Hi' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Software Devlopment', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2019 –2021',
    synopsis:
      'The foundation years — completing secondary education and building an interest in computer engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Completed SSC at KRTH High School, Mohadi, Nashik, with 79%.',
        tags: ['SSC', '79%'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The First Step',
        description:
          'Started the journey into computer engineering and software development.',
        tags: ['Computer Engineering', 'Programming'],
        runtime: '2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Into Computer Engineering',
    period: '2022 – 2024',
    synopsis:
      'Diploma studies in Computer Engineering at Matoshri College of Engineering, Nashik.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Programmer',
        description:
          'Completed a Diploma in Computer Engineering with 89%.',
        tags: ['Diploma', 'Computer Engineering', '89%'],
        runtime: '2022 – 2024',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Problem Solver',
        description:
          'Built a foundation in programming, logical thinking, and problem-solving.',
        tags: ['Programming', 'Logic Building'],
        runtime: '2022 – Present',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Engineering Chapter',
    period: '2024 – Present',
    synopsis:
      'Pursuing B.E. in Information Technology at PVG College of Engineering, Nashik.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Engineer',
        description:
          'Final-year B.E. Information Technology student with a CGPA of 8.18.',
        tags: ['B.E.', 'Information Technology', 'CGPA 8.18'],
        runtime: '2024 – Present',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Backend Developer',
        description:
          'Focused on Java, Spring Boot, REST APIs, Hibernate/JPA, database integration, and secure backend development.',
        tags: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
        runtime: 'Present',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Problem Solver',
        description:
          'Practicing data structures and algorithms to strengthen coding and technical interview skills.',
        tags: ['DSA', 'LeetCode', 'Problem Solving'],
        runtime: '200+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025 – Present',
    synopsis:
      'Developing practical software applications spanning AI-powered placement preparation, e-commerce, and healthcare AI.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description:
          'InterviewIQ Pro — an AI-powered placement preparation platform featuring contextual doubt solving, resume management, and personalized learning roadmaps.',
        tags: ['Java', 'Spring Boot', 'Spring AI', 'React'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Application Developer',
        description:
          'Vegetable Delivery Application — a full-stack application with REST APIs, JWT-based authentication, PostgreSQL, and Razorpay integration.',
        tags: ['Spring Boot', 'React', 'PostgreSQL', 'Razorpay'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Healthcare AI Developer',
        description:
          'Multimodal deep learning system for diabetic retinopathy staging using retinal images and clinical information, with a deferral mechanism for uncertain predictions.',
        tags: ['Python', 'Deep Learning', 'Computer Vision'],
        runtime: 'Final-Year Project',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis:
      'Preparing for software engineering opportunities while deepening backend development and AI integration skills.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Exploring backend architecture, system design, cloud deployment, and Generative AI integration.',
        tags: [
          'Java Backend',
          'System Design',
          'Cloud Computing',
          'Generative AI',
        ],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];


export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Core backend language • Spring Boot, Spring Security & Hibernate', palette: amber },
  { label: 'The AI Original', title: 'InterviewIQ Pro', detail: 'AI interview preparation • OpenAI API • Resume Parser (PDF)', palette: crimson },
  { label: 'E-Commerce Platform', title: 'VG Delivery', detail: 'Full-stack vegetable delivery • Razorpay API • Deployed live on Vercel', palette: jade },
  { label: 'Hackathon Award', title: 'Blockverse Winner', detail: 'Special Prize Winner • Blockverse Hackathon (GDG NASHIK)', palette: violet },
  { label: 'Engineering Degree', title: 'B.E. in IT', detail: "PVG's College of Engineering, Nashik • CGPA 8.18 / 10", palette: ocean },
  { label: 'Diploma Merit', title: '89% Distinction', detail: 'Diploma in Computer Engineering • Matoshri College of Engineering', palette: jade },
  { label: 'Coding Problems', title: '180+ Solved', detail: 'LeetCode • Arrays, Strings, Dynamic Programming & Graphs', palette: crimson },
  { label: 'Backend Internship', title: 'SoftCrowd Tech', detail: 'Java Backend Intern • 15+ REST APIs • 30% query optimization', palette: ocean },
  { label: 'Mobile Internship', title: 'InnovationHub', detail: 'Android Intern • Java, Android Studio & REST APIs', palette: amber },
  { label: 'Current focus', title: 'Cloud & System Design', detail: 'AWS (EC2, S3) • RESTful APIs • Microservices & Docker', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · Information Technology',
    lines: [
      "Pune Vidyarthi Griha's College of Engineering, Nashik",
      'Bachelor of Engineering · IT (2024 – 2027)',
    ],
    chips: ['CGPA 8.18', '89% Diploma'],
  },
  {
    kicker: 'Skills',
    title: 'Java & Spring Boot first.',
    lines: [
      'Java, C, C++, SQL, Python · Spring Boot, Hibernate, JPA',
      'React.js, Tailwind CSS · MySQL, MongoDB, Firebase · AWS',
    ],
    chips: ['Java', 'Spring Boot', 'Spring Security', 'React.js', 'MySQL', 'REST APIs', 'AWS'],
  },
  {
    kicker: 'Experience',
    title: 'Building Real Software',
    lines: [
      'SoftCrowd Technology — Java Backend Developer Intern',
      'Designed 15+ REST API endpoints and optimized queries by 30%',
      'InnovationHub Services — Android Developer Intern',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Built to Solve Problems',
    lines: [
      'InterviewIQ Pro — AI-powered placement platform with OpenAI API',
      'VG Delivery — Full-stack e-commerce deployed live on Vercel',
      'Diabetic Retinopathy — Multimodal deep learning with clinical deferral',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Progress That Counts',
    lines: [
      'Special Prize Winner — Blockverse Hackathon, GDG NASHIK',
      '180+ Problems Solved on LeetCode across DSA',
      'Strong foundations in OOP, DBMS, and System Design',
    ],
  },
  {
    kicker: 'Technical Foundation',
    title: 'Backend · AI · Problem Solving',
    lines: [
      'Java · Spring Boot · Hibernate/JPA · REST APIs',
      'PostgreSQL · MySQL · Git · Postman',
      'Machine Learning · Generative AI · LLM Integration',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Building what comes next',
    lines: [
      'Java Backend Development · System Design',
      'Cloud Deployment · Generative AI Integration',
      'Preparing for software engineering opportunities',
    ],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'sushmita',
      name: 'Rohit',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume, achievements & skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack & GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc & highlights first',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
