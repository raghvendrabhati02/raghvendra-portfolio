'use client'
 
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '@/lib/data'

function ProjectCard({ project, idx }: { project: typeof PROJECTS[0]; idx: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const [clampedHeight, setClampedHeight] = useState<number | string>('auto')
  const [fullHeight, setFullHeight] = useState<number | string>('auto')
  const [hasOverflow, setHasOverflow] = useState(false)
  const [isClamped, setIsClamped] = useState(true)

  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)')
    const checkDevice = () => {
      setIsTouchDevice(mediaQuery.matches || window.innerWidth < 768)
    }
    
    checkDevice()

    window.addEventListener('resize', checkDevice)
    mediaQuery.addEventListener('change', checkDevice)
    return () => {
      window.removeEventListener('resize', checkDevice)
      mediaQuery.removeEventListener('change', checkDevice)
    }
  }, [])

  useEffect(() => {
    const element = textRef.current
    if (!element) return

    const measureHeights = () => {
      const currentClamped = element.classList.contains('line-clamp-2')

      // Force clamp on to measure clamped height
      element.classList.add('line-clamp-2')
      const clamped = element.clientHeight

      // Force clamp off to measure full height
      element.classList.remove('line-clamp-2')
      const full = element.scrollHeight

      // Restore original state
      if (currentClamped) {
        element.classList.add('line-clamp-2')
      } else {
        element.classList.remove('line-clamp-2')
      }

      setClampedHeight(clamped)
      setFullHeight(full)
      setHasOverflow(full > clamped)
    }

    measureHeights()

    // Safety timer for font rendering
    const timer = setTimeout(measureHeights, 150)

    window.addEventListener('resize', measureHeights)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', measureHeights)
    }
  }, [project.description])

  const showFull = isExpanded || (!isTouchDevice && isHovered)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      className="gallery__item flex flex-col justify-between overflow-hidden rounded-[var(--_radius-xl)] border border-[var(--stroke-elements)] bg-[var(--base-tint)] group hover:border-[var(--accent)]/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.06)] transition-all duration-500 h-full"
    >
      {/* Upper part: Image Wrap */}
      <div className="w-full relative aspect-[16/7.5] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Subtle dark gradient overlay inside image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Lower part: Content section */}
      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          {/* Project Title */}
          <h4 className="font-display font-bold text-[2rem] lg:text-[2.2rem] text-[var(--t-bright)] leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
            {project.title}
          </h4>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-tag text-[1rem] h-6 px-2.5 flex items-center rounded-[6px] font-mono tracking-wide bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-elements)] text-[var(--t-medium)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Readability Background Overlay Wrapper around description */}
          <div
            className={`relative rounded-[8px] p-3 mx-[-12px] my-[-8px] transition-all duration-300 border border-transparent ${
              showFull
                ? 'bg-[var(--description-overlay-hover)] border-[var(--stroke-elements)]/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]'
                : 'bg-transparent'
            }`}
          >
            {/* Height-animated container for full text reveal */}
            <motion.div
              initial={false}
              animate={{
                height: showFull ? fullHeight : clampedHeight,
              }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              onAnimationStart={() => {
                if (showFull) {
                  setIsClamped(false)
                }
              }}
              onAnimationComplete={() => {
                if (!showFull) {
                  setIsClamped(true)
                }
              }}
              className="overflow-hidden relative"
            >
              <p
                ref={textRef}
                className={`font-body text-[var(--t-muted)] text-[1.4rem] leading-relaxed ${
                  isClamped ? 'line-clamp-2' : ''
                }`}
              >
                {project.description}
              </p>
            </motion.div>

            {/* Read More / Read Less Toggle Link for mobile/touch devices */}
            {isTouchDevice && hasOverflow && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-[1.2rem] font-semibold text-[var(--accent)] hover:text-[var(--t-bright)] transition-colors duration-300 flex items-center gap-1 focus:outline-none"
              >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                <i
                  className={`fa-solid ${
                    isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'
                  } text-[0.9rem]`}
                />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5 pt-3 border-t border-[var(--stroke-elements)]/40 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-bold flex items-center gap-1.5 text-[1.3rem] font-semibold text-[var(--accent)] hover:text-[var(--t-bright)] transition-colors duration-300"
          >
            <i className="fa-brands fa-github text-base"></i>
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-bold flex items-center gap-1.5 text-[1.3rem] font-semibold text-[var(--accent)] hover:text-[var(--t-bright)] transition-colors duration-300"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-[1.1rem]"></i>
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
 
export default function ProjectsSection() {
  return (
    <section id="portfolio" className="inner inner-first portfolio">
      
      {/* Title block */}
      <div className="content__block section-grid-title mb-12">
        <p className="h2__subtitle animate-in-up flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>Portfolio</span>
        </p>
        <h2 className="h2__title animate-in-up font-display font-bold text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[1.2] text-[var(--t-bright)] max-w-[90rem]">
          Check out my featured projects
        </h2>
      </div>
 
      {/* Works Gallery Block */}
      <div className="content__block grid-block">
        <div className="container-fluid px-0 inner__gallery">
          <div className="row gx-0 my-gallery grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectCard 
                key={project.title}
                project={project}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </div>
 
    </section>
  )
}
