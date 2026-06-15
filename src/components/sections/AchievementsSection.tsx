'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { useInView } from 'react-intersection-observer'
import { ACHIEVEMENTS } from '@/lib/data'

function Counter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress * (2 - progress) // easeOutQuad
      
      setCount(Math.floor(target * easeProgress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const accentColors = [
  { from: '#a855f7', to: '#ec4899' },
  { from: '#06b6d4', to: '#a855f7' },
  { from: '#ec4899', to: '#f97316' },
  { from: '#f59e0b', to: '#ec4899' },
]

export default function AchievementsSection() {
  return (
    <section className="relative py-16 overflow-hidden"
      style={{ background: 'var(--base)', borderTop: '1px solid var(--stroke-elements)', borderBottom: '1px solid var(--stroke-elements)' }}>

      {/* Subtle vertical lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 100px)`,
        }} />

      <div className="container-xl relative z-10">
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((ach, i) => (
            <Reveal key={ach.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="achievements__card text-center cursor-default"
                style={{
                  padding: 'clamp(18px, 2.5vw, 28px) 16px',
                  borderRadius: '20px',
                  border: '1px solid var(--stroke-elements)',
                  background: 'var(--base-tint)',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--stroke-elements)')}
              >
                <p className="font-display font-bold leading-tight mb-2 break-words"
                  style={{
                    fontSize: isNaN(parseInt(ach.value)) ? 'clamp(2rem, 3.2vw, 2.8rem)' : 'clamp(2.4rem, 4.5vw, 3.6rem)',
                    background: `linear-gradient(135deg, ${accentColors[i].from}, ${accentColors[i].to})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {isNaN(parseInt(ach.value)) ? (
                    <span>{ach.value}{ach.suffix || ''}</span>
                  ) : (
                    <Counter target={parseInt(ach.value)} suffix={ach.suffix || ''} duration={2} />
                  )}
                </p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--t-muted)' }}>
                  {ach.label}
                </p>
                <div className="mt-4 h-px mx-auto w-10 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${accentColors[i].from}, ${accentColors[i].to})`, opacity: 0.5 }} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
