// Header Component
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import type { NavItem } from "../types";
const Header: React.FC<{
  activeSection: string;
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
  onNavClick: (id: string) => void;
  onToggleDarkMode: () => void;
  onToggleMobileMenu: () => void;
}> = ({
  activeSection,
  isDarkMode,
  isMobileMenuOpen,
  onNavClick,
  onToggleDarkMode,
  onToggleMobileMenu,
}) => {
  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 z-20 border-b border-gray-200 dark:border-gray-700 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-black dark:text-white"
            onClick={() => onNavClick("home")}
          >
            JU
          </motion.button>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-sm font-medium relative ${
                  activeSection === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                } transition-colors`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              className="md:hidden p-2 text-gray-500 dark:text-gray-300"
              onClick={onToggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
export default Header;
