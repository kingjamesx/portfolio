import { motion } from "framer-motion";
import { Code, PenTool, Users } from "lucide-react";
import type { Skill } from "../types";

const SkillsSection: React.FC<{
  sectionRef: (el: HTMLElement | null) => void;
}> = ({ sectionRef }) => {
  const skills: Skill[] = [
    {
      category: "Frontend Development",
      icon: <Code size={24} className="text-blue-500 dark:text-blue-400" />,
      skills: [
        "React",
        "Vue",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <PenTool size={24} className="text-blue-500 dark:text-blue-400" />,
      skills: ["Git", "Webpack", "Vite", "Node.js", "Figma"],
    },
    {
      category: "Soft Skills",
      icon: <Users size={24} className="text-blue-500 dark:text-blue-400" />,
      skills: [
        "Team Leadership",
        "Problem Solving",
        "Communication",
        "Agile Methodologies",
        "UX Design Principles",
      ],
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
      id="skills"
      ref={sectionRef}
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-lg font-semibold text-black dark:text-white ml-2">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.skills.map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
