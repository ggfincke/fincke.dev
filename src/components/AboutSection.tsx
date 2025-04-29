// src/components/AboutSection.tsx

import Image from 'next/image';

// skill pill component
interface SkillPillProps {
  name: string;
}

// skill pill component
function SkillPill({ name }: SkillPillProps) {
  return (
    <span className="bg-[var(--color-sidebar)] text-[var(--color-text)] px-3 py-1 rounded-full text-sm">
      {name}
    </span>
  );
}

// about section component
export function AboutSection() {
  // skill categories
  const skillGroups = {
    languages: ["JavaScript", "TypeScript", "Python", "Swift", "C", "SQL"],
    frontEnd: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "SwiftUI"],
    backEnd: ["Node.js", "Django", "PostgreSQL", "Firebase", "REST APIs"],
    tools: ["Git", "VS Code", "Xcode", "Jupyter", "Docker"]
  };
  
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <p className="text-[var(--color-text)] mb-4">
          I'm a software engineer with experience in full-stack development, data engineering, and statistical modeling.
          I'm passionate about crafting clean, accessible, and performant code that solves real-world problems.
        </p>
        <p className="text-[var(--color-text)] mb-4">
          My journey in software development began at Penn State, where I developed a strong foundation in computer science
          principles. Since then, I've been expanding my skills through both professional work and personal projects.
        </p>
        <p className="text-[var(--color-text)]">
          When I'm not coding, IDK
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Skills</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroups.languages.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Front End</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroups.frontEnd.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Back End</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroups.backEnd.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroups.tools.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Education</h3>
        <div className="flex items-start gap-4">
          <div className="flex-grow">
            <h4 className="text-xl font-semibold text-[var(--color-primary)]">
              The Pennsylvania State University
            </h4>
            <p className="text-[var(--color-text-light)] mb-1">
              Bachelor of Engineering in Computer Science
            </p>
            <p className="text-[var(--color-text)]">
              Graduated December 2024 • GPA: 3.36/4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}