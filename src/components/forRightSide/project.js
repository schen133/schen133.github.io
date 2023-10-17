import ProjectCard from "./featureComponents/projectCard";
import useFeatureStore from "@/utils/useFeatureStore";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setInViewFeature("projects");
    }
    // if(!isInView && inViewFeature === step.num){
    //     setInViewFeature(null);
    // }
  }, [isInView, "projects", setInViewFeature]);

  const ProjectList = [
    {
      projectName: "Revi web application",
      description: "This is an application.....",
      picture: "/img/ReviScreenShot.png",
      url: "",
    },
    {
      projectName: "Social Media Web App for Experiments",
      description: "This is a phone app",
      picture: "/img/HCI.png",
      url: "",
    },
    // {
    //   projectName: "Reversi with AI opponent",
    //   description:
    //     "This is a reversi game built using Java. There also comes with a AI opponent/",
    //   picture: "",
    //   url: "",
    // },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 border-"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:sr-only">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext lg:">
          Projects
        </h1>
      </div>{" "}
      <div id="projectsContainer" className="flex flex-col space-y-12">
        {ProjectList.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
