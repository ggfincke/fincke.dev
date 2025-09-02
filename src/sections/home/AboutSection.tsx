// src/sections/home/AboutSection.tsx
// about section w/ personal info & categorized skills

import { SkillPill } from '~/components/display/SkillPill';
import { aboutContent } from '~/data/content/about';
import { getSkillCategories } from '~/data/structured/skills';

// about section component
export function AboutSection() 
{
  const skillCategories = getSkillCategories();
  
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <p className="text-[var(--muted)] mb-4">
          {aboutContent.intro}
        </p>
        <p className="text-[var(--muted)] mb-4">
          {aboutContent.journey}
        </p>
        <p className="text-[var(--muted)]">
          {aboutContent.personal}
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[var(--fg)] mb-4">Skills</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.languages.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.frontEnd.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">Backend & APIs</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.backEnd.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">Databases & Caches</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.databases.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">Mobile (iOS & watchOS)</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.mobile.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">AI/ML & Data</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.aiMl.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[var(--accent)] font-medium mb-3">DevOps & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {skillCategories.tools.map((skill, index) => (
                <SkillPill key={index} name={skill} showProjectsOnHover={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}