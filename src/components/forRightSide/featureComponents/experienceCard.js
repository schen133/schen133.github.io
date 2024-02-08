import TextReveal from "../animationComponents/TextReveal";
import { TextReveal2, TextReveal3 } from "../animationComponents/TextReveal";

const ExperienceCard = ({ experience }) => {
  return (
    <div id="experienceCard" className="relative group border-">
      <div className="absolute border- md:group-hover:bg-[#C2C3B2] -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:-inset-y- md:block md:group-hover:shadow-accent md:group-hover:drop-shadow-lg opacity-[.12]">
        {" "}
      </div>

      <div className="flex flex-col sm:flex-row border- sm:space-x-10 lg:space-x-4 z-20">
        {" "}
        <div
          id="timeAndLocation"
          className="text-lighttext dark:text-dlighttext font-semibold uppercase text-sm  min-w-[185px] border-"
        >
          <TextReveal>
            {" "}
            {experience.time.from} — {experience.time.to}
          </TextReveal>
        </div>
        <div
          id="moreInfor"
          className="flex flex-col mt-2 sm:mt-[-2px] border- z-10"
        >
          <div id="titleAndCompany" className="flex flex-col font-medium ">
            <a
              className="group/link flex flex-row"
              href={experience.url}
              target="_blank"
            >
              <span
                id="linkSpan"
                className="absolute border- -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 lg:-inset-x-6 md:block"
              ></span>
              <div className="flex flex-row space-x-2 w-full border-">
                <h1 className="font-bold text-darktext dark:text-ddarktext  group-hover:text-accent transition-color ease-in-out duration-200 border- w-full border-">
                  <TextReveal> {experience.company} </TextReveal>
                </h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-darktext dark:text-ddarktext group-hover:text-accent group-hover:scale-150 animate-pulse transition duration-300 ease-in-out"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
            </a>
            <TextReveal>
              {" "}
              <h3 className="text-mediumtext dark:text-dmediumtext">
                {experience.role}{" "}
              </h3>
            </TextReveal>
          </div>

          <div
            id="bulletPoints"
            className="text-mediumtext dark:text-dmediumtext text-sm leading-normal mt-2 flex flex-col space-y-1"
          >
            <TextReveal2>
              {experience.bulletPoints.map((bp, index) => (
                <p className="mb-2" key={index}>
                  {" "}
                  {bp}
                </p>
              ))}
            </TextReveal2>
          </div>

          <div id="skillTags" className="mt-">
            <TextReveal3>
              <ul className="flex flex-wrap">
                {experience.skills.map((skill, index) => (
                  <li className="mr-1.5 mt-2" key={index}>
                    <a class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                      {skill}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </TextReveal3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
