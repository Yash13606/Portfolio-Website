"use client"

import React from 'react';


import { Home, User, Briefcase, Mail, Layers } from 'lucide-react'
import { CircleMenu } from "@/components/ui/circle-menu" // Added
import Hero from "@/components/ui/animated-shader-hero"
import AboutSection from "@/components/about-section"
import ExpertiseSection from "@/components/expertise-section" // Added import
import { Spotlight, GridBackground } from "@/components/ui/spotlight-new"
import { Particles } from "@/components/ui/particles"

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


  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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

      {/* GLOBAL BACKGROUND GLOW LAYER */}
      <div className="fixed inset-0 -z-50 pointer-events-none bg-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,140,0,0.09),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,140,0,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,140,0,0.04)] to-transparent via-transparent h-full" />
      </div>

      
      {/* Home Section with Animated Shader Hero */}
      <section id="top" className="relative z-10">
        <Hero
          headline={{
            line1: "Yash A",
            line2: "Building the Decentralized Future"
          }}
          subtitle="Smart contract developer specializing in Solidity, Foundry, and Chainlink oracles. Building secure DApps for real-world blockchain solutions."
          buttons={{
            primary: {
              text: "Download Resume",
              onClick: () => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Yash_Resume.pdf';
                link.click();
              }
            },
            secondary: {
              text: "Get In Touch",
              onClick: handleViewContact
            }
          }}
        />
      </section>
      
      {/* About, Projects, Certificates, Contact with Spotlight */}
      <div className="relative w-full overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0">
           <GridBackground />
           <Spotlight />
           <Particles
             className="absolute inset-0"
             quantity={100}
             ease={80}
             color="#ffffff"
             refresh
           />
        </div>
        
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
