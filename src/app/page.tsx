'use client'

import { useEffect } from 'react'
import LoadingScreen from '@/components/ui/LoadingScreen'
import CustomCursor from '@/components/ui/CustomCursor'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import PremiumAIBackground from '@/components/ui/PremiumAIBackground'

export default function HomePage() {


  useEffect(() => {
    if (typeof window === 'undefined') return
  }, [])

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden />

      {/* Main Layout Container */}
      <div className="relative min-h-screen text-[var(--t-medium)]">
        
        {/* Dynamic Premium AI Background */}
        <PremiumAIBackground />

        {/* Fixed Left Sidebar Card */}
        <Sidebar />

        {/* Scrollable Right Content Area */}
        <div className="content">
          {/* Floating Pill Navbar */}
          <Navbar />

          {/* Main content sections wrapper */}
          <main className="content__wrapper">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Minimal Footer */}
          <Footer />
        </div>

      </div>
    </>
  )
}
