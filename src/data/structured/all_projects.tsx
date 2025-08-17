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
  title: "Loom",
  dateRange: "Aug 2025 – Present",
  status: "live",
  madeFor: "Personal",
  bulletPoints: [
    "CLI for AI-powered resume tailoring",
    "Typer-based command suite — sectionize, generate, apply, and one-shot tailor",
    "Multi-provider AI: OpenAI, Anthropic (Claude), or local Ollama",
    "Structured JSON edit ops (replace_line, replace_range, insert_after, delete_range) on line-numbered text",
    "Preserves original document formatting; supports DOCX and LaTeX",
    "Configurable defaults with persistent settings (~/.loom/config.json) and enhanced CLI help/theme tooling"
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
      "Built AI-powered product matching with intelligent alternatives and comprehensive UPC lookup for cross-retailer price correlation",
      "Engineered sophisticated notification system with granular preferences for price drops, availability changes, and product updates",
      "Developed responsive basket management with collaborative sharing, real-time price history charts, and smart recommendations",
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
      "Offers goal-based workouts for distance, time, or calories with real-time progress tracking",
      "Displays rich real-time metrics on Apple Watch including pace, heart rate, laps, SWOLF, and calories",
      "Supports both pool and open-water swims with GPS distance tracking",
      "Visualizes performance trends using interactive Swift Charts",
      "Achieved a grade of 100% on this submission"
    ],
    madeFor: "Penn State",
    imagePath: "/projects/swimmate.png",
    imageAlt: "SwimMate app screenshot",
    technologies: ["Swift", "SwiftUI", "HealthKit", "WatchKit", "Swift Charts", "WatchConnectivity"],
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Figma"],
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
      "Built RESTful API endpoints for data retrieval & user management to a React frontend & Swift mobile app, and integrated Discord bot functionality via Discord.py",
      "This project laid the groundwork for what would eventually evolve into TrackBasket, expanding into a full-featured price-tracking platform",
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
    technologies: ["Solidity", "Next.js", "Ethereum", "Web3.js", "MetaMask", "React"],
    repoUrl: "https://github.com/ggfincke/betterbettor",
  },
  {
    title: "Memory Management & Threading in C",
    collaborators: [
      { name: "Avanish Grampurohit" }
    ],
    dateRange: "Sep 2023 - Dec 2023",
    status: "complete",
    bulletPoints: [
      <>Three comprehensive projects for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20473%3A%20Operating%20Systems" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 473: Operating Systems</a></>,
      "Developed a memory management simulator implementing FIFO, LRU, and optimal page replacement algorithms with demand paging",
      "Built a custom thread scheduler with cooperative and preemptive scheduling, round-robin and priority-based algorithms, and mutex synchronization",
      "Extended a minimalist OS kernel with new system calls, process management features, and kernel-level debugging tools",
      "Achieved an average grade of 100% on all assignments with comprehensive testing and validation"
    ],
    madeFor: "Penn State",
    technologies: ["C", "Systems Programming", "Operating Systems", "Memory Management", "Threading"],
    repoUrl: "https://github.com/ggfincke/CMPSC473_projects",
  },
  {
    title: "JBOD Storage System with Caching & Network Communication",
    dateRange: "Sep 2022 - Dec 2022",
    status: "complete",
    bulletPoints: [
      <>Five comprehensive labs for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/cmpsc/#:~:text=CMPSC%20311%3A%20Introduction%20to%20Systems%20Programming" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">CMPSC 311: Introduction to Systems Programming</a></>,
      "Implemented a complete JBOD (Just a Bunch of Disks) storage system with block-level operations across multiple disks",
      "Built high-performance caching layer using LFU (Least Frequently Used) replacement policy with dynamic cache management",
      "Developed distributed storage system with TCP/IP client-server architecture and network communication protocols",
      "Achieved a grade of 100% on all assignments with comprehensive testing and validation"
    ],
    madeFor: "Penn State",
    technologies: ["C", "Systems Programming", "Storage Systems", "Networking", "Caching"],
    repoUrl: "https://github.com/ggfincke/CMPSC311_projects",
  },
  {
    title: "COVID-19 Case Surveillance Analysis",
    collaborators: [
      { name: "Edwin Clatus" },
      { name: "Sahit Botta" }
    ],
    dateRange: "May 2024 - Aug 2024",
    status: "complete",
    bulletPoints: [
      <>Comprehensive coursework for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/stat/#:~:text=STAT%20319%3A%20Applied%20Statistics" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">STAT 319: Applied Statistics</a></>,
      "Completed end-to-end data science projects using Python ecosystem including pandas, NumPy, matplotlib, seaborn, and scikit-learn",
      "Implemented machine learning models including linear regression, logistic regression, SVM, KNN, and decision trees",
      "Collaborated on COVID-19 case surveillance analysis for final projectusing large-scale public health data with comprehensive preprocessing and visualization, achieving a grade of 100%",
      "Mastered statistical analysis, model validation, hyperparameter tuning, and cross-validation techniques",
    ],
    madeFor: "Penn State",
    technologies: ["Python", "Machine Learning", "pandas", "NumPy", "scikit-learn", "matplotlib", "seaborn", "Jupyter"],
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
      "Styled with modern CSS to create a clean, responsive UI",
      "Achieved a grade over 100% on this project"
    ],
    madeFor: "Penn State",
    imagePath: "/projects/tcghub2.png",
    imageAlt: "TCGhub app screenshot",
    technologies: ["React", "SQL", "Python", "SQLite", "Node.js"],
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
    technologies: ["Python", "Transformers", "Discord.py", "HuggingFace", "APScheduler"],
    repoUrl: "https://github.com/ggfincke/OPTIMUS",
  },
  {
    title: "MIPS Processor",
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
    technologies: ["Verilog", "FPGA", "Digital Design", "Xilinx Vivado"],
    repoUrl: "https://github.com/ggfincke/CMPEN331_final_project",
  },
  {
    title: "Traditional Machine Learning Methods Exploration for MNIST",
    dateRange: "Sep 2024 - Oct 2024",
    status: "complete",
    bulletPoints: [
      <>Midterm report for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/math/#:~:text=MATH%20452%3A%20Mathematical%20Foundations%20of%20Machine%20Learning" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">MATH 452: Mathematical Foundations of Machine Learning</a></>,
      "Implemented and compared KNN (94.4% accuracy), Logistic Regression (91.1%), and SVM with RBF kernel (95.3%) for classifying handwritten digits on a 10k-image subset of the MNIST dataset",
      "Applied rigorous preprocessing pipeline: random sampling, normalization to [0,1], flattening to 784-D vectors, and stratified 80/20 train–test split, followed by confusion matrix analysis",
      "Performed hyperparameter tuning (k=3 for KNN; C=1, RBF kernel for SVM) using grid search cross-validation; evaluated models with precision, recall, and F1-score",
      "Executed unsupervised learning using K-Means (k=10) with PCA dimensionality reduction for visualization; examined elbow method and silhouette scores to assess cluster quality",
      "Discussed computational constraints (high-dimensional SVM training) and proposed convolutional neural networks (CNNs) as future work to approach state-of-the-art accuracy",
      "Achieved a grade of 100% on this report and code"
    ],
    madeFor: "Penn State",
    imagePath: "/projects/452midterm.png",
    imageAlt: "MATH 452 Midterm Report screenshot",
    technologies: ["Python", "scikit-learn", "NumPy", "pandas", "matplotlib", "seaborn", "Machine Learning", "LaTeX"],
    repoUrl: "https://github.com/ggfincke/MATH452_projects",
    liveUrl: "/projects/MATH_452_Midterm_Report.pdf",
  },
  {
    title: "Deep Learning Architecture Comparison & Analysis for CIFAR-10",
    collaborators: [
      { name: "Jacob Goulet" },
      { name: "Tyler Rossi" },
      { name: "Diego Bueno" },
      { name: "Javier Pozo Miranda" },
      { name: "Duong Bao" }
    ],
    dateRange: "Nov 2024 – Dec 2024",
    status: "complete",
    bulletPoints: [
      <>Final report for <a href="https://bulletins.psu.edu/university-course-descriptions/undergraduate/math/#:~:text=MATH%20452%3A%20Mathematical%20Foundations%20of%20Machine%20Learning" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">MATH 452: Mathematical Foundations of Machine Learning</a></>,
      "Benchmarked four approaches on the CIFAR-10 dataset (60k images): baseline CNN, ResNet50, DenseNet121, and a Random Feature Model (RFM) with 5,000 Random Fourier Features",
      "DenseNet121 achieved the top test accuracy at 74%, outperforming the baseline CNN (69%), RFM (51.6%), and ResNet50 (47%)",
      "Engineered a ResNet-inspired CNN with residual blocks, data augmentation, dropout, and L2 regularization; documented optimization challenges and remedies",
      "Built a lightweight RFM pipeline (StandardScaler ➜ RBFSampler ➜ LogisticRegression) and logged training/validation loss at 10 checkpoints to compare computational efficiency",
      "Generated confusion matrices, full metric suite (accuracy, precision, recall, F1, log-loss), and loss/accuracy curves; proposed future work (hybrid CNN-RFM ensemble, advanced ResNet scheduling, larger datasets)",
      "Achieved a grade of 100% on this report and code"
    ],
    madeFor: "Penn State",
    imagePath: "/projects/452final.png",
    imageAlt: "MATH 452 Final Report screenshot",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "pandas", "matplotlib", "seaborn", "scikit-learn", "Deep Learning", "CNN", "ResNet", "DenseNet", "LaTeX", "Random Fourier Features"],
    repoUrl: "https://github.com/ggfincke/MATH452_projects",
    liveUrl: "/projects/MATH_452_-_Final_Report.pdf",
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
    technologies: ["Python", "Web Scraping", "Data Analysis", "BeautifulSoup"],
    repoUrl: "https://github.com/ggfincke/USBAP",
  },
]; 