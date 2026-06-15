'use client'
 
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '@/lib/data'
 
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
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                      {project.tech.map(tag => (
                        <span 
                          key={tag} 
                          className="rounded-tag text-[1rem] h-6 px-2.5 flex items-center rounded-[6px] font-mono tracking-wide bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-elements)] text-[var(--t-medium)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
 
                    {/* Short Description (1-2 lines clamped) */}
                    <p className="font-body text-[var(--t-muted)] text-[1.4rem] leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  </div>
 
                  {/* Action Buttons */}
                  <div className="flex items-center gap-5 pt-3 border-t border-[var(--stroke-elements)]/40 mt-auto">
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
            ))}
          </div>
        </div>
      </div>
 
    </section>
  )
}
