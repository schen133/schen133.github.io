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
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext dark:text-ddarktext lg:">
          About
        </h1>
      </div>

      <div className="text-mediumtext dark:text-dmediumtext">
        {" "}
        <TextReveal>
          <p className="mb-4">
            {" "}
            Welcome to my personal page! My name is Sifeng or you can just call
            me Chris. I am a graduating Computer Science student at the
            University of Rochester and a sofware engineer who specialize in
            building scalable
            <span className="text-accent font-semibold">
              {" "}
              Web Applications
            </span>{" "}
            with an interest in{" "}
            <span className="text-accent font-semibold"> design</span>. You can
            say I am quite "stubborn" with quality UI.
          </p>
        </TextReveal>
        <TextReveal2>
          {" "}
          <p className="mb-4">
            So far, I've had the chance to work at{" "}
            <span className="text-accent font-semibold">
              a research lab, a student-led software consultancy, and a start-up
            </span>{" "}
            that's in the top 10% of applicants in YCombinator. I am also a
            freelancer part-time and I build websites for small business owners.
            Through these experiences, I've gain valuable experiences in
            different sofware development tools, practices, and methodologies.
          </p>
        </TextReveal2>
        <TextReveal4>
          {" "}
          I am currently looking for new opportunities. Whether you have any
          question or would like to reach out to me, please do so!
        </TextReveal4>
      </div>
    </section>
  );
};

export default About;
