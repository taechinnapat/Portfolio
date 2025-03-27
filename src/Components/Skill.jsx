import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Htmllogo from '../assets/html.svg';
import Csslogo from '../assets/css-3.svg';
import jslogo from '../assets/javascript.svg';
import javalogo from '../assets/java.svg';
import reactlogo from '../assets/react.svg';
import phplogo from '../assets/php.svg';
import pythonlogo from '../assets/python.svg';
import sqllogo from '../assets/mysql.svg';
import gitlogo from '../assets/git-icon.svg';

function Skill() {
  return (
    
    <div className='bg-black text-white text-center py-16' id='skill'>
      <h2 className='text-3xl font-bold mb-10'>
        My Skills
      </h2>
      <div className='flex justify-center items-center gap-6 w-full max-w-screen-lg mx-auto px-4 flex-nowrap'>
        {[Htmllogo, Csslogo, jslogo, reactlogo, javalogo, phplogo, pythonlogo, gitlogo, sqllogo].map((logo, index) => (
          <motion.div
            key={index}
            className='w-24 h-24 flex justify-center items-center bg-gray-800 rounded-xl shadow-lg'
            animate={{
              rotate: [0, 15, 0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img src={logo} alt={`Skill ${index}`} className='w-16 h-16' />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
