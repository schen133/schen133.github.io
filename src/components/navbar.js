import Link from "next/link";
import useFeatureStore from "@/utils/useFeatureStore";
import classNames from "classnames";

const NavBar = () => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3" href="#about">
            <span
              className={classNames(
                "nav-indicator mr-4  transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                inViewFeature == "about"
                  ? "w-16 bg-accent h-[2px]"
                  : "bg-lighttext w-8 h-[1px]"
              )}
            >
              {/* <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"> */}
            </span>
            <span
              className={classNames(
                "text-xs font-bold uppercase tracking-widest group-hover:text-accent group-focus-visible:text-slate-200",
                inViewFeature == "about"
                  ? "text-accent"
                  : "text-lighttext dark:text-dlighttext"
              )}
            >
              {" "}
              About
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3" href="#experience">
            <span
              className={classNames(
                "nav-indicator mr-4 transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                inViewFeature == "experience"
                  ? "w-16 bg-accent h-[2px]"
                  : "bg-lighttext w-8 h-[1px]"
              )}
            >
              {/* <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"> */}
            </span>
            <span
              className={classNames(
                "text-xs font-bold uppercase tracking-widest group-hover:text-accent group-focus-visible:text-slate-200",
                inViewFeature == "experience"
                  ? "text-accent"
                  : "text-lighttext dark:text-dlighttext"
              )}
            >
              Experience
            </span>
          </a>
        </li>{" "}
        <li>
          <a className="group flex items-center py-3" href="#projects">
            <span
              className={classNames(
                "nav-indicator mr-4 transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                inViewFeature == "projects"
                  ? "w-16 bg-accent h-[2px]"
                  : "bg-lighttext w-8 h-[1px]"
              )}
            >
              {/* <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"> */}
            </span>
            <span
              className={classNames(
                "text-xs font-bold uppercase tracking-widest group-hover:text-accent group-focus-visible:text-slate-200",
                inViewFeature == "projects"
                  ? "text-accent"
                  : "text-lighttext dark:text-dlighttext"
              )}
            >
              Projects
            </span>
          </a>
        </li>{" "}
        <li>
          <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              {" "}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-lighttext dark:text-dlighttext group-hover:text-accent group-focus-visible:text-slate-200">
              {" "}
              Open source
            </span>
          </a>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default NavBar;
