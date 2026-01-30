"use client";
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, ChevronRight } from 'lucide-react';

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
		label: 'Navigation',
		links: [
			{ title: 'Home', href: '#home' },
			{ title: 'About', href: '#about' },
			{ title: 'Projects', href: '#projects' },
			{ title: 'Certificates', href: '#certificates' },
		],
	},
	{
		label: 'Contact',
		links: [
			{ title: 'Email', href: 'mailto:contact@example.com', icon: Mail },
			{ title: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
			{ title: 'GitHub', href: 'https://github.com', icon: Github },
			{ title: 'Twitter', href: 'https://twitter.com', icon: Twitter },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center border-t border-slate-200 dark:border-slate-800 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16 z-20">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 md:grid-cols-3 xl:gap-8 justify-between">
				<AnimatedContainer className="space-y-4 col-span-1 md:col-span-1">
					<div className="flex items-center gap-2">
                         <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                            Yash A
                         </span>
                    </div>
					<p className="text-muted-foreground mt-4 text-base md:mt-0 max-w-xs text-slate-600 dark:text-slate-400">
						Building the decentralized future, one smart contract at a time.
					</p>
                    <p className="text-muted-foreground text-base text-slate-500 dark:text-slate-500">
						© {new Date().getFullYear()} Yash A. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-2 md:col-span-2 md:mt-0 justify-end">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-3 text-base">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-orange-600 dark:hover:text-orange-400 inline-flex items-center transition-all duration-300 text-slate-600 dark:text-slate-400"
											>
												{link.icon && <link.icon className="me-2 size-5" />}
                                                {!link.icon && <ChevronRight className="me-1 size-4 opacity-50" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
