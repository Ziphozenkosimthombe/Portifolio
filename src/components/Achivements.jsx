import Image from '../assets/ziphozenkosi-ncayiyana.jpg'
import useIntersectionObserver from '../utils/UseIntersection';
const Experience = () => {
  const ref = useIntersectionObserver();
  return (
    <div className="mt-32 main" id='achivements' ref={ref}>
      <h1 className="font-bold text-center text-3xl">Achivement</h1>
      <div className='flex justify-center mt-28 div'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg  gap-16'>
          <img src={Image} alt="web-developer" />
        </div>
      </div>

    </div>
  )
}

export default Experience
