'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SKILLS } from '@/lib/data'

function StarIcon({ size = 13, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 13 13" fill="currentColor" className={className}>
      <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
    </svg>
  )
}

const CATEGORIES = [
  'AI & Data Science',
  'Programming Languages',
  'AI Frameworks & Libraries',
  'Backend Technologies',
  'Frontend Technologies',
  'Databases',
  'Cloud & DevOps'
] as const

const categoryStyles: Record<string, { color: string; glow: string; border: string }> = {
  'AI & Data Science': { 
    color: '#a855f7', 
    glow: 'rgba(168,85,247,0.15)', 
    border: 'rgba(168,85,247,0.25)' 
  },
  'Programming Languages': { 
    color: '#ec4899', 
    glow: 'rgba(236,72,153,0.15)', 
    border: 'rgba(236,72,153,0.25)' 
  },
  'AI Frameworks & Libraries': { 
    color: '#06b6d4', 
    glow: 'rgba(6,182,212,0.15)', 
    border: 'rgba(6,182,212,0.25)' 
  },
  'Backend Technologies': { 
    color: '#f59e0b', 
    glow: 'rgba(245,158,11,0.15)', 
    border: 'rgba(245,158,11,0.25)' 
  },
  'Frontend Technologies': { 
    color: '#10b981', 
    glow: 'rgba(16,185,129,0.15)', 
    border: 'rgba(16,185,129,0.25)' 
  },
  'Databases': { 
    color: '#6366f1', 
    glow: 'rgba(99,102,241,0.15)', 
    border: 'rgba(99,102,241,0.25)' 
  },
  'Cloud & DevOps': { 
    color: '#14b8a6', 
    glow: 'rgba(20,184,166,0.15)', 
    border: 'rgba(20,184,166,0.25)' 
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="inner skills" style={{ background: 'var(--base)' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 blur-[60px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent)' }} />
      </div>

      {/* Title Header */}
      <div className="content__block section-grid-title mb-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <StarIcon size={11} className="text-[#a855f7]" />
            <span className="section-subtitle text-[#a855f7] font-mono tracking-widest uppercase">Technical Expertise</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[var(--t-bright)]">
            Skills & Technologies
          </h2>
        </Reveal>
      </div>

      {/* Main categories list container */}
      <div className="content__block grid-block">
        <div className="container-fluid p-0 space-y-6">
          {CATEGORIES.map((cat, catIdx) => {
            const style = categoryStyles[cat] || { color: '#a855f7', glow: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.25)' }
            const catSkills = SKILLS.filter(s => s.category === cat)

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: catIdx * 0.08 }}
                className="flex flex-col md:flex-row md:items-center justify-between border border-[var(--stroke-elements)] bg-[rgba(22,22,22,0.4)] backdrop-blur-xl rounded-[var(--_radius-xl)] p-8 md:p-10 hover:border-[rgba(255,255,255,0.08)] transition-all duration-300 gap-6"
              >
                {/* Category info */}
                <div className="w-full md:w-[28%] shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: style.color }} />
                    <h4 className="font-display font-bold text-[2rem] lg:text-[2.2rem] text-[var(--t-bright)]">
                      {cat}
                    </h4>
                  </div>
                  <p className="font-mono text-[1.1rem] lg:text-[1.2rem] tracking-wider uppercase text-[var(--t-muted)]">
                    {catSkills.length} Technologies
                  </p>
                </div>

                {/* Skills badges */}
                <div className="w-full md:w-[68%] flex flex-wrap gap-3">
                  {catSkills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-200 cursor-default select-none border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.015)]"
                      style={{
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.02)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = style.border
                        e.currentTarget.style.backgroundColor = style.glow
                        e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.015)'
                        e.currentTarget.style.boxShadow = 'inset 0 1px 1px rgba(255,255,255,0.02)'
                      }}
                    >
                      {skill.icon && <span className="text-xl leading-none">{skill.icon}</span>}
                      <span className="font-body text-[1.4rem] lg:text-[1.5rem] font-medium text-[var(--t-bright)]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
