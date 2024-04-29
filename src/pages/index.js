import Header from "@/components/leftside";
import Content from "@/components/rightside";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames";
import { calcLength, motion } from "framer-motion";
import { useState } from "react";
// import Projects from "@/components/Projects";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [on, setOn] = useState(true);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 20,
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className={classNames("min-h-screen transition", on ? "dark" : "")}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <Head>
        <title> Sifeng Chen</title>
        <link rel="icon" href="/letter-s-light.ico" />
        <meta
          name="description"
          content="Sifeng Chen's personal website"
        ></meta>
        <meta
          name="keywords"
          content="Sifeng Chen, Chris Chen, Chris Sifeng Chen, University of Rochester, Software Engineer"
        ></meta>
        <meta name="author" content="Sifeng Chen"></meta>
      </Head>
      <main
        id="screen"
        className="bg-bg dark:bg-dbg relative flex font-sans h-full w-full justify-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 transition"
      >
        <div
          className={on ? "fixed transition duration-300 inset-0 z-0" : "hidden"}
          style={{
            // background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgb(18, 100, 18, 0.15), transparent 80%)`,
          }}
        ></div>{" "}
        <div
          id="themeToggleButton"
          className={classNames(
            "z-40 fixed  top-[15px] right-[15px] lg:right-[60px] lg:top-[50px] w-[60px] h-[30px] rounded-[50px] cursor-pointer  transition",
            on ? "bg-bg/40 " : "bg-dbg/40"
          )}
          //  data-isOn={isOn} onClick={toggleSwitch}
          onClick={() => setOn(!on)}
        >
          <div
            id="moonAndSun"
            className="flex flex-row h-full w-full px-2 absolute items-center justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className={classNames(
                "text-dbg transition",
                on ? "opacity-1" : "opacity-0"
              )}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className={classNames(
                "text-bg transition",
                on ? "opacity-0" : "opacity-1"
              )}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </div>
          <div
            className={classNames(
              "flex items-center h-full px-2 ",
              on ? "justify-end" : " justify-start"
            )}
          >
            <motion.div
              className={classNames(
                "w-[20px] h-[20px] rounded-[40px] bg-bg dark:bg-dbg border-",
                on ? " " : ""
              )}
              layout
              transition={spring}
            />
          </div>
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
