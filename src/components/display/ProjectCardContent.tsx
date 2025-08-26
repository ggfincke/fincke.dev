import { ReactNode } from 'react';

interface ProjectCardContentProps {
  bulletPoints: (string | ReactNode)[];
  contentComponent?: ReactNode;
}

export function ProjectCardContent({ bulletPoints, contentComponent }: ProjectCardContentProps) 
{
  return (
    <div className="p-6 pt-2 flex flex-col md:flex-row flex-grow overflow-y-auto">
      <div className="w-full md:w-1/2 pr-4 overflow-y-auto">
        <ul className="list-disc pl-5 space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-[var(--color-text)]">{point}</li>
          ))}
        </ul>
      </div>
      
      {contentComponent ? (
        <div className="w-full md:w-1/2 h-80 mt-4 md:mt-0 rounded">
          {contentComponent}
        </div>
      ) : (
        <div className="hidden md:block md:w-1/2 h-80 bg-gray-200 mt-4 md:mt-0 rounded">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            (image)
          </div>
        </div>
      )}
    </div>
  );
}