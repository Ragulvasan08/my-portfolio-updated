'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ContactMethod {
  label: string
  value: string
  href: string
  icon: string
  color: string
  description: string
}

const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "ragzvaz08@gmail.com",
    href: "mailto:ragzvaz08@gmail.com",
    icon: "📧",
    color: "#EC4899",
    description: "Let's discuss opportunities"
  },
  {
    label: "Phone",
    value: "+91 9361248455",
    href: "tel:+919361248455",
    icon: "📱",
    color: "#6366F1", 
    description: "Call for immediate connection"
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ragulsrinivasan8/",
    icon: "💼",
    color: "#F59E0B",
    description: "Professional networking"
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/Ragulvasan08",
    icon: "🔗",
    color: "#10B981",
    description: "Explore my code"
  },
  {
    label: "Location",
    value: "Tiruvannamalai, Tamil Nadu",
    href: "#",
    icon: "📍",
    color: "#EF4444",
    description: "Based in India"
  },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('contact')
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

  const itemVariants = {
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

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-6xl font-space text-gradient mb-4">Communication Hub</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to embark on a collaborative journey? Let's connect across the digital cosmos
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-space-accent to-space-cosmic mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {contactMethods.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="group"
              variants={itemVariants}
              onHoverStart={() => setHoveredContact(index)}
              onHoverEnd={() => setHoveredContact(null)}
              whileHover={{ scale: 1.05, y: -5 }}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <motion.div
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full"
                style={{
                  boxShadow: hoveredContact === index ? `0 20px 40px ${contact.color}20` : 'none'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{
                    rotate: hoveredContact === index ? [0, 360] : 0,
                    scale: hoveredContact === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    rotate: { duration: 1, ease: 'easeInOut' },
                    scale: { duration: 0.5, ease: 'easeInOut' }
                  }}
                >
                  {contact.icon}
                </motion.div>

                {/* Label */}
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: contact.color }}
                >
                  {contact.label}
                </h3>

                {/* Value */}
                <p className="text-white/80 font-medium mb-2 break-words">
                  {contact.value}
                </p>

                {/* Description */}
                <p className="text-sm text-white/60">
                  {contact.description}
                </p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: `2px solid ${contact.color}`,
                    opacity: hoveredContact === index ? 0.3 : 0,
                  }}
                  animate={{
                    opacity: hoveredContact === index ? [0.3, 0.6, 0.3] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredContact === index ? Infinity : 0,
                  }}
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl font-bold text-gradient mb-4"
            variants={itemVariants}
          >
            Let's Build Something Amazing Together
          </motion.h3>
          <motion.p
            className="text-lg text-white/80 leading-relaxed"
            variants={itemVariants}
          >
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or share insights about automation, data analytics, and machine learning. Whether you're 
            looking to optimize your data processes, build intelligent systems, or simply want to 
            connect with a fellow data enthusiast, I'd love to hear from you!
          </motion.p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="space-y-6"
          variants={itemVariants}
        >
          <motion.p
            className="text-white/60 text-lg"
            variants={itemVariants}
          >
            Open to new opportunities and collaborations
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:ragzvaz08@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-space-accent to-space-cosmic rounded-full text-white font-semibold hover:shadow-lg hover:shadow-space-accent/50 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📧 Send Message
            </motion.a>
            
            <motion.a
              href="tel:+919361248455"
              className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              📱 Call Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Contact Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: contactMethods[i % contactMethods.length].color + '40',
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
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
