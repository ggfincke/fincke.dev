import { SkillPill } from '~/components/display/SkillPill';

interface ProjectCardTechnologiesProps {
  technologies: string[];
}

export function ProjectCardTechnologies({ technologies }: ProjectCardTechnologiesProps) 
{
  return (
    <div className="px-6 pb-6 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <SkillPill key={tech} name={tech} />
      ))}
    </div>
  );
}