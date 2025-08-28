# fincke.dev

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Website](https://img.shields.io/badge/Website-Live-success?style=flat-square&logo=vercel)](https://fincke.dev)
[![CI](https://github.com/ggfincke/fincke.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/ggfincke/fincke.dev/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A modern, responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS 4. Features a clean minimalist design with responsive layout, smooth animations, and a comprehensive CI/CD pipeline with automated testing, performance monitoring, and dependency management.

## Live Site

**Visit:** [fincke.dev](https://fincke.dev)

## Features

- **Responsive Design**: Fully responsive layout with custom breakpoint detection
- **Modern UI**: Clean, minimalist design with sophisticated animations and transitions
- **Fixed Sidebar Navigation**: Persistent sidebar with smooth scroll animations and section indicators
- **Multiple Sections**: 
  - Hero section with typewriter animation effects
  - About section with skills showcase and personal information
  - Experience section with interactive timeline and company logos
  - Projects section with filterable cards and status badges
- **Interactive Elements**: Hover effects, smooth scrolling, pagination dots, and animated components
- **Performance Optimized**: Built with Next.js 15 App Router, React 19, and Turbopack for fast development
- **Analytics**: Integrated Vercel Analytics for performance insights
- **Custom Typography**: Geist Sans and Geist Mono fonts for modern, readable design
- **CI/CD Pipeline**: Automated linting, type checking, building, and performance testing
- **Quality Assurance**: Lighthouse CI with performance thresholds and automated dependency updates

## Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Frontend**: React 19.1.1 with TypeScript 5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Custom CSS animations and transitions
- **Fonts**: Geist Sans & Geist Mono via Google Fonts
- **Analytics**: Vercel Analytics
- **Development**: ESLint 9, Turbopack for fast development builds
- **CI/CD**: GitHub Actions with parallel job execution and caching
- **Quality Assurance**: Lighthouse CI with performance budgets (80-85% thresholds)
- **Automation**: Dependabot for dependency management, Git hooks for workflow enforcement
- **Deployment**: Vercel with custom domain

## Project Structure

```
fincke.dev/
├── .github/                  # GitHub Actions and automation
│   ├── workflows/           # CI/CD pipeline configurations
│   │   ├── ci.yml          # Lint, build, and Lighthouse CI
│   │   ├── dependencies.yml # Automated dependency management
│   │   ├── release-on-main.yml # Production releases
│   │   └── tag-on-dev.yml  # Development prereleases
│   └── dependabot.yml      # Dependabot configuration
├── .githooks/               # Custom Git hooks
│   ├── install-hooks.sh    # Hook installation script
│   ├── pre-commit          # Version management hook
│   └── pre-push            # CHANGELOG validation hook
├── public/                  # Static assets and images
│   ├── projects/           # Project screenshots and assets
│   ├── resume.pdf          # Resume document
│   └── *.svg               # Logo and icon files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage with all sections
│   │   ├── experience/     # Dedicated experience page
│   │   └── projects/       # Dedicated projects page
│   ├── components/         # Reusable UI components
│   │   ├── buttons/        # Interactive buttons (navigation, theme)
│   │   ├── logos/          # Company/brand logos (Google, Meta, OpenAI, PSU)
│   │   ├── sidebar/        # Fixed navigation sidebar components
│   │   ├── timeline/       # Experience timeline components
│   │   └── ui/             # General UI components (cards, indicators, pills)
│   │       └── cards/      # Specialized card components
│   ├── data/               # Content and data files
│   │   ├── content/        # Section content (about, contact, experience)
│   │   └── structured/     # Typed data interfaces (experiences, projects)
│   ├── hooks/              # Custom React hooks for animations & interactions
│   ├── sections/           # Page sections and layouts
│   │   ├── home/          # Homepage section components
│   │   ├── projects/      # Project page components
│   │   └── shared/        # Shared responsive components
│   ├── styles/             # CSS and styling
│   └── unused/             # Deprecated components kept for reference
├── CHANGELOG.md             # Version history and release notes
├── CLAUDE.md                # Development instructions for Claude Code
├── lighthouserc.json        # Lighthouse CI configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

### Prerequisites

- Node.js 20.0.0 or higher (as specified in engines)
- npm 10.0.0 or higher
- Git (for hooks and version control)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fincke.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Git hooks (recommended for development):
   ```bash
   npm run install-hooks
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

The development server uses Turbopack for fast rebuilds and hot reloading.

### Git Hooks

This project includes Git hooks to enforce development workflow and maintain code quality:

- **Pre-commit hook**: Automatically updates version in package.json based on branch
- **Pre-push hook**: Prevents pushing to `dev` branch without updating CHANGELOG.md
- **Installation**: Run `npm run install-hooks` to activate the hooks
- **Bypass**: Use `git push --no-verify` to temporarily skip hook checks (not recommended)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run typecheck` - Run TypeScript type checking
- `npm run install-hooks` - Install Git hooks for development workflow

## CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline with GitHub Actions:

### Automated Workflows

- **Continuous Integration**: Lint, type check, build verification, and Lighthouse performance testing
- **Dependency Management**: Automated dependency updates via Dependabot with security alerts
- **Release Automation**: Automated versioning and releases for both development and production
- **Performance Monitoring**: Lighthouse CI with strict performance thresholds:
  - Performance: ≥ 80%
  - Accessibility: ≥ 85%
  - Best Practices: ≥ 85%
  - SEO: ≥ 85%

### Branch Strategy

- **`main`**: Production releases with minor version increments (1.5.3 → 1.6.0)
- **`dev`**: Development branch with prerelease versioning (v1.16.1-prerelease-20250827)
- **Pull Requests**: All changes require CI pipeline approval before merge

## Deployment

This project is deployed on Vercel with a custom domain. To deploy your own version:

1. Push to GitHub/GitLab/Bitbucket
2. Connect to [Vercel](https://vercel.com)
3. Import your project
4. Configure domain settings (optional)
5. Deploy automatically on push

## Content Management

The portfolio content is managed through structured data files with TypeScript interfaces:

- **Experiences**: `src/data/structured/experiences.tsx` - Work history and education with `Experience` interface
- **Projects**: `src/data/structured/main_projects.tsx` and `all_projects.tsx` - Featured and all projects with `Project` interface
- **Content**: Text content in `src/data/content/` for different sections (about, contact, experience)

### Data Structure

All data follows strict TypeScript interfaces ensuring type safety and consistency across the application. When adding new content, follow the existing patterns and interfaces defined in the structured data files.

## Custom React Hooks

The project includes several custom hooks for enhanced interactivity and responsiveness:

- **`useBreakpoint`** - Responsive breakpoint detection for adaptive layouts
- **`useResponsiveSection`** - Manages section visibility and responsive behavior
- **`useScrollSidebar`** - Handles sidebar scroll animations and positioning
- **`useSectionNavigation`** - Navigation between different portfolio sections
- **`useTransitionAnimation`** - Smooth transition animations between states
- **`useTypingAnimation`** - Typewriter-style text animation effects

## Using This Template

This portfolio is designed to be easily customizable for your own use. Fork this repository to create your own personal portfolio:

### Getting Started with Your Fork

1. **Fork the repository** on GitHub
2. **Clone your fork** locally: `git clone https://github.com/yourusername/fincke.dev.git`
3. **Install dependencies**: `npm install`
4. **Install Git hooks**: `npm run install-hooks` (recommended)
5. **Start customizing** following the steps below

### Customization Steps

1. **Update personal content** in `src/data/structured/` files:
   - `experiences.tsx` - Your work history and education
   - `main_projects.tsx` & `all_projects.tsx` - Your projects
   - Content files in `src/data/content/` - About, contact info
2. **Replace images** in `public/` directory with your own
3. **Update metadata** in `src/app/layout.tsx` (title, description, URL)
4. **Customize styling** using Tailwind classes to match your preferences
5. **Configure deployment** on Vercel with your custom domain (optional)
6. **Update this README** to reflect your own project details

## Credit & Attribution

If you use this portfolio as a template, fork it, or draw inspiration from it, please provide credit by:

- Starring this repository
- Linking back to [fincke.dev](https://fincke.dev) or this repository
- Mentioning the original work in your README or about section

**Example attribution:**
```
Portfolio design inspired by [Garrett Fincke's portfolio](https://fincke.dev)
```

This helps support the open-source community and acknowledges the original work.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Development Workflow

This section is primarily for those who fork this repository. The original repository is a personal portfolio and does not accept feature contributions.

### Bug Reports

If you find bugs in this portfolio template, please open an issue on GitHub. Bug fix reports are appreciated and help improve the template for everyone.

### Code Quality Standards (For Forks)

When working with your fork, maintain these quality standards:

- **ESLint**: Code must pass linting checks
- **TypeScript**: Strict type checking enforced
- **Performance**: Lighthouse CI thresholds must be met (80-85%)
- **Git Hooks**: Pre-commit and pre-push hooks ensure workflow compliance
- **CHANGELOG**: Document significant changes in CHANGELOG.md

## Contact

For questions or suggestions, reach out through the contact info on [fincke.dev](https://fincke.dev) or open an issue in this repository.
