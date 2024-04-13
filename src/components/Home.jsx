import SocialMedia  from './SocialMedia' 
import image from '../assets/profile.jpg'
const Home = () => {
  return (
    <div className="container mx-auto px-4 py-2 pt-20 flex justify-around items-center " id="home">
        <div className="">
            <h1>Hi, I am <br />
                <span className="text-blue-500 ">Ziphozenkosi Ncayiyana</span>
            </h1>
            <h3>your next Software Engineer</h3>
            <p> | Software Developer | Full Stack Developer | <br />
                | Front-End Developer | Back-End Developer | <br />
            </p>
            <SocialMedia />
        </div>
        <div>
        <img src={image} alt="zipho" className="profile"/>
        </div>
        
    </div>
  )
}

export default Home