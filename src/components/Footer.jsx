import React from 'react'
import { assets } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full text-white overflow-hidden'
    id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/3'>
                <img src={assets.logo_dark} alt="" />
                <p>I have decided not to use Lorem ipsum anymore, 
                    like i said earlier for various reasons and 
                    im willing to keep it at that.</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer