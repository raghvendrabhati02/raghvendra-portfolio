'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const achievements = [
    { number: '10+', label: 'Projects Built' },
    { number: '1+', label: 'Years of Experience' },
    { number: '5+', label: 'AI Systems Developed' },
  ]

  const services = [
    {
      title: 'Agentic AI &\nMulti-Agent Systems',
      tags: ['LangGraph', 'FastAPI', 'Ollama'],
      desc: 'Designing and building autonomous multi-agent pipelines and workflows for enterprise process automation.',
      img: '/img/1200x900_s03.webp',
    },
    {
      title: 'Data Science &\nAnalytics',
      tags: ['Python', 'Pandas', 'Scikit-Learn'],
      desc: 'Extracting insights from data, building predictive models, and running statistical analysis to solve business problems.',
      img: '/img/1200x900_s01.webp',
    },
    {
      title: 'Generative AI &\nRAG Solutions',
      tags: ['LangChain', 'LLMs', 'Vector DBs'],
      desc: 'Building intelligent search systems, document-based question answering, and LLM-powered applications.',
      img: '/img/peng.png',
    },
    {
      title: 'Machine Learning\nEngineering',
      tags: ['TensorFlow', 'PyTorch', 'FastAPI'],
      desc: 'Developing, training, and deploying production-grade ML models and intelligent backend APIs.',
      img: '/img/javadev.png',
    },
  ]

  return (
    <section id="about" className="inner about">

      {/* 1. Section Title */}
      <div className="content__block section-grid-title mb-12">
        <p className="h2__subtitle animate-in-up flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>About Me</span>
        </p>
        <h2 className="h2__title animate-in-up font-display font-bold text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[1.2] text-[var(--t-bright)] max-w-[90rem]">
          Designing and developing intelligent multi-agent workflows and enterprise AI solutions.
        </h2>
      </div>

      {/* 2. Achievements Grid */}
      <div className="content__block grid-block mb-16 lg:mb-24">
        <div className="achievements flex flex-col md:flex-row gap-4 justify-between items-stretch">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="achievements__item flex-1 flex flex-col"
            >
              <div className="achievements__card border border-[var(--stroke-elements)] bg-[var(--base-tint)] rounded-[var(--_radius-xl)] p-8 flex flex-col justify-center items-center text-center h-full hover:border-[var(--accent)] hover:bg-[rgba(168,85,247,0.02)] transition-all duration-300">
                <p className="achievements__number font-display font-bold text-[4.8rem] lg:text-[6rem] leading-none mb-2 gradient-fill bg-clip-text text-transparent bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)]">
                  {ach.number}
                </p>
                <p className="achievements__descr font-display font-bold text-[1.5rem] lg:text-[1.8rem] text-[var(--t-muted)]">
                  {ach.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. About Details Block */}
      <div className="content__block grid-block block-large mb-16 lg:mb-24">
        <div className="container-fluid p-0">
          <div className="flex flex-col xl:flex-row gap-8 justify-between items-start">

            {/* Left Bio Text */}
            <div className="w-full xl:w-[63%] grid-item about-descr">
              <p className="about-descr__text animate-in-up font-body text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] 1600:text-[2.4rem] leading-[1.6] text-[var(--t-medium)] mb-8">
                I am a final-year Computer Science student specializing in Data Science and Artificial Intelligence. My primary focus is on <a href="#skills" className="text-link text-[var(--t-bright)]">Agentic AI, Multi-Agent Systems</a>, Large Language Models, Retrieval-Augmented Generation (RAG), and Enterprise AI Solutions.
                <br /><br />
                Currently, I am working as an Agentic AI & IT Intern at <span className="text-[var(--t-bright)] font-semibold">Bridgestone India</span>, where I design and develop intelligent automation systems using LangGraph, FastAPI, Ollama, and modern AI technologies.
                <br /><br />
                I am passionate about solving real-world business problems through AI-powered products, intelligent workflows, and scalable software systems.
                <br /><br />
                For collaborations or professional inquiries, feel free to reach out to me at <a href="mailto:raghuthakur0217@gmail.com" className="text-link-bold">raghuthakur0217@gmail.com</a>. Looking forward to connecting!
              </p>
              <div className="btn-group about-descr__btnholder animate-in-up">
                <a
                  className="btn btn-default btn-hover-accent flex items-center gap-2"
                  href="#resume"
                >
                  <span className="btn-caption">Download Resume</span>
                  <i className="fa-solid fa-download"></i>
                </a>
              </div>
            </div>

            {/* Right Contact Sidebar */}
            <div className="w-full xl:w-[32%] grid-item about-info border border-[var(--stroke-elements)] bg-[var(--base-tint)] rounded-[var(--_radius-xl)] p-8 space-y-6">
              {[
                { label: 'Name', value: 'Raghvendra Bhati' },
                { label: 'Phone', value: '+91 7828059933', href: 'tel:+917828059933' },
                { label: 'Email', value: 'raghuthakur0217@gmail.com', href: 'mailto:raghuthakur0217@gmail.com' },
                { label: 'Location', value: 'Indore, MP, India' },
              ].map(info => (
                <div key={info.label} className="about-info__item border-b border-[var(--stroke-elements)] last:border-b-0 pb-4 last:pb-0">
                  <h6 className="font-display font-bold text-[1.6rem] lg:text-[1.8rem] leading-normal text-[var(--t-bright)]">
                    <small className="block font-sans font-normal text-[1.3rem] lg:text-[1.5rem] text-[var(--t-muted)] mb-1">
                      {info.label}
                    </small>
                    {info.href ? (
                      <a href={info.href} className="text-link-bold">
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </h6>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 4. Services Cards Block */}
      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="cards__item flex flex-col"
              >
                <div className="cards__card border border-[var(--stroke-elements)] bg-[var(--base-tint)] rounded-[var(--_radius-xl)] p-8 flex flex-col justify-between items-stretch h-full hover:border-[var(--accent)] hover:bg-[rgba(168,85,247,0.02)] transition-all duration-300 overflow-hidden relative group">
                  <div className="cards__descr mb-8 relative z-10">
                    <h4 className="cards__title animate-in-up font-display font-bold text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem] 1600:text-[3.4rem] leading-[1.2] text-[var(--t-bright)] whitespace-pre-line mb-4">
                      {svc.title}
                    </h4>
                    <div className="cards__tags flex flex-wrap gap-2 mb-4">
                      {svc.tags.map(tag => (
                        <span key={tag} className="rounded-tag tag-outline">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="small cards__text animate-in-up text-[var(--t-muted)] text-[1.6rem] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="cards__image flex justify-end mt-auto relative z-10 group-hover:scale-[1.03] transition-transform duration-500">
                    <Image
                      src={svc.img}
                      alt={svc.title.replace('\n', ' ')}
                      width={320}
                      height={240}
                      className="w-[85%] max-w-[320px] h-auto object-contain rounded-[var(--_radius-l)]"
                      loading="lazy"
                    />
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
