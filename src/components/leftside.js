// import Typical from "react-typical";
import Typed from "typed.js";
import { useState, useRef, useEffect } from "react";
import NavBar from "./navbar";

const Header = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a developer/engineer",
        "I love music 🎉 🎵",
        "I love coffee and matcha 🍵",
        "I also love to work out 🏋🏻‍♂️",
        "Thanks for visiting my personal website. Enjoy!",
        // "CS @ University of Rochester 👨🏻‍💻",
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
      className="lg:flex border- bg- w-full lg:w-1/2 lg:flex-col lg:sticky lg:top-0 lg:py-24 lg:justify-between lg:max-h-screen border-"
    >
      <div id="textContainer">
        <h1 className="text-4xl sm:text-5xl font-bold text-darktext dark:text-ddarktext ">
          <span className=""> Hi,</span> I'm Chris (Sifeng)
        </h1>

        <h2 className="mt-3 text-lg sm:text-xl font-medium text-darktext dark:text-ddarktext">
          Software Engineer
        </h2>

        <p className="mt-4 max-w-xs leading-normal font-normal text-mediumtext dark:text-dmediumtext border- h-[40px]">
          <span ref={el} />
        </p>
        <NavBar />
      </div>

      <ul
        id="socialMediaIcons"
        className="ml-1 mt-8 flex items-center text-darktext dark:text-dlighttext "
      >
        {/* <li>About</li>
        <li>Experience</li>
        <li>Project</li> */}
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-accent"
            href="https://github.com/schen133"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-7 w-7 transition duration-200"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>

        <li className="mr-5 text-xs">
          {" "}
          <a
            className="block hover:text-accent"
            href="https://www.linkedin.com/in/sifeng-chen-bb2782184/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[29px] w-[29px] transition duration-200"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>

        <li className="mr-5 text-xs">
          <a
            className="block hover:text-accent"
            href="mailto:schen133@u.rochester.edu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[32px] w-[32px] transition duration-200"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
            </svg>{" "}
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
