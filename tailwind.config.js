/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B0D17',
          medium: '#1B1D29',
          light: '#383B4B',
          accent: '#6366F1',
          gold: '#F59E0B',
          cosmic: '#EC4899',
          emerald: '#10B981',
          cyan: '#06B6D4',
        },
        planet: {
          earth: '#3B82F6',
          mars: '#EF4444',
          jupiter: '#F59E0B',
          saturn: '#8B5CF6',
          venus: '#FBBF24',
          mercury: '#6B7280',
          neptune: '#06B6D4',
          uranus: '#10B981',
        }
      },
      fontFamily: {
        space: ['Orbitron', 'monospace'],
        cosmic: ['Exo 2', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(93, 95, 239, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(93, 95, 239, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
