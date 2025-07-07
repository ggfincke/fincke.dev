/* eslint-disable react/jsx-key, react/no-unescaped-entities */

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
  madeFor?: string;
  imagePath?: string; 
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
}


// project data
export const projects: Project[] = [
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
    madeFor: "Bolt Hackathon",
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
    madeFor: "Penn State",
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
    madeFor: "Personal",
    imagePath: "/projects/portfolio.png",
    imageAlt: "Portfolio website screenshot",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    repoUrl: "https://github.com/ggfincke/fincke.dev",
    liveUrl: "https://fincke.dev",
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
    madeFor: "Personal",
    technologies: ["Python", "Django", "PostgreSQL", "Selenium", "Redis", "Celery", "React", "Swift", "Discord.py"],
    repoUrl: "https://github.com/ggfincke/instock",
  },
  {
    title: "BetterBettor",
    dateRange: "Mar 2024 - May 2024",
    status: "complete",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20263%3A%20Blockchain%20and%20Cryptocurrency" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 263: Blockchain and Modern Web Development</a></>,
      "Built a decentralized sports betting platform using Ethereum smart contracts for transparent, trustless wagering",
      "Developed modern React/Next.js frontend with Web3 integration for seamless blockchain interaction",
      "Implemented comprehensive betting system with customizable odds, automated payouts, and user wallet integration via MetaMask",
      "Created responsive design supporting multiple sports categories with real-time betting interface"
    ],
    madeFor: "Penn State",
    technologies: ["Solidity", "React", "Next.js", "Web3.js", "MetaMask", "Ethereum"],
    repoUrl: "https://github.com/ggfincke/betterbettor",
  },
  {
    title: "CMPSC 473 Projects",
    collaborators: [
      { name: "Avanish Grampurohit" }
    ],
    dateRange: "Sep 2023 - Dec 2023",
    status: "complete",
    bulletPoints: [
      <>Three comprehensive projects for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20473%3A%20Operating%20Systems" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 473: Operating Systems</a></>,
      "Developed a memory management simulator implementing FIFO, LRU, and optimal page replacement algorithms with demand paging",
      "Built a custom thread scheduler with cooperative and preemptive scheduling, round-robin and priority-based algorithms, and mutex synchronization",
      "Extended a minimalist OS kernel with new system calls, process management features, and kernel-level debugging tools"
    ],
    madeFor: "Penn State",
    technologies: ["C", "Systems Programming", "Operating Systems", "Memory Management", "Threading"],
    repoUrl: "https://github.com/ggfincke/CMPSC473_projects",
  },
  {
    title: "CMPSC 311 Projects",
    dateRange: "Sep 2022 - Dec 2022",
    status: "complete",
    bulletPoints: [
      <>Five comprehensive labs for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20311%3A%20Introduction%20to%20Systems%20Programming" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 311: Introduction to Systems Programming</a></>,
      "Implemented a complete JBOD (Just a Bunch of Disks) storage system with block-level operations across multiple disks",
      "Built high-performance caching layer using LFU (Least Frequently Used) replacement policy with dynamic cache management",
      "Developed distributed storage system with TCP/IP client-server architecture and network communication protocols",
      "Achieved 100% grade on all assignments with comprehensive testing and validation"
    ],
    madeFor: "Penn State",
    technologies: ["C", "Systems Programming", "Networking", "Caching", "Storage Systems"],
    repoUrl: "https://github.com/ggfincke/CMPSC311_projects",
  },
  {
    title: "STAT 319 Final Project",
    collaborators: [
      { name: "Edwin Clatus" },
      { name: "Sahit Karan Botta" }
    ],
    dateRange: "May 2024 - Aug 2024",
    status: "complete",
    bulletPoints: [
      <>Comprehensive coursework for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/stat/#:~:text=STAT%20319%3A%20Applied%20Statistics" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">STAT 319: Applied Statistics</a></>,
      "Completed end-to-end data science projects using Python ecosystem including pandas, NumPy, matplotlib, seaborn, and scikit-learn",
      "Implemented machine learning models including linear regression, logistic regression, SVM, KNN, and decision trees",
      "Collaborated on COVID-19 case surveillance analysis using large-scale public health data with comprehensive preprocessing and visualization",
      "Mastered statistical analysis, model validation, hyperparameter tuning, and cross-validation techniques"
    ],
    madeFor: "Penn State",
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "matplotlib", "seaborn", "Jupyter", "Machine Learning"],
    repoUrl: "https://github.com/ggfincke/STAT319",
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
    madeFor: "Penn State",
    imagePath: "/projects/tcghub.png",
    imageAlt: "TCGhub app screenshot",
    technologies: ["React", "JavaScript", "CSS", "Python", "SQLite", "SQL", "Node.js"],
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
    madeFor: "Personal",
    technologies: ["Python", "Discord.py", "Transformers", "HuggingFace", "APScheduler"],
    repoUrl: "https://github.com/ggfincke/OPTIMUS",
  },
  {
    title: "CMPEN 331 Final Project",
    collaborators: [
      { name: "Avanish Grampurohit" }
    ],
    dateRange: "Mar 2023 - May 2023",
    status: "complete",
    bulletPoints: [
      <>Final Project for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpen/#:~:text=CMPEN%20331%3A%20Computer%20Organization%20and%20Design" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPEN 331: Computer Organization and Design</a></>,
      "Implemented a complete single-cycle MIPS processor in Verilog HDL with 32-bit architecture and Harvard memory organization",
      "Built comprehensive instruction set support including arithmetic, logical, memory, branch, and jump instructions",
      "Designed modular architecture with separate components for ALU, control unit, register file, and memory systems",
      "Achieved 100% grade with thorough testing and validation of all processor components and instruction types"
    ],
    madeFor: "Penn State",
    technologies: ["Verilog", "FPGA", "Xilinx Vivado", "Digital Design"],
    repoUrl: "https://github.com/ggfincke/CMPEN331_final_project",
  },
  {
    title: "USBAP",
    collaborators: [
      { name: "Yugal Kithany" },
      { name: "Kyle Lynch" }
    ],
    dateRange: "May 2023 - Jun 2023",
    status: "experimental",
    bulletPoints: [
      "Developed web scraping tools for extracting sports betting data from major platforms including DraftKings and FanDuel",
      "Built automated data collection system using Python with BeautifulSoup for parsing complex HTML structures",
      "Implemented data extraction for multiple betting markets including moneylines, spreads, and totals across various sports",
      "Created foundation for sports betting analytics and arbitrage opportunity detection"
    ],
    madeFor: "Personal",
    technologies: ["Python", "BeautifulSoup", "Web Scraping", "Data Analysis"],
    repoUrl: "https://github.com/ggfincke/USBAP",
  },
]; 