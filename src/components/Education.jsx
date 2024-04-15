import Image from '../assets/edu2.jpg'
import Image2 from '../assets/alxse.jpg'
import Image3 from '../assets/edu1.jpg'
import Image4 from '../assets/edu.jpg'
import { SlCalender } from "react-icons/sl";
import useIntersectionObserver from '../utils/UseIntersection';
const Education = () => {
    const ref = useIntersectionObserver();
  return (
    <div className=" mt-32 main " id="education" ref={ref}>
        <h1 className="font-bold text-center text-3xl">Education</h1>
        <div className='flex justify-around mt-20 '>
            <div className='max-w-sm rounded overflow-hidden shadow-lg div'>
                <img src={Image2} alt="alxse" className='w-full'/>
                < div className='px-6 py-4 pt-8'>
                    <h2 className='font-extrabold'>Software engineer</h2>
                    <span>Alx Africa</span>
                    <div className='flex items-center gap-1'>
                        <SlCalender />
                        <span> January 2023 current </span>
                    </div>
                </div>
            </div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg  div'>
                <img src={Image} alt="alxse" className='w-full '/>
                < div className='px-6 py-4 pt-8'>
                    <h2 className='font-extrabold'>Web Developer</h2>
                    <span>Self-taught</span>
                    <div className='flex items-center gap-1'>
                        <SlCalender />
                        <span> June 2023 current </span>
                    </div>
                </div>
            </div>
        </div>
            

        <div className='flex justify-around mt-20'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg div'>
                <img src={Image3} alt="alxse" className='w-full'/>
                < div className='px-6 py-4 pt-8'>
                    <h2 className='font-extrabold'>Grade 12</h2>
                    <span>Mthimude Secondary School</span>
                    <div className='flex items-center gap-1'>
                        <SlCalender />
                        <span> January 2021 - December 2021 </span>
                    </div>
                </div>
            </div>

            <div className='max-w-sm rounded overflow-hidden shadow-lg div'>
                <img src={Image4} alt="alxse" className='w-full'/>
                < div className='px-6 py-4 pt-8'>
                    <h2 className='font-extrabold'>Grade 8 - 9 & Grade 10 - 11</h2>
                    <span>Hafuleni High School (8 - 9)</span>
                    <div className='flex items-center gap-1'>
                        <SlCalender />
                        <span> January 2016 - December 2018 </span>
                    </div>
                    <span>Mathimude Secondary School (10 - 11)</span>
                    <div className='flex items-center gap-1'>
                        <SlCalender />
                        <span> January 2019 - December 2020 </span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Education