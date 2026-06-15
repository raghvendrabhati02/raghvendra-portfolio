'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Grid, User, FileText, Mail, Sun, Moon, MessageSquare, Terminal, Menu, X } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useScroll } from '@/components/providers/SmoothScrollProvider'

const NAV_LINKS = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About Me', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Terminal },
  { label: 'Portfolio', href: '#portfolio', icon: Grid },
  { label: 'Resume', href: '#resume', icon: FileText },
  { label: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const lenis = useScroll()

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    NAV_LINKS.forEach(link => {
      const id = link.href.replace('#', '')
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
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
    <>
      {/* ================================================== */}
      {/* 1. DESKTOP FLOATING PILL NAVBAR (>= 992px)         */}
      {/* ================================================== */}
      <motion.header 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 0.65, 0.74, 1.09] }}
        className="header hidden lg:flex items-center justify-between"
      >
        {/* Navigation Menu */}
        <div className="header__navigation flex items-center h-full">
          <nav id="menu" className="menu h-full">
            <ul className="menu__list flex items-center justify-start h-full gap-1 p-1">
              {NAV_LINKS.map(link => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                const Icon = link.icon
                return (
                  <li key={link.label} className="menu__item flex items-center h-full">
                    <a 
                      className={`menu__link btn flex items-center justify-center relative cursor-pointer select-none transition-all duration-300 font-display font-bold
                        w-[4.4rem] h-[4.4rem] rounded-[2rem] text-[1.8rem]
                        lg:w-auto lg:h-[5rem] lg:px-8 lg:rounded-[var(--_radius-m)] lg:text-[1.6rem]
                        xl:h-[5rem] xl:px-8 xl:rounded-[var(--_radius-m)] xl:text-[1.6rem]
                        1600:h-[6rem] 1600:px-10 1600:text-[2rem]
                        ${isActive 
                          ? 'bg-[var(--base-opp)] text-[var(--t-opp-bright)] lg:bg-transparent lg:border lg:border-[var(--stroke-controls-neutral)] lg:text-[var(--t-bright)]' 
                          : 'text-[var(--t-disabled)] hover:text-[var(--t-bright)] bg-transparent border-none'}`}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      <span className="menu__caption hidden lg:inline">{link.label}</span>
                      <Icon className="lg:hidden w-7 h-7" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Header Controls */}
        <div className="header__controls flex items-center justify-end h-full gap-2 p-1">
          {/* Color Switcher Button */}
          <button 
            id="color-switcher" 
            onClick={toggleTheme}
            className="header__switcher btn flex items-center justify-center cursor-pointer select-none transition-all duration-300 text-[var(--t-muted)] hover:text-[var(--t-bright)]
              w-[4.4rem] h-[4.4rem] rounded-[2rem] text-[1.6rem]
              lg:w-[5rem] lg:h-[5rem] lg:rounded-[var(--_radius-m)] lg:bg-transparent lg:border lg:border-transparent lg:text-[var(--t-muted)] lg:backdrop-blur-[10px]
              1600:w-[6rem] 1600:h-[6rem]" 
            type="button" 
            role="switch" 
            aria-label="light/dark mode" 
            aria-checked={theme === 'dark' ? 'true' : 'false'}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {theme === 'dark' ? (
                <Moon className="w-6 h-6 lg:w-7 lg:h-7" />
              ) : (
                <Sun className="w-6 h-6 lg:w-7 lg:h-7" />
              )}
            </motion.div>
          </button>

          {/* Talk Button */}
          <a 
            id="notify-trigger" 
            className="header__trigger btn flex items-center justify-center cursor-pointer select-none transition-all duration-300 font-display font-bold relative overflow-hidden
              w-[4.4rem] h-[4.4rem] rounded-[2rem] text-[1.6rem] bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)]
              lg:w-auto lg:h-[5rem] lg:px-8 lg:rounded-[var(--_radius-m)] lg:bg-transparent lg:border lg:border-transparent
              1600:h-[6rem] 1600:px-10 1600:text-[2rem]"
            href="mailto:raghuthakur0217@gmail.com?subject=Message%20from%20your%20site"
          >
            <span className="trigger__caption hidden lg:inline mr-2 text-[var(--t-opp-bright)]">Let&apos;s Talk</span>
            <MessageSquare className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--t-opp-bright)]" />
          </a>
        </div>
      </motion.header>

      {/* ================================================== */}
      {/* 2. MOBILE TOP HEADER & HAMBURGER TRIGGER (< 992px)  */}
      {/* ================================================== */}
      <div className="mobile-header lg:hidden flex items-center justify-between px-6">
        {/* Logo Icon */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(6,182,212,0.2))',
              border: '1px solid rgba(168,85,247,0.3)',
            }}>
            <span className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] text-[1.3rem]">RB</span>
          </div>
          <span className="font-display font-bold text-[1.5rem] tracking-wide text-[var(--t-bright)]">RAGHVENDRA</span>
        </div>

        {/* Hamburger Trigger Button */}
        <button 
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="w-12 h-12 rounded-full flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-medium)] hover:text-white"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ================================================== */}
      {/* 3. MOBILE SLIDE-OUT MENU DRAWER                   */}
      {/* ================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-menu-backdrop lg:hidden"
            />

            {/* Menu Drawer Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu-drawer lg:hidden"
            >
              <div className="flex flex-col h-full justify-between p-8">
                
                {/* Header inside Drawer */}
                <div className="flex items-center justify-between border-b border-[var(--stroke-elements)] pb-6 mb-8">
                  <span className="font-display font-bold text-[1.8rem] text-[var(--t-bright)]">Navigation</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-medium)] hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-start space-y-4">
                  {NAV_LINKS.map((link, idx) => {
                    const id = link.href.replace('#', '')
                    const isActive = activeSection === id
                    const Icon = link.icon
                    return (
                      <motion.a 
                        key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center gap-4 py-4 px-6 rounded-2xl font-display font-bold text-[1.8rem] transition-all duration-200
                          ${isActive 
                            ? 'bg-gradient-to-r from-[rgba(168,85,247,0.1)] to-[rgba(6,182,212,0.1)] border border-[rgba(168,85,247,0.2)] text-[var(--t-bright)]' 
                            : 'text-[var(--t-disabled)] hover:text-[var(--t-bright)] border border-transparent'}`}
                      >
                        <Icon className="w-6 h-6 text-[var(--accent)]" />
                        <span>{link.label}</span>
                      </motion.a>
                    )
                  })}
                </nav>

                {/* Controls & CTA inside Drawer */}
                <div className="border-t border-[var(--stroke-elements)] pt-8 mt-auto space-y-6">
                  {/* Theme Switcher */}
                  <div className="flex items-center justify-between px-4">
                    <span className="text-[1.4rem] text-[var(--t-muted)]">Theme Mode</span>
                    <button 
                      onClick={toggleTheme}
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-[var(--stroke-elements)] bg-[rgba(255,255,255,0.02)] text-[var(--t-muted)] hover:text-[var(--t-bright)]"
                      type="button" 
                      aria-label="light/dark mode" 
                    >
                      <motion.div
                        key={theme}
                        initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        {theme === 'dark' ? (
                          <Moon className="w-6 h-6" />
                        ) : (
                          <Sun className="w-6 h-6" />
                        )}
                      </motion.div>
                    </button>
                  </div>

                  {/* Mail button */}
                  <a 
                    className="btn btn-default btn-hover-accent w-full flex items-center justify-center gap-2 h-16 text-[1.6rem] font-bold rounded-2xl"
                    href="mailto:raghuthakur0217@gmail.com?subject=Message%20from%20your%20site"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Let&apos;s Talk</span>
                    <MessageSquare className="w-5 h-5 text-[var(--t-opp-bright)]" />
                  </a>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
