'use client'

import Image from 'next/image'
import { useScroll } from '@/components/providers/SmoothScrollProvider'

export default function Sidebar() {
  const lenis = useScroll()
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      if (lenis) {
        const offset = window.innerWidth >= 992 ? -120 : -90
        lenis.scrollTo(contactSection, { offset, duration: 1.2 })
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <aside id="avatar" className="avatar">
      <div className="avatar__container">

        {/* Block 1: Logo and Profile Image */}
        <div className="avatar__block flex flex-col gap-4 w-full">
          {/* Logo, Name and Role Subtitle Container */}
          <div className="flex flex-col gap-2 w-full">
            <div className="avatar__logo flex items-center mb-0">
              {/* Premium Geometric Monogram Logo */}
              <div className="logo__image w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] rounded-lg bg-gradient-to-tr from-[var(--accent)] to-[var(--secondary)] flex items-center justify-center text-[var(--t-opp-bright)] font-display font-black text-[1.4rem] lg:text-[1.7rem] tracking-tight shadow-[0_2px_10px_rgba(139,92,246,0.15)] select-none">
                RB
              </div>
              {/* Name Block */}
              <div className="logo__caption pl-3">
                <p className="font-display font-bold text-[1.6rem] lg:text-[1.8rem] leading-[1.05] tracking-tight text-[var(--t-bright)]">
                  RAGHVENDRA<br />BHATI
                </p>
              </div>
            </div>

          </div>

          {/* Profile Avatar Image */}
          <div className="avatar__image overflow-hidden rounded-[var(--_radius-m)] relative aspect-[3/4] w-[80%] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <Image
              src="/img/raghvendra_avatar.png"
              alt="Raghvendra Bhati Profile Avatar"
              fill
              sizes="(max-width: 991px) 100vw, 260px"
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Block 2: Stacked Role Badges */}
        <div className="avatar__block flex flex-col gap-1.5 items-center w-full">
          <div className="text-[1rem] lg:text-[1.1rem] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 text-center select-none shadow-[0_2px_8px_rgba(168,85,247,0.03)]">
            AI Engineer
          </div>
          <div className="text-[1rem] lg:text-[1.1rem] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 text-center select-none shadow-[0_2px_8px_rgba(168,85,247,0.03)]">
            Data Scientist
          </div>
          <div className="text-[1rem] lg:text-[1.1rem] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 text-center select-none shadow-[0_2px_8px_rgba(168,85,247,0.03)]">
            Agentic AI Developer
          </div>
        </div>

        {/* Block 3: Location */}
        <div className="avatar__block flex items-center justify-center gap-1.5 text-[var(--t-medium)] text-[1.2rem] lg:text-[1.3rem] font-sans font-medium">
          <span>📍</span>
          <span>Indore, MP, India</span>
        </div>

        {/* Block 3.5: Status Availability Indicator */}
        <div className="avatar__block flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(16,185,129,0.04)] border border-[rgba(16,185,129,0.15)] text-[var(--t-bright)] text-[1.1rem] lg:text-[1.2rem] font-sans font-semibold w-full max-w-[250px] mx-auto select-none shadow-[0_2px_8px_rgba(16,185,129,0.02)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to AI, ML & Agentic AI</span>
        </div>

        {/* Block 4: Socials and CTA button */}
        <div className="avatar__block flex flex-col gap-3.5 w-full">
          {/* Socials */}
          <div className="avatar__socials w-full">
            <ul className="flex justify-center items-center gap-3">
              <li>
                <a
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-disabled)] hover:text-[var(--t-bright)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-300"
                  href="https://github.com/raghvendrabhati02"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
              </li>
              <li>
                <a
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-disabled)] hover:text-[var(--t-bright)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-300"
                  href="https://www.linkedin.com/in/raghvendrabhati0217"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
              </li>
              <li>
                <a
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-disabled)] hover:text-[var(--t-bright)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 transition-all duration-300"
                  href="mailto:raghuthakur0217@gmail.com"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope text-lg"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="avatar__btnholder w-full">
            <a
              className="btn btn-default btn-hover-accent w-full flex items-center justify-center text-center font-display font-bold h-11 lg:h-12 text-[1.3rem] lg:text-[1.4rem] rounded-[var(--_radius-m)] transition-all duration-300"
              href="#contact"
              onClick={handleContactClick}
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

      </div>
    </aside>
  )
}
