'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed top-6 left-6 z-50 w-14 h-14 rounded-full glass-effect flex items-center justify-center text-2xl opacity-50">
        <span className="text-yellow-400">☀️</span>
      </div>
    )
  }

  return (
    <motion.button
      className="fixed top-6 left-6 z-50 w-14 h-14 rounded-full glass-effect flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: theme === 'light' 
          ? 'rgba(0, 0, 0, 0.1)' 
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: theme === 'light' 
          ? '1px solid rgba(0, 0, 0, 0.2)' 
          : '1px solid rgba(255, 255, 255, 0.2)'
      }}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="relative"
        animate={{
          rotate: theme === 'light' ? 360 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      >
        {theme === 'light' ? (
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-800"
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-400"
          >
            ☀️
          </motion.span>
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === 'light' 
            ? ['0 0 0 0 rgba(255, 215, 0, 0.4)', '0 0 20px 5px rgba(255, 215, 0, 0.1)']
            : ['0 0 0 0 rgba(135, 206, 235, 0.4)', '0 0 20px 5px rgba(135, 206, 235, 0.1)']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </motion.button>
  )
}
