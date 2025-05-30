import React, { useState, useEffect, useRef, useCallback } from "react";

import Header from "./Header";
import MobileMenu from "./MobileMenu";
import HeroSection from "./Hero";
import WorkSection from "./Work";
import SkillsSection from "./Skills";
import AboutSection from "./About";
import ContactSection from "./Contact";
import Footer from "./Footer";
// Main Portfolio Component
const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const savedDarkMode = window.localStorage?.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem("darkMode", isDarkMode.toString());
    }
  }, [isDarkMode]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    let currentSection = "home";

    for (const [id, ref] of Object.entries(sectionRefs.current)) {
      if (
        ref &&
        ref.offsetTop <= scrollPosition &&
        ref.offsetTop + ref.offsetHeight > scrollPosition
      ) {
        currentSection = id;
        break;
      }
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const section = sectionRefs.current[id];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Header
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        isMobileMenuOpen={isMobileMenuOpen}
        onNavClick={handleNavClick}
        onToggleDarkMode={toggleDarkMode}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      <main className="pt-16 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
        <HeroSection
          sectionRef={(el) => (sectionRefs.current["home"] = el)}
          onNavClick={handleNavClick}
        />

        <WorkSection sectionRef={(el) => (sectionRefs.current["work"] = el)} />

        <SkillsSection
          sectionRef={(el) => (sectionRefs.current["skills"] = el)}
        />

        <AboutSection
          sectionRef={(el) => (sectionRefs.current["about"] = el)}
        />

        <ContactSection
          sectionRef={(el) => (sectionRefs.current["contact"] = el)}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
