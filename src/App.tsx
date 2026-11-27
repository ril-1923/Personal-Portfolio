import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ThreeDShowcase from '@/components/ThreeDShowcase';
import Experience from '@/components/Experience';
import AIWorkflow from '@/components/AIWorkflow';
import GitHubSection from '@/components/GitHubSection';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ThreeDShowcase />
        <Experience />
        <AIWorkflow />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
