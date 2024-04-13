
const NavigationLinks = () => {
  return (
    <>
        <ul className="hidden md:flex space-x-4">
            <li><a href="#home" className="text-white hover:text-gray-400 font-bold ">Home</a></li>
            <li><a href="#experience" className="text-white hover:text-gray-400  font-bold ">Experience</a></li>
            <li><a href="#education" className="text-white hover:text-gray-400 font-bold ">Education</a></li>
            <li><a href="skills#" className="text-white hover:text-gray-400 font-bold ">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-400 font-bold ">Projects</a></li>
          </ul>
    </>
  )
}

export default NavigationLinks