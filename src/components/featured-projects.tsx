"use client";

import { AnimatedHikeCard, Stat } from "@/components/ui/animated-project-card";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { 
  Code, Zap, Wrench, BarChart, Globe, Sparkles, Search, Layout, Server, Shield, Shuffle, Bot, Users 
} from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Decentralized Lottery System",
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop", // crypto/blockchain abstract
        "https://images.unsplash.com/photo-1620321023374-d1a2fad9f546?q=80&w=2532&auto=format&fit=crop", // code screen
        "https://images.unsplash.com/photo-1642104704074-907c0698b98d?q=80&w=2664&auto=format&fit=crop", // ethereum
      ],
      stats: [
        { icon: <Code className="h-4 w-4" />, label: "Solidity" },
        { icon: <Zap className="h-4 w-4" />, label: "Chainlink VRF" },
        { icon: <Wrench className="h-4 w-4" />, label: "Foundry" }
      ] as Stat[],
      description: "Provably fair lottery smart contract using Chainlink VRF for verifiable randomness. Features comprehensive testing with 95%+ coverage and gas-optimized architecture.",
      href: "https://github.com/Yash13606/lottery-smart-contract", // Assuming a generic name if not specific
    },
    {
      title: "FundMe DApp",
      images: [
        "https://images.unsplash.com/photo-1626244464879-1af7e5309605?q=80&w=2574&auto=format&fit=crop", // ether coins
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2602&auto=format&fit=crop", // chart
        "https://images.unsplash.com/photo-1634710212136-1e172a159981?q=80&w=2574&auto=format&fit=crop", // coins
      ],
      stats: [
        { icon: <Code className="h-4 w-4" />, label: "Solidity" },
        { icon: <BarChart className="h-4 w-4" />, label: "Price Feeds" },
        { icon: <Globe className="h-4 w-4" />, label: "Web3" }
      ] as Stat[],
      description: "Full-stack decentralized crowdfunding platform with real-time USD/ETH conversion. Implements automated testing and gas optimization.",
      href: "https://github.com/Yash13606/fund-me-f24" 
    },
    {
      title: "ResearchHub",
      images: [
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop", // books/library
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop", // research
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop", // writing
      ],
      stats: [
        { icon: <Bot className="h-4 w-4" />, label: "AI Integrated" },
        { icon: <Search className="h-4 w-4" />, label: "Multi-DB Search" },
        { icon: <Users className="h-4 w-4" />, label: "Research Community" }
      ] as Stat[],
      description: "AI-powered research platform with unified access to IEEE, ArXiv, and Springer. Features intelligent summarization, personal library management, and a collaborative community where teachers and students connect to initiate research projects.",
      href: "https://github.com/Yash13606/Research-hub"
    },
    {
      title: "Perpetual Abyss",
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // cyber security
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop", // matrix code
        "https://images.unsplash.com/photo-1614064641938-3e813955d23f?q=80&w=2670&auto=format&fit=crop", // neon web
      ],
      stats: [
        { icon: <Server className="h-4 w-4" />, label: "Node.js" },
        { icon: <Shield className="h-4 w-4" />, label: "Bot Detection" },
        { icon: <Shuffle className="h-4 w-4" />, label: "Dynamic Content" }
      ] as Stat[],
      description: "Infinite content generation system that traps malicious web scrapers with realistic fake content. Features algorithmic generation and rate limiting.",
      href: "https://github.com/Yash13606/perpetual-abyss" 
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="w-[60px] h-[2px] bg-flame-orange mx-auto mb-5" />
        <p className="text-flame-orange text-xs font-semibold uppercase tracking-[3px] mb-6">MY WORK</p>
        <GradualSpacing 
          text="Featured Projects"
          className="text-4xl md:text-6xl font-bold tracking-tight text-white font-playfair"
        />
        <div className="w-[80px] h-[3px] bg-flame-orange mx-auto rounded-sm mt-6" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 md:px-6">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <AnimatedHikeCard {...project} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
