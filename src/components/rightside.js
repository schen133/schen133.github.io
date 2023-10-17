import About from "./forRightSide/about";
import Experience from "./forRightSide/experience";
import Projects from "./forRightSide/project";
import OpenSource from "./forRightSide/openSource";

const Content = () => {
  return (
    <div
      id="contentContainer"
      className=" h-full border- bg- w-full lg:w-1/2 pt-24 lg:py-24"
    >
      <About />
      <Experience />

      <Projects />

      {/* <OpenSource /> */}
    </div>
  );
};

export default Content;
