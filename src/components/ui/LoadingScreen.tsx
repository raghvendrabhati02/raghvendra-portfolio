'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 18 + 8
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => setVisible(false), 500)
      }
      setProgress(Math.min(current, 100))
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center"
          style={{ background: '#080808' }}
        >
          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-10 blur-[100px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.6), transparent)' }} />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center relative z-10"
          >
            {/* Logo box — like reference loader */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              {/* GPU-Accelerated Glow Overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl blur-md"
                style={{
                  background: 'rgba(168,85,247,0.3)',
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(6,182,212,0.2))',
                  border: '1px solid rgba(168,85,247,0.3)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-bold gradient-text-main" style={{ fontSize: '1.8rem' }}>RB</span>
              </div>
            </div>

            <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: '#555' }}>
              Raghvendra Bhati
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '200px' }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10"
            style={{ width: '200px' }}
          >
            <div className="h-px rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
                  width: `${progress}%`,
                  transition: 'width 0.2s ease',
                }}
              />
            </div>
            <p className="font-mono text-[9px] tracking-widest text-center mt-3" style={{ color: '#444' }}>
              {Math.round(progress)}%
            </p>
          </motion.div>

          {/* Scanning line */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-px">
            <div className="loading-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
