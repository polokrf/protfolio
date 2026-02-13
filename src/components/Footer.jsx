import { IoLogoLinkedin } from "react-icons/io";
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref: footerRef, controls: footerControls } = useScrollAnimation();

  return (
    <footer className="bg-surface-light dark:bg-[#0b1120] py-8 sm:py-10 md:py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={footerRef}
          initial="hidden"
          animate={footerControls}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <motion.span 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="material-symbols-outlined text-primary text-[20px] sm:text-[24px]"
              >
                terminal
              </motion.span>
              <span className="font-bold text-base sm:text-lg">
              Portfolio<span className="text-primary">.</span>
              </span>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted text-center sm:text-left"
            >
              Built  with MERN Stack Projects.
            </motion.p>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted text-center order-3 sm:order-2"
          >
            © 2026 polokkumar. All rights reserved.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="flex gap-2 sm:gap-4 order-2 sm:order-3"
          >
            <motion.a 
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Github" 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-text-main dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" 
              href="https://github.com/polokrf" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">code</span>
            </motion.a>
            <motion.a 
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn" 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-text-main dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" 
              href="https://www.linkedin.com/in/polokkumar/" 
              target="_blank"
            >
              <IoLogoLinkedin className="text-[16px] sm:text-[20px]" />
            </motion.a>
            <motion.a 
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email" 
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-text-main dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" 
              href="mailto:polokkumar9030@gmail.com"
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">mail</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;