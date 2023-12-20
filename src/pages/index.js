import Header from "@/components/leftside";
import Content from "@/components/rightside";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
// import Projects from "@/components/Projects";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [on, setOn] = useState(false);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div className={classNames("min-h-screen transition", on ? "dark" : "")}>
      <Head>
        <title> Sifeng Chen</title>
        <link rel="icon" href="/letter-s-light.ico" />
      </Head>
      <main
        id="screen"
        className="bg-bg dark:bg-dbg relative flex font-sans h-full w-full justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 transition"
      >
        {" "}
        <div
          className={classNames(
            "flex z-40 fixed right-[60px] top-[50px] w-[60px] h-[30px] rounded-[50px] items-center cursor-pointer px-2 group",
            on ? "bg-white/40 justify-end" : "bg-black/40 justify-start"
          )}
          //  data-isOn={isOn} onClick={toggleSwitch}
          onClick={() => setOn(!on)}
        >
          <motion.div
            className={classNames(
              "w-[20px] h-[20px] rounded-[40px] bg-white dark:bg-dark",
              on ? " " : ""
            )}
            layout
            transition={spring}
          />
        </div>{" "}
        <div
          id="indexContainer"
          className="flex dark:text-white flex-col lg:flex-row h-full w-full max-w-[1088px] lg:gap-2 lg:justify-between"
        >
          <Header />
          <Content />
        </div>
      </main>
    </div>
  );
}
