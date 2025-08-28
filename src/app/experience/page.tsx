// src/app/experience/page.tsx
// experience page redirect to resume PDF
import { redirect } from 'next/navigation';

// redirect component to resume PDF
export default function ExperiencePage() 
{
  redirect('/documents/resume.pdf');
}