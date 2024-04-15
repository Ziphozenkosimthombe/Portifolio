import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Projects from "./Projects"
const Homes = () => {
  return (
    <>
      <div className="">
        <Header/>
        <Home/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default Homes