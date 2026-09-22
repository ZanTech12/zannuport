import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CvDocument from '@/components/CvDocument';

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* CV Document is self-hiding (positioned off-screen) */}
      <CvDocument />
    </>
  );
}