// src/data/structured/experiences.tsx

// imports
// react
import { ReactNode } from 'react';
// logos
import GoogleLogo from '~/components/logos/GoogleLogo';
import MetaLogo from '~/components/logos/MetaLogo';
import OpenAILogo from '~/components/logos/OpenAILogo';
import PSULogo from '~/components/logos/PSULogo';

// experience data
export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  companyUrl: string;
  technologies: string[];
  companyLogos: ReactNode;
  content: ReactNode;
}

// education data
export interface Education {
  institution: string;
  degree: string;
  period: string;
}

// experiences data
export const experiences: Experience[] = [
  {
    id: 'scale',
    date: 'MAY 2024 — PRESENT',
    title: 'AI Code Contractor',
    company: 'Scale AI',
    companyUrl: 'https://scale.com/',
    technologies: ['Python', 'JavaScript', 'TypeScript', 'React', 'Swift'],
    companyLogos: (
      <>
        <GoogleLogo />
        <MetaLogo />
        <OpenAILogo />
      </>
    ),
    content: (
      <>
        <p className="mb-4">
          Contributed to AI-based projects for leading technology companies including Google, Meta, & OpenAI
        </p>

        <p className="mb-4">
          As one example of my work, I contributed to{' '}<a href="https://www.theverge.com/news/670773/google-labs-stitch-ui-coding-design-tool" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline">Google&apos;s Stitch UI coding design tool</a>, 
          helping improve AI-assisted interface development capabilities.
        </p>

        <p className="mb-4">
          Evaluated and quality-tested AI-generated code across numerous languages to enhance logical reasoning. 
        </p>

        <p className="mb-4">
          Designed contextual frameworks and curated high-quality datasets focused on clean, optimal solutions.
        </p>

        <p className="mb-4">
          Created evaluation metrics that directly contributed to improving code generation capabilities of AI models.
        </p>

      </>
    )
  },
  {
    id: 'psu',
    date: 'AUG — DEC 2024',
    title: 'CMPSC 475 Learning Assistant',
    company: 'Pennsylvania State University',
    companyUrl: 'https://www.psu.edu',
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'iOS', 'iPadOS', 'macOS'],
    companyLogos: <PSULogo />,
    content: (
      <>
        <p className="mb-4">
          Mentored students in iOS/mobile application development for CMPSC 475: Applications Programming.
        </p>
        <p className="mb-4">
          Reviewed and debugged student code, enhancing their understanding of application programming concepts.
        </p>
        <p className="mb-4">
          Collaborated with faculty to tailor instruction based on student progress and technical challenges.
        </p>
      </>
    )
  }
];

// education data
export const education: Education = {
  institution: "Pennsylvania State University",
  degree: "Bachelor of Engineering in Computer Science",
  period: "August 2021 - December 2024"
}; 