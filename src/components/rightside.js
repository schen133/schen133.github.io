import About from "./forRightSide/about";
import Experience from "./forRightSide/experience";
import Projects from "./forRightSide/project";
import OpenSource from "./forRightSide/openSource";
import Image from "next/image";

const Content = () => {
  return (
    <div className="h-full w-full lg:w-1/2 border- ">
      <div
        id="contentContainer"
        className=" h-full border- bg- w-full pt-24 lg:py-24"
      >
        <About />
        <Experience />

        <Projects />

        {/* <OpenSource /> */}
      </div>{" "}
      <div className="w-full flex border- items-end pb-[50px] justify-end">
        <Image
          src="/letter-s-light.png"
          width={100}
          height={100}
          className="border-"
        />
      </div>
    </div>
  );
};

export default Content;
