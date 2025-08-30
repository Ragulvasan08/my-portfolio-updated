'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import { AnimatePresence, motion } from 'framer-motion'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
    // Apply initial theme to document
    document.documentElement.setAttribute('data-theme', savedTheme || 'dark')
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-theme', theme)
      // Apply theme class to document
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        {!mounted ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
