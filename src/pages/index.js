import Header from "@/components/leftside";
import Content from "@/components/rightside";
import Head from "next/head";
import Image from "next/image";
// import Projects from "@/components/Projects";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // #F0DAD2
    // #f7f7e6

    <div className="min-h-screen bg-[#FBFBEA]">
      <Head>
        <title> Sifeng Chen</title>
        <link rel="icon" href="/letter-s-light.ico" />
      </Head>
      <main
        id="screen"
        className="flex font-sans h-full w-full justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
      >
        <div
          id="indexContainer"
          className="flex flex-col lg:flex-row h-full w-full max-w-[1088px] lg:gap-2 lg:justify-between"
        >
          <Header />
          <Content />
        </div>
      </main>
    </div>
  );
}
