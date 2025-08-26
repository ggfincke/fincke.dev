import type { Collaborator } from '~/types/projects';

export const renderCollaborators = (collaborators: Collaborator[]) => 
{
  if (!collaborators || collaborators.length === 0) 
{
    return null;
  }

  return collaborators.map((collab, index, arr) => (
    <span key={collab.name}>
      {collab.url ? (
        <a 
          href={collab.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--color-primary)] hover:underline"
        >
          {collab.name}
        </a>
      ) : collab.name}
      {index < arr.length - 1 ? ', ' : ''}
    </span>
  ));
};

export const getCollaboratorNames = (collaborators: Collaborator[]): string => 
{
  if (!collaborators || collaborators.length === 0) 
{
    return '';
  }
  
  return collaborators.map(collab => collab.name).join(', ');
};