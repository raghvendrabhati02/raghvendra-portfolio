'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ExperienceSection() {
  const education = [
    {
      date: '2023 - 2027',
      title: 'B.Tech CSE (Data Science)',
      source: 'Computer Science & Engineering',
      institution: 'Institute of Engineering & Science, IPS Academy, Indore',
      desc: 'Specializing in Artificial Intelligence, Machine Learning, Data Science, Agentic AI Systems, and Enterprise AI Solutions. Maintained a CGPA of 7.8/10.',
    },
    {
      date: '2022 - 2023',
      title: 'Class 12th',
      source: 'MP Board',
      institution: 'St. Paul Hr. Sec. School, Jawar',
      desc: 'Completed senior secondary schooling with a focus on Physics, Chemistry, and Mathematics (PCM).',
    },
    {
      date: '2020 - 2021',
      title: 'Class 10th',
      source: 'MP Board',
      institution: 'St. Paul Hr. Sec. School, Jawar',
      desc: 'Completed secondary schooling with academic honors.',
    },
  ]

  const experience = [
    {
      date: 'June 2026 - Present',
      title: 'Agentic AI & IT Intern',
      company: 'Bridgestone India',
      desc: 'Built a multi-agent LangGraph pipeline using FastAPI and Qwen 2.5 running on Ollama for enterprise sales reporting automation. Automated reporting workflows used by 15+ employees, reducing manual effort and boosting operational efficiency by ~40%.',
    },
  ]

  const whyHireMeCards = [
    {
      title: 'Real-World AI Projects',
      desc: 'Built multiple AI applications including Agentic AI platforms, RAG systems, AI Resume Analyzers, workflow automation tools, enterprise AI assistants, and multi-agent systems focused on solving practical business challenges.',
      icon: 'fa-solid fa-rocket',
    },
    {
      title: 'Enterprise Experience',
      desc: 'Currently working as an AI Intern at Bridgestone India, contributing to enterprise AI initiatives, workflow automation, data processing systems, and production-grade AI solutions.',
      icon: 'fa-solid fa-building',
    },
    {
      title: 'AI + Backend Engineering',
      desc: 'Experienced in Python, FastAPI, LangChain, LangGraph, PostgreSQL, Vector Databases, API development, RAG architectures, and scalable AI system design.',
      icon: 'fa-solid fa-database',
    },
    {
      title: 'Production-Ready Solutions',
      desc: 'Focused on building secure, maintainable, scalable, and deployment-ready AI systems with real-world usability rather than academic proof-of-concept projects.',
      icon: 'fa-solid fa-shield-halved',
    },
  ]

  const certs = [
    { name: 'Advanced Python', img: '/img/Internshala.png' },
    { name: 'AWS Prompt Eng.', img: '/img/Alpha.png' },
    { name: 'Google Cloud Fund.', img: '/img/BharatIntern.png' },
  ]



  return (
    <section id="resume" className="inner resume">

      {/* 1. Header Block */}
      <div className="content__block block-large mb-16 lg:mb-24">
        <p className="h2__subtitle animate-in-up flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>Resume</span>
        </p>
        <h2 className="h2__title animate-in-up font-display font-bold text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[1.2] text-[var(--t-bright)] mb-6">
          Education and practical experience
        </h2>
        <p className="h2__text animate-in-up font-body text-[1.8rem] lg:text-[2rem] text-[var(--t-medium)] leading-relaxed max-w-[80rem]">
          Education is like a never-ending game of &nbsp;
          <a href="#0" className="text-link text-[var(--t-bright)]">&apos;Did I know that?&apos;&mdash; </a>&nbsp;
          where you&apos;re always one step ahead, just enough to seem like you knew it all along, even if you only remembered it five minutes ago!
        </p>
      </div>

      {/* 2. My Education timeline */}
      <div className="content__block block-large mb-16 lg:mb-24">
        <div className="section-h3 mb-8">
          <h3 className="h3__title animate-in-up font-display font-bold text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] 1600:text-[4.4rem] text-[var(--t-bright)] pb-4 border-b border-[var(--stroke-elements)]">
            My education
          </h3>
        </div>

        <div className="container-fluid p-0 resume-lines">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="row g-0 resume-lines__item flex flex-col md:flex-row gap-4 border-b border-[var(--stroke-elements)] py-12 first:border-t first:border-[var(--stroke-elements)]"
            >
              <div className="w-full md:w-[16%] shrink-0">
                <span className="resume-lines__date font-body text-[1.5rem] text-[var(--t-medium)]">
                  {edu.date}
                </span>
              </div>
              <div className="w-full md:w-[42%]">
                <h5 className="resume-lines__title font-display font-bold text-[2.2rem] text-[var(--t-bright)]">
                  {edu.title}
                </h5>
                <p className="resume-lines__source font-sans text-[1.5rem] text-[var(--t-medium)] mt-1">
                  {edu.source} &middot; <span className="font-semibold text-[var(--t-bright)]">{edu.institution}</span>
                </p>
              </div>
              <div className="w-full md:w-[42%]">
                <p className="small resume-lines__descr font-body text-[1.6rem] text-[var(--t-muted)] leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Work Experience timeline */}
      <div className="content__block block-large mb-16 lg:mb-24">
        <div className="section-h3 mb-8">
          <h3 className="h3__title animate-in-up font-display font-bold text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] 1600:text-[4.4rem] text-[var(--t-bright)] pb-4 border-b border-[var(--stroke-elements)]">
            Work experience
          </h3>
        </div>

        <div className="container-fluid p-0 resume-lines">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="row g-0 resume-lines__item flex flex-col md:flex-row gap-4 border-b border-[var(--stroke-elements)] py-12 first:border-t first:border-[var(--stroke-elements)]"
            >
              <div className="w-full md:w-[16%] shrink-0">
                <span className="resume-lines__date font-body text-[1.5rem] text-[var(--t-medium)]">
                  {exp.date}
                </span>
              </div>
              <div className="w-full md:w-[42%]">
                <h5 className="resume-lines__title font-display font-bold text-[2.2rem] text-[var(--t-bright)]">
                  {exp.title}
                </h5>
                <p className="resume-lines__source font-sans text-[1.5rem] text-[var(--t-medium)] mt-1">
                  at <a href="#0" className="text-link-bold">{exp.company}</a>
                </p>
              </div>
              <div className="w-full md:w-[42%]">
                <p className="small resume-lines__descr font-body text-[1.6rem] text-[var(--t-muted)] leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3.5. Why Hire Me Section */}
      <div id="why-hire" className="content__block block-large mb-16 lg:mb-24">
        <div className="section-h3 mb-8">
          <p className="h2__subtitle flex items-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
            </svg>
            <span>✦ Why Hire Me</span>
          </p>
          <h3 className="h3__title font-display font-bold text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] 1600:text-[4.4rem] text-[var(--t-bright)] pb-4 border-b border-[var(--stroke-elements)] mb-6">
            Why Hire Me
          </h3>
          <p className="font-body text-[1.8rem] lg:text-[2rem] text-[var(--t-medium)] leading-relaxed max-w-[80rem] mb-12">
            I design and build end-to-end AI systems that solve real business problems.
            <br /><br />
            From data processing and machine learning to agent orchestration, APIs, deployment, and automation, I focus on creating scalable, production-ready solutions rather than isolated prototypes.
          </p>
        </div>

        {/* Why Hire Me Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyHireMeCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="border border-[var(--stroke-elements)] bg-[rgba(22,22,22,0.4)] backdrop-blur-xl rounded-[var(--_radius-xl)] p-6 hover:border-[var(--accent)] hover:bg-[rgba(168,85,247,0.02)] transition-all duration-300 relative group overflow-hidden flex flex-row items-center gap-6"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-full blur-xl" />

              {/* Icon wrapper */}
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[var(--stroke-elements)] flex items-center justify-center text-[var(--accent)] text-[2rem] group-hover:scale-105 group-hover:border-[var(--accent)] transition-all duration-300">
                <i className={`${card.icon}`}></i>
              </div>
              
              {/* Content wrapper */}
              <div className="flex-1">
                {/* Title */}
                <h5 className="font-display font-bold text-[1.8rem] lg:text-[2rem] text-[var(--t-bright)] mb-1">
                  {card.title}
                </h5>

                {/* Description */}
                <p className="font-body text-[1.4rem] lg:text-[1.5rem] text-[var(--t-muted)] leading-normal line-clamp-2 lg:line-clamp-3">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Certification Stack */}
      <div className="content__block block-large mb-16 lg:mb-24">
        <div className="section-h3 mb-8">
          <h3 className="h3__title animate-in-up font-display font-bold text-[2.8rem] lg:text-[3.4rem] xl:text-[3.8rem] 1600:text-[4.4rem] text-[var(--t-bright)] mb-6">
            The Certification Stack
          </h3>
        </div>

        <div className="tools-cards flex flex-wrap gap-4 justify-start">
          {certs.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="tools-cards__item w-[46%] sm:w-[30%] lg:w-[18%]"
            >
              <div className="tools-cards__card border border-[var(--stroke-elements)] bg-[var(--base-tint)] rounded-[var(--_radius-xl)] p-6 flex flex-col justify-center items-center text-center h-full hover:border-[var(--accent)] hover:bg-[rgba(168,85,247,0.02)] transition-all duration-300">
                <Image
                  className="tools-cards__icon object-contain mb-4 filter drop-shadow-md"
                  src={c.img}
                  alt={c.name}
                  width={64}
                  height={64}
                  loading="lazy"
                />
                <h6 className="tools-cards__caption font-display font-bold text-[1.6rem] text-[var(--t-bright)]">
                  {c.name}
                </h6>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:text-left">
          <a
            href="https://drive.google.com/drive/folders/1B7wHlDu-m5ZT6aKQw63O9ZUcI6Y3-U5p?usp=drive_link"
            className="text-link text-[1.6rem] font-semibold text-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more certifications?
          </a>
        </div>
      </div>



    </section>
  )
}
