// src/components/sections/ExperienceSection.tsx

// imports

// timeline
import { TimelineContainer } from '~/components/timeline/TimelineContainer';
import { TimelineItem } from '~/components/timeline/TimelineItem';

// data
import { experiences, education } from '~/data/experiences';

export function ExperienceSection() {
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
    </div>
  );
}