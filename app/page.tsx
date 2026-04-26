import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechnicalDepth } from "@/components/TechnicalDepth";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechnicalDepth />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
