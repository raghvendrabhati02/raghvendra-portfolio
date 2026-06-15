// Global type definitions

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  category: string
}

export interface Skill {
  name: string
  icon?: string
  category: 
    | 'AI & Data Science'
    | 'Programming Languages'
    | 'AI Frameworks & Libraries'
    | 'Backend Technologies'
    | 'Frontend Technologies'
    | 'Databases'
    | 'Cloud & DevOps'
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tech: string[]
  type: 'work' | 'education'
}

export interface Achievement {
  value: string
  label: string
  suffix?: string
}

export interface NavItem {
  label: string
  href: string
}
