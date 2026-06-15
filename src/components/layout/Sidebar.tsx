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
        <div className="avatar__block">
          {/* Logo */}
          <div className="avatar__logo flex items-center mb-4 lg:mb-5">
            <div className="logo__image w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" y="0px"
                width="100%" height="100%" 
                viewBox="0 0 85 85" 
                className="gradient-fill"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="9.9604" y1="75.0338" x2="75.0387" y2="9.9555" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="var(--accent)" />
                    <stop offset="1" stopColor="var(--secondary)" />
                  </linearGradient>
                </defs>
                <g>
                  <path fill="url(#logoGradient)" d="M51,0H34C15.2,0,0,15.2,0,34v17c0,14.3,8.9,26.6,21.4,31.6c0,0,0,0,0,0l0,0C25.3,84.1,29.5,85,34,85h17
                    c6,0,11.7-1.6,16.6-4.3c0.1-0.1,0.2-0.1,0.3-0.2C78.1,74.6,85,63.6,85,51V34C85,15.2,69.8,0,51,0z M83,51c0,10.7-5.3,20.2-13.4,26
                    v-2.5v-3.9h3.9v-3.9h-3.9v-3.9h3.9v-3.9h-3.9H67v-3.9V51h-3.9v3.9v3.9h2.6v3.9v3.9v3.9h-3.9h-3.9v3.9h3.9h3.9v3.9v1
                    C61.3,81.7,56.3,83,51,83H34c-4.5,0-8.7-0.9-12.6-2.6v-2v-3.9h3.9h3.9v-3.9h-3.9h-3.9v-3.9v-3.9v-3.9H24v-3.9V51h-3.9v3.9v3.9h-2.6
                    h-3.9v3.9h3.9v3.9h-3.9v3.9h3.9v3.9v3.9C8.2,72.8,2,62.6,2,51V34C2,16.4,16.4,2,34,2h17c17.6,0,32,14.4,32,32V51z M50.1,54.9H54
                    v3.9v3.9h-3.9v-3.9V54.9z M33.1,54.9H37v3.9v3.9h-3.9v-3.9V54.9z M27.9,51H24v-3.9v-3.9v-3.9h3.9v3.9v3.9V51z M31.8,39.3h-3.9v-3.9
                    h3.9V39.3z M31.8,43.2v-3.9h3.9v3.9H31.8z M63.1,47.1V51h-3.9v-3.9v-3.9v-3.9h3.9v3.9V47.1z M35.7,47.1v-3.9h3.9h3.9h3.9h3.9v3.9
                    h-3.9h-3.9h-3.9H35.7z M59.2,39.3h-3.9v-3.9h3.9V39.3z M55.3,43.2h-3.9v-3.9h3.9V43.2z"/>
                </g>
              </svg>
            </div>
            <div className="logo__caption pl-4">
              <p className="font-display font-bold text-[2.4rem] lg:text-[3rem] leading-[1.06] text-[var(--t-bright)]">
                RAGHVENDRA<br />BHATI
              </p>
            </div>
          </div>
 
          {/* Profile Avatar Image */}
          <div className="avatar__image overflow-hidden rounded-[var(--_radius-l)] mb-2 relative aspect-square max-w-[240px] xl:max-w-[260px] mx-auto w-full">
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
 
        {/* Block 2: Specialization */}
        <div className="avatar__block mb-4 lg:mb-0">
          <h6 className="font-display font-bold text-[1.5rem] lg:text-[1.8rem] leading-normal text-[var(--t-bright)]">
            <small className="block font-sans font-normal text-[1.2rem] lg:text-[1.4rem] text-[var(--t-medium)] mb-1">
              Specialization:
            </small>
            Data Scientist &<br />AI Engineer
          </h6>
        </div>
 
        {/* Block 3: Based in */}
        <div className="avatar__block mb-4 lg:mb-0">
          <h6 className="font-display font-bold text-[1.5rem] lg:text-[1.8rem] leading-normal text-[var(--t-bright)]">
            <small className="block font-sans font-normal text-[1.2rem] lg:text-[1.4rem] text-[var(--t-medium)] mb-1">
              Based in:
            </small>
            Indore, MP, India
          </h6>
        </div>
 
        {/* Block 3.5: Status */}
        <div className="avatar__block mb-4 lg:mb-0">
          <h6 className="font-display font-bold text-[1.4rem] lg:text-[1.6rem] leading-snug text-[var(--t-bright)]">
            <small className="block font-sans font-normal text-[1.2rem] lg:text-[1.4rem] text-[var(--t-medium)] mb-1">
              Status:
            </small>
            Open to AI, ML, Data Science & Agentic AI opportunities
          </h6>
        </div>
 
        {/* Block 4: Socials and CTA button */}
        <div className="avatar__block">
          {/* Socials */}
          <div className="avatar__socials mb-3">
            <ul className="flex justify-between items-center gap-2">
              <li className="flex-1">
                <a 
                  className="w-full h-12 rounded-[var(--_radius-m)] flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-disabled)] hover:text-[var(--t-bright)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
                  href="https://github.com/raghvendrabhati02" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
              </li>
              <li className="flex-1">
                <a 
                  className="w-full h-12 rounded-[var(--_radius-m)] flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-disabled)] hover:text-[var(--t-bright)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
                  href="https://www.linkedin.com/in/raghvendrabhati0217" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
              </li>
              <li className="flex-1">
                <a 
                  className="w-full h-12 rounded-[var(--_radius-m)] flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-disabled)] hover:text-[var(--t-bright)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300"
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
              className="btn btn-default btn-hover-accent w-full flex items-center justify-center text-center font-display font-bold h-14 lg:h-16 text-[1.4rem] lg:text-[1.6rem] rounded-[var(--_radius-m)] transition-all duration-300"
              href="#contact"
              onClick={handleContactClick}
            >
              Let&apos;s Work Together!
            </a>
          </div>
        </div>

      </div>
    </aside>
  )
}
