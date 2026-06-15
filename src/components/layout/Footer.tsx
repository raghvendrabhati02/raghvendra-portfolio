'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="content__block py-4 border-t border-[var(--stroke-elements)] bg-transparent">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-sans text-[11px] md:text-[13px] text-[var(--t-footer)] leading-tight opacity-70">
        <p>
          © {new Date().getFullYear()} Raghvendra Bhati. All rights reserved.
        </p>
        <p>
          Built with Next.js &middot; Framer Motion &middot; Tailwind
        </p>
      </div>
    </footer>
  )
}
