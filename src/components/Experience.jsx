import Image from '../assets/web-developer.png'
import { SlCalender } from "react-icons/sl";
import useIntersectionObserver from '../utils/UseIntersection';
const Experience = () => {
  const ref = useIntersectionObserver();
  return (
    <div className="mt-32 main" id='experience' ref={ref}>
        <h1 className="font-bold text-center text-3xl">Experience</h1>
        <div className='flex justify-center gap-8 mt-28'>
            <div className='div'>
                <img src={Image} alt="web-developer" className='web-developer'/>
            </div>
            < div className=''>
                <h2>Software engineer</h2>
                <span>Alx Africa</span>
                <div className='flex items-center gap-1'>
                  <SlCalender />
                  <span> January 2023 current </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience