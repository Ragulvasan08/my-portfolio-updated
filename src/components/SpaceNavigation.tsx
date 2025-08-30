'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  id: string
  name: string
  icon: string
  color: string
  position: { x: number; y: number }
}

const navItems: NavItem[] = [
  { id: 'home', name: 'Central Star', icon: '⭐', color: '#F59E0B', position: { x: 50, y: 50 } },
  { id: 'about', name: 'About Galaxy', icon: '🌌', color: '#6366F1', position: { x: 20, y: 25 } },
  { id: 'skills', name: 'Skill Constellation', icon: '✨', color: '#EC4899', position: { x: 80, y: 20 } },
  { id: 'projects', name: 'Project Planets', icon: '🪐', color: '#10B981', position: { x: 15, y: 60 } },
  { id: 'experience', name: 'Experience Nebula', icon: '🌟', color: '#8B5CF6', position: { x: 85, y: 65 } },
  { id: 'education', name: 'Knowledge Universe', icon: '🎓', color: '#06B6D4', position: { x: 25, y: 85 } },
  { id: 'contact', name: 'Communication Hub', icon: '🚀', color: '#EF4444', position: { x: 75, y: 90 } },
]

export default function SpaceNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Navigation Toggle */}
      <motion.button
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full glass-effect flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '🗺️'}
        </motion.span>
      </motion.button>

      {/* Navigation Map Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-effect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-full h-full">
              {/* Navigation Title */}
              <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-space text-gradient mb-4">Universe Map</h2>
                <p className="text-white/70">Click on any celestial body to navigate</p>
              </motion.div>

              {/* Navigation Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${item.position.x}%`,
                    top: `${item.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    scrollToSection(item.id)
                  }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  {/* Planet/Star */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl planet-glow animate-float shadow-lg"
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 0 20px ${item.color}50`
                    }}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Label */}
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded-full glass-effect text-sm whitespace-nowrap"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: hoveredItem === item.id ? 1 : 0,
                      y: hoveredItem === item.id ? 0 : -10
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.div>
                </motion.div>
              ))}

              {/* Constellation Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                {navItems.map((item, index) => {
                  if (index < navItems.length - 1) {
                    const nextItem = navItems[index + 1]
                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1={`${item.position.x}%`}
                        y1={`${item.position.y}%`}
                        x2={`${nextItem.position.x}%`}
                        y2={`${nextItem.position.y}%`}
                        stroke="rgba(93, 95, 239, 0.5)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      />
                    )
                  }
                  return null
                })}
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
