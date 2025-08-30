import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'S. Ragul - Python Developer & Data Analyst',
  description: 'Python Developer and Data Analyst specializing in automation. Reduced manual workload by 60% through custom tools and streamlined reporting processes.',
  keywords: ['portfolio', 'python developer', 'data analyst', 'automation', 'machine learning', 'dashboard creation', 'data pipelines'],
  authors: [{ name: 'S. Ragul' }],
  openGraph: {
    title: 'S. Ragul - Python Developer & Data Analyst',
    description: 'Python Developer and Data Analyst specializing in automation. Reduced manual workload by 60% through custom tools and streamlined reporting processes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* Background stars */}
          <div className="stars" id="stars"></div>
          {/* Theme Toggle */}
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
