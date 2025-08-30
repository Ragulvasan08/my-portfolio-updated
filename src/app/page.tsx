'use client'

import Starfield from '@/components/Starfield'
import SpaceNavigation from '@/components/SpaceNavigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import EducationSection from '@/components/sections/EducationSection'

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background Elements */}
      <Starfield />
      
      {/* Navigation */}
      <SpaceNavigation />
      
      {/* Main Content */}
      <HeroSection />
      
      {/* Portfolio Sections */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
