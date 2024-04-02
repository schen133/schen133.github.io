import ExperienceCard from "./featureComponents/experienceCard";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import useFeatureStore from "@/utils/useFeatureStore";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) {
      setInViewFeature("experience");
    }
    // if(!isInView && inViewFeature === step.num){
    //     setInViewFeature(null);
    // }
  }, [isInView, "experience", setInViewFeature]);

  const Experiences = [
    {
      company: "ROC Human-Computer Interaction Lab",
      role: "Software Engineer",
      bulletPoints: [
        // "Developed a full-stack web application using MeteorJS, ensuring user-friendly interface and seamless functionality.",
        // "Leveraged Cloud Dev tools, such as MongoDB Atlas, to establish an efficient and secure database for the web app",
        // "Optimized the application’s scalability and performance, reducing CPU usage by 85% and runtime by 90%.",
        // "Conducted comprehensive testing using Puppeteer, guaranteeing application’s reliability across various scenarios.",
        "Designing, developing, and deploying fullstack web applications for research scientists to use for data collecting and experiments purposes.",
        "Working directly with the open source framework, Empirica V1, to develop additional features of framework and enhance higher level developer experiences for researchers.",
      ],
      time: {
        from: "March 2023",
        to: "Present",
      },
      skills: [
        "React",
        "MeteorJS",
        "TailwindCSS",
        "JavaSript",
        "Docker",
        "Kubernetes",
        "MongoDB",
        "Puppeteer",
      ],
      url: "https://roc-hci.com/",
      id: "HCI",
    },
    {
      company: "ReviCID",
      role: "Software Developer",
      bulletPoints: [
        // "Spearheaded frontend development for the company’s website and primary software during the early stages.",
        // "Implemented various API services such as AWS S3, CloudFront, Auth0, and Stripe to enhance user experience.",
        // "Adopted the Bulletproof React software architecture for a scalable and production-ready NextJS application.",
        // "Researched websites of industry-standard companies and collaborated with team members for design concepts.",
        "Leading frontend development of company's primary software.",
        "Designing, developing, shipping websites, features, and prototypes to investors and clients.",
        "Designing frontend application's architecture and optimizing performance ensuring a maintainable and scalable codebase.",
      ],
      time: {
        from: "May 2023",
        to: "Present",
      },
      skills: [
        "React",
        "NextJS",
        "JavaSript",
        "TailwindCSS",
        "Framer Motion",
        "Figma",
      ],
      url: "https://infoscout.ai",
      id: "REVI",
    },

    {
      company: "RocLab | Campus Software Consultancy",
      role: "Front-end Developer",
      bulletPoints: [
        "Incorporated interactive functionalities to facilitate client-side interactions with backend API endpoints.",
        "Developed static pages using React and Chakra UI for the web app, ensuring it’s responsive and mobile-friendly.",
        "Collaborated with UI/UX team for client-side layout and designs, and with backend engineers for system designs.",
      ],
      time: {
        from: "Feb 2023",
        to: "June 2023",
      },
      skills: ["React", "NextJS", "ChakraUI", "TypeScript"],
      url: "https://www.linkedin.com/company/roclab-at-university-of-rochester/",
      id: "RocLab",
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="flex flex-col mb-16 mt- md:mb-24 lg:mb-36 lg:scroll-mt-24 border-"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:sr-only">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext dark:text-ddarktext lg:">
          Experience
        </h1>
      </div>

      <div id="experienceContainer" className="flex flex-col space-y-12">
        {Experiences.map((experience) => (
          <ExperienceCard experience={experience} key={Experience.id} />
        ))}
      </div>

      <div className="mt-12">
        {" "}
        <a
          className="group flex flex-row font-medium text-darktext dark:text-ddarktext "
          href="/SifengChen_Resume__1_08_24_.pdf"
          target="_blank"
        >
          <h1 className="group-hover:text-accent transition duration-200 group-hover:translate-x-[-5px]">
            {" "}
            Resume Here{" "}
          </h1>
          <span className=" mt-[1px] group-hover:text-accent group-hover:translate-x-[8px] transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentcolor"
              viewBox="0 0 24 24"
              className=""
            >
              <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
