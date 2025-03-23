import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to BlogSphere
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-400 mb-8"
        >
          Share your thoughts, read amazing posts, and connect with the community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button className="bg-teal-400 hover:bg-teal-500 transition-colors duration-300 text-black font-semibold px-6 py-3 rounded-xl shadow-lg">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
