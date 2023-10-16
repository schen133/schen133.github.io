import ExperienceCard from "./featureComponents/experienceCard";

const Experience = () => {
  const Experiences = [
    {
      company: "ROC Human-Computer Interaction Lab",
      role: "Software Engineer",
      bulletPoints: [
        "Developed a full-stack web application using MeteorJS, ensuring user-friendly interface and seamless functionality.",
        "Leveraged Cloud Dev tools, such as MongoDB Atlas, to establish an efficient and secure database for the web app",
        "Optimized the application’s scalability and performance, reducing CPU usage by 85% and runtime by 90%.",
        "Conducted comprehensive testing using Puppeteer, guaranteeing application’s reliability across various scenarios.",
        "Enhanced open-source to meet the lab’s specific needs and documented contributions along with a developer guidefor public use.",
      ],
      time: {
        from: "March 2023",
        to: "Present",
      },
      skills: ["React", "MeteorJS", "TailwindCSS", "JavaSript"],
      url: "https://roc-hci.com/",
      id: "HCI",
    },
    {
      company: "ReviCID",
      role: "Software Developer",
      bulletPoints: [
        "Spearheaded frontend development for the company’s website and primary software during the early stages.",
        "Implemented various API services such as AWS S3, CloudFront, Auth0, and Stripe to enhance user experience.",
        "Adopted the Bulletproof React software architecture for a scalable and production-ready NextJS application.",
        "Researched websites of industry-standard companies and collaborated with team members for design concepts.",
      ],
      time: {
        from: "May 2023",
        to: "Present",
      },
      skills: ["React", "NextJS", "TailwindCSS", "Framer Motion", "JavaSript"],
      url: "https://revicid.com/",
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
      id:"RocLab"
    },
  ];

  return (
    <section className="flex flex-col mb-16 mt- md:mb-24 lg:mb-36 lg:mt-0">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:sr-only">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext lg:">
          Experience
        </h1>
      </div>

      <div id="experienceContainer" className="flex flex-col space-y-12">
        {Experiences.map((Experience) => (
          <ExperienceCard Experience={Experience} key={id}/>
        ))}
      </div>

      <div className="mt-20"> Resume </div>
    </section>
  );
};

export default Experience;
