// src/components/Navbar.tsx

// use client
'use client';

// import dependencies
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// navbar component
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background-alt)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/fincke-logo.svg"
                alt="Garrett Fincke"
                width={150}
                height={50}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          {/* navigation (desktop) */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/resume" 
              className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
            >
              Resume
            </Link>
            <Link 
              href="/projects" 
              className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="text-[var(--color-text)] hover:text-[var(--color-text-light)] transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
          
          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[var(--color-text)] hover:text-[var(--color-text-light)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--color-background-alt)] border-b border-[var(--color-border)]">
            <Link 
              href="/about" 
              className="block px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/resume" 
              className="block px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-text-light)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

