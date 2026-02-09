import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-100">
      <motion.div
        className="w-16 h-16 border-4 border-red-300 border-t-red-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
