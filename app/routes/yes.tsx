import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router'


const sentence = "I will Love you Forever and Always, Mercy Imoh 😍";
const sentence2 = "You are the best thing that ever happened to me 😍."
const letters = sentence.split("");
const letters2 = sentence2.split("");

const yes = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen">
      <h1 className="md:text-[10rem] text-[7rem] font-bold text-pink-600">YES! 💕</h1>
      <p className="md:text-5xl text-3xl text-gray-700 mt-4 font-bold">I knew you would say yes! 😍</p>
      <motion.div initial="hidden" animate="visible" className="mt-4 text-3xl text-pink-600 font-bold text-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="mt-4 text-3xl font-bold text-gray-700 text-center">
        {letters2.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      <div className='flex gap-2'>
       <Link to="/" className="px-6 py-3 w-[10rem] text-center bg-pink-600 text-white rounded-xl text-lg font-semibold hover:scale-105 transition">
        home
          </Link>
       <Link to="/gallery" className="px-6 py-3 bg-pink-600 text-white rounded-xl text-lg font-semibold hover:scale-105 transition">
        view our gallary 
          </Link>

      </div>
    </div>
  )
}

export default yes