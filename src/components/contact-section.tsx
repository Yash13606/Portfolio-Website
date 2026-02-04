"use client";
import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { GradualSpacing } from "@/components/ui/gradual-spacing";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    
    // Create Gmail compose URL
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=yashmarlecha1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in new tab
    window.open(gmailLink, '_blank');
  };

  return (
    <section id="contact" className="w-full relative pt-16 pb-0 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* Centered Header Section */}
        <div className="text-center mb-12">
          <div className="w-[60px] h-[2px] bg-flame-orange mb-5 mx-auto" />
          <p className="text-flame-orange text-xs font-semibold uppercase tracking-[3px] mb-6">GET IN TOUCH</p>
          <GradualSpacing 
            text="Reach Out"
            className="text-4xl md:text-6xl font-bold tracking-tight text-white font-playfair"
          />
          <div className="w-[80px] h-[3px] bg-flame-orange rounded-sm mt-6 mx-auto" />
        </div>

        {/* Main Contact Grid */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 mb-20">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-start pt-10">
            
            <div className="max-w-[500px]">
              <p className="text-white text-xl md:text-2xl font-bold leading-relaxed mb-6">
                Let's Turn Your Idea Into Reality
              </p>
              <ul className="text-text-light text-base space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-flame-orange/20 flex items-center justify-center">
                    <span className="text-flame-orange text-sm">✓</span>
                  </span>
                  <span>Scalable Web Apps & Platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-flame-orange/20 flex items-center justify-center">
                    <span className="text-flame-orange text-sm">✓</span>
                  </span>
                  <span>AI Tools & Workflow Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-flame-orange/20 flex items-center justify-center">
                    <span className="text-flame-orange text-sm">✓</span>
                  </span>
                  <span>Blockchain & Smart Contracts</span>
                </li>
              </ul>
              <p className="text-text-medium text-sm italic">
                From idea to deployment — I handle the tech so you can focus on growth.
              </p>
            </div>

            {/* What Happens After Contact - Timeline */}
            <div className="mt-10 max-w-[500px]">
              <h3 className="text-white text-lg font-semibold mb-6">What happens after you contact me?</h3>
              <div className="relative pl-8 space-y-5">
                {/* Vertical Line */}
                <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-white/20"></div>
                
                {/* Step 1 */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-8 w-5 h-5 rounded-full bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-text-light text-sm">I review your idea personally</p>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-8 w-5 h-5 rounded-full bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-text-light text-sm">You get a reply within 24 hours</p>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start gap-4">
                  <div className="absolute -left-8 w-5 h-5 rounded-full bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p className="text-text-light text-sm">We discuss scope & timeline</p>
                </div>
              </div>
            </div>
          </div>


          {/* Right Column: Form + Contact Info */}
          <div className="flex flex-col justify-center pt-8 space-y-6">
            {/* Form Card Wrapper */}
            <div className="max-w-[700px] w-full ml-auto space-y-6">
              {/* Outer Form Container */}
              <div className="bg-[#1a1a1c] border border-white/20 rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-3">
                
                {/* Row 1: Name and Email side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-flame-orange focus:border-flame-orange transition-all placeholder:text-text-dark"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-flame-orange focus:border-flame-orange transition-all placeholder:text-text-dark"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Message */}
                <div>
                  <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-flame-orange focus:border-flame-orange transition-all resize-none placeholder:text-text-dark min-h-[100px]"
                    required
                  />
                </div>

                {/* Row 3: Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3.5 rounded-full hover:bg-gray-100 transition-all text-base"
                >
                  Start the Conversation
                </button>

              </form>
            </div>

            {/* Compact Contact Info Row - Below Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Email Card */}
              <a 
                href="mailto:yashmarlecha1@gmail.com"
                className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] hover:border-flame-orange/30 transition-all duration-300 flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-flame-orange/20 transition-colors">
                  <Mail className="w-5 h-5 text-flame-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-0.5">Email me</h3>
                  <p className="text-text-light text-xs truncate">yashmarlecha1@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/yashzzdev1306"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] hover:border-flame-orange/30 transition-all duration-300 flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-flame-orange/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-flame-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-0.5">LinkedIn</h3>
                  <p className="text-text-light text-xs truncate">linkedin.com/in/yashzzdev1306</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/Yash13606"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.08] hover:border-flame-orange/30 transition-all duration-300 flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-flame-orange/20 transition-colors">
                  <Github className="w-5 h-5 text-flame-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-0.5">GitHub</h3>
                  <p className="text-text-light text-xs truncate">github.com/Yash13606</p>
                </div>
              </a>

            </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-text-light text-base mt-8 pb-8">
          © 2026 Yash A. Building the decentralized future.
        </div>

      </div>
    </section>
  );
}
