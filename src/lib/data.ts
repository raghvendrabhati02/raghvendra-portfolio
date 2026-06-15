import { Project, Skill, Experience, Achievement, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS: Skill[] = [
  // AI & Data Science
  { name: 'Data Science', icon: '📊', category: 'AI & Data Science' },
  { name: 'Machine Learning', icon: '🤖', category: 'AI & Data Science' },
  { name: 'Artificial Intelligence', icon: '🧠', category: 'AI & Data Science' },
  { name: 'Generative AI', icon: '✨', category: 'AI & Data Science' },
  { name: 'Agentic AI', icon: '🕷️', category: 'AI & Data Science' },
  { name: 'AI Agents', icon: '🕵️', category: 'AI & Data Science' },
  { name: 'Multi-Agent Systems', icon: '🕸️', category: 'AI & Data Science' },
  { name: 'RAG Systems', icon: '🗂️', category: 'AI & Data Science' },
  { name: 'LLM Applications', icon: '💬', category: 'AI & Data Science' },
  { name: 'AI Workflow Automation', icon: '⚡', category: 'AI & Data Science' },
  { name: 'Prompt Engineering', icon: '✍️', category: 'AI & Data Science' },

  // Programming Languages
  { name: 'Python', icon: '🐍', category: 'Programming Languages' },
  { name: 'SQL', icon: '💾', category: 'Programming Languages' },
  { name: 'JavaScript', icon: '🟨', category: 'Programming Languages' },
  { name: 'TypeScript', icon: '📘', category: 'Programming Languages' },
  { name: 'C++', icon: '➕', category: 'Programming Languages' },
  { name: 'C', icon: '💿', category: 'Programming Languages' },

  // AI Frameworks & Libraries
  { name: 'LangChain', icon: '⛓️', category: 'AI Frameworks & Libraries' },
  { name: 'LangGraph', icon: '📈', category: 'AI Frameworks & Libraries' },
  { name: 'Scikit-Learn', icon: '🔬', category: 'AI Frameworks & Libraries' },
  { name: 'TensorFlow.js', icon: '🧠', category: 'AI Frameworks & Libraries' },
  { name: 'OpenCV', icon: '📷', category: 'AI Frameworks & Libraries' },
  { name: 'Pandas', icon: '🐼', category: 'AI Frameworks & Libraries' },
  { name: 'NumPy', icon: '🔢', category: 'AI Frameworks & Libraries' },

  // Backend Technologies
  { name: 'FastAPI', icon: '⚡', category: 'Backend Technologies' },
  { name: 'REST APIs', icon: '🔌', category: 'Backend Technologies' },
  { name: 'JWT', icon: '🔑', category: 'Backend Technologies' },
  { name: 'RBAC', icon: '🛡️', category: 'Backend Technologies' },

  // Frontend Technologies
  { name: 'Next.js', icon: '▲', category: 'Frontend Technologies' },
  { name: 'React', icon: '⚛️', category: 'Frontend Technologies' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend Technologies' },

  // Databases
  { name: 'PostgreSQL', icon: '🐘', category: 'Databases' },
  { name: 'Qdrant', icon: '🌀', category: 'Databases' },
  { name: 'Redis', icon: '🔴', category: 'Databases' },
  { name: 'MongoDB', icon: '🍃', category: 'Databases' },
  { name: 'MySQL', icon: '🐬', category: 'Databases' },
  { name: 'Vector Databases', icon: '🗃️', category: 'Databases' },

  // Cloud & DevOps
  { name: 'Docker', icon: '🐳', category: 'Cloud & DevOps' },
  { name: 'AWS', icon: '☁️', category: 'Cloud & DevOps' },
  { name: 'Azure', icon: '🟦', category: 'Cloud & DevOps' },
  { name: 'Git', icon: '🌿', category: 'Cloud & DevOps' },
  { name: 'GitHub', icon: '🐙', category: 'Cloud & DevOps' },
  { name: 'CI/CD', icon: '🔄', category: 'Cloud & DevOps' },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AutoApply AI',
    description: 'AI-Powered Job Automation Platform that automates applications, recruiter outreach, resume matching, personalized email generation, interview tracking, and job workflow management using AI agents and automation pipelines.',
    longDescription: 'Built an intelligent job automation platform that automates job applications, recruiter outreach, resume matching, and personalized email generation using AI workflows. Reduced manual job application effort by approximately 60%.',
    image: '/img/project_autoapply.png',
    tech: ['Python', 'AI Automation', 'FastAPI', 'OpenAI APIs', 'Email Automation'],
    github: 'https://github.com/raghvendrabhati02/AutoApply-AI',
    demo: 'https://github.com/raghvendrabhati02/AutoApply-AI',
    featured: true,
    category: 'AI/ML',
  },
  {
    id: '2',
    title: 'Enterprise Multi-Agent AI System',
    description: 'Enterprise-grade multi-agent workflows built using LangGraph, FastAPI, and Ollama for business process automation and reporting.',
    longDescription: 'Developed enterprise-grade multi-agent AI workflows using LangGraph, FastAPI, and Ollama for business process automation and reporting. Built as part of Bridgestone India internship, improving reporting pipeline efficiency by ~40%.',
    image: '/img/project_multiagent.png',
    tech: ['LangGraph', 'FastAPI', 'Ollama', 'Qwen 2.5', 'PostgreSQL'],
    github: 'https://github.com/raghvendrabhati02/Enterprise-MultiAgent-AI',
    demo: 'https://github.com/raghvendrabhati02/Enterprise-MultiAgent-AI',
    featured: true,
    category: 'AI/ML',
  },
  {
    id: '3',
    title: 'Legal AI Assistant',
    description: 'Intelligent legal assistant capable of legal research, contract summarization, semantic search, and document-based question answering.',
    longDescription: 'Built an intelligent legal assistant capable of legal research, contract summarization, semantic search, and document-based question answering. Improved document retrieval efficiency by 30–40%.',
    image: '/img/project_legal_ai.png',
    tech: ['Python', 'Embeddings', 'Vector Databases', 'NLP', 'RAG'],
    github: 'https://github.com/raghvendrabhati02/Legal-AI-Assistant',
    demo: 'https://github.com/raghvendrabhati02/Legal-AI-Assistant',
    featured: true,
    category: 'AI/ML',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Bridgestone India',
    role: 'Agentic AI & IT Intern',
    period: 'June 2026 – Present',
    location: 'Indore, MP, India',
    description: [
      'Built a multi-agent LangGraph pipeline using FastAPI and Qwen 2.5 running on Ollama for enterprise sales reporting automation.',
      'Automated reporting workflows used by 15+ employees, reducing manual effort and improving operational efficiency.',
      'Improved enterprise workflow efficiency by approximately 40%.',
      'Worked on API integrations, enterprise data processing, intelligent automation, and production AI systems.',
    ],
    tech: ['LangGraph', 'FastAPI', 'Ollama', 'Qwen 2.5', 'PostgreSQL', 'Python'],
    type: 'work',
  },
  {
    id: '2',
    company: 'Institute of Engineering & Science, IPS Academy',
    role: 'B.Tech CSE (Data Science)',
    period: '2022 – 2026',
    location: 'Indore, MP, India',
    description: [
      'Final-year Computer Science student specializing in Artificial Intelligence, Machine Learning, Data Science, Agentic AI Systems, and Enterprise AI Solutions.',
      'Maintained a cumulative CGPA of 7.8/10.',
      'Developed multiple high-fidelity machine learning models and end-to-end AI applications as course and major projects.',
    ],
    tech: ['Python', 'Machine Learning', 'Data Science', 'SQL', 'Git', 'NumPy', 'Pandas'],
    type: 'education',
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  { value: '10', label: 'Projects Built', suffix: '+' },
  { value: '1', label: 'Years of Experience', suffix: '+' },
  { value: '5', label: 'AI Systems Developed', suffix: '+' },
  { value: 'Enterprise', label: 'AI Experience', suffix: '' },
]
