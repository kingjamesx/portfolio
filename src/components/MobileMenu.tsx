// Mobile Menu Component
import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "../types";

const MobileMenu: React.FC<{
  isOpen: boolean;
  activeSection: string;
  onNavClick: (id: string) => void;
}> = ({ isOpen, activeSection, onNavClick }) => {
  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white dark:bg-gray-800 z-10 pt-16"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-6 py-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`text-xl font-medium text-left ${
                    activeSection === item.id
                      ? "text-black dark:text-white"
                      : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                  } transition-colors`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileMenu;
