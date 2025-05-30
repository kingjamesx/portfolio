// About Section Component
import { motion } from "framer-motion";

const AboutSection: React.FC<{
  sectionRef: (el: HTMLElement | null) => void;
}> = ({ sectionRef }) => {
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
      id="about"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-8">
              About Me
            </h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              With over 4 years of experience building web applications, I
              specialize in React, TypeScript, and modern frontend architecture.
              My work focuses on creating maintainable, performant codebases
              that scale with product needs.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I've led frontend developer teams at startups and established
              companies, delivering products to millions of users. My approach
              combines technical expertise with thoughtful UI/UX design
              principles to create exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently available for select freelance projects and full-time
              opportunities. Let's build something extraordinary together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
