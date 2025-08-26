import type { Collaborator } from '~/types/projects';
import { renderCollaborators } from '~/utils/collaborators';

interface ProjectCollaboratorsProps {
  collaborators?: Collaborator[];
}

export function ProjectCollaborators({ collaborators }: ProjectCollaboratorsProps) 
{
  if (!collaborators || collaborators.length === 0) 
{
    return null;
  }

  return (
    <>
      <span className="text-[var(--color-primary)]">Collaborators:&nbsp;</span>
      <span>{renderCollaborators(collaborators)}</span>
      <span className="hidden md:inline mx-2 text-[var(--color-text)]">|</span>
    </>
  );
}