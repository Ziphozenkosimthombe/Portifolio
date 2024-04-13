import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import image from '../assets/profile.jpg'
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-2 pt-20 flex justify-between items-center " id="home">
        <div className="">
            <h1>Hi, I am <br />
                <span className="text-blue-500 ">Ziphozenkosi Ncayiyana</span>
            </h1>
            <h3>your next Software Engineer</h3>
            <p> | Software Developer | Full Stack Developer | <br />
                | Front-End Developer | Back-End Developer | <br />
            </p>
            <ul className="flex gap-4 mt-5">
                <li>
                    <a href="https://twitter.com/Ziphozenkosi478" className="text-4xl">
                        <BsTwitterX />
                    </a>
                </li>
                <li>
                    <a href="linkedin.com/in/ziphozenkosi" className="text-4xl">
                        <TfiLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Ziphozenkosimthombe" className="text-4xl">
                        <VscGithub />
                    </a>
                </li>
                <li>
                    <a href="mailto:ziphoncayiyana@gmail.com" className="text-4xl">
                        <AiOutlineMail />
                    </a>
                </li>
            </ul>
        </div>
        <div>
        <img src={image} alt="zipho" className="profile"/>
        </div>
        
    </div>
  )
}

export default Home