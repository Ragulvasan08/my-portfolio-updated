'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SkillCategory {
  title: string
  icon: string
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: "💻",
    color: "#6366F1",
    skills: ["Python", "Selenium", "BeautifulSoup", "Pandas", "SQL", "Flask", "HTML/CSS/JS"]
  },
  {
    title: "Data & Development",
    icon: "🔧",
    color: "#EC4899",
    skills: ["Data Cleaning", "Dashboard Creation", "REST APIs", "OOP", "Git"]
  },
  {
    title: "ML & Analysis",
    icon: "🧠",
    color: "#10B981",
    skills: ["Decision Trees", "Random Forest", "K-Means", "DBSCAN", "LSTM", "Data Visualization", "OpenCV"]
  }
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skills')
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={categoryVariants}
        >
          <h2 className="text-4xl md:text-6xl font-space text-gradient mb-4">Skill Constellation</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A universe of technologies and tools that power my development journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-space-accent to-space-cosmic mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              variants={categoryVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: categoryIndex * 0.5,
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <div 
                  className="w-16 h-1 mx-auto rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full glass-effect text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: `0 0 20px ${category.color}50` 
                    }}
                    style={{
                      border: `1px solid ${category.color}30`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skill Orbs Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
