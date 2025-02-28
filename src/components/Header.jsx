import React from 'react'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 flex items-center bg-cover bg-center bg-no-repeat w-full overflow-hidden'  style={{backgroundImage: "url('./header_img.png')"}} id="Header">
        <Navbar/>
        <div className='container text-center mx-auto px-6 py-4 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dream</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Projects" className='border border-white rounded px-8 py-3'>Projects</a>
                <a href="#Contacts" className='border border-white rounded px-8 py-3 bg-blue-500 hover:bg-transparent'>Contact us</a>
            </div>
        </div>
    </div>
  )
}

export default Header