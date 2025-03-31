import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Social from '@/components/Social';
import Email from '@/components/Email';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <About />
      <Skills/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Social />
      <Email />
    </main>
  );
}
