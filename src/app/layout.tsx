import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

const display = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raghvendra Bhati - Portfolio',
  description:
    'Raghvendra Bhati - Data Scientist, AI Engineer, and Agentic AI Developer. Portfolio showcasing enterprise AI agents, machine learning workflows, and RAG pipelines.',
  keywords: [
    'Raghvendra Bhati', 'data scientist', 'AI engineer', 'agentic AI', 'multi-agent systems', 'LangGraph', 'FastAPI', 'Ollama', 'resume', 'portfolio', 'personal page', 'cv'
  ],
  authors: [{ name: 'Raghvendra Bhati' }],
  openGraph: {
    title: 'Raghvendra Bhati - Portfolio',
    description: 'Data Scientist & AI Engineer Portfolio - Specializing in Agentic AI and enterprise workflow automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghvendra Bhati - Portfolio',
    description: 'Data Scientist & AI Engineer Portfolio - Specializing in Agentic AI and enterprise workflow automation.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111111',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" color-scheme="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.setAttribute('data-theme', theme);
              if (theme === 'light') {
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.remove('light');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body
        className={`${display.variable} ${body.variable} font-body antialiased`}
      >
        <SmoothScrollProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
