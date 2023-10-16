import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Intro from "@/components/intro";
import Introduction from "@/components/introduction";
import Header from "@/components/leftside";
import Content from "@/components/rightside";
// import Projects from "@/components/Projects";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // #F0DAD2
    // #f7f7e6

    <div className="h-screen bg-[#FBFBEA]">
      <main
        id="screen"
        className="flex font-sans h-full w-full justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24"
      >
        <div
          id="indexContainer"
          className="flex flex-col lg:flex-row h-full w-full max-w-[1088px]"
        >
          <Header />
          <Content />
        </div>
      </main>
    </div>
  );
}
