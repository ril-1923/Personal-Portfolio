export const profile = {
  name: 'Mohammed Rilwan',
  title: 'Web Solution Engineer',
  subtitle: 'Frontend Developer | AI-Assisted Web Developer',
  location: 'Chennai, India',
  github: 'https://github.com/ril-1923',
  linkedin: 'https://www.linkedin.com/in/mohamed-rilwan-31962417b/',
  email: 'hello@rilwan.dev',
  resumePath: '/resume.pdf',
  availability: 'Available for Freelance Projects',
};

export const about = {
  paragraphs: [
    "I'm a Web Solution Engineer based in Chennai, India, focused on building responsive, performant web applications and interactive browser-based experiences. My work centers on modern frontend engineering with React and TypeScript, paired with a strong appreciation for clean UI and thoughtful UX.",
    "I build everything from production web apps to immersive 3D simulations rendered directly in the browser, exploring how creative web engineering can turn complex ideas into intuitive, interactive experiences.",
    "I actively integrate AI tools into my development workflow — using them for rapid prototyping, UI generation, debugging, and iterative feature development — to move faster and deliver higher-quality results without compromising on engineering rigor.",
  ],
  highlights: [
    'Frontend engineering with React & TypeScript',
    'Responsive, accessible web applications',
    'Interactive 3D browser-based experiences',
    'AI-assisted development workflows',
    'Modern UI & UX implementation',
    'Continuous learning & experimentation',
  ],
};

export const experience = [
  {
    company: 'Intelia Sofpro',
    position: 'Web Solution Engineer',
    duration: 'July 2025 – Present',
    location: 'Chennai, India',
    summary:
      'Building and maintaining web solutions with a focus on modern frontend engineering, responsive design, and AI-assisted development workflows.',
  },
  {
    company: 'Agnostic Solutions Pvt. Ltd.',
    position: 'Web Developer',
    duration: 'March 2021 – May 2022',
    location: 'Chennai, India',
    summary:
      'Developed web interfaces and applications using HTML, CSS, JavaScript, and Bootstrap, focusing on cross-browser compatibility and responsive layouts.',
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Electronics and Communication Engineering',
  label: 'B.E. ECE',
};

export type SkillCategory = {
  name: string;
  icon: 'layout' | 'database' | 'sparkles';
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: 'layout',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Bootstrap 5'],
  },
  {
    name: 'Database',
    icon: 'database',
    skills: ['MySQL'],
  },
  {
    name: 'AI Development Tools',
    icon: 'sparkles',
    skills: ['Claude AI', 'Bolt AI', 'ChatGPT', 'Gemini', 'Lovable'],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  category: '3D Experiences' | 'Interactive Simulations' | 'Web Applications' | 'Frontend Projects';
  technologies: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'cableverse-3d',
    name: 'CableVerse 3D',
    description: 'Interactive cable car simulation and management experience rendered in the browser, combining 3D visuals with operational controls.',
    category: 'Interactive Simulations',
    technologies: ['React', 'Three.js', 'TypeScript'],
    featured: true,
    demoUrl: '',
    githubUrl: '',
  },
  { id: 'balloonverse-3d', name: 'BalloonVerse 3D', description: 'Interactive balloon-themed 3D experience with playful visuals and animated physics.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'smart-city-3d', name: 'Smart City 3D', description: 'Interactive smart city simulation exploring urban systems and infrastructure in 3D.', category: 'Interactive Simulations', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'martverse-3d', name: 'MartVerse 3D', description: 'Interactive 3D shopping experience blending e-commerce concepts with immersive visuals.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'skyport-3d', name: 'SkyPort 3D', description: 'Airport simulation with interactive terminals, runways, and aircraft flow visualization.', category: 'Interactive Simulations', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'apex-motors', name: 'Apex Motors', description: '3D automotive experience showcasing vehicle models with interactive exploration.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'basketball-arena-3d', name: 'Basketball Arena 3D', description: 'Immersive 3D basketball arena with interactive court and player perspectives.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'cricketverse-3d', name: 'CricketVerse 3D', description: 'Interactive cricket-themed 3D experience with stadium visuals and gameplay elements.', category: 'Interactive Simulations', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'photoverse-3d', name: 'PhotoVerse 3D', description: '3D photo gallery experience with immersive spatial navigation and visual storytelling.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'oceanverse-3d', name: 'OceanVerse 3D', description: 'Underwater 3D experience exploring ocean environments and marine visuals.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'dinoverse-3d', name: 'DinoVerse 3D', description: 'Interactive prehistoric 3D world with animated dinosaurs and explorable terrain.', category: 'Interactive Simulations', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'mediverse-3d', name: 'MediVerse 3D', description: '3D medical-themed experience visualizing healthcare concepts interactively.', category: 'Interactive Simulations', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'robo-factory-3d', name: 'Robo Factory 3D', description: 'Interactive 3D factory simulation with robotic automation and assembly line visuals.', category: 'Interactive Simulations', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'spaceverse-3d', name: 'SpaceVerse 3D', description: 'Immersive 3D space exploration experience with planetary visuals and cosmic environments.', category: '3D Experiences', technologies: ['React', 'Three.js'], demoUrl: '', githubUrl: '' },
  { id: 'buildestate-pro', name: 'BuildEstate Pro', description: 'Real estate web application with property listings, interactive maps, and modern UI.', category: 'Web Applications', technologies: ['React', 'TypeScript', 'CSS3'], demoUrl: '', githubUrl: '' },
  { id: 'gameverse', name: 'GameVerse', description: 'Collection of browser-based interactive games with engaging mechanics and polished UI.', category: 'Frontend Projects', technologies: ['JavaScript', 'HTML5', 'CSS3'], demoUrl: '', githubUrl: '' },
  { id: 'foodrush', name: 'FoodRush', description: 'Food delivery web application with menu browsing, cart, and responsive ordering flow.', category: 'Web Applications', technologies: ['React', 'CSS3', 'JavaScript'], demoUrl: '', githubUrl: '' },
  { id: 'germany-tourist', name: 'Germany Tourist Website', description: 'Travel website showcasing German destinations with rich imagery and itinerary layouts.', category: 'Frontend Projects', technologies: ['HTML5', 'CSS3', 'Bootstrap 5'], demoUrl: '', githubUrl: '' },
  { id: 'cyberlab', name: 'CyberLab', description: 'Cybersecurity-themed interactive web experience with a dark, technical aesthetic.', category: 'Frontend Projects', technologies: ['JavaScript', 'CSS3', 'HTML5'], demoUrl: '', githubUrl: '' },
  { id: 'iphone-store', name: 'iPhone Store', description: 'Product storefront web app with catalog, detail views, and a clean e-commerce UI.', category: 'Web Applications', technologies: ['React', 'TypeScript', 'CSS3'], demoUrl: '', githubUrl: '' },
];

export const aiTools = [
  { name: 'Claude AI', role: 'Complex reasoning, architecture planning & code review' },
  { name: 'Bolt AI', role: 'Rapid full-stack prototyping & iterative builds' },
  { name: 'ChatGPT', role: 'Code generation, debugging & learning' },
  { name: 'Gemini', role: 'Research, ideation & multimodal assistance' },
  { name: 'Lovable', role: 'AI-driven app generation & UI scaffolding' },
];

export const aiWorkflow = [
  { title: 'Rapid Prototyping', desc: 'Translate ideas into working interfaces fast, iterating on structure and flow before polish.' },
  { title: 'UI Generation', desc: 'Draft component layouts and visual structures with AI, then refine by hand for quality.' },
  { title: 'Code Development', desc: 'Accelerate implementation of features and patterns with AI-suggested code I review and adapt.' },
  { title: 'Debugging Assistance', desc: 'Diagnose errors and explore fixes faster with AI-assisted tracing and explanations.' },
  { title: 'Feature Implementation', desc: 'Break down complex features into buildable steps and ship them incrementally.' },
  { title: 'Testing Assistance', desc: 'Surface edge cases and validation paths to harden applications before release.' },
  { title: 'Iterative Development', desc: 'Loop quickly between idea, implementation, and refinement for continuous improvement.' },
];
