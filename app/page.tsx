import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import MobileNav from "@/components/MobileNav";
import WorkExp from "@/components/WorkExp";
import Testimonials from "@/components/Testimonials";
import ContactMe from "@/components/ContactMe";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <div className="mb-10">
      <MobileNav />
      <Navbar />
      <Socials />
      <About />
      <Projects />
      <Skills />
      <WorkExp />
      <Testimonials />
      <Articles />
      <ContactMe />
    </div>
  );
}
