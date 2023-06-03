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
      duration: 3.5,
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

const Intro = () => {
  const [flashy, setFlashy] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleHover() {}

  return (
    <>
      <div
        id="IntroContainer"
        className="flex flex-col items-center border- w-[350px]"
      >
        <motion.div onMouseEnter={handleHover} className="">
          {/* <button className="text-red-500">Toggle Image</button> */}
          <InitialLogo />
        </motion.div>

        <div
          id="pContainer"
          className="mt-[20px] flex flex-col justify-start w-[100%]"
        >
        <p className="text-white font-mono text-md"> Hi, I'm Sifeng Chen</p>
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
