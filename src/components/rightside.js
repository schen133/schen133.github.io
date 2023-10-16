import About from "./forRightside/about";
import Experience from "./forRightSide/experience";
import Projects from "./forRightSide/project";

const Content = () => {
  return (
    <div
      id="contentContainer"
      className=" h-full border- bg- w-full lg:w-1/2 pt-24 lg:py-24"
    >
      <About />
      <Experience />

      

    
    </div>
  );
};

export default Content;
