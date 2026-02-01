"use client";

import {
	Link2,
	Cpu,
	Code2,
	Layers,
	BookOpen,
	Cloud,
	Database,
	type LucideIcon,
} from "lucide-react";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

type Certification = {
	title: string;
	issuer: string;
	date: string;
	credentialId?: string;
	description: string;
	icon: LucideIcon;
	iconColor: string;
};

const certifications: Certification[] = [
	{
		title: "Chainlink Fundamentals",
		issuer: "Cyfrin Updraft",
		date: "Jan 2026",
		credentialId: "WLQLHJS1N0NW",
		description: "Decentralized oracles, data feeds, automation, VRF, CCIP, and real-world data integration in smart contracts.",
		icon: Link2,
		iconColor: "text-blue-500",
	},
	{
		title: "Foundry Fundamentals",
		issuer: "Cyfrin Updraft",
		date: "Jan 2026",
		credentialId: "UWUWR87FH0FL",
		description: "Foundry testing framework, deployment scripting, contract verification, and advanced testing methodologies.",
		icon: Cpu,
		iconColor: "text-purple-500",
	},
	{
		title: "Solidity Smart Contract Development",
		issuer: "Cyfrin Updraft",
		date: "Jan 2026",
		credentialId: "B85FGDL4R1O3",
		description: "Smart contract architecture, Solidity fundamentals, security patterns, and production deployment.",
		icon: Code2,
		iconColor: "text-emerald-500",
	},
	{
		title: "Blockchain Basics",
		issuer: "Cyfrin Updraft",
		date: "Oct 2025",
		credentialId: "GAOU35T9NDPP",
		description: "Consensus mechanisms, gas optimization, attack vectors, and Layer 2 scaling solutions.",
		icon: Layers,
		iconColor: "text-amber-500",
	},
	{
		title: "Data Structures & Algorithms (DSA with Java)",
		issuer: "Apna College",
		date: "2025",
		credentialId: "688b79d0a352a888230d4a67",
		description: "Algorithm design, complexity analysis, and problem-solving optimization techniques.",
		icon: BookOpen,
		iconColor: "text-cyan-500",
	},
	{
		title: "AWS Cloud Practitioner Essentials",
		issuer: "Amazon Web Services",
		date: "Dec 2025",
		description: "EC2, S3, Lambda, RDS, DynamoDB, cloud architecture, and security best practices.",
		icon: Cloud,
		iconColor: "text-orange-500",
	},
	{
		title: "OCI 2025 Certified Data Science Professional",
		issuer: "Oracle",
		date: "Oct 2025",
		credentialId: "102767083OCI25DSOCP",
		description: "Data science workflows on OCI: data handling, ML, model deployment, and cloud analytics.",
		icon: Database,
		iconColor: "text-violet-500",
	},
];

export function CertificationsSection() {
	// Transform certifications to feature format
	const features = certifications.map((cert) => ({
		title: cert.title,
		description: cert.description,
		icon: cert.icon,
		iconColor: cert.iconColor,
		metadata: `${cert.issuer} · ${cert.date}${cert.credentialId ? ` · ID: ${cert.credentialId}` : ""}`,
	}));

	return (
		<section className="py-0">
			{/* Section Header */}
			<div className="text-center mb-20 relative z-10">
				<div className="w-[60px] h-[2px] bg-flame-orange mx-auto mb-5" />
				<p className="text-flame-orange text-xs font-semibold uppercase tracking-[3px] mb-6">CREDENTIALS</p>
				<GradualSpacing
					text="Certifications"
					className="text-4xl md:text-6xl font-bold tracking-tight text-white font-playfair"
				/>
				<div className="w-[80px] h-[3px] bg-flame-orange mx-auto rounded-sm mt-6" />
				<p className="mt-6 text-sm text-text-light md:text-base max-w-2xl mx-auto">
					Credentials and courses in blockchain, smart contracts, cloud, and data science.
				</p>
			</div>

			<FeaturesSectionWithHoverEffects features={features} />
		</section>
	);
}
