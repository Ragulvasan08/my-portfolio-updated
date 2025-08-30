'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  achievements: string[]
  icon: string
  color: string
  gradient: string
}

const projects: Project[] = [
  {
    title: "Personality Prediction System",
    description: "Built ML pipeline analyzing YouTube comments to predict personality traits with 82% accuracy",
    technologies: ["Python", "Decision Trees", "Random Forest", "Django", "Pandas", "Scikit-learn", "API Development"],
    achievements: [
      "82% accuracy in personality trait prediction",
      "Django-based API for real-time predictions", 
      "User-friendly interface for seamless interaction",
      "Comprehensive data preprocessing pipeline"
    ],
    icon: "🧠",
    color: "#EC4899",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    title: "Customer Segmentation Tool", 
    description: "Analyzed e-commerce data to identify 4 distinct customer segments for targeted marketing",
    technologies: ["Python", "K-Means", "DBSCAN", "Data Analysis", "Visualization"],
    achievements: [
      "Identified 4 distinct customer segments",
      "Optimized marketing targeting strategies",
      "Compared multiple clustering algorithms",
      "Delivered actionable business insights"
    ],
    icon: "📊",
    color: "#6366F1", 
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Hand Sign Recognition System",
    description: "Developed real-time gesture recognition achieving 89% accuracy through LSTM architecture",
    technologies: ["Python", "LSTM", "OpenCV", "Computer Vision", "Neural Networks"],
    achievements: [
      "89% accuracy in real-time recognition",
      "LSTM architecture for sequence learning",
      "Data augmentation for improved performance",
      "Robust across different lighting conditions"
    ],
    icon: "✋",
    color: "#F59E0B",
    gradient: "from-yellow-400 to-orange-500"
  }
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('projects')
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={projectVariants}
        >
          <h2 className="text-4xl md:text-6xl font-space text-gradient mb-4">Project Planets</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore the orbital systems of my technical achievements and innovations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-space-accent to-space-cosmic mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group"
              variants={projectVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <motion.div
                className="glass-effect rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.03 }}
                style={{
                  boxShadow: hoveredProject === index ? `0 20px 40px ${project.color}30` : 'none'
                }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Project Icon */}
                <motion.div
                  className="text-5xl mb-6 text-center"
                  animate={{
                    rotate: hoveredProject === index ? [0, 360] : 0,
                    scale: hoveredProject === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    rotate: { duration: 1, ease: 'easeInOut' },
                    scale: { duration: 0.5, ease: 'easeInOut' }
                  }}
                >
                  {project.icon}
                </motion.div>

                {/* Project Title */}
                <h3 
                  className="text-2xl font-bold mb-4 text-center"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white/90 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: achIndex * 0.1 + index * 0.2 }}
                      >
                        <span style={{ color: project.color }}>▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium glass-effect hover:bg-white/20 transition-all duration-300"
                        style={{ 
                          border: `1px solid ${project.color}30`,
                          color: project.color 
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: `0 0 10px ${project.color}40`
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: techIndex * 0.05 + index * 0.3 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Orbital Animation */}
                <motion.div
                  className="absolute -inset-4 rounded-2xl pointer-events-none"
                  style={{
                    border: `2px solid ${project.color}20`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: hoveredProject === index ? 1 : 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={projectVariants}
        >
          <motion.p
            className="text-white/60 mb-6"
            variants={projectVariants}
          >
            Want to see more projects or collaborate?
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-space-accent to-space-cosmic rounded-full text-white font-semibold hover:shadow-lg hover:shadow-space-accent/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
