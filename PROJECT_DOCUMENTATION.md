# Portfolio Project Documentation

## 1. Project Overview

This project is a high-performance, Modern Web3 Developer Portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. It features a "Deep Black" aesthetic with "Flame Orange" accents, utilizing heavy animation libraries like **Framer Motion** and **Three.js** to create an immersive user experience.

- **Theme:** Dark Mode / Web3 / Cyberpunk-lite
- **Primary Colors:** Deep Black (`#0a0a0b`), Flame Orange (`#FE7F2D`)
- **Core Layout:** Single-page scroll with distinct sections (Hero, About, Projects, Certifications, Contact).

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4 compatible imports)
- **Animations:**
  - `framer-motion` (General UI animations, transitions)
  - `@react-three/fiber` & `@react-three/drei` (3D elements)
  - `lucide-react` (Icons)
- **Key Libraries:** `clsx`, `tailwind-merge` (Class management)

## 3. Directory Structure

```
d:\Portfolio Site\
├── public/                 # Static assets (images, resumes)
│   ├── background-glow.jpg # Global background gradient
│   └── ...
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── globals.css     # Global styles, variables, Tailwind directives
│   │   ├── layout.tsx      # Root layout (fonts, metadata, providers)
│   │   └── page.tsx        # Main entry point (Landing Page)
│   │
│   ├── components/         # React Components
│   │   ├── about-section.tsx         # "Who I Am" section
│   │   ├── certifications-section.tsx# Certificates grid
│   │   ├── contact-section.tsx       # Contact form & social links
│   │   ├── featured-projects.tsx     # main Projects grid
│   │   ├── footer-section.tsx        # Site footer
│   │   └── ui/                       # Reusable UI primitives & effects
│   │       ├── animated-project-card.tsx # Stacking image card
│   │       ├── animated-shader-hero.tsx  # Hero section with 3D/Canvas
│   │       ├── feature-section-with-hover-effects.tsx # Cert cards
│   │       ├── magic-text.tsx           # Scroll-reveal text
│   │       ├── particles.tsx            # Background particle system
│   │       ├── spotlight-new.tsx        # Spotlight & Grid BG effects
│   │       ├── tubelight-navbar.tsx     # Floating navigation
│   │       └── ... (other visual effects)
│   │
│   └── lib/
│       └── utils.ts        # Helper functions (cn merger)
└── tailwind.config.ts      # Tailwind configuration
```

## 4. Key Components Detail

### **Layout Wrapper (`src/app/page.tsx`)**

The master entry point that orchestrates the sections.

- **Background Layer:** Contains `GridBackground`, `Spotlight`, `Particles`, and the `background-glow.jpg` overlay.
- **Navigation:** Uses `NavBar` (Tubelight effect) with anchor links.

### **Hero Section (`src/components/ui/animated-shader-hero.tsx`)**

- **Headline:** "Building the Decentralized Future".
- **Visuals:** Integrated shader/canvas animations.
- **Actions:** Download Resume / Get In Touch.

### **Projects Section (`src/components/featured-projects.tsx`)**

- **Grid:** 2x2 Layout (`grid-cols-1 md:grid-cols-2`).
- **Card Component:** `AnimatedHikeCard` (`src/components/ui/animated-project-card.tsx`).
  - _Features:_ Stacking image animation on hover (fans out images), fixed aspect-ratio, glassmorphism design.

### **Certifications Section (`src/components/certifications-section.tsx`)**

- **Grid:** 2-column layout for wide cards.
- **Component:** `FeaturesSectionWithHoverEffects`.
  - _Features:_ Dynamic border drawing on hover, gradient overlays.

### **About & Contact**

- **About:** Uses `MagicText` for scroll-triggered opacity reveal.
- **Contact:** Standard form layout with social links.

## 5. Styling System (`globals.css`)

The project uses custom CSS variables for easy theming.

```css
:root {
  --flame-orange: #fe7f2d;
  --deep-black: #0a0a0b;
  --card-bg: #1c1c1e;
  /* ... */
}
```

- **Dark Mode Default:** The `.dark` class is applied by default or handled via `next-themes` (though hardcoded dark styles are prevalent).
- **Typography:** Geist Sans / Geist Mono (configured in `layout.tsx`).

## 6. Development Workflow

**Run Code:**

```bash
npm run dev
```

**Build:**

```bash
npm run build
```

## 7. Configuration Files

- **tailind.config.ts**: Configures paths, theme extension (colors, animations), and plugins.
- **tsconfig.json**: TypeScript path aliases (`@/*` -> `./src/*`).
