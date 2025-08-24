// src/sections/home/ExperienceSection.tsx

import { TimelineContainer } from '~/components/timeline/TimelineContainer';
import { TimelineItem } from '~/components/timeline/TimelineItem';
import { experiences, education } from '~/data/structured/experiences';
import { experienceContent } from '~/data/content/experience';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { SectionNavButton } from '~/components/ui/SectionNavButton';
import { SkillPill } from '~/components/ui/SkillPill';
interface MobileExperienceItemProps {
  date: string;
  title: string;
  company: string;
  children: ReactNode;
  technologies?: string[];
  companyUrl?: string;
  companyLogos?: ReactNode;
  isLast?: boolean;
}
function MobileExperienceItem({ 
  date, 
  title, 
  company, 
  children, 
  technologies = [] as string[],
  companyUrl,
  companyLogos,
  isLast = false 
}: MobileExperienceItemProps) {
  return (
    <div className={`mb-12 ${isLast ? '' : 'border-b border-[var(--color-border)] pb-12'}`}>
      {/* Header with company and logos */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xl font-semibold text-[var(--color-primary)]">
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h4>
        {/* Properly sized logos */}
        <div className="flex items-center">
          {companyLogos}
        </div>
      </div>
      
      {/* Title and date */}
      <div className="flex flex-col mb-4">
        <div className="text-xl font-semibold text-[var(--color-text-light)]">
          {title}
        </div>
        <div className="text-sm text-[var(--color-muted)] mt-1">
          {date}
        </div>
      </div>
      
      {/* Description */}
      <div className="text-[var(--color-text)] mb-4">
        {children}
      </div>
      
      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <SkillPill key={index} name={tech} size="sm" />
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceSection() {
  // State to track screen size
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is the 'lg' breakpoint in Tailwind
    };
    
    // Set initial value
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <p className="text-[var(--color-text)] text-lg">
          {experienceContent.intro}
        </p>
      </div>
      
      {/* Desktop View - Timeline for large screens only */}
      {isLargeScreen ? (
        <>
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
          
          <div className="mt-16 pl">
            <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Education</h3>
            <div className="flex-grow">
              <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                {education.institution}
              </h4>
              <p className="text-[var(--color-text-light)] mb-1">
                {education.degree}
              </p>
              <p className="text-[var(--color-text)]">
                {education.period}
              </p>
            </div>
          </div>
          
          {/* View Full Résumé Button */}
          <div className="mt-12 pl">
            <SectionNavButton href="/experience">
              View Full Résumé
            </SectionNavButton>
          </div>
        </>
      ) : (
        // Mobile/Medium View - Stacked Cards
        <div className="mt-8">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <MobileExperienceItem
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
              </MobileExperienceItem>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">Education</h3>
            <div>
              <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                {education.institution}
              </h4>
              <p className="text-[var(--color-text-light)] mb-1">
                {education.degree}
              </p>
              <p className="text-[var(--color-text)]">
                {education.period}
              </p>
            </div>
          </div>
          
          {/* View Full Résumé Button */}
          <div className="mt-8 flex justify-center">
            <SectionNavButton href="/experience">
              View Full Résumé
            </SectionNavButton>
          </div>
        </div>
      )}
    </div>
  );
}