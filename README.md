# fincke.dev

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Website](https://img.shields.io/badge/Website-Live-success?style=flat-square&logo=vercel)](https://fincke.dev)

A modern, responsive personal portfolio website built with Next.js 15, React 19, and Tailwind CSS 4. Features a clean minimalist design with responsive layout and smooth animations.

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

## Tech Stack

- **Framework**: Next.js 15.5.0 with App Router
- **Frontend**: React 19.1.1 with TypeScript 5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Custom CSS animations and transitions
- **Fonts**: Geist Sans & Geist Mono via Google Fonts
- **Analytics**: Vercel Analytics
- **Development**: ESLint 9, Turbopack for fast development builds
- **Deployment**: Vercel with custom domain

## Project Structure

```
fincke.dev/
├── public/                    # Static assets and images
│   ├── projects/             # Project screenshots and assets
│   ├── resume.pdf            # Resume document
│   └── *.svg                 # Logo and icon files
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Homepage with all sections
│   │   ├── experience/       # Dedicated experience page
│   │   └── projects/         # Dedicated projects page
│   ├── components/           # Reusable UI components
│   │   ├── display/          # Visual display components (cards, badges, pills)
│   │   ├── interactive/      # Interactive elements (social icons)
│   │   ├── layout/           # Layout components (sidebar, timeline)
│   │   ├── logos/            # Company/brand logos (Google, Meta, OpenAI, PSU)
│   │   └── navigation/       # Navigation components (buttons, arrows)
│   ├── data/                 # Content and data files
│   │   └── structured/       # Structured data (experiences, projects, skills)
│   ├── hooks/                # Custom React hooks for animations & interactions
│   ├── sections/             # Page sections and layouts
│   │   ├── home/            # Homepage section components
│   │   ├── projects/        # Project page components
│   │   └── shared/          # Shared responsive components
│   └── styles/               # CSS and styling
├── CLAUDE.md                 # Development instructions for Claude Code
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Local Development

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, pnpm, or bun

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

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The development server uses Turbopack for fast rebuilds and hot reloading.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is deployed on Vercel with a custom domain. To deploy your own version:

1. Push to GitHub/GitLab/Bitbucket
2. Connect to [Vercel](https://vercel.com)
3. Import your project
4. Configure domain settings (optional)
5. Deploy automatically on push

## Content Management

The portfolio content is managed through structured data files:

- **Experiences**: `src/data/structured/experiences.tsx` - Work history and education
- **Projects**: `src/data/structured/main_projects.tsx` and `projects.tsx` - Featured and all projects
- **Skills**: `src/data/structured/skills.tsx` - Technical skills and competencies

## Custom React Hooks

The project includes several custom hooks for enhanced interactivity and responsiveness:

- **`useBreakpoint`** - Responsive breakpoint detection for adaptive layouts
- **`useResponsiveSection`** - Manages section visibility and responsive behavior
- **`useScrollSidebar`** - Handles sidebar scroll animations and positioning
- **`useSectionNavigation`** - Navigation between different portfolio sections
- **`useTransitionAnimation`** - Smooth transition animations between states
- **`useTypingAnimation`** - Typewriter-style text animation effects

## Customization

To customize this portfolio for your own use:

1. Update content in `src/data/` files
2. Replace images in `public/` directory
3. Modify styling in Tailwind classes
4. Update metadata in `src/app/layout.tsx`
5. Configure custom domain in Vercel (optional)

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

## Contributing

While this is a personal portfolio, contributions for improvements, bug fixes, or additional features are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Contact

For questions or suggestions, reach out through the contact info on [fincke.dev](https://fincke.dev) or open an issue in this repository.
