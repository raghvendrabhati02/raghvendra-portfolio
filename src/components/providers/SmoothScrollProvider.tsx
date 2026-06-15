'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

const ScrollContext = createContext<Lenis | null>(null)

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    setLenisInstance(lenis)

    // RAF loop for smooth scrolling updates
    let rafId: number
    const update = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(update)
    }
    rafId = requestAnimationFrame(update)

    // Capture all hash anchor clicks to use Lenis scrollTo
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          e.preventDefault()
          const offset = window.innerWidth >= 992 ? -120 : -90
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: offset,
            duration: 1.2,
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <ScrollContext.Provider value={lenisInstance}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  return useContext(ScrollContext)
}
