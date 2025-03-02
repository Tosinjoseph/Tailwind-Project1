import React, { useEffect, useState } from 'react'
import {assets, projectsData} from '../assets/assets.js'

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(()=> {
  const updateCardToShow =()=>{
    if(window.innerWidth >= 1024) {
     setCardToShow(projectsData.length)
    }else {
      setCardToShow(1)
    };
  };
    updateCardToShow();
    window.addEventListener('resize',  updateCardToShow);
    return ()=> window.removeEventListener('resize',  updateCardToShow);
  
  },[])

  const nextProject =()=>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  };
  const previousProject =()=>{
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1: prevIndex - 1)
  }
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:32 my-20 w-full 
    overflow-hidden' id='Project'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects
           <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore our Portfolio</p>

        <div className='flex justify-end items-center mb-8'>
          <button onClick={previousProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="Previous"  />
          </button>
          <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>
        <div className='overflow-hidden'>
          <div className='flex transition-transform gap-8 duration-500 ease-in-out' 
          style={{transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}>
            {
              projectsData.map((projects, i)=>(
              <div key={i} className='relative flex-shrink-0 w-full sm:w-1/2 md:w-1/4'>
               <img src={projects.image} alt={projects.title} className='w-full m-auto mb-14' />
               <div className='absolute left-0 right-0 justify-center bottom-5 flex'>
                <div  className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>{projects.title}</h2>
                  <p className='text-gray-500 text-sm'>
                    {projects.price} <span className='px-1'>|</span> {projects.location}
                  </p>
                </div>
               </div>
              </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Projects