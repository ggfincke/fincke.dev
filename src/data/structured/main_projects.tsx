// src/data/projects.tsx

// imports
import { ReactNode } from 'react';


// status type for projects
export type ProjectStatus = 'in-development' | 'complete' | 'paused' | 'experimental' | 'planned' | 'live';

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
  imagePath?: string; 
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
}

// project data
export const projects: Project[] = [
  {
    title: "Loom",
    dateRange: "Aug 2025 - Present",
    status: "live",
    bulletPoints: [
      "AI résumé tailoring CLI with OpenAI, Anthropic Claude, or local Ollama",
      "Typer-based commands: tailor, sectionize, generate, apply — plus config & enhanced help",
      "Precise JSON edit ops on line-numbered text (replace_line, replace_range, insert_after, delete_range)",
      "Preserves DOCX/LaTeX structure; review edits or apply them automatically"
    ],
    technologies: ["Python", "Typer", "OpenAI", "Anthropic Claude", "Ollama", "DOCX", "LaTeX", "JSON", "CLI"],
    imagePath: "/projects/loom.png",
    imageAlt: "Loom app screenshot",
    repoUrl: "https://github.com/ggfincke/loom"
  },
  {
    title: "TrackBasket",
    dateRange: "May 2025 - Present",
    status: "live",
    bulletPoints: [
      "Deployed a price tracking platform monitoring 30k+ products across 4 major retailers including Amazon, Target, Walmart, and more",
      "Features a chat-to-basket feature using OpenAI API that converts natural language into structured baskets using data from Supabase",
      "Implemented advanced web crawling system with CAPTCHA solving, anti-bot countermeasures, and data normalization",
      "Created backend infrastructure including Edge Functions, PostgreSQL fuzzy search, UPC matching, real-time notifications, and more",
    ],
    imagePath: "/projects/trackbasket.png",
    imageAlt: "TrackBasket app screenshot",
    technologies: ["Typescript", "Python", "Supabase", "Next.js", "React", "OpenAI", "PostgreSQL", "Docker", "Swift"],
    repoUrl: "https://github.com/ggfincke/BoltHackathon",
    liveUrl: "https://bolt-hackathon-five.vercel.app",
  },
  {
    title: "SwimMate",
    dateRange: "Feb 2024 - Jun 2024, May 2025 - Present",
    status: "in-development",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20475%3A%20Applications%20Programming" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 475: Applications Programming</a> </>,
      "Developed a native iOS/watchOS app for swimmers to track, find, and save workouts, view history, and follow progress over time",
      "Built custom components using HealthKit and SwiftUI for workout entry, lap timing, and charting performance trends",
      "Connected iOS app to Apple Watch to track workout data and other metrics, as well as sending premade workouts to the watch for user to follow",
    ],
    imagePath: "/projects/swimmate.png",
    imageAlt: "SwimMate app screenshot",
    technologies: ["Swift", "SwiftUI", "HealthKit", "WatchKit"],
    repoUrl: "https://github.com/ggfincke/SwimMate",
  },
  {
    title: "Portfolio Website",
    dateRange: "Mar 2025 - Present",
    status: "live",
    bulletPoints: [
      "Built a personal portfolio website (you're looking at it!) with Next.js, React, TypeScript",
      "Implemented modern, responsive design with animations and transitions using Tailwind CSS",
      "Created a custom component system for UI consistency",
      "Designed with accessibility and performance in mind",
      "Configured continuous deployment with Vercel",
      "Learned Figma to design, prototype, and iterate on the website & logo (see top left of sidebar!)"
    ],
    imagePath: "/projects/portfolio.png",
    imageAlt: "Portfolio website screenshot",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev",
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
    imagePath: "/projects/tcghub2.png",
    imageAlt: "TCGhub app screenshot",
    technologies: ["React", "JavaScript", "CSS", "Python", "SQLite", "SQL", "Node.js"],
    repoUrl: "https://github.com/ggfincke/TCGhub",
  }
]; 