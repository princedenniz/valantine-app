import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const images = [
  {
    src: "/val-2.jpeg",
    caption: "My favorite smile ❤️",
  },
  {
    src: "/val1.jpeg",
    caption: "Us against the world 🌍",
  },
  {
    src: "/val6.jpeg",
    caption: "She's my peace 🕊️",
  },
  {
    src: "/val7.jpeg",
    caption: "Forever looks good on us 💍",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 px-4 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-12"
      >
        Our Love Gallery 💕
      </motion.h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={img.src}
              alt="Our memory"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white text-lg font-medium p-4">
                {img.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Love Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-red-500 mt-16 text-lg italic"
      >
        Every picture here holds a piece of my heart 💘
      </motion.p>

      <Link to="/" className="block text-center mt-8 text-pink-600 font-bold text-lg hover:underline">Back to Home</Link>
    </div>
  );
};

export default Gallery;
