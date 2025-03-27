import React from 'react'
import HeroImage from '../assets/myhero.jpg'
import CV from '../assets/CV.pdf'
import Ts from '../assets/transcript.pdf'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Chinnapat Tiamsomchad</span>
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            
        </p>
        <div className='mt-8 space-x-4'>
            <a href="#contact">
              <button 
                className='bg-gradient-to-r from-yellow-500 to-green-400 text-white hidden md:inline
                focus:outline-none hover:bg-yellow-300 hover:shadow-[0_0_40px_rgb(253,224,71,0.7)] px-4 py-2 rounded-full text-lg hover:-translate-y-1 transform-all '>Connect With Me
              </button>
            </a>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <button className='bg-gradient-to-r from-blue-400 to-green-500 md:inline text-white px-4 py-2
                focus:outline-none hover:bg-blue-400 hover:shadow-[0_0_40px_rgb(96,165,250,0.9)]
                rounded-full text-lg'>
                View CV
              </button>
            </a>

            <a href={Ts} target="_blank" rel="noopener noreferrer">
              <button className='bg-gradient-to-r from-blue-400 to-green-500 md:inline text-white px-4 py-2
                focus:outline-none hover:bg-blue-400 hover:shadow-[0_0_40px_rgb(96,165,250,0.9)]
                rounded-full text-lg'>
                View Transcript
              </button>
            </a>

        </div>

    </div>
  )
}

export default Hero