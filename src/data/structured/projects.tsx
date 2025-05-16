/* eslint-disable react/jsx-key, react/no-unescaped-entities */

// src/data/projects.tsx

// imports
import { ReactNode } from 'react';


// status type for projects
export type ProjectStatus = 'in-development' | 'complete' | 'paused' | 'experimental' | 'planned';

// interface for collaborators
export interface Collaborator {
  name: string;
  url?: string;
}

// interface for project data type
export interface Project {
  title: string;
  collaborators?: string | string[] | Collaborator | Collaborator[];
  dateRange: string;
  status: ProjectStatus;
  bulletPoints: (string | ReactNode)[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

// project data
export const projects: Project[] = [
  {
    title: "Beacon (working title)",
    collaborators: [
      { name: "Avanish Grampurohit", url: "https://www.linkedin.com/in/avanishmg/" },
      { name: "Ashley Amendola", url: "https://www.linkedin.com/in/ashley-amendola/" }
    ],
    dateRange: "May 2025 - Present",
    status: "in-development",
    bulletPoints: [
      "Building a full-stack price & stock tracking platform to help users find cheaper alternatives for essential products",
      "Designed with a consumer focus—providing price histories, inflation visualizations, and recommendation systems based on product availability and affordability",
      "Reuses and extends infrastructure originally built for InStock, including scraping pipelines and task queues",
      "Built with a Django backend using PostgreSQL, Redis, and Celery for scalable job handling",
      "Includes a cross-platform frontend (Next.js web, Swift iOS) and plans for integrating AI-powered personalization via Model Context Protocol (MCP)"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Selenium", "Playwright", "Next.js", "React", "TypeScript", "Swift", "Docker"],
    repoUrl: "https://github.com/ggfincke/beacon",
  },
  {
    title: "InStock",
    dateRange: "Dec 2024 - Present",
    status: "paused",
    bulletPoints: [
      "Designed a high-performance price & stock tracking system for monitoring product pricing & availability across various major retailers",
      "Optimized for speed, frequency, and accuracy of detecting restocks and price changes on high-velocity products",
      "Created a custom database schema using Django's ORM & PostgreSQL for efficient data storage & retrieval",
      "Engineered a microservices architecture in Django with Redis and Celery for predictable and scalable performance",
      "Built RESTful API endpoints for data retrieval & user management to a React frontend & Swift mobile app, and integrated Discord bot functionality via Discord.py"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Selenium", "Redis", "Celery", "React", "Swift", "Discord.py"],
    repoUrl: "https://github.com/ggfincke/instock",
  },
  {
    title: "Portfolio Website",
    dateRange: "Mar 2025 - Apr 2025",
    status: "complete",
    bulletPoints: [
      "Built a personal portfolio website (you're looking at it!) with Next.js, React, TypeScript",
      "Implemented modern, responsive design with animations and transitions using Tailwind CSS",
      "Created a custom component system for UI consistency",
      "Designed with accessibility and performance in mind",
      "Configured continuous deployment with Vercel",
      "Learned Figma to design, prototype, and iterate on the website & logo (see top left of sidebar!)"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev",
  },
  {
    title: "SwimMate",
    dateRange: "Feb 2024 - Jun 2024",
    status: "paused",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20475%3A%20Applications%20Programming" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 475: Applications Programming</a> </>,
      "Developed a native iOS/watchOS app for swimmers to track, find, and save workouts, view history, and follow progress over time",
      "Built custom components using HealthKit and SwiftUI for workout entry, lap timing, and charting performance trends",
      "Connected iOS app to Apple Watch to track workout data and other metrics, as well as sending premade workouts to the watch for user to follow",
    ],
    technologies: ["Swift", "SwiftUI", "HealthKit", "WatchKit"],
    repoUrl: "https://github.com/ggfincke/SwimMate",
  },
  {
    title: "TCGhub",
    collaborators: [
      { name: "Yash Tumuluri" }
    ],
    dateRange: "Sep 2024 - Dec 2024",
    status: "complete",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20431W%3A%20Database%20Management%20Systems" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 431W: Database Management Systems</a></>,
      <>Developed a React-based trading card marketplace clone with live data integration (essentially a replica of <a href="https://www.tcgplayer.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">tcgplayer.com</a>)</>,
      "Customized a complex database schema in BCNF and hand-wrote all SQL queries to the local SQLite database",
      "Implemented filtering and search functionality for card sets and rarities",
      "Styled with modern CSS to create a clean, responsive UI"
    ],
    technologies: ["React", "JavaScript", "CSS", "Pokémon TCG API"],
    repoUrl: "https://github.com/ggfincke/TCGhub",
  },
  {
    title: "OPTIMUS",
    dateRange: "Feb 2024 - Apr 2024",
    status: "complete",
    bulletPoints: [
      <p>Built a fine-tuned Discord chatbot using <a href="https://www.microsoft.com/en-us/research/project/godel/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Microsoft's GODEL-v1.1 model</a> for contextual conversation generation</p>,
      "Integrated HuggingFace Transformers to run local inference with a custom-trained seq2seq model",
      "Created rich Discord interactions including emote reactions, user-specific triggers, and dynamic status updates",
      "Designed 'Free Rein' and 'Puppeteer Mode' to control bot behavior based on real-time message context"
    ],
    technologies: ["Python", "Discord.py", "Transformers", "HuggingFace", "APScheduler"],
    repoUrl: "https://github.com/ggfincke/OPTIMUS",
  }
]; 