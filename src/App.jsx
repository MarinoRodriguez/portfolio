import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';

export function App() {
  return (
    <div class="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />
      <main class="flex-1">
        <Hero />
        <About />
        <Experience />
        <EducationCertifications />
      </main>
    </div>
  );
}
