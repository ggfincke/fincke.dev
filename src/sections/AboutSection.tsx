// src/components/sections/AboutSection.tsx

// imports
import { SkillPill } from '~/components/ui/SkillPill';

// about section
export function AboutSection() {
  // skill categories
  const skillGroups = {
    languages: ["JavaScript", "TypeScript", "Python", "Swift", "C", "SQL"],
    frontEnd: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "SwiftUI"],
    backEnd: ["Node.js", "Django", "PostgreSQL", "Firebase", "REST APIs"],
    tools: ["Git", "VS Code", "Xcode", "Jupyter", "Docker", "Figma"]
  };
  
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <p className="text-[var(--color-text)] mb-4">
          I'm a software engineer with experience in full-stack development, data engineering, and statistical modeling.
          I'm passionate about crafting clean, accessible, and performant code that solves real-world problems.
        </p>
        <p className="text-[var(--color-text)] mb-4">
          My journey in software development began when I was introducted to Scratch in middle school.
          I fell in love with it immediately and never stopped coding since! I continued to code in high school, 
          eventually choosing to go to Penn State where I developed the majority of my skills in computer science and software engineering. 
          Since then, I've been expanding my skills through both professional work and personal projects.
        </p>
        <p className="text-[var(--color-text)]">
        Outside of coding, I find balance through various outlets, primarily swimming, running, and journaling. 
        Physical fitness is a big part of my life, and I find it helps me stay focused and balanced. I find it very satisfying
        to set big goals and work steadily toward them. Lately, I've been eyeing a full marathon and/or open water swim races.
        Additionally, when I have the time, I like to produce music and play video games, and when I have the money, I love to travel!
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
    </div>
  );
}