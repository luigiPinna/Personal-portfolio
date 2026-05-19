/* Single source of truth — derived from your existing constants & journey JSON. */

export const meta = {
  name: 'Luigi Pinna',
  role: 'Software Engineer',
  handle: 'luigipinna',
  location: 'Cagliari, Italy',
  email: 'luigipinna3@gmail.com',
  timezone: 'Europe/Rome',
  intro: {
    lede:
      'I build web and software products and weave AI into them — mostly with FastAPI, React and OpenAI. I like work that is pragmatic, well-structured, and tied to a real business outcome.',
    focus: 'Currently leading complex projects for major banking clients at Aevoluta.',
  },
  metrics: [
    { k: 'Based in',         v: 'Italy',        unit: 'Cagliari' },
    { k: 'Experience',       v: '5',            unit: 'yrs' },
    { k: 'Shipped projects', v: '20',           unit: '+' },
    { k: 'Domain',           v: 'Full-stack · AI', unit: '' },
  ],
};

export const projects = [
  {
    id: 'p10', title: 'Telco Migration Suite', year: '2026', role: 'Professional work', type: 'work',
    desc: 'Automation pipeline for a telco operator that processes inbound migration emails, extracts structured data with Claude, matches it across multiple CSV sources, and pushes validated records to the provisioning system over REST and SOAP. Processes a few thousand migrations per week and cuts provisioning time by ~90%.',
    tags: ['Python', 'PostgreSQL', 'Claude', 'Microsoft Graph', 'SOAP/REST', 'Grafana'],
    source: '', visit: '',
  },
  {
    id: 'p11', title: 'Insurance Call-Center RAG', year: '2025', role: 'Professional work', type: 'work',
    desc: 'Internal assistant for call-center agents that answers questions on policy documents in natural language and opens the cited source directly at the referenced page. Microservice ingestion plus React + Python backend. Used by ~200 operators daily — cut customer response time by ~70% and lifted answer accuracy by ~90%.',
    tags: ['Python', 'React', 'OpenAI', 'Azure AI Search', 'MongoDB', 'Vector DB', 'LLM'],
    source: '', visit: '',
  },
  {
    id: 'p12', title: 'Healthcare Network Map', year: '2024', role: 'Team build', type: 'work',
    desc: 'Geospatial decision tool for an insurance group that maps the affiliated healthcare network across Italy, computes drive-time and distance reachability zones, and visualizes policyholder density to support network planning. Renders tens of thousands of facilities and surfaces thousands of prospective policyholders inside any selected catchment area.',
    tags: ['Python', 'FastAPI', 'React', 'Leaflet', 'Geoapify', 'Oracle'],
    source: '', visit: '',
  },
  {
    id: 'p7', title: 'DocuMentor', year: '2024', role: 'Solo build', type: 'ai',
    desc: 'Ask natural-language questions about your PDFs and get context-aware answers grounded in the document.',
    tags: ['Python', 'OpenAI', 'LLM', 'Flask', 'HuggingFace'],
    source: 'https://github.com/luigiPinna/DocuMentor', visit: '',
  },
  {
    id: 'p8', title: 'Cake Generator AI', year: '2024', role: 'Solo build', type: 'ai',
    desc: 'Stable Diffusion fine-tuned on a custom cake-photo dataset, generating realistic custom cakes from text — built for bakers and cake designers.',
    tags: ['Python', 'Stable Diffusion', 'LLM', 'Fine-tuning'],
    source: 'https://github.com/luigiPinna/ai-cake-generator', visit: '',
  },
  {
    id: 'p9', title: 'PDFChatQA', year: '2024', role: 'Solo build', type: 'ai',
    desc: 'Python app that loads a PDF and answers questions about it via an LLM, refusing anything off-document.',
    tags: ['Python', 'OpenAI', 'LLM'],
    source: 'https://github.com/luigiPinna/PDFChatQA', visit: '',
  },
  {
    id: 'p0', title: 'This portfolio', year: '2024', role: 'Solo build', type: 'web',
    desc: 'The site you are reading now. Designed as a quiet document, not a billboard.',
    tags: ['Next.js', 'Tailwind', 'shadcn/ui'],
    source: 'https://github.com/luigiPinna/Personal-portfolio',
    visit: 'https://luigipinna.com',
  },
  {
    id: 'p5', title: 'Cryptocurrency Converter', year: '2023', role: 'Full stack', type: 'web',
    desc: 'Convert popular crypto values into other cryptos or fiat. Mobile-first UI, Node/Express backend pulling from crypto APIs.',
    tags: ['React', 'Node', 'Express', 'Axios'],
    source: 'https://github.com/luigiPinna/Cryptocurrency-Converter',
    visit: 'https://cryptocurrenciesconverter.web.app/',
  },
  {
    id: 'p4', title: 'Economics Articles Scraper API', year: '2023', role: 'Solo build', type: 'web',
    desc: 'API that aggregates business and finance articles from major online newspapers and returns a clean JSON feed.',
    tags: ['React', 'Express', 'Axios', 'Cheerio'],
    source: '', visit: '',
  },
  {
    id: 'p6', title: 'OpenAI Image Generator', year: '2023', role: 'Solo build', type: 'ai',
    desc: 'Lean interface for OpenAI image generation — type a prompt, get an image. Built to feel the API end-to-end.',
    tags: ['JavaScript', 'OpenAI', 'API'],
    source: 'https://github.com/luigiPinna/openai-generate-image', visit: '',
  },
  {
    id: 'p2', title: 'The NetFish', year: '2022', role: 'Team build', type: 'web',
    desc: 'Web app that suggests films based on weather and time of day. Personal watchlists, multi-stack backend (SpringBoot + .NET + Laravel) with Angular front-end.',
    tags: ['Angular', 'SpringBoot', '.NET', 'MySQL'],
    source: 'https://github.com/luigiPinna/TheNetFish-project-revisited', visit: '',
  },
  {
    id: 'p3', title: 'Agenda Contacts', year: '2022', role: 'Full stack', type: 'web',
    desc: 'Contacts manager with a Java/Spring backend, Angular UI, and a side dashboard for daily notes with CRUD.',
    tags: ['Angular', 'Spring', 'MySQL'],
    source: 'https://github.com/luigiPinna/Contacts-with-Spring-Backend-and-Angular-Frontend', visit: '',
  },
  {
    id: 'p1', title: 'Tetris — JavaScript', year: '2021', role: 'For fun', type: 'fun',
    desc: 'Tetris reproduced from scratch in vanilla JavaScript — a small workout to sharpen the fundamentals.',
    tags: ['Vanilla JS'],
    source: 'https://github.com/luigiPinna/Tetris_javascript/tree/main/public', visit: '',
  },
];

export const journey = [
  {
    year: '2024 — now', title: 'Software Engineer', company: 'Aevoluta', type: 'work',
    body: 'End-to-end design, development and deployment of web apps and AI features for top banking clients. Building React frontends and FastAPI backends, integrating OpenAI and Azure AI Search, owning projects with high complexity from spec to production.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'OpenAI', 'Azure AI Search', 'Jenkins / Bitbucket CI'],
  },
  {
    year: '2022 — 2024', title: 'Backend Engineer', company: 'Aevoluta', type: 'work',
    body: 'Backend services in FastAPI + PostgreSQL. Designed RPA flows in UiPath that automated complex business processes for international fashion clients. Built Python pipelines for data automation, processing and transformation.',
    stack: ['FastAPI', 'PostgreSQL', 'Pandas / NumPy', 'UiPath', 'Data modeling'],
  },
  {
    year: '2021', title: 'IT & Data Analyst', company: 'ElleDi', type: 'work',
    body: 'Data extraction, analysis and reporting on financial metrics. Optimised ERP processes with custom reports and digitisation initiatives.',
    stack: ['PostgreSQL', 'Gamma Spring'],
  },
  {
    year: '2021', title: 'Full-Stack Certification', company: 'TheNetValue', type: 'education',
    body: 'Intensive program: structured programming, databases, and modern web development. Hands-on practice with Java Spring Boot, Angular and React.',
    stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'React'],
  },
  {
    year: '2019', title: 'BSc Business Administration', company: 'University of Cagliari', type: 'education',
    body: 'Foundations in financial and applied mathematics; coursework in Big Data analytics applied to the banking sector.',
    stack: ['Financial analysis', 'Applied mathematics', 'Business management', 'Statistics', 'Big Data analytics'],
  },
];

export const stack = [
  { name: 'Backend',         num: '01', items: [
    { name: 'Python / FastAPI', level: 95 },
    { name: 'PostgreSQL',       level: 90 },
    { name: 'REST APIs',        level: 95 },
    { name: 'Java / Spring',    level: 70 },
  ]},
  { name: 'Frontend',        num: '02', items: [
    { name: 'React',            level: 85 },
    { name: 'TypeScript',       level: 85 },
  ]},
  { name: 'AI & Automation', num: '03', items: [
    { name: 'OpenAI',           level: 90 },
    { name: 'Anthropic',        level: 90 },
    { name: 'AI Agents',        level: 85 },
    { name: 'Azure AI',         level: 75 },
    { name: 'UiPath (RPA)',     level: 80 },
  ]},
  { name: 'Data & Infra',    num: '04', items: [
    { name: 'Pandas / NumPy',   level: 80 },
    { name: 'Data modeling',    level: 90 },
    { name: 'Docker',           level: 90 },
    { name: 'CI / CD',          level: 95 },
  ]},
];

export const contact = [
  { k: 'email',    v: 'luigipinna3@gmail.com',         href: 'mailto:luigipinna3@gmail.com',           copyable: true },
  { k: 'github',   v: 'github.com/luigiPinna',         href: 'https://github.com/luigiPinna' },
  { k: 'linkedin', v: 'linkedin.com/in/luigipinna',    href: 'https://www.linkedin.com/in/luigipinna/' },
  { k: 'site',     v: 'luigipinna.com',                href: 'https://luigipinna.com' },
];
