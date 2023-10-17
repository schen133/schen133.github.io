import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const TextReveal = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  //this will gives us control on what to animate and when to animate
  const mainControls = useAnimation();

  const textVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={textVariant}
        initial="hidden"
        transition={{ duration: 0.7 }}
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;

// more delay
export const TextReveal2 = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  //this will gives us control on what to animate and when to animate
  const mainControls = useAnimation();

  const textVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={textVariant}
        initial="hidden"
        transition={{ duration: 0.7, delay: 0.6 }}
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const TextReveal3 = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  //this will gives us control on what to animate and when to animate
  const mainControls = useAnimation();

  const textVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={textVariant}
        initial="hidden"
        transition={{ duration: 0.7, delay: 0.7 }}
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
export const TextReveal4 = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  //this will gives us control on what to animate and when to animate
  const mainControls = useAnimation();

  const textVariant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={textVariant}
        initial="hidden"
        transition={{ duration: 0.7, delay: 1.2 }}
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};


