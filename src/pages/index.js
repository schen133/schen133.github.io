import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-indigo-50">
      <Navbar />
      <main id="indexContainer" className="flex flex-col flex-grow items-center">
        <section id="introContainer">
          <Intro />
        </section>

        <div id="aboutContainer">
          <About />
        </div>
      </main>
    </div>
  );
}
