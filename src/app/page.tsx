import Header from "./ui/header";
import Hero from "./ui/hero";
import About from "./ui/about";
import Skill from "./ui/skill";
import SeeMyProjects from "./ui/projects";
import ContactMe from "./ui/contact";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <SeeMyProjects />
      <ContactMe />
      <Footer />
    </>
  );
}
