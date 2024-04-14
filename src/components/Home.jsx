import SocialMedia  from './SocialMedia' 
import image from '../assets/profile.jpg'
import useIntersectionObserver from '../utils/UseIntersection'
const Home = () => {
  const ref = useIntersectionObserver();
  
  return (
    <div className="container mx-auto px-4 py-2 pt-20 flex justify-around items-center main" id="home" ref={ref}>
        <div className="div">
            <h1 className='text-black font-extrabold text-4xl'>Hi, I am </h1>
            <h2 className="mt-5 text-blue-500 font-bold text-3xl">Ziphozenkosi Ncayiyana</h2>
            <h3 className='mt-5 text-black font-extrabold text-2xl'>your next Software Engineer</h3>
            <p className='mt-12'> | Software Developer | Full Stack Developer | <br />
                | Front-End Developer | Back-End Developer | <br />
            </p>
            <SocialMedia/>
        </div>
        <div className='div'>
        <img src={image} alt="zipho" className="profile mt-10"/>
        </div>
        
    </div>
  )
}

export default Home