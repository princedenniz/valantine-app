import { motion } from "framer-motion";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const sentence = "Hello Pretty,";
const sentence2 = "I have something i want to tell you."
const letters = sentence.split("");
const letters2 = sentence2.split("");

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen flex-wrap">
      <motion.div
        initial="hidden"
        animate="visible"
        className="md:text-4xl text-2xl font-bold text-center"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            className="text-3xl md:text-5xl font-bold text-center"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}

<div>
  
        {letters2.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            className="text-2xl md:text-4xl text-gray-700 text-center"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
</div>
     
      

        <h1 className="text-8xl">🙈</h1>
      </motion.div>

      <Link to="/be_my_val" className="mt-8 px-6 py-3 bg-orange-600 text-white border border-orange-500 text-2xl rounded-lg hover:bg-pink-400 transition-colors">
        Click here to see
      </Link>
    </div>
  );
}
