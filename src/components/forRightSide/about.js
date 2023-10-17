import TextReveal from "./animationComponents/TextReveal";
import { TextReveal2, TextReveal4 } from "./animationComponents/TextReveal";
import useFeatureStore from "@/utils/useFeatureStore";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if (isInView) {
      setInViewFeature("about");
    }
    // if(!isInView && inViewFeature === step.num){
    //     setInViewFeature(null);
    // }
  }, [isInView, "about", setInViewFeature]);
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col mb-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:sr-only">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext lg:">
          About
        </h1>
      </div>

      <div className="text-mediumtext">
        {" "}
        <TextReveal>
          <p className="mb-4">
            {" "}
            As a Computer Science student at the University of Rochester, I am
            passionate about solving problems and building innovative products
            from the ground up. I have experience in building
            <span className="text-accent font-semibold"> Web App</span> and{" "}
            <span className="text-accent font-semibold">iOS softwares</span> and
            I am always eager to learn about new tools and gain new experiences.{" "}
          </p>
        </TextReveal>
        <TextReveal2>
          {" "}
          <p className="mb-4">
            In addition to the technical aspect, I am also deeply interested in
            <span className="text-accent font-semibold">
              {" "}
              entrepreneurship
            </span>{" "}
            and the{" "}
            <span className="text-accent font-semibold"> business side </span>
            of technology. Why? I believe technology can change the world we
            live in and my ambition is to be a part of that change.{" "}
          </p>
        </TextReveal2>
        <TextReveal4>
          {" "}
          <p className="mb-4">
            {" "}
            If you are looking for a driven developer/engineer with a passion
            for problem-solving, entrepreneurship, and innovative solutions, I
            would love to connect with you. Let's get to work!
          </p>
        </TextReveal4>
      </div>
    </section>
  );
};

export default About;
