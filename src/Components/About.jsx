import React from 'react'
import AboutImage from '../assets/about.jpg'
function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="text-sm md:text-base lg:text-lg leading-relaxed">
            My name is Chinnapat Tiamsomchad Nickname Tae. I am currently studying in the College of Industrial Technology, majoring in Electronic Engineering Technology (Computer), King Mongkut's University of Technology North Bangkok.  
            <br /><br />
            I am interested in web development and programming. I have experience in HTML, CSS, JavaScript, React, Java, Python, PHP, and SQL. 
            <br /><br />
            I am currently studying and practicing web development and programming. I am looking for an internship in web development or programming. I am ready to learn and work hard. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About