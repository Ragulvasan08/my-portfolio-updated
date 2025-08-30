'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 1.2,
      },
    },
  }

  const centralStarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 2,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(93, 95, 239, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Central Star */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={centralStarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          {/* Main Star */}
          <motion.div
            className="w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-2xl"
            style={{
              boxShadow: '0 0 100px rgba(255, 215, 0, 0.8), 0 0 200px rgba(255, 215, 0, 0.4)',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <span className="text-6xl">⭐</span>
          </motion.div>

          {/* Orbiting Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: `${100 + i * 20}px 0px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-space font-bold mb-6"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-gradient">S. RAGUL</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          className="text-2xl md:text-3xl text-white/90 mb-8"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'linear-gradient(90deg, #5D5FEF, #E649F5, #FFD700, #5D5FEF)',
              backgroundSize: '300% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Python Developer & Data Analyst
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          Specializing in automation and data analytics. I've reduced manual workloads by 60% through 
          custom Python tools and streamlined reporting processes. Passionate about machine learning, 
          data pipelines, and creating scalable automation systems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-space-accent to-space-cosmic rounded-full text-white font-semibold hover:shadow-lg hover:shadow-space-accent/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Explore Projects
          </motion.button>
          
          <motion.button
            className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📡 Make Contact
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-white/50 text-sm mt-2">Scroll to explore</p>
      </motion.div>
    </section>
  )
}
