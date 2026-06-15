'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Check if it's a touch device or viewport is mobile/tablet size
    const isMobileOrTouch = window.matchMedia('(max-width: 991px)').matches || ('ontouchstart' in window)
    if (isMobileOrTouch) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId: number

    // Initialize positions offscreen
    dot.style.transform = `translate3d(-100px, -100px, 0) translate(-50%, -50%)`
    ring.style.transform = `translate3d(-100px, -100px, 0) translate(-50%, -50%)`

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }

    const onPointerOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el && el.closest('[data-cursor="pointer"], a, button, [role="button"]')) {
        ring.classList.add('is-pointer')
      } else {
        ring.classList.remove('is-pointer')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onPointerOver, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onPointerOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
