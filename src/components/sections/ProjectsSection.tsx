'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'AutoApply AI',
      tags: ['Python', 'FastAPI', 'OpenAI APIs', 'AI Automation'],
      desc: 'Built an intelligent job automation platform that automates job applications, recruiter outreach, resume matching, and personalized email generation using AI workflows. Reduced manual job application effort by approximately 60%.',
      img: '/img/project_autoapply.png',
      largeImg: '/img/project_autoapply.png',
    },
    {
      title: 'Enterprise Multi-Agent AI System',
      tags: ['LangGraph', 'FastAPI', 'Ollama', 'Qwen 2.5'],
      desc: 'Developed enterprise-grade multi-agent AI workflows using LangGraph, FastAPI, and Ollama for business process automation and reporting. Built as part of Bridgestone India internship, improving reporting pipeline efficiency by ~40%.',
      img: '/img/project_multiagent.png',
      largeImg: '/img/project_multiagent.png',
      opposite: true,
    },
    {
      title: 'Legal AI Assistant',
      tags: ['Python', 'Vector DBs', 'RAG', 'NLP'],
      desc: 'Built an intelligent legal assistant capable of legal research, contract summarization, semantic search, and document-based question answering. Improved document retrieval efficiency by 30–40%.',
      img: '/img/project_legal_ai.png',
      largeImg: '/img/project_legal_ai.png',
    },
  ]

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
            {projects.map((project, idx) => (
              <motion.figure 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="gallery__item grid-item relative overflow-hidden rounded-[var(--_radius-xl)] border border-[var(--stroke-elements)] bg-[var(--base-tint)] group cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="gallery__link block w-full overflow-hidden relative aspect-square md:aspect-[4/3] xl:aspect-[5/4] group-hover:scale-[1.03] transition-transform duration-500">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="gallery__image object-cover transition-opacity duration-300 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Caption / Description Overlay */}
                <figcaption className={`gallery__descr p-6 absolute bottom-0 left-0 w-full z-10 transition-all duration-300 ${project.opposite ? 'opposite' : ''}`}>
                  <h5 className="font-display font-bold text-[2rem] lg:text-[2.2rem] text-white leading-normal mb-2">
                    {project.title}
                  </h5>
                  <div className="card__tags flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`rounded-tag text-[1.2rem] h-10 px-4 flex items-center rounded-[var(--_radius-s)] font-semibold 
                          ${project.opposite 
                            ? 'bg-transparent border border-white/20 text-white' 
                            : 'bg-white text-black border-none'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="small text-[var(--t-medium)] text-[1.5rem] leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {project.desc}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
