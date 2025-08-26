// src/app/experience/page.tsx

// redirect to resume.pdf
import { redirect } from 'next/navigation';

export default function ExperiencePage() 
{
  redirect('/resume.pdf');
}