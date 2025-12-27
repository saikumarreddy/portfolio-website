import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { WhyHireSai } from "@/components/sections/WhyHireSai";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
//import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <Hero />
      <Impact />
      <WhyHireSai />
      <About />
      <Education />
      <TechStack />
      <Experience />
      <Projects />
      {/*<Certifications />*/}
      <Contact />
      <Footer />
    </main>
  );
}
