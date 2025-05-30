// Hero Section Component
import { motion } from "framer-motion";

const HeroSection: React.FC<{
  sectionRef: (el: HTMLElement | null) => void;
  onNavClick: (id: string) => void;
}> = ({ sectionRef, onNavClick }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center bg-white dark:bg-transparent"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center lg:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-black dark:text-white"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          James Uyi
          <br />
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Frontend Engineer
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-gray-600 dark:text-gray-300"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Crafting performant, accessible web applications with React,
          TypeScript, and a passion for clean architecture.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center lg:justify-start"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="inline-block bg-black dark:bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavClick("work")}
          >
            View Work
          </motion.button>
          <motion.button
            className="inline-block border border-black dark:border-white text-black dark:text-white px-8 py-3 rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavClick("contact")}
          >
            Contact
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default HeroSection;
