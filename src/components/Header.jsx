import {useState} from "react";
import MenuButton from "./MenuButton";
import NavigationLinks from "./NavigationLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navHight = {
    height: '80px',
  }
  return (
    <>
      <nav className="bg-gray-800 fixed w-screen" style={navHight}>
        <div className="container mx-auto px-4 py-2 flex justify-around items-center relative mt-5">
          <a href="#" className="text-white text-xl font-bold">
            Zipho Ncayiyana
          </a>
          <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <NavigationLinks />

        </div>

      </nav>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 w-48 fixed top-16 right-0 h-full pt-16">
          <ul className="text-white ">
            <li>
              <a href="#home" className="block px-4 py-2 hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#experience" className="block px-4 py-2 hover:text-gray-400">Experience</a>
            </li>
            <li>
              <a href="#education" className="block px-4 py-2 hover:text-gray-400">Education</a>
            </li>
            <li>
              <a href="#skills" className="block px-4 py-2 hover:text-gray-400">Skills</a>
            </li>
            <li>
              <a href="#projects" className="block px-4 py-2 hover:text-gray-400">Projects</a>
            </li>
            <li>
              <a href="#achivement" className="block px-4 py-2 hover:text-gray-400">Achivement</a>
            </li>
          </ul>
        </div>
      )}

    </>
  );
};

export default Header;
