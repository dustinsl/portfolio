import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <NavBar />
      <Hero />
      <Summary />
      <Experience />
      <Skills />
      <Credentials />
      <Contact />
    </main>
  );
}
