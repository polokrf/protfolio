import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase());
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-900/5'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary via-secondary to-purple-600 flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[20px] md:text-[24px] font-bold">
                  code
                </span>
              </motion.div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-base sm:text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r text-white from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
              >
                Portfolio<span className="text-primary">.</span>
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center gap-8 xl:gap-12"
            >
              <nav className="flex gap-4 xl:gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -2 }}
                    className={`text-xs xl:text-sm font-medium transition-all duration-300 relative group ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-primary'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                    }`}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden group"
                >
                  <a
                    href="https://drive.google.com/file/d/1rHpr2yRQK5PKjJZfQgIlG3dt6uK5C2Zq/view?usp=drive_link"
                    target="_blank"
                    className="relative z-10"
                  >
                    Resume
                  </a>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:hidden"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 sm:p-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                <motion.span
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="material-symbols-outlined text-[20px] sm:text-[24px]"
                >
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-16 sm:top-18 md:top-20 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
              <nav className="flex flex-col gap-2 sm:gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ x: 10 }}
                    className={`text-base sm:text-lg font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-xl transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 sm:mt-4 bg-gradient-to-r from-primary to-secondary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                  Resume
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;