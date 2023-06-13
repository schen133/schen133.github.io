import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Typical from "react-typical";

const InitialLogoStates = {
  initial: {
    opacity: 0,
  },
  middle: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  exit: {
    opacity: 0,
  },
  hover: { scale: 1.3 },
};

export const InitialLogo = () => {
  return (
    <>
      <motion.img
        src="/img/IL.png"
        className="w-[330px]"
        variants={InitialLogoStates}
        initial="initial"
        animate="middle"
        exit="exit"
        whileHover="hover"
      ></motion.img>
    </>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Intro = () => {
  const [flashy, setFlashy] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleHover() {}

  return (
    <>
      <div
        id="IntroContainer"
        className="flex flex-col items-center border- w-[350px] relative"
      >
        <motion.div onMouseEnter={handleHover} className="">
          {/* <button className="text-red-500">Toggle Image</button> */}
          <InitialLogo />
          <motion.svg
            width="100%"
            height="200"
            viewBox="35 140 500 140"
            initial="hidden"
            animate="visible"
            className="absolute top-0 left-[-5px] stroke-[4px] stroke-rounded"
          >
            <motion.line
              x1="102"
              y1="280"
              x2="102"
              y2="100"
              stroke="#0099ff"
              variants={draw}
              custom={1}
              className="text-frame stroke-current"
            />

            <motion.line
              x1="480"
              y1="280"
              x2="480"
              y2="100"
              stroke="#0099ff"
              variants={draw}
              custom={3}
              className="text-frame stroke-current"
            />
            <motion.line
              x1="483"
              y1="280"
              x2="483"
              y2="100"
              stroke="#0099ff"
              variants={draw}
              custom={3}
              className="text-frame stroke-current"
            />
            <motion.line
              x1="486"
              y1="280"
              x2="486"
              y2="100"
              stroke="#0099ff"
              variants={draw}
              custom={3}
              className="text-frame stroke-current"
            />
            <motion.line
              x1="489"
              y1="280"
              x2="489"
              y2="100"
              stroke="#0099ff"
              variants={draw}
              custom={3}
              className="text-frame stroke-current"
            />

            <motion.line
              x1="480"
              y1="102"
              x2="150"
              y2="102"
              stroke="#0099ff"
              variants={draw}
              custom={2}
              className="text-frame stroke-current"
            />

            <motion.line
              x2="440"
              y2="278"
              x1="100"
              y1="278"
              stroke="#0099ff"
              variants={draw}
              custom={4.5}
              className="text-frame stroke-current"
            />
          </motion.svg>
        </motion.div>

        <div
          id="pContainer"
          className="mt-[20px] flex flex-col justify-start w-[100%]"
        >
          <p className="text-white font-mono text-md">
            Hi, I{"'"}m Sifeng Chen
          </p>
          <p className="mt-[12px] text-white font-mono text-sm">
            I{" "}
            <Typical
              steps={[
                "am a developer",
                1000,
                "love music",
                1000,
                "love coffee",
                1000,
                "also love to work out!",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>

        {/* <h1 className="text-gray-100"> Hello</h1> */}
      </div>
    </>
  );
};

export default Intro;
