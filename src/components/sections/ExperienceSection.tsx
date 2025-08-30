'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Experience {
  title: string
  company: string
  duration: string
  type: string
  achievements: string[]
  skills: string[]
  icon: string
  color: string
}

const experiences: Experience[] = [
  {
    title: "Data Analyst Lead",
    company: "Ozibook",
    duration: "May 2025 – Present",
    type: "Full-time",
    achievements: [
      "Reduced data collection time by 60% using Python-based scraping tools with Selenium",
      "Created dashboards for 5 major clients that improved campaign performance visibility", 
      "Trained 3 interns on automation techniques and dashboard development",
      "Transformed manual lead generation into automated system, cutting daily task time from 4-5 hours to 2-2.5 hours"
    ],
    skills: ["Python", "Selenium", "Pandas", "SQL", "Data Visualization", "Dashboard Creation", "Automation", "Git"],
    icon: "🌟",
    color: "#EC4899"
  },
  {
    title: "Data Analyst Intern",
    company: "Ozibook", 
    duration: "October 2024 – May 2025",
    type: "Internship",
    achievements: [
      "Developed Python scraping scripts that became foundation for company's automation system",
      "Created standardized dashboard templates in Google Sheets now used across all client reporting",
      "Implemented data cleaning protocols using Excel formulas to ensure consistency",
      "Documented workflows for team knowledge base to facilitate onboarding"
    ],
    skills: ["Python", "BeautifulSoup", "Pandas", "SQL", "Data Cleaning", "Google Sheets", "Automation", "Documentation"],
    icon: "🚀",
    color: "#6366F1"
  }
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('experience')
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-6">
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
          <h2 className="text-4xl md:text-6xl font-space text-gradient mb-4">Experience Nebula</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My professional journey through the data universe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-space-accent to-space-cosmic mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              className="relative"
              variants={itemVariants}
            >
              {/* Experience Card */}
              <motion.div
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  background: `linear-gradient(135deg, ${exp.color}10, rgba(255,255,255,0.05))`,
                  border: `2px solid ${exp.color}40`,
                  boxShadow: `0 8px 32px ${exp.color}20`
                }}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 text-4xl opacity-10"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                >
                  {exp.icon}
                </motion.div>

                {/* Header Section */}
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="text-2xl p-2 rounded-lg"
                      style={{
                        backgroundColor: `${exp.color}20`,
                        border: `1px solid ${exp.color}40`
                      }}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {exp.icon}
                    </motion.div>
                   
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold mb-2"
                        style={{ color: exp.color }}
                      >
                        {exp.title}
                      </motion.h3>
                      <p className="text-xl text-white/80 font-semibold mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-white/60 font-medium">{exp.duration}</span>
                        <span 
                          className="px-2 py-1 rounded-full text-xs font-bold"
                          style={{
                            backgroundColor: `${exp.color}20`,
                            color: exp.color,
                            border: `1px solid ${exp.color}40`
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
                    <span style={{ color: exp.color }}>🎯</span>
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start gap-3 p-3 rounded-lg glass-effect hover:bg-white/5 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: achIndex * 0.1 + index * 0.2 }}
                        whileHover={{ x: 5, scale: 1.01 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                          animate={{
                            scale: [1, 1.2, 1],
                            boxShadow: [`0 0 0 0 ${exp.color}60`, `0 0 0 6px ${exp.color}00`]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: achIndex * 0.2
                          }}
                        />
                        <span className="text-white/70 leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Section */}
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
                    <span style={{ color: exp.color }}>🛠️</span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
                        style={{ 
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: `${exp.color}25`,
                          boxShadow: `0 0 15px ${exp.color}40`,
                          y: -2
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: skillIndex * 0.05 + index * 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Orbital Ring Animation */}
                <motion.div
                  className="absolute -inset-2 rounded-3xl pointer-events-none"
                  style={{
                    border: `1px solid ${exp.color}20`,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.01, 1]
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
