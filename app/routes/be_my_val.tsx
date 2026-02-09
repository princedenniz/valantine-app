import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";

const BeMyVal = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;

    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="flex flex-col justify-evenly items-center h-screen gap-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:text-5xl text-3xl font-bold text-center text-pink-600"
      >
        Please, will you be my Valentine? 💖
      </motion.h1>

      <div className="flex gap-6 relative">
        {/* YES button */}
        <Link
          to="/yes"
          className="px-6 py-3 bg-pink-600 text-white rounded-xl text-lg font-semibold hover:scale-105 transition"
        >
          YES 💕
        </Link>

        {/* NO button */}
        <motion.button
          onMouseEnter={moveNoButton}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 bg-gray-300 text-gray-700 rounded-xl text-lg font-semibold cursor-not-allowed"
        >
          NO 😅
        </motion.button>
        <Link to="/" className="px-6 py-3 bg-pink-600 text-white rounded-xl text-lg font-semibold hover:scale-105 transition">
        home
          </Link>
      </div>
    </div>
  );
};

export default BeMyVal;
