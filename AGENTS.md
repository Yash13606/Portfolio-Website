# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Next.js 16 portfolio site with TypeScript, React 19, and Tailwind CSS 4. Features WebGL shader-based animations, 3D card effects, and animated UI components. Built for a blockchain/Web3 developer portfolio.

## Key Commands

### Development
```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Windows-Specific
This project runs on Windows (PowerShell). Use Windows path conventions (`\` instead of `/`) and PowerShell commands.

## Architecture

### Component Structure
- **`src/app/`** - Next.js App Router pages and layouts
  - `page.tsx` - Main page with all sections (Hero, About, Projects, Certificates, Contact)
  - `layout.tsx` - Root layout with Geist fonts and theme provider
- **`src/components/`** - Feature components
  - `about-section.tsx` - Skills showcase with interactive hover slider
  - `featured-projects.tsx` - Project grid with glowing card effects
  - `providers.tsx` - Theme provider wrapper (next-themes)
- **`src/components/ui/`** - Reusable UI components (15 components)
  - WebGL shader components: `animated-shader-hero.tsx`, `dot-shader-background.tsx`, `god-rays-background.tsx`
  - Animation components: `typing-animation.tsx`, `gradual-spacing.tsx`, `animated-slideshow.tsx`
  - Interactive components: `3d-card.tsx`, `spotlight-card.tsx`, `glowing-effect.tsx`, `text-reveal-card.tsx`
  - Navigation: `tubelight-navbar.tsx`
- **`src/lib/utils.ts`** - Single utility: `cn()` for className merging (clsx + tailwind-merge)

### Import Paths
Uses `@/*` alias for `./src/*` (configured in tsconfig.json). Example: `import { cn } from "@/lib/utils"`

### Styling
- Tailwind CSS 4 with dark mode (class-based strategy via next-themes)
- CSS variables in `src/app/globals.css` for theme colors
- Components.json configured for shadcn/ui compatibility (New York style, Lucide icons)
- Default theme: dark mode

### Key Dependencies
- **3D/Animation**: `@react-three/fiber`, `@react-three/drei`, `three`, `framer-motion`, `@paper-design/shaders-react`
- **UI**: `lucide-react`, `class-variance-authority`, `react-icon-cloud`
- **Next.js 16** with App Router, React 19

## Component Patterns

### WebGL Shader Components
Components like `animated-shader-hero.tsx` use:
- Custom WebGL2 renderer class with fragment shaders
- Pointer tracking and mouse interaction
- Canvas refs with `useEffect` cleanup for animations
- Pattern: Create renderer → setup shaders → render loop in requestAnimationFrame

### Animation Components
- Use Framer Motion for transitions (imported as both `framer-motion` and `motion`)
- Intersection Observer for scroll-triggered animations
- Custom hooks for reusable animation logic

### UI Components
- Props-based configuration with TypeScript interfaces
- Client components (`"use client"` directive) for interactivity
- 3D effects using `react-three/fiber` for Three.js in React

## Development Notes

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- JSX: react-jsx (React 19 automatic runtime)
- Module resolution: bundler

### ESLint Setup
- Uses Next.js config presets (`eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`)
- Ignores: `.next/**`, `out/**`, `build/**`

### Page Structure
All sections are on single page (`src/app/page.tsx`) with smooth scroll navigation:
1. Hero section - WebGL shader background with CTA buttons
2. About section - Profile + skills slideshow with god rays background
3. Projects section - Bento-style grid with glowing cards
4. Certificates section - Static cards list
5. Contact section - Contact info + education

Each section uses `id` attributes for anchor navigation (e.g., `#about`, `#projects`).

## Common Tasks

### Adding New UI Components
1. Create in `src/components/ui/` with TypeScript
2. Export component with typed props interface
3. Use `"use client"` directive if component has interactivity
4. Import via `@/components/ui/component-name`

### Modifying Animations
- Shader code is in component files as template strings (GLSL)
- Framer Motion variants defined inline or as constants
- Adjust timing via component props or internal state

### Theme Changes
- Modify CSS variables in `src/app/globals.css`
- Theme provider in `src/components/providers.tsx` (defaultTheme: "dark")
- Components use Tailwind dark: variants

### Adding External Dependencies
- Install via npm (package.json scripts reference npm)
- Types available for major dependencies (@types/*)
