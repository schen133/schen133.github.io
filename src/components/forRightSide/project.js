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
      projectName: "Revi Primary Software",
      description:
        "Revi's primary sofware built with NextJS, TailwindCSS, and Framer Motion for interactive animation. ",
      picture: "/img/ReviScreenShot.png",
      url: "https://infoscout.ai",
    },
    {
      projectName: "Revi Home Page",
      description:
        "A static landing page designed with Figma and developed using React, styled using TailwindCSS, and animated using Framer Motion.",
      picture: "/img/revi_new_design.png",
      url: "https://infoscout.ai/industry/supplychain",
    },
    // {
    //   projectName: "Social Media Web App",
    //   description:
    //     "A scalable full stack web application built with Meteor.js and MongoDB. This production ready web app offers a comprehensive solution for researchers, enabling them not only to host experiments and batches with participants with ease but also helps them efficiently to gather and manage data.",
    //   picture: "/img/HCI.png",
    //   url: "",
    // },
    {
      projectName: "Personalized Meal Plan Generation",
      description:
        "A full stack web application hosted on vercel built using NextJS, React, TailwindCSS, Auth0, and Google Cloud. The web app scrapes the daily menu off campus' dinning hall menu every 12 hours and use the data to generate your personalized meal plans for the day on campus.",
      picture: "/img/campusPlate.png",
      url: "https://campus-plate-2023.vercel.app/",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 border-"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:sr-only">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext dark:text-ddarktext lg:">
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
