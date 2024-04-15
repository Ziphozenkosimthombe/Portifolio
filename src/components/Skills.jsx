import Image from '../assets/aboutme.jpg'
import useIntersectionObserver from '../utils/UseIntersection'
const Skills = () => {
    const ref = useIntersectionObserver();
  return (
    <div className="mt-32 main" id='skills' ref={ref}>
        <h1 className="font-extrabold text-center text-3xl">Skills</h1>
        <div className='flex justify-around mt-24' >
            <div className="max-w-sm rounded overflow-hidden shadow-lg div">
                <h2 className="font-bold text-2xl text-center">Professional Skills</h2>
                <p className="mt-4">Computer Programmer | Skilled with Programming <br /> Languages | Back-End & Font-End Developer</p>
                <div className='skill1  border rounded h-12 font-extrabold flex justify-between mt-5 '>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>JavaScript</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>95%</span>
                    </div>
                </div>
                <div className=" mt-5 skill1 skill2 border rounded h-12 font-extrabold flex justify-between">
                    <div className='mt-2  '>
                        <span className='m-2 font-extrabold text-black'>TypeScript</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>55%</span>
                    </div>
                </div>
                <div className='skill1  border rounded h-12 font-extrabold flex justify-between mt-5'>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>HTML5</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>95%</span>
                    </div>
                </div>
                <div className='skill1  border rounded h-12 font-extrabold flex justify-between mt-5'>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>CSS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>95%</span>
                    </div>
                </div>
                <div className='skill1 skill3 border rounded h-12 font-extrabold flex justify-between mt-5'>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>NodeJS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>80%</span>
                    </div>
                </div>
                <div className='skill1 skill4 border rounded h-12 font-extrabold flex justify-between mt-5'>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>ASP.NET</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>40%</span>
                    </div>
                </div>
                <div className=' skill1 skill2 border rounded h-12 font-extrabold flex justify-between mt-5'>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>ReactJS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>55%</span>
                    </div>
                </div>
                <div className=' skill1 skill3 border rounded h-12 font-extrabold flex justify-between mt-5'>
                    <div className='mt-2'>
                        <span className='m-2 font-extrabold text-black'>ExpressJS</span>
                    </div>
                    <div className='mt-2'>
                        <span className='m-2 '>80%</span>
                    </div>
                </div>                                                                                                                   
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg div">
                <h1 className='text-center font-extrabold text-red-900 text-3xl'>About Me</h1>
                <img src={Image} alt="aboutme" className='about w-full' />
                <p className="mt-4 text-center text-xl">I am passionate about developing my skills in AI intelligence and using them to solve real-world problems. software engineer focusing on building innovative and impactful solutions using my unique blend of technical skills and real-world experience. Proven track record of creating and implementing successful front-end and back-end web applications. Looking to bring my skills to a tech company with global reach.</p>
            </div>  
        </div>
    </div>
  )
}
export default Skills