// src/components/sections/ExperienceSection.tsx

// imports

// timeline
import { TimelineContainer } from '~/components/timeline/TimelineContainer';
import { TimelineItem } from '~/components/timeline/TimelineItem';

// logos
import GoogleLogo from '~/components/logos/GoogleLogo';
import MetaLogo from '~/components/logos/MetaLogo';
import OpenAILogo from '~/components/logos/OpenAILogo';
import PSULogo from '~/components/logos/PSULogo';

export function ExperienceSection() {
  // work experience entries
  const experiences = [
    {
      id: 'outlier',
      date: 'JUNE 2024 — PRESENT',
      title: 'AI Code Contractor',
      company: 'Outlier.ai',
      companyUrl: 'https://outlier.ai',
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
            Evaluated and quality-tested AI-generated code across numerous languages to enhance logical reasoning. 
          </p>
          
          <p>
            Designed contextual frameworks and curated high-quality datasets focused on clean, optimal solutions.
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

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <p className="text-[var(--color-text)] text-lg">
          I've contributed to a range of projects from AI development to educational roles. My professional 
          experience includes working with cutting-edge technologies and developing solutions that bring real value.
        </p>
      </div>
      
      <TimelineContainer className="mt-16">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            companyUrl={exp.companyUrl}
            technologies={exp.technologies}
            companyLogos={exp.companyLogos}
            isLast={index === experiences.length - 1}
          >
            {exp.content}
          </TimelineItem>
        ))}
      </TimelineContainer>
      
      <div className="mt-16 pl-[9.5rem]">
        <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Education</h3>
        <div className="flex-grow">
          <h4 className="text-xl font-semibold text-[var(--color-primary)]">
            Pennsylvania State University
          </h4>
          <p className="text-[var(--color-text-light)] mb-1">
            Bachelor of Engineering in Computer Science
          </p>
          <p className="text-[var(--color-text)]">
            August 2021 - December 2024
          </p>
        </div>
      </div>
    </div>
  );
}