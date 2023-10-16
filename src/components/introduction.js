import Typical from "react-typical";

const Introduction = () => {
  return (
    <>
      <div className="transition flex flex-col sm:flex-row w-[80%] md:w-[70%] lg:w-[55%] max-w-[792px] border-">
        <div
          id="nameWithIntroContainer"
          className="flex flex-col border-2 w-1/2 py-[20px] min-w-[280px] max-w-[460px]"
        >
          <p className="text-darktext font-mono text-xl font-semibold">
            Hi, I am Sifeng Chen
          </p>
          {/* <p className="mt-[12px] text-black font-mono text-sm w-[220px] border- ml-[37px]"> */}
          <p className=" mt-[12px] text-mediumtext font-mono text-md border-">
            I{" "}
            <Typical
              steps={[
                "am a developer",
                1000,
                "love music 🎉 🎵",
                1000,
                "love coffee and matcha 🍵",
                1000,
                "also love to work out 🏋🏻‍♂️",
                1000,
                "am a developer. 👨🏻‍💻",
              ]}
              loop={1}
              wrapper="b"
            />
          </p>
        </div>
        <div id="profileContainer" className="border- w-1/2">
          {" "}
          {/* Image */}
        </div>
      </div>
    </>
  );
};

export default Introduction;
