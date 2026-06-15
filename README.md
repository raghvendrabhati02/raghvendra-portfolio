# Alex Chen — AI/ML Engineer Portfolio

A premium, production-ready personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a dark futuristic aesthetic with advanced animations, custom cursor, particle effects, and full responsiveness.

## ✨ Features

- **Premium Loading Animation** — Branded loading screen with progress bar
- **Custom Cursor** — Magnetic cursor with trailing ring effect (disabled on touch devices)
- **Particle Canvas** — Interactive particles with mouse repulsion
- **Animated Text Reveals** — Word-by-word and character-by-character stagger animations
- **Glassmorphism UI** — Frosted glass cards with gradient borders
- **Animated Skill Bars** — Scroll-triggered progress bars with glow effects
- **Project Cards** — Hover effects with image zoom, tech stack tags, GitHub/demo links
- **Experience Timeline** — Interactive tab-style experience viewer
- **Achievement Counters** — Animated counting numbers on scroll
- **Contact Form** — Functional form with status feedback
- **Responsive Navbar** — Active section highlighting, mobile slide-in menu
- **Fully Responsive** — Mobile-first, tested from 320px to 4K

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Cormorant Garamond + Space Grotesk + JetBrains Mono |
| Images | Unsplash (optimized via next/image) |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, CSS variables, utility classes
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Responsive navbar with active section tracking
│   │   └── Footer.tsx       # Minimal footer with socials
│   ├── sections/
│   │   ├── HeroSection.tsx  # Hero with typing animation and particles
│   │   ├── AboutSection.tsx # About with highlight cards
│   │   ├── SkillsSection.tsx # Filterable skill cards with progress bars
│   │   ├── ProjectsSection.tsx # Project cards with hover animations
│   │   ├── ExperienceSection.tsx # Tab-style experience timeline
│   │   ├── AchievementsSection.tsx # Animated stat counters
│   │   └── ContactSection.tsx # Contact form + social links
│   └── ui/
│       ├── CustomCursor.tsx  # Magnetic cursor (desktop only)
│       ├── LoadingScreen.tsx # Branded loading screen
│       ├── Particles.tsx     # Canvas-based particle system
│       └── Reveal.tsx        # Scroll-triggered reveal animations
├── hooks/
│   ├── useCustomCursor.ts   # Cursor position and state
│   └── useActiveSection.ts  # IntersectionObserver-based active section
├── lib/
│   ├── data.ts              # All portfolio content (projects, skills, exp)
│   └── utils.ts             # cn() and helper utilities
└── types/
    └── index.ts             # TypeScript interfaces
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### 1. Update Your Info
Edit `src/lib/data.ts` to change:
- Your name, bio, social links
- Skills and proficiency levels
- Projects (title, description, images, links)
- Work experience and education

### 2. Update Metadata
Edit `src/app/layout.tsx` to update:
- Page title and description
- Open Graph metadata
- Author name

### 3. Color Palette
All colors are CSS variables in `src/app/globals.css`:
```css
--color-accent-cyan: #00f5ff;    /* Primary accent */
--color-accent-violet: #8b5cf6;  /* Secondary accent */
--color-accent-pink: #f472b6;    /* Tertiary accent */
--color-accent-amber: #f59e0b;   /* Quaternary accent */
```

### 4. Contact Form
The form currently simulates sending. To enable real email:
1. Sign up at [EmailJS](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Replace the simulated send in `ContactSection.tsx` with:
```javascript
import emailjs from '@emailjs/browser'
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form,
  'YOUR_PUBLIC_KEY'
)
```

### 5. Resume
Place your resume PDF at `public/resume.pdf`

### 6. Profile Image
Add your photo at `public/profile.jpg` and update `AboutSection.tsx`

## 🚢 Deployment on Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Import your repository
4. Vercel auto-detects Next.js — click Deploy
5. Your site is live in ~60 seconds

### Option 3: Vercel Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## ⚡ Performance

- **Lazy loading** — All images use `loading="lazy"` via next/image
- **Font optimization** — Google Fonts loaded via next/font with `display: swap`
- **Reduced motion** — Respects `prefers-reduced-motion` media query
- **Mobile perf** — Particles disabled on screens < 768px
- **Code splitting** — Automatic via Next.js App Router
- **Image optimization** — Automatic WebP conversion via next/image

## 🌐 Browser Support

Tested and working in:
- Chrome 120+
- Firefox 120+
- Safari 17+
- Edge 120+
- Brave (latest)

## 📱 Responsive Breakpoints

| Breakpoint | Size |
|-----------|------|
| xs | 375px+ |
| sm | 640px+ |
| md | 768px+ |
| lg | 1024px+ |
| xl | 1280px+ |
| 2xl | 1536px+ |
| 3xl | 1920px+ |

## 📄 License

MIT — use freely for personal and commercial projects.

---

Built with ❤️ and a lot of ☕ by Alex Chen
