import Image from '../assets/web-developer.png'
import { SlCalender } from "react-icons/sl";
const Experience = () => {
  return (
    <div className="">
        <h1 className="font-bold text-center">Experience</h1>
        <div className='flex'>
            <div>
                <img src={Image} alt="web-developer" className='web-developer'/>
            </div>
            <div>
                <h2>Software engineer</h2>
                <span>Alx Africa</span>
                <div className='flex items-center gap-1'>
                  <SlCalender />
                  <span> January 2023 current</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience