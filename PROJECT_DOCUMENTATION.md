# Portfolio Project Documentation

## 1. Project Overview

This project is a high-performance, Modern Web3 Developer Portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It features a "Deep Black" aesthetic with "Flame Orange" accents, utilizing heavy animation libraries like **Framer Motion**, **GSAP**, and **Three.js** to create an immersive, control-panel-like user experience.

- **Theme:** Dark Mode / Web3 / Tactical Control Panel
- **Primary Colors:** Deep Black (`#0a0a0b`), Flame Orange (`#FE7F2D`), Glass Accents
- **Core Layout:** Single-page scroll with distinct sections (Hero, About, Expertise, Projects, Certifications, Contact).

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4 compatible imports)
- **Animations:**
  - `framer-motion` (UI interactions, page transitions)
  - `gsap` & `ScrollTrigger` (Complex scroll-driven timelines)
  - `@react-three/fiber` (Shader background)
- **Icons:** `lucide-react`

## 3. Directory Structure

```
d:\Portfolio Site\
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── globals.css     # Global styles, variables, scroll-behavior
│   │   ├── layout.tsx      # Root layout (fonts, providers, smooth-cursor)
│   │   └── page.tsx        # Main entry point (Landing Page compilation)
│   │
│   ├── components/         # Feature Components
│   │   ├── about-section.tsx         # "Who I Am" (MinimalistHero + MagicText)
│   │   ├── certifications-section.tsx# Certificates grid
│   │   ├── contact-section.tsx       # Contact form & social links
│   │   ├── expertise-section.tsx     # Wrapper for Skills
│   │   ├── featured-projects.tsx     # Main Projects grid
│   │   ├── providers.tsx             # Theme/Context providers
│   │   └── ui/                       # Reusable UI primitives & effects
│   │       ├── animated-shader-hero.tsx  # Landing Hero (WebGL)
│   │       ├── circle-menu.tsx          # Interactive Smart Nav (Click-outside, Auto-close)
│   │       ├── scroll-driven-skills.tsx # "Technical Control Panel" (GSAP Pinning)
│   │       ├── animated-project-card.tsx# Stacking image card
│   │       ├── feature-section-with-hover-effects.tsx # Cert cards
│   │       ├── magic-text.tsx           # Scroll-reveal text
│   │       ├── spotlight-new.tsx        # Spotlight & Grid BG effects
│   │       └── particles.tsx            # Background particle system
│   │
│   └── lib/
│       └── utils.ts        # Helper functions (cn merger)
└── tailwind.config.ts      # Tailwind configuration
```

## 4. Key Components Detail

### **Layout Wrapper (`src/app/page.tsx`)**

The master orchestration file.

- **Global Environment:** Implements a fixed "Background Glow" layer using radial gradients to create a continuous atmosphere.
- **Navigation:** Uses `CircleMenu` for a minimalist, out-of-the-way navigation experience.
- **Scroll Management:** Forces scroll-to-top on reload and handles smooth scrolling anchor links.

### **Hero Section (`animated-shader-hero.tsx`)**

- **Visuals:** Custom WebGL shader implementation (`webgl2`).
- **Interaction:** Mouse-reactive fluid simulation.
- **Components:** `TypingAnimation` for dynamic headlines.

### **Expertise / Skills (`scroll-driven-skills.tsx`)**

_Replaced previous Radial Gallery_

- **Design:** "Glassmorphism Control Panel".
- **Interaction:**
  - **Scroll:** GSAP Pinning locks the card while the user scrolls through domains.
  - **Click:** Sidebar items are actionable, instantly snapping the view to the selected skill category.
  - **Visuals:** Active state indicators, deep shadows, and "soft light sweep" effects.

### **Navigation (`circle-menu.tsx`)**

_Replaced Tubelight Navbar_

- **Behavior:** Fixed circular trigger. Expands on click.
- **Smart Logic:** Auto-closes when clicking outside the menu area.

## 5. Styling System

### **Global Variables (`globals.css`)**

```css
:root {
  --flame-orange: #fe7f2d;
  --deep-black: #0a0a0b;
}

section {
  scroll-margin-top: 120px; /* Offset for anchor links */
}
```

### **Transitions**

- **Seamless Fades:** Sections (especially Hero -> About) utilize gradient masks (`h-12`, `h-32`) to blend backgrounds and prevent harsh cut-offs.

## 6. Build Workflow

**Run Development Server:**

```bash
npm run dev
```

**Production Build:**

```bash
npm run build
```

_Note: Build pipeline includes strict type checking and unused code elimination._
