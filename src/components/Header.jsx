import { useState } from "react";
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
          {/* Menu button for small screens */}
          <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
          {/* Menu rendered inside the nav tag for larger screens */}
          <NavigationLinks />
          
        </div>
         
      </nav>
      {/* Sidebar rendered for small screens */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 w-48 fixed top-16 right-0 h-full pt-16">
          <ul className="text-white ">
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-400">Experience</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-400">Education</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-400">Skills</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:text-gray-400">Projects</a>
            </li>
          </ul>
        </div>
      )}
      
    </>
  );
};

export default Header;
