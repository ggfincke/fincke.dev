// UNUSED - leaving for reference



// // src/components/Navbar.tsx

// // use client
// 'use client';

// // import dependencies
// import { useState } from 'react';
// import Image from 'next/image';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // smooth scrolling
//   const scrollToSection = (sectionId: string) => {
//     setMobileMenuOpen(false);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[var(--color-background-alt)] border-b border-[var(--color-border)]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <button onClick={() => scrollToSection('hero')} className="flex items-center">
//               <Image
//                 src="/fincke-logo.svg"
//                 alt="Fincke.dev Logo"
//                 width={120}
//                 height={32}
//                 className="h-12 w-auto"
//               />
//             </button>
//           </div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
//             >
//               About
//             </button>
//             <button 
//               onClick={() => scrollToSection('resume')} 
//               className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
//             >
//               Resume
//             </button>
//             <button 
//               onClick={() => scrollToSection('projects')} 
//               className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
//             >
//               Projects
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')} 
//               className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
//             >
//               Contact
//             </button>
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="text-[var(--color-text)] hover:text-[var(--color-text-light)]"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden w-full">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--color-background-alt)] border-b border-[var(--color-border)]">
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="block w-full text-left px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
//             >
//               About
//             </button>
//             <button 
//               onClick={() => scrollToSection('resume')}
//               className="block w-full text-left px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
//             >
//               Resume
//             </button>
//             <button 
//               onClick={() => scrollToSection('projects')}
//               className="block w-full text-left px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
//             >
//               Projects
//             </button>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="block w-full text-left px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }