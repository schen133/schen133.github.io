// import Typical from "react-typical";
import Typed from "typed.js";
import { useState, useRef, useEffect } from "react";
import NavBar from "./navbar";

const Header = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a developer",
        "I love music 🎉 🎵",
        "I love coffee and matcha 🍵",
        "I also love to work out 🏋🏻‍♂️",
        "I am a developer.",
        "CS @ University of Rochester 👨🏻‍💻",
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 2500,
      loop: false,
      loopCount: 0,
      showCursor: false,
      cursorChar: "|",
    });
  }, []);

  return (
    <div
      id="headerContainer"
      className="flex h-full border- bg- w-full lg:w-1/2 lg:flex-col lg:sticky lg:top-0 lg:py-24"
    >
      <div id="textContainer">
        <h1 className="text-4xl sm:text-5xl font-bold text-darktext ">
          Hi, I'm Sifeng Chen
        </h1>

        <h2 className="mt-3 text-lg sm:text-xl font-medium text-darktext">
          Software Developer
        </h2>

        <p className="mt-4 max-w-xs leading-normal font-normal text-mediumtext border- h-[40px]">
          <span ref={el} />
        </p>
      </div>

      <NavBar />

      <ul id="socialMediaIcons" className="mt-8 text-darktext">
        {/* <li>About</li>
        <li>Experience</li>
        <li>Project</li> */}
      </ul>
    </div>
  );
};

export default Header;
