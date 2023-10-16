const About = () => {
  return (
    <section className="flex flex-col mb-16 md:mb-24 lg:mb-36">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:sr-only">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext lg:">
          About
        </h1>
      </div>

      <div className="text-mediumtext">
        {" "}
        <p className="mb-4">
          {" "}
          As a Computer Science student at the University of Rochester, I am
          passionate about solving problems and building innovative products
          from the ground up. I have experience in Web applications and iOS
          development and I am always eager to learn about new tools and gain
          new experiences.{" "}
        </p>
        <p className="mb-4">
          In addition to the technical aspect, I am also deeply interested in
          entrepreneurship and the business side of technology. Why? I believe
          technology can change the world we live in and my ambition is to be a
          part of that change.{" "}
        </p>
        <p className="mb-4">
          {" "}
          If you are looking for a driven developer/engineer with a passion for
          problem-solving, entrepreneurship, and innovative solutions, I would
          love to connect with you. Let's get to work!
        </p>
      </div>
    </section>
  );
};

export default About;
