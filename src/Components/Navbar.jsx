import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
            <div className='space-x-12 text-lg hidden md:inline'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#skill" className='hover:text-gray-400'>Skill</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
        </div>
    </nav>
  )
}
