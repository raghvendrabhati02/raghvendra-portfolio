'use client'

import { useEffect, useState, useRef } from 'react'

interface CursorState {
  x: number
  y: number
  isPointer: boolean
  isHidden: boolean
}

export function useCustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    isPointer: false,
    isHidden: false,
  })
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const trailRef = useRef({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })

  useEffect(() => {
    // Detect touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    let rafId: number

    const updateCursor = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }))
    }

    const animateTrail = () => {
      trailRef.current.x += (cursor.x - trailRef.current.x) * 0.12
      trailRef.current.y += (cursor.y - trailRef.current.y) * 0.12
      setTrail({ x: trailRef.current.x, y: trailRef.current.y })
      rafId = requestAnimationFrame(animateTrail)
    }

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]')
      setCursor(prev => ({ ...prev, isPointer: !!isClickable }))
    }

    const handleMouseLeave = () => setCursor(prev => ({ ...prev, isHidden: true }))
    const handleMouseEnter = () => setCursor(prev => ({ ...prev, isHidden: false }))

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mouseover', handlePointerOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    rafId = requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mouseover', handlePointerOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(rafId)
    }
  }, [cursor.x, cursor.y])

  return { cursor, trail, isTouchDevice }
}
