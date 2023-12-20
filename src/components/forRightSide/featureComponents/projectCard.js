import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const { scrollYProgress: progress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1.33 1"],
  });

  const scale = useTransform(progress, [0, 1], [0.7, 1]);
  const opacity = useTransform(progress, [0,1],[0.6, 1])
  return (
    <motion.div
      ref={ref}
      id="projectCard"
      className="relative group flex flex-row border- w-full h-[]"
      style={{ scale: scale, opacity: opacity }}
    >
      <div className="absolute border- md:group-hover:bg-[#C2C3B2] border- -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 md:block md:group-hover:shadow-accent md:group-hover:drop-shadow-lg opacity-[.12]">
        {" "}
      </div>

      <div
        id="contents"
        className="flex flex-col sm:flex-row sm:space-x-10 lg:space-x-4 w-full border-"
      >
        {" "}
        <div
          id="picture"
          className="hidden sm:flex sm:items-start sm:justify-center mt-2 sm:mt-0 sm:mb-0 border- w-full sm:max-w-[185px]"
        >
          <div id="dummyImage" className="border-">
            <Image
              src={project.picture}
              width={150}
              height={150}
              className="w-full sm:w-[230px] lg:w-[150px] rounded-md border-[1px] border-lighttext group-hover:border-accent transition"
            />
          </div>
        </div>
        <div
          id="nameAndDescription"
          className="flex flex-col border- w-full sm:mt-[0px]"
        >
          <a
            className="group/link flex flex-row"
            href={project.url}
            target="_blank"
          >
            <span
              id="linkSpan"
              className="absolute border- -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 lg:-inset-x-6 md:block"
            ></span>
            <div className="flex flex-row space-x- w-full">
              <h1 className="font-bold text-darktext dark:text-ddarktext group-hover:text-accent transition-color ease-in-out duration-200 border- w-full">
                {project.projectName}{" "}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-darktext dark:text-ddarktext group-hover:text-accent group-hover:scale-150 animate-pulse transition duration-300 ease-in-out"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </a>
          <div
            id="bulletPoints"
            className="text-mediumtext dark:text-dmediumtext text-sm leading-normal mt-2 flex flex-col space-y-1"
          >
            <p> {project.description}</p>
          </div>{" "}
        </div>
        <div
          id="picture"
          className="sm:hidden flex items-start justify-start mt-2 mb-0 border- w-full "
        >
          <div id="dummyImage" className="border-">
            <Image
              src={project.picture}
              width={200}
              height={150}
              className="group-hover:border-accent w-full sm:w-[230px] lg:w-[150px] rounded-md border-[1px] border-lighttext transition"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
