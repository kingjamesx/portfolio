import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import type { FormData } from "../types";

const ContactSection: React.FC<{
  sectionRef: (el: HTMLElement | null) => void;
}> = ({ sectionRef }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      toast.error("Please fill in all fields.", {
        className: "bg-red-500 text-white dark:bg-red-600 dark:text-gray-100",
        duration: 3000,
      });
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus("error");
      toast.error("Please enter a valid email address.", {
        className: "bg-red-500 text-white dark:bg-red-600 dark:text-gray-100",
        duration: 3000,
      });
      setTimeout(() => setFormStatus("idle"), 3000);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!
      );
      setFormStatus("success");
      toast.success("Message sent successfully!", {
        className:
          "bg-green-500 text-white dark:bg-green-600 dark:text-gray-100",
        duration: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("error");
      toast.error("Failed to send message. Please try again.", {
        className: "bg-red-500 text-white dark:bg-red-600 dark:text-gray-100",
        duration: 3000,
      });
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

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
      id="contact"
      ref={sectionRef}
      className="py-16 bg-white dark:bg-gray-900"
    >
      {/* Sonner Toaster */}
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            "bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-100",
          duration: 3000,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-8">
              Contact
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Interested in collaborating? Fill out the form below or reach out
              directly.
            </p>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Your message"
                  required
                  aria-required="true"
                />
              </div>
              <motion.button
                type="submit"
                disabled={formStatus === "loading"}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus === "loading" ? 1 : 1.05 }}
                whileTap={{ scale: formStatus === "loading" ? 1 : 0.95 }}
              >
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
            <div className="mt-12 space-y-4">
              <a
                href="mailto:talk2james.uj@gmail.com"
                className="block text-blue-500 dark:text-blue-400 font-semibold hover:underline"
              >
                talk2james.uj@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/jamesuyi"
                target="_blank"
                className="block text-blue-500 dark:text-blue-400 font-semibold hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/kingjamesx"
                target="_blank"
                className="block text-blue-500 dark:text-blue-400 font-semibold hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
