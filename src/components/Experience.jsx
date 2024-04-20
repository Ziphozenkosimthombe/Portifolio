import Image from '../assets/web-developer.png'
import { SlCalender } from "react-icons/sl";
import useIntersectionObserver from '../utils/UseIntersection';
const Experience = () => {
  const ref = useIntersectionObserver();
  return (
    <div className="mt-32 main" id='experience' ref={ref}>
        <h1 className="font-bold text-center text-3xl">Experience</h1>
        <div className='flex justify-center mt-28 div'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg  gap-16'>
              <img src={Image} alt="web-developer"/>
              < div className='px-6 py-4 pt-8'>
                  <h2 className='font-extrabold text-black text-xl '>Software engineer</h2>
                  <span className='text-bold'>Alx Africa</span>
                  <div className='flex items-center gap-1'>
                    <SlCalender />
                    <span> January 2023 current </span>
                  </div>
              </div>
          </div>
        </div>
          
    </div>
  )
}

export default Experience