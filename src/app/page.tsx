// src/app/page.tsx

// import components
import Navbar from '~/components/Navbar';
import { Hero } from '~/components/Hero';

// home page
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}