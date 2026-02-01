"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { Home, User, Briefcase, Layers, FileText, Smartphone, Mail, LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const sections = items.map(item => item.url.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeItem = items.find(item => item.url === `#${entry.target.id}`)
            if (activeItem) {
              setActiveTab(activeItem.name)
            }
          }
        })
      },
      {
        rootMargin: "-20% 0px -20% 0px", // Trigger when element is near center
        threshold: 0.1
      }
    )

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-zinc-900/40 border border-white/10 backdrop-blur-lg py-2 px-6 h-12 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault()
                const targetId = item.url.replace('#', '')
                const element = document.getElementById(targetId)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  setActiveTab(item.name)
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-1.5 rounded-full transition-colors",
                "text-zinc-400 hover:text-white",
                isActive && "text-flame-orange",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#fe7f2d] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#fe7f2d]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#fe7f2d]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#fe7f2d]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
