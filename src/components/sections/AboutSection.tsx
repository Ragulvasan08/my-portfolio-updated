'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-6xl font-space text-gradient mb-4">About Galaxy</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-accent to-space-cosmic mx-auto rounded-full"></div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="glass-effect rounded-2xl p-8 md:p-12 mb-8"
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-gradient mb-6"
            variants={itemVariants}
          >
            Professional Summary
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-white/80 leading-relaxed"
            variants={itemVariants}
          >
            Python Developer and Data Analyst specializing in automation. I have successfully reduced manual workloads by 60% through custom tools and streamlined reporting processes. With expertise in data pipelines, automation, and interactive dashboards, I'm passionate about transforming complex data challenges into scalable solutions.
          </motion.p>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={itemVariants}
        >
          <motion.div
            className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-gradient mb-2">60% Efficiency</h4>
            <p className="text-white/70">Reduced manual workload through automation</p>
          </motion.div>

          <motion.div
            className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-xl font-semibold text-gradient mb-2">5 Major Clients</h4>
            <p className="text-white/70">Created dashboards improving performance visibility</p>
          </motion.div>

          <motion.div
            className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold text-gradient mb-2">Team Leadership</h4>
            <p className="text-white/70">Trained 3 interns on automation techniques</p>
          </motion.div>
        </motion.div>

        {/* Location & Contact */}
        <motion.div
          className="mt-12 text-white/60"
          variants={itemVariants}
        >
          <p className="text-lg">📍 Based in Tiruvannamalai, Tamil Nadu, India</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
