'use client'

import { useEffect, useRef, memo } from 'react'

const PremiumAIBackground = memo(function PremiumAIBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Return early on mobile/tablet to avoid any mouse event overhead
    const isMobileDevice = window.matchMedia('(max-width: 1024px)').matches || ('ontouchstart' in window)
    if (isMobileDevice) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty('--mouse-x', `${x}px`)
      container.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="liquid-mesh-container" aria-hidden>
      {/* Grid Mesh Tech Overlay */}
      <div className="grid-overlay" />

      {/* Interactive Ambient Glow */}
      <div className="ambient-glow" />

      {/* Layer 1: Liquid Mesh Gradient Blobs */}
      <div className="liquid-blob blob-1" />
      <div className="liquid-blob blob-2" />
      <div className="liquid-blob blob-3" />
    </div>
  )
})

export default PremiumAIBackground
