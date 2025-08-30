'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Education {
  degree: string
  specialization: string
  institution: string
  duration: string
  description: string
  coursework: string[]
  icon: string
  color: string
}

interface Certification {
  name: string
  issuer: string
  year: string
  badge?: string
  icon: string
  color: string
}

const education: Education = {
  degree: "Integrated M.Tech",
  specialization: "Software Engineering",
  institution: "Vellore Institute of Technology",
  duration: "2019 – 2024",
  description: "Completed a five-year integrated M.Tech program with comprehensive coursework in software engineering and data science fundamentals.",
  coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Machine Learning"],
  icon: "🎓",
  color: "#6366F1"
}

const certifications: Certification[] = [
  {
    name: "Data Analytics Fundamentals",
    issuer: "NASSCOM",
    year: "2023",
    badge: "Gold Badge",
    icon: "🏆",
    color: "#F59E0B"
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    year: "2022",
    icon: "🐍",
    color: "#EC4899"
  },
  {
    name: "Merit Award – Cyber Forensic Science",
    issuer: "Academic Achievement",
    year: "2021",
    icon: "🛡️",
    color: "#10B981"
  }
]

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('education')
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
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-6xl font-space text-gradient mb-4">Knowledge Universe</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My academic foundation and continuous learning journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-space-accent to-space-cosmic mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="glass-effect rounded-2xl p-8 md:p-12 mb-12 hover:bg-white/10 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.div
              className="text-6xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              {education.icon}
            </motion.div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gradient mb-2">{education.degree}</h3>
              <p className="text-xl text-white/80 font-semibold">{education.specialization}</p>
              <p className="text-lg text-white/60">{education.institution}</p>
              <p className="text-white/50">{education.duration}</p>
            </div>
          </div>

          <p className="text-lg text-white/80 text-center mb-8 leading-relaxed">
            {education.description}
          </p>

          {/* Relevant Coursework */}
          <div className="text-center">
            <h4 className="text-xl font-semibold text-white/90 mb-4">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {education.coursework.map((course, courseIndex) => (
                <motion.span
                  key={course}
                  className="px-4 py-2 rounded-full glass-effect text-sm font-medium hover:bg-white/20 transition-all duration-300"
                  style={{
                    border: `1px solid ${education.color}30`,
                    color: education.color
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 15px ${education.color}40`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: courseIndex * 0.1 + 0.5 }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={itemVariants}
        >
          <motion.h3
            className="text-3xl font-bold text-gradient text-center mb-8"
            variants={itemVariants}
          >
            Certifications & Awards
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Certification Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  {cert.icon}
                </motion.div>

                {/* Certification Name */}
                <h4 
                  className="text-lg font-bold mb-2"
                  style={{ color: cert.color }}
                >
                  {cert.name}
                </h4>

                {/* Issuer and Year */}
                <p className="text-white/80 font-medium mb-1">{cert.issuer}</p>
                <p className="text-white/60 text-sm mb-2">{cert.year}</p>

                {/* Badge (if any) */}
                {cert.badge && (
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${cert.color}20`,
                      color: cert.color,
                      border: `1px solid ${cert.color}30`
                    }}
                    whileHover={{
                      boxShadow: `0 0 15px ${cert.color}40`
                    }}
                  >
                    {cert.badge}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Education Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
