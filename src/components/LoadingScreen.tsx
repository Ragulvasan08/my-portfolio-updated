'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-space-dark via-space-medium to-space-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Loading Animation */}
      <div className="text-center">
        {/* Central Star */}
        <motion.div
          className="relative mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl"
               style={{
                 boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)',
               }}
          >
            ⭐
          </div>
          
          {/* Orbiting dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: `${30 + i * 8}px 0px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.5 + i * 0.2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading Text */}
        <motion.h2
          className="text-2xl font-space text-gradient mb-4"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Initializing Universe...
        </motion.h2>
        
        <motion.p
          className="text-white/60"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        >
          Preparing your cosmic journey
        </motion.p>
      </div>
    </motion.div>
  )
}
