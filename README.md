# fincke.dev

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Website](https://img.shields.io/badge/Website-Live-success?style=flat-square&logo=vercel)](https://fincke.dev)
[![CI](https://github.com/ggfincke/fincke.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/ggfincke/fincke.dev/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A modern, responsive personal portfolio built with Next.js 15, React 19, and Tailwind CSS 4. Includes a clean, minimalist UI, responsive layout with a fixed sidebar on desktop, smooth animations, multi-theme support with a theme selector, and a full CI/CD pipeline including Lighthouse checks and automated dependency management.

## Live Site

Visit https://fincke.dev

## Features

- Responsive layout: custom breakpoint utilities and desktop sidebar
- Modern UI: smooth transitions, animated hero typing effect, pagination dots
- Theming: multiple color themes via CSS variables + selector
- Sections: Hero, About, Experience (redirects to resume), Projects + archive
- Interactive elements: skill pills with hover tooltips showing related projects
- Performance: Next.js 15 App Router, React 19, Turbopack dev server
- Analytics & fonts: Vercel Analytics, Geist Sans and Geist Mono
- CI/CD: lint, type-check, build, Lighthouse CI with thresholds
- Automation: Dependabot updates, git hooks for versioning/CHANGELOG

## Tech Stack

- Framework: Next.js 15.5.2 (App Router)
- Frontend: React 19.1.1, TypeScript 5
- Styling: Tailwind CSS 4.1.12 + custom CSS
- Theming: next-themes + generated CSS variables
- Analytics: @vercel/analytics
- Tooling: ESLint 9, Turbopack, PostCSS
- CI/CD: GitHub Actions (CI, releases, dependency health)
- QA: Lighthouse CI (perf/accessibility/best-practices/SEO budgets)
- Deploy: Vercel

## Project Structure

```
fincke.dev/
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── ci.yml                # Lint, typecheck, build, Lighthouse CI
│       ├── dependencies.yml      # Security, license, outdated checks
│       ├── release-on-main.yml   # Release + tag on main
│       └── tag-on-dev.yml        # Prerelease tag on dev
├── .githooks/
│   ├── install-hooks.sh          # Sets core.hooksPath
│   ├── pre-commit                # Auto-version + CHANGELOG on dev
│   └── pre-push                  # Enforce CHANGELOG on dev pushes
├── public/
│   ├── assets/                   # Images, logos, icons, project docs
│   └── documents/resume.pdf      # Resume (experience route redirects here)
├── src/
│   ├── app/                      # App Router
│   │   ├── layout.tsx            # Fonts, metadata, analytics
│   │   ├── page.tsx              # Home (hero, about, experience, projects)
│   │   ├── experience/           # Redirect to resume PDF
│   │   └── projects/             # Projects archive page
│   ├── themes/                   # Theme config and helpers
│   │   └── config.ts             # Theme definitions (source of truth)
│   ├── components/
│   │   ├── display/              # Cards, badges, pills, tooltips
│   │   ├── interactive/          # Social icons, etc.
│   │   ├── layout/               # Sidebar, timeline pieces
│   │   ├── logos/                # Company/brand logos
│   │   └── navigation/           # Arrows, buttons, sidebar nav
│   ├── data/
│   │   ├── content/              # About/experience copy
│   │   └── structured/           # projects/experiences/skills data
│   ├── hooks/                    # Breakpoints, nav, animations
│   ├── sections/                 # Home sections + project table
│   ├── styles/                   # Global styles + tokens + animations
│   ├── constants/                # Breakpoints/durations helpers
│   ├── types/                    # Shared TypeScript types
│   └── utils/                    # Version util
├── scripts/
│   └── generate-theme-css.js     # Builds styles/themes.css from themes/config.ts
├── CHANGELOG.md
├── eslint.config.mjs
├── lighthouserc.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── LICENSE
```

## Local Development

### Prerequisites

- Node.js 20+ (per `package.json` engines)
- npm 10+

### Setup

1) Install dependencies:
   ```bash
   npm install
   ```
2) Install git hooks (recommended):
   ```bash
   npm run install-hooks
   ```
3) Start dev server:
   ```bash
   npm run dev
   ```
4) Open http://localhost:3000

### Scripts

- `dev`: Next dev with Turbopack
- `build`: Production build
- `start`: Start production server
- `lint`: ESLint (flat config)
- `lint:fix`: ESLint with `--fix`
- `typecheck`: TypeScript checks
- `install-hooks`: Configure repo git hooks
- `generate:themes`: Rebuilds `src/styles/themes.css` from `src/themes/config.ts`

### Git Hooks

- Pre-commit: on `dev`, auto-bumps `package.json` to a `-prerelease.<date>` and prepends a CHANGELOG section
- Pre-push: blocks pushes to `dev` unless CHANGELOG was updated and versions match
- Bypass temporarily with `--no-verify` (not recommended)

## CI/CD Pipeline

- CI: lint, type-check, build, Lighthouse CI (see `.github/workflows/ci.yml`)
- Dependency health: audit, license, and outdated reports (scheduled/dispatch)
- Releases: prerelease tags on `dev`, releases/tags on `main`
- Lighthouse budgets (see `lighthouserc.json`):
  - Performance ≥ 0.80, Accessibility/Best-Practices/SEO ≥ 0.85

## Theming

- Source of truth: `src/themes/config.ts` defines all themes (default: `ocean`).
- Theme CSS: `npm run dev` and `npm run build` auto-generate `src/styles/themes.css` via `scripts/generate-theme-css.js`.
- Theme selector: floating on desktop, inline in the footer on small screens.
- Customize: add/edit a theme in `src/themes/config.ts` and run `npm run generate:themes` if you want to rebuild the CSS explicitly.

## Content Management

- Experiences: `src/data/structured/experiences.tsx`
- Projects: `src/data/structured/projects.tsx` (helpers: `getFeaturedProjects`, `getProjectsBySkill`)
- Skills: `src/data/structured/skills.tsx`
- Copy: `src/data/content/` (about, experience)

## Custom Hooks

- `useBreakpoint`: responsive helpers and layout/nav utilities
- `useSharedBreakpoint`: shared breakpoint state (hydration-safe)
- `useNav`: scroll/section tracking + sidebar visibility
- `useSectionNavigation`: index-based navigation + transitions
- `useAnimation` family: `useTypingAnimation`, `useTransitionAnimation`, `useFadeAnimation`, `useScaleAnimation`

## Deployment

Hosted on Vercel. Connect the repo, set the project, and deploy on push. The experience page redirects to `public/documents/resume.pdf`.

## Using This Template

If you fork this for your own portfolio:

1) Update data in `src/data/structured/` and copy in `src/data/content/`
2) Replace assets in `public/assets/` and `public/documents/resume.pdf`
3) Adjust metadata in `src/app/layout.tsx`
4) Keep CI and hooks, or simplify as you prefer

## Contributing

- Personal portfolio: I’m not accepting direct contributions or feature requests.
- Fork-friendly: please feel free to fork and adapt it for your own site.
- Attribution: if you reuse significant design/code, include a link back to https://fincke.dev.

## Credit & License

- Attribution appreciated if you reuse the design: link back to https://fincke.dev
- Licensed under MIT — see `LICENSE`

## Contact

Questions or suggestions? Reach out via the links on https://fincke.dev or open an issue.
