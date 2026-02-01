"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ChevronRight } from "lucide-react";

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: "Navigation",
		links: [
			{ title: "Home", href: "#home" },
			{ title: "About", href: "#about" },
			{ title: "Projects", href: "#projects" },
			{ title: "Certificates", href: "#certificates" },
		],
	},
	{
		label: "Connect",
		links: [
			{ title: "yashmarlecha1@gmail.com", href: "mailto:yashmarlecha1@gmail.com", icon: Mail },
			{ title: "LinkedIn", href: "https://www.linkedin.com/in/yashzzdev1306/", icon: Linkedin },
			{ title: "GitHub", href: "https://github.com/Yash13606", icon: Github },
			{ title: "X", href: "https://x.com/Yash333083", icon: Twitter },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full border-t border-[rgba(254,127,45,0.15)] pt-12 pb-16 md:pt-16 md:pb-20">
			<div className="mx-auto max-w-7xl w-full px-6">
				<div className="grid w-full gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
					{/* Brand + tagline */}
					<AnimatedContainer className="space-y-4 md:col-span-1">
						<span className="text-2xl font-bold tracking-tight text-white md:text-3xl">
							Yash A
						</span>
						<p className="text-text-light text-sm leading-relaxed max-w-xs md:text-base">
							Building the decentralized future, one smart contract at a time.
						</p>
						<p className="text-text-medium text-xs md:text-sm">
							© {new Date().getFullYear()} Yash A. All rights reserved.
						</p>
					</AnimatedContainer>

					{/* Navigation + Connect */}
					<div className="grid grid-cols-2 gap-10 md:col-span-2 md:gap-12 lg:gap-16">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.05 + index * 0.05}>
								<h3 className="text-xs font-semibold uppercase tracking-[3px] text-flame-orange mb-4">
									{section.label}
								</h3>
								<ul className="space-y-3 text-sm md:text-base">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
												rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
												className="text-text-light hover:text-flame-orange inline-flex items-center gap-2 transition-colors duration-200"
											>
												{link.icon ? <link.icon className="size-4 shrink-0 text-flame-orange/80" /> : <ChevronRight className="size-4 shrink-0 opacity-50" />}
												<span className="truncate">{link.title}</span>
											</a>
										</li>
									))}
								</ul>
							</AnimatedContainer>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>["className"];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: "blur(4px)", translateY: 8, opacity: 0 }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-20px" }}
			transition={{ delay, duration: 0.4 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
