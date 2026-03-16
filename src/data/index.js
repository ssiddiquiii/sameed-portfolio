export const STACK = [
  { icon: '⚡', name: 'JavaScript ES6+', color: 'var(--accent)'   },
  { icon: '🟢', name: 'Node.js',          color: 'var(--accent-2)' },
  { icon: '🚂', name: 'Express.js',       color: 'var(--accent)'   },
  { icon: '🍃', name: 'MongoDB',          color: 'var(--accent-2)' },
  { icon: '🌀', name: 'Mongoose',         color: 'var(--accent)'   },
  { icon: '⚛️', name: 'React.js',         color: 'var(--accent-3)' },
  { icon: '🔐', name: 'JWT Auth',         color: 'var(--accent)'   },
  { icon: '📦', name: 'REST APIs',        color: 'var(--accent-2)' },
  { icon: '🎨', name: 'Tailwind CSS',     color: 'var(--accent)'   },
  { icon: '📧', name: 'Mailtrap',         color: 'var(--accent-3)' },
  { icon: '🐙', name: 'Git / GitHub',     color: 'var(--accent)'   },
  { icon: '🔧', name: 'Thunder Client',   color: 'var(--accent-2)' },
  { icon: '🟠', name: 'Postman',          color: 'var(--accent-3)' },
]

export const SKILLS = [
  { name: 'JavaScript (ES6+)',  pct: 85 },
  { name: 'Node.js & Express',  pct: 80 },
  { name: 'MongoDB & Mongoose', pct: 78 },
  { name: 'REST API Design',    pct: 85 },
  { name: 'React.js',           pct: 70 },
  { name: 'JWT Authentication', pct: 80 },
]

export const SERVICES = [
  {
    span: 'span-8', accent: false, num: '01',
    iconKey: 'monitor', title: 'Full-Stack Development',
    desc: 'End-to-end MERN stack applications with clean architecture, scalable Node.js backends, and responsive React frontends built to production standards.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    big: null,
  },
  {
    span: 'span-4', accent: true, num: '02',
    iconKey: null, title: 'REST API Engineering',
    desc: 'Robust, documented RESTful APIs with proper middleware, validation, and error handling pipelines.',
    tags: [],
    big: 'API',
  },
  {
    span: 'span-4', accent: false, num: '03',
    iconKey: 'database', title: 'Database Design',
    desc: 'MongoDB schema architecture with Mongoose, indexing strategies, and query optimization.',
    tags: ['MongoDB', 'Mongoose'],
    big: null,
  },
  {
    span: 'span-4', accent: false, num: '04',
    iconKey: 'lock', title: 'Auth Systems',
    desc: 'JWT auth, refresh tokens, email verification, password resets, and role-based access control.',
    tags: ['JWT', 'Bcrypt', 'RBAC'],
    big: null,
  },
  {
    span: 'span-4', accent: false, num: '05',
    iconKey: 'layout', title: 'Responsive UI',
    desc: 'Pixel-perfect, mobile-first React interfaces with Tailwind CSS — fast and accessible on all screens.',
    tags: ['React', 'Tailwind'],
    big: null,
  },
  {
    span: 'span-6', accent: false, num: '06',
    iconKey: 'mail', title: 'API & Email Integration',
    desc: 'Third-party integrations including email pipelines via Mailtrap and Mailgen, transactional flows, and webhook handling.',
    tags: ['Mailtrap', 'Mailgen', 'Axios', 'Webhooks'],
    big: null,
  },
  {
    span: 'span-6', accent: true, num: '07',
    iconKey: null, title: 'Version Control & Dev Workflow',
    desc: 'GitHub-hosted projects with clean commit history, branching strategies, and documented READMEs.',
    tags: ['GitHub', 'Copilot', 'VS Code'],
    big: 'Git',
  },
]

export const PROJECTS = [
  {
    emoji: '✅',
    bgStyle: { background: 'linear-gradient(135deg,#060d20,#0a1530)' },
    glowColor: 'rgba(96,165,250,0.25)',
    num: '// project_01',
    title: 'Task Manager API',
    status: 'Live',
    desc: 'Production-ready REST API with JWT authentication, email verification via Mailtrap/Mailgen, full task CRUD, and structured error handling.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mailtrap'],
    github: 'https://github.com/ssiddiquiii',
    live: '#',
  },
  {
    emoji: '🛒',
    bgStyle: { background: 'linear-gradient(135deg,#060f0a,#091a0e)' },
    glowColor: 'rgba(52,211,153,0.25)',
    num: '// project_02',
    title: 'E-Commerce Platform',
    status: 'Building',
    desc: 'Full-stack MERN marketplace with product catalog, cart management, order processing, and an admin dashboard with inventory control.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Tailwind'],
    github: 'https://github.com/ssiddiquiii',
    live: '#',
  },
  {
    emoji: '💬',
    bgStyle: { background: 'linear-gradient(135deg,#0f0618,#160a24)' },
    glowColor: 'rgba(167,139,250,0.25)',
    num: '// project_03',
    title: 'Real-Time Chat App',
    status: 'Planned',
    desc: 'Socket.io powered chat with public/private rooms, live presence indicators, message persistence, and file sharing.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ssiddiquiii',
    live: '#',
  },
  {
    emoji: '📊',
    bgStyle: { background: 'linear-gradient(135deg,#0f0b06,#1a1206)' },
    glowColor: 'rgba(245,158,11,0.2)',
    num: '// project_04',
    title: 'Analytics Dashboard',
    status: 'Planned',
    desc: 'Data visualization dashboard with real-time metrics, interactive Chart.js charts, filterable tables, and CSV export.',
    tags: ['React', 'Chart.js', 'Node.js', 'REST API'],
    github: 'https://github.com/ssiddiquiii',
    live: '#',
  },
]

export const PROCESS_STEPS = [
  {
    icon: '🔍',
    num: '// step_01',
    title: 'Requirements & Architecture',
    desc: 'Before writing a single line, I map out the problem space, define data models, and sketch the system design. Architecture first, always.',
  },
  {
    icon: '🗄️',
    num: '// step_02',
    title: 'Database Schema Design',
    desc: 'Design MongoDB schemas with Mongoose, plan relationships, set up indexing strategies, and validate data integrity at the model layer.',
  },
  {
    icon: '⚙️',
    num: '// step_03',
    title: 'Backend API Build',
    desc: 'Build Express routes, middleware layers, controller logic, and authentication. Test every endpoint with Thunder Client before moving forward.',
  },
  {
    icon: '⚛️',
    num: '// step_04',
    title: 'React Frontend',
    desc: 'Connect the frontend to the API, build responsive components, manage state cleanly, and ensure the UI works across all screen sizes.',
  },
  {
    icon: '🚀',
    num: '// step_05',
    title: 'Polish, Document & Deploy',
    desc: 'Clean up code, write README docs, push to GitHub, and deploy. Every project is a portfolio piece — it has to be something I\'m proud of.',
  },
]

export const NAV_LINKS = ['About', 'Stack', 'Services', 'Projects', 'Process', 'Contact']

export const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email',     value: 'sameed@samedsiddiqui.me', href: 'mailto:sameed@samedsiddiqui.me' },
  { icon: '🐙', label: 'GitHub',    value: 'github.com/ssiddiquiii',  href: 'https://github.com/ssiddiquiii' },
  { icon: '🌐', label: 'Portfolio', value: 'samedsiddiqui.me',         href: 'https://samedsiddiqui.me' },
  { icon: '📍', label: 'Location',  value: 'Karachi, Pakistan',         href: null },
]
