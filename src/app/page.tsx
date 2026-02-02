"use client"

import React from 'react';
import { Home, User, Briefcase, Mail, Layers } from 'lucide-react'
import { CircleMenu } from "@/components/ui/circle-menu"
import DigitalSerenity from "@/components/ui/digital-serenity-animated-landing-page"
import AboutSection from "@/components/about-section"
import ExpertiseSection from "@/components/expertise-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { CertificationsSection } from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"

export default function Page() {
  // Force scroll to top on refresh
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  const menuItems = [
    { label: 'Top', href: '#top', icon: <Home size={20} /> },
    { label: 'About', href: '#about', icon: <User size={20} /> },
    { label: 'Expertise', href: '#expertise', icon: <Briefcase size={20} /> },
    { label: 'Projects', href: '#projects', icon: <Layers size={20} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={20} /> }
  ]

  return (
    <>
      <CircleMenu items={menuItems} />
      
      {/* Digital Serenity Hero Section */}
      <section id="top" className="relative z-10">
        <DigitalSerenity />
      </section>
      
      {/* Content Sections */}
      <div className="relative w-full overflow-hidden bg-black border-none">
        <div className="relative z-10">
          <AboutSection />
          
          <ExpertiseSection />

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center justify-center px-6 relative z-10 pt-0">
            <div className="max-w-7xl w-full">
               <FeaturedProjects />
            </div>
          </section>

          {/* Certificates Section */}
          <section id="certificates" className="flex items-center justify-center px-6 relative z-10 pt-0">
            <div className="max-w-5xl w-full">
              <CertificationsSection />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen flex items-center justify-center relative z-10 pt-0">
             <div className="w-full">
                <ContactSection />
             </div>
          </section>
        </div>
      </div>
    </>
  )
}
