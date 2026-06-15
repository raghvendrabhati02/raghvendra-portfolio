'use client'

import { motion } from 'framer-motion'
import { useScroll } from '@/components/providers/SmoothScrollProvider'

export default function HeroSection() {
  const lenis = useScroll()
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      if (lenis) {
        const offset = window.innerWidth >= 992 ? -120 : -90
        lenis.scrollTo(el, { offset, duration: 1.2 })
      } else {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="home" className="main intro">

      {/* Headline container */}
      <div id="headline" className="headline flex flex-col justify-start items-start">

        {/* Let's meet pill */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="headline__subtitle flex items-center gap-2 mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>BUILDING THE FUTURE WITH AI</span>
        </motion.p>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-[clamp(3rem,8vw,7.6rem)] leading-[1.1] tracking-[-0.02em] text-[var(--t-bright)] mb-4 uppercase"
        >
          I&apos;M RAGHVENDRA BHATI<br />
          A DATA SCIENTIST<br />
          &amp; AI ENGINEER
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-body text-[clamp(1.4rem,1.5vw,1.8rem)] text-[var(--t-medium)] max-w-[65rem] mb-8 leading-relaxed"
        >
          Final-year Computer Science student specializing in Artificial Intelligence, Machine Learning, Data Science, Agentic AI Systems, and Enterprise AI Solutions. Currently developing production-grade AI applications and multi-agent systems at Bridgestone India.
        </motion.p>

        {/* Buttons holding works and CV download + Scroll Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 lg:gap-12 w-full mt-6 lg:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="headline__btnholder flex flex-col sm:flex-row gap-4"
          >
            <a
              className="btn btn-default btn-hover-accent flex items-center gap-2"
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
            >
              <span>View Projects</span>
              <i className="fa-solid fa-briefcase"></i>
            </a>
            <a
              className="btn btn-default btn-hover-outline flex items-center gap-2"
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
            >
              <span>Download Resume</span>
              <i className="fa-solid fa-download"></i>
            </a>
          </motion.div>

          {/* Rotating Scroll Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rotating-btn self-start sm:self-auto"
          >
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="rotating-btn__link slide-down"
            >
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="textPath" d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z" />
                </defs>
                <g>
                  <use href="#textPath" fill="none"></use>
                  <text fill="var(--t-muted)">
                    <textPath href="#textPath">Scroll for More * Scroll for More * </textPath>
                  </text>
                </g>
              </svg>
              <i className="fa-solid fa-arrow-down"></i>
            </a>
          </motion.div>
        </div>

      </div>

    </section>
  )
}
