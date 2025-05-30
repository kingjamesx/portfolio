// Work Section Component
import { motion } from "framer-motion";
import JB from "../assets/jb.png";
import Async from "../assets/async.png";
import Crowd from "../assets/crowd.png";
import type { Project } from "../types";
const WorkSection: React.FC<{
  sectionRef: (el: HTMLElement | null) => void;
}> = ({ sectionRef }) => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description:
        "JBottoms is a fashion-focused e-commerce platform that offers a curated collection of stylish bottoms and apparel. The platform features a responsive and user-friendly interface, real-time inventory updates, secure checkout, and personalized shopping experiences.",
      year: "2025",
      image: JB,
      link: "https://www.jbottoms.com/",
    },
    {
      title: "Payment Aggregator Platform",
      description:
        "Asyncpay is a unified payment integration platform that allows businesses to connect with multiple payment gateways through a single setup. It provides a centralized interface for managing checkouts, recurring subscriptions, and transaction monitoring.",
      year: "2024",
      image: Async,
      link: "https://asyncpay.io/",
    },
    {
      title: "Research Dashboard",
      description:
        "Crowd is an AI-powered user research and feedback platform designed for product teams to gather actionable insights. It supports unmoderated and moderated user testing, in-product surveys, and feedback widgets.",
      year: "2024",
      image: Crowd,
      link: "https://crowdapp.io/",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Selected Work
        </motion.h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-5 gap-8 items-center"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:col-span-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {project.year}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 dark:text-blue-400 font-semibold hover:underline"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
