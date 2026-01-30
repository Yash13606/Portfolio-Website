"use client"

import { Home, User, Briefcase, Mail, Award } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import Hero from "@/components/ui/animated-shader-hero"
import AboutSection from "@/components/about-section"
import GodRaysBackground from "@/components/ui/god-rays-background"
import { FeaturedProjects } from "@/components/featured-projects"
import { Footer } from "@/components/ui/footer-section"

export default function Page() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Certificates', url: '#certificates', icon: Award },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar items={navItems} />
      
      {/* Home Section with Animated Shader Hero */}
      <section id="home">
        <Hero
          headline={{
            line1: "Yash A",
            line2: "Building the Decentralized Future"
          }}
          subtitle="Smart contract developer with expertise in Solidity, Foundry, and Chainlink oracles. Creating secure, gas-optimized DApps with 95%+ test coverage and real-world utility."
          buttons={{
            primary: {
              text: "View My Projects",
              onClick: handleViewProjects
            },
            secondary: {
              text: "Get In Touch",
              onClick: handleViewContact
            }
          }}
        />
      </section>
      
      <div className="relative w-full overflow-hidden bg-[#0a0a0b]">
        {/* Shared Background */}
        <div className="absolute inset-0 z-0">
          <GodRaysBackground />
        </div>
        
        {/* Content with z-index to appear above background */}
        <div className="relative z-10">
          {/* About Section */}
          <AboutSection />
          
          <div className="min-h-screen bg-transparent">


        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
          <div className="max-w-7xl w-full">
             <FeaturedProjects />
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              Certifications
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Chainlink Fundamentals
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Cyfrin Updraft</span> • January 2026
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Credential ID: WLQLHJS1N0NW
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Mastered decentralized oracles, data feeds, automation, VRF, CCIP, and real-world data integration in smart contracts.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Foundry Fundamentals
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Cyfrin Updraft</span> • January 2026
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Credential ID: UWUWR87FH0FL
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Specialized in Foundry testing framework, deployment scripting, contract verification, and advanced testing methodologies.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Solidity Smart Contract Development
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Cyfrin Updraft</span> • January 2026
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Credential ID: B85FGDL4R1O3
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Comprehensive training in smart contract architecture, Solidity fundamentals, security patterns, and production deployment.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Blockchain Basics
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Cyfrin Updraft</span> • October 2025
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Credential ID: GAOU35T9NDPP
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Foundation in consensus mechanisms, gas optimization, attack vectors, and Layer 2 scaling solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Data Structures & Algorithms (DSA with Java)
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Apna College</span> • 2025
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Credential ID: 688b79d0a352a888230d4a67
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Advanced DSA training covering algorithm design, complexity analysis, and problem-solving optimization techniques.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  AWS Cloud Practitioner Essentials
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Amazon Web Services</span> • December 2025
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  AWS fundamentals including EC2, S3, Lambda, RDS, DynamoDB, cloud architecture, and security best practices.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                  Oracle Cloud Infrastructure 2025 Certified Data Science Professional
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">Oracle</span> • October 2025
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  Credential ID: 102767083OCI25DSOCP
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Data science workflows on OCI including data handling, machine learning, model deployment, and cloud analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-slate-100">
              Contact Me
            </h2>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Get In Touch</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-slate-900 dark:text-slate-100" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Email</h4>
                    <a href="mailto:yashmarlecha1@gmail.com" className="text-blue-600 hover:underline">
                      yashmarlecha1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-slate-900 dark:text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-slate-900 dark:text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">LinkedIn</h4>
                    <a href="https://linkedin.com/in/yashzzdev1306" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      linkedin.com/in/yashzzdev1306
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-slate-900 dark:text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">GitHub</h4>
                    <a href="https://github.com/Yash13606" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      github.com/Yash13606
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Education</h3>
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  SRM Institute of Science and Technology
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  B.Tech in Computer Science and Engineering (Data Science)
                </p>
                <p className="text-slate-500 dark:text-slate-500">2024 - 2028</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
        </div>
      </div>
    </>
  )
}
