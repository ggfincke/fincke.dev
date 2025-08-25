// src/sections/home/AboutSection.tsx

import { SkillPill } from '~/components/ui/SkillPill';
import { aboutContent } from '~/data/content/about';
import { skillCategories } from '~/data/structured/skills';

export function AboutSection() {
  
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <p className="text-[var(--color-text)] mb-4">
          {aboutContent.intro}
        </p>
        <p className="text-[var(--color-text)] mb-4">
          {aboutContent.journey}
        </p>
        <p className="text-[var(--color-text)]">
          {aboutContent.personal}
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Skills</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.languages.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Front End</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.frontEnd.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Back End</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.backEnd.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--color-primary)] font-medium mb-3">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.tools.map((skill, index) => (
                <SkillPill key={index} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}