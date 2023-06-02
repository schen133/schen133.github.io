import Link from "next/link";

const Navbar = () => {
  return (
    <nav id="navbarContainer" className="">
      <ul>
        <li>
          <Link href="#introContainer"> Intro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
