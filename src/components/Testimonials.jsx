import React from 'react'
import { assets, testimonialsData } from '../assets/assets.js'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id="Testimonials">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customers
             <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonies</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Read Stories From The People Who Found Home With Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {
                testimonialsData.map((testimonials, i)=>(
                    <div key={i} className='max-w-[340px]  shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonials.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                      {
                        Array.from({length: testimonials.rating}, (item, i)=>(
                          <img key={i} src={assets.star_icon} alt="" />
                        ))
                      }
                    </div>
                    <p className='text-gray-600'>{testimonials.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials