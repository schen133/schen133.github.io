import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              {" "}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-lighttext group-hover:text-accent group-focus-visible:text-slate-200">
              {" "}
              About
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              {" "}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-lighttext group-hover:text-accent group-focus-visible:text-slate-200">
              {" "}
              Experience
            </span>
          </a>
        </li>{" "}
        <li>
          <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-lighttext transition-all group-hover:w-16 group-hover:bg-accent group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              {" "}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-lighttext group-hover:text-accent group-focus-visible:text-slate-200">
              {" "}
              Projects
            </span>
          </a>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default NavBar;
