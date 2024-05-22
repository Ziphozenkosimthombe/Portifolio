import Image from '../assets/taxis_1.png'
import TaskTracker from '../assets/task_tracker.png'
import Restaurant from '../assets/project_3.png'
import useIntersectionObserver from '../utils/UseIntersection'
const Projects = () => {
  const ref = useIntersectionObserver();
  return (
    <div className=" mt-32 main " id="education" ref={ref}>
        <h1 className="font-bold text-center text-3xl">Projects</h1>
        <div className='flex justify-around mt-20 education1'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg div '>
                <img src={Image} alt="alxse" className='w-full'/>
                <div >
                  <h2 className='font-extrabold'>Taxis_Social_Media</h2>
                  <span className='font-bold'>Node.Js, Express.JS, Bootstrap, EJS, Javascript</span>
                   <p><span className='font-extrabold'>--</span> This is a full-stack social media web application for the taxi industry.<br/><span className='font-extrabold'>--</span> It streamlines the management of taxi ranks by providing easy access to driver information and efficient organization of taxis based on their destinations. <br /><span className='font-extrabold'>--</span> Additionally, it fosters a community among drivers, allowing them to view their assigned destinations,  post updates, and interact with each other posts.
                  </p>
                </div>
                <div className='flex justify-around mt-5'>
                  <div>
                    <a href="https://taxi-industry.me/">
                      <button className='btn btn-neutral'>Live Demo</button>
                    </a>


                  </div>
                  <div>
                    <a href="https://github.com/Ziphozenkosimthombe/Taxi_Industry.git">

                      <button className='btn btn-neutral'>Github</button>
                    </a>
                  </div>
                </div>
            </div>

            <div className='max-w-sm rounded overflow-hidden shadow-lg  div'>
                <img src={TaskTracker} alt="alxse" className='w-full '/>
                <div >
                  <h2 className='font-extrabold'>Task Tracker</h2>
                  <span className='font-bold'>React.JS, TailwindCSS, JSON</span>
                   {/* <p><span className='font-extrabold'>--</span> This is a full-stack social media web application for the taxi industry.<br/><span className='font-extrabold'>--</span> It streamlines the management of taxi ranks by providing easy access to driver information and efficient organization of taxis based on their destinations. <br /><span className='font-extrabold'>--</span> Additionally, it fosters a community among drivers, allowing them to view their assigned destinations,  post updates, and interact with each other posts.
                  </p> */}
                  <p>The user can able to add the task by filling the form. <br />
                  Can also able to track the task. and also set the task either in true or false by double clicking the task <br />
                  The user can able to delete the task from the json database</p>
                </div>
                <div className='flex justify-around mt-5'>
                  <div>
                    <a href="https://task-track-book.netlify.app/">
                      <button className='btn btn-neutral'>Live Demo</button>
                    </a>


                  </div>
                  <div>
                    <a href="https://github.com/Ziphozenkosimthombe/task-tracker.git">

                      <button className='btn btn-neutral'>Github</button>
                    </a>
                  </div>
                </div>
            </div>

            <div className='max-w-sm rounded overflow-hidden shadow-lg  div'>
                <img src={Restaurant} alt="alxse" className='w-full '/>
                <div >
                  <h2 className='font-extrabold'>Restaurant Menu</h2>
                  <span className='font-bold'>HTML-5, CSS, JavaScript</span>
                   <p>
                    Restaurant menu website it a responsive website, here you can look at the menu of the restuarant and also book for the table.
                  </p>
                </div>
                <div className='flex justify-around mt-5'>
                  <div>
                    <a href="https://simpl-resturant.netlify.app/">
                      <button className='btn btn-neutral'>Live Demo</button>
                    </a>


                  </div>
                  <div>
                    <a href="https://github.com/Ziphozenkosimthombe/Restuarant_Menu.git">

                      <button className='btn btn-neutral'>Github</button>
                    </a>
                  </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Projects
