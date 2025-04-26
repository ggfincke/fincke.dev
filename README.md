# fincke.dev

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Website](https://img.shields.io/badge/Website-Live-success?style=flat-square&logo=vercel)](https://fincke.dev)

A personal portfolio website built with Next.js, React 19, and Tailwind CSS, accessible at [fincke.dev](https://fincke.dev).

## 📋 Overview

This is a modern, responsive portfolio website showcasing professional experience, projects, and skills. The site features a clean, minimalist design with dark mode support and is publicly available at [fincke.dev](https://fincke.dev).

## 🌐 Live Site

**Website URL:** [fincke.dev](https://fincke.dev)

The website is deployed and accessible through the custom domain fincke.dev. Visit this URL in any modern web browser to view the portfolio.

## 🚀 Technologies Used

- **Next.js 15.3.1** - React framework with server-side rendering
- **React 19.0.0** - JavaScript library for building user interfaces
- **TypeScript** - Typed JavaScript for better code quality
- **Tailwind CSS 4.1.4** - Utility-first CSS framework
- **ESLint** - Code quality tool

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18.17.0 or higher recommended)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/fincke.dev.git
   cd fincke.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## 🚢 Deployment on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com).

### Deployment Steps

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import your project to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Select your repository
   - Configure your project settings (or accept the defaults)
   - Click "Deploy"

Your site will be automatically built and deployed to a `.vercel.app` domain.

### Custom Domain

- The site is currently configured with the custom domain [fincke.dev](https://fincke.dev)
- To manage domains, go to your project in the Vercel dashboard
- Navigate to "Settings" > "Domains"

## 📁 Project Structure

```
fincke.dev/
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages and layouts
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Homepage
│   │   └── globals.css # Global styles
├── .eslintrc.js        # ESLint configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.