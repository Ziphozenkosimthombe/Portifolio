import Image from '../assets/taxis_1.png'
import useIntersectionObserver from '../utils/UseIntersection'
const Projects = () => {
  const ref = useIntersectionObserver();
  return (
    <div className="mt-32 main " ref={ref} id='projects'>
      <h1 className="font-extrabold text-3xl text-center">Projects</h1>
      <div className='flex justify-around mt-20 '>
        <div className='div'>
          <img src={Image} alt="taxis" className='taxis projects'/>
        </div>
        <div>
          <img src={Image} alt="taxis" className='taxis projects'/>
        </div>
        <div className='div max-w-sm rounded overflow-hidden shadow-lg'>
          <img src={Image} alt="taxis" className='taxis projects'/>
        </div>
      </div>
    </div>
  )
}

export default Projects
