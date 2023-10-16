const Content = () => {
  return (
    <div
      id="contentContainer"
      className="flex h-full border- bg- w-full lg:w-1/2 pt-24 lg:pt-0"
    >
      <section className="flex flex-col">
        <h1 className="text-sm font-bold uppercase tracking-widest text-darktext lg:">
          About
        </h1>
        <p className="text-mediumtext">
          {" "}
          I am a senior currently studying in the University of Rochester
        </p>
      </section>
    </div>
  );
};

export default Content;
