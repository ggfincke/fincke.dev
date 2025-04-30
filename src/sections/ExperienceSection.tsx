// src/components/sections/ExperienceSection.tsx

import { TimelineContainer } from '~/components/timeline/TimelineContainer';
import { TimelineItem } from '~/components/timeline/TimelineItem';

export function ExperienceSection() {
  // work experience entries
  const experiences = [
    {
      id: 'outlier',
      date: 'JUNE 2024 — PRESENT',
      title: 'AI Code Evaluator',
      company: 'Outlier.ai',
      companyUrl: 'https://outlier.ai',
      technologies: ['Python', 'JavaScript', 'TypeScript', 'React'],
      content: (
        <p>
          Evaluated and quality-tested AI-generated code across numerous 
          languages to enhance logical reasoning. Designed contextual 
          frameworks to challenge AI coding capabilities across various scenarios.
          Curated and annotated high-quality datasets focused on clean, optimal solutions.
        </p>
      )
    },
    {
      id: 'psu',
      date: 'AUG — DEC 2024',
      title: 'Learning Assistant',
      company: 'Pennsylvania State University',
      technologies: ['Swift', 'SwiftUI', 'iOS'],
      content: (
        <p>
          Mentored students in iOS/mobile application development for CMPSC 475 (Applications Programming).
          Reviewed and debugged student code, enhancing their understanding of application programming concepts.
          Collaborated with faculty to tailor instruction based on student progress and technical challenges.
        </p>
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
            Graduated December 2024
          </p>
        </div>
      </div>
    </div>
  );
}