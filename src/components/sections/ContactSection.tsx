'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 8000)
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error('Contact form submit error:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="inner contact">
      
      {/* 1. Section Title */}
      <div className="content__block section-title mb-12">
        <p className="h2__subtitle animate-in-up flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
            <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>Contact</span>
        </p>
        <h2 className="h2__title animate-in-up font-display font-bold text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[1.2] text-[var(--t-bright)]">
          Let&apos;s make something awesome together!
        </h2>
      </div>

      {/* 2. Contact Form Block */}
      <div className="content__block grid-block block-grid-large mb-16 lg:mb-24">
        <div className="form-container border border-[var(--stroke-elements)] bg-[var(--base-tint)] rounded-[var(--_radius-xl)] p-8 md:p-12 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              /* Success / Reply message */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="form__reply text-center flex flex-col justify-center items-center py-12"
              >
                <i className="fa-regular fa-face-smile text-6xl text-[var(--accent)] mb-4 animate-bounce"></i>
                <p className="reply__title font-display font-bold text-[2.4rem] text-[var(--t-bright)] mb-2">Done!</p>
                <span className="reply__text text-[var(--t-medium)] text-[1.6rem]">
                  Thank you for reaching out. Your message has been sent successfully.
                </span>
              </motion.div>
            ) : (
              /* Contact Form */
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="form contact-form" 
                onSubmit={handleSubmit}
              >
                <div className="container-fluid p-0">
                  <div className="row gx-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Name input */}
                    <div className="form__item col-span-1">
                      <input 
                        type="text" 
                        name="name" 
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name*" 
                        required 
                        className="w-full text-[1.6rem]"
                      />
                    </div>

                    {/* Email input */}
                    <div className="form__item col-span-1">
                      <input 
                        type="email" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address*" 
                        required 
                        className="w-full text-[1.6rem]"
                      />
                    </div>

                    {/* Subject input */}
                    <div className="form__item col-span-1 md:col-span-2">
                      <input 
                        type="text" 
                        name="subject" 
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject*" 
                        required 
                        className="w-full text-[1.6rem]"
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="form__item col-span-1 md:col-span-2">
                      <textarea 
                        name="message" 
                        value={form.message}
                        onChange={handleChange}
                        placeholder="A Few Words*" 
                        required 
                        rows={6}
                        className="w-full text-[1.6rem] resize-none"
                      ></textarea>
                    </div>

                    {/* Error Banner */}
                    {submitStatus === 'error' && (
                      <div className="col-span-1 md:col-span-2 p-4 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.25)] rounded-[var(--_radius-s)] text-[var(--t-bright)] text-[1.5rem] text-center mb-2">
                        Unable to send message. Please try again or contact me directly via email.
                      </div>
                    )}

                    {/* Buttons layout */}
                    <div className="form__item col-span-1 md:col-span-2 mt-4 flex flex-col sm:flex-row gap-4">
                      <button 
                        className="btn btn-default btn-hover-accent flex items-center justify-center gap-2 px-8 h-20 text-[1.6rem] rounded-[var(--_radius-m)] cursor-pointer flex-1 sm:flex-none" 
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <span className="btn-caption font-bold">
                          {isSubmitting ? 'Sending...' : 'Send Email'}
                        </span>
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                      
                      <a 
                        href="https://wa.me/917828059933?text=Hi%20Raghvendra%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-default btn-hover-outline flex items-center justify-center gap-2 px-8 h-20 text-[1.6rem] rounded-[var(--_radius-m)] cursor-pointer flex-1 sm:flex-none text-center"
                      >
                        <span className="btn-caption font-bold">WhatsApp</span>
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Contact Lines Info */}
      <div className="content__block">
        <div className="container-fluid p-0 contact-lines animate-in-up border-t border-[var(--stroke-elements)] pt-12 pb-16">
          <div className="row g-0 flex flex-col md:flex-row gap-8 justify-between items-start">
            
            {/* Location */}
            <div className="col-12 col-md-4 contact-lines__data flex-1">
              <p className="contact-lines__title font-display font-bold text-[1.6rem] text-[var(--t-bright)] mb-1">
                Location
              </p>
              <p className="contact-lines__text font-body text-[1.6rem] text-[var(--t-muted)]">
                <a 
                  className="text-link-bold" 
                  href="https://maps.app.goo.gl/rwVTgeBAK9VnqWEf8" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indore, Madhya Pradesh, India
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="col-12 col-md-4 contact-lines__data flex-1">
              <p className="contact-lines__title font-display font-bold text-[1.6rem] text-[var(--t-bright)] mb-1">
                Phone
              </p>
              <p className="contact-lines__text font-body text-[1.6rem] text-[var(--t-muted)]">
                <a 
                  className="text-link-bold" 
                  href="tel:+917828059933"
                >
                  +91 7828059933
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="col-12 col-md-4 contact-lines__data flex-1">
              <p className="contact-lines__title font-display font-bold text-[1.6rem] text-[var(--t-bright)] mb-1">
                Email
              </p>
              <p className="contact-lines__text font-body text-[1.6rem] text-[var(--t-muted)]">
                <a 
                  className="text-link-bold" 
                  href="mailto:raghuthakur0217@gmail.com"
                >
                  raghuthakur0217@gmail.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
