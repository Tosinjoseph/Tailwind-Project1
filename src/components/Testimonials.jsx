import React from 'react'
import { testimonialsData } from '../assets/assets.js'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id="Testimonials">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customers
             <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonies</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Read Stories From The People Who Found Home With Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {
                testimonialsData.map((testimonials, i)=>(
                    <div key={i} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials