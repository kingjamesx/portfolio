// Footer Component

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} James Uyi. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/kingjames_x"
              target="_blank"
              className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/jamesuyi"
              target="_blank"
              className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kingjamesx"
              target="_blank"
              className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
