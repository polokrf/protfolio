import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-light dark:bg-surface-dark/50" id="about">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={sectionRef}
          initial="hidden"
          animate={sectionControls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16"
        >
          <motion.div 
            variants={fadeInLeft}
            className="lg:w-1/3"
          >
            <div className="lg:sticky lg:top-28">
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
              >
                About Me
              </motion.h2>
              <motion.div 
                variants={fadeInUp}
                className="h-1 sm:h-1.5 w-12 sm:w-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 sm:mb-6"
              ></motion.div>
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted mb-4 sm:mb-6"
              >
                Get to know me better. A glimpse into my journey, my passions, and what drives me in the world of technology.
              </motion.p>
              <motion.a 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="text-primary font-semibold hover:text-primary-dark inline-flex items-center gap-1 group text-sm sm:text-base" 
                href="#contact"
              >
                Let's Talk 
                <motion.span 
                  whileHover={{ x: 4 }}
                  className="material-symbols-outlined text-sm transition-transform"
                >
                  arrow_forward
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={staggerContainer}
            className="lg:w-2/3 space-y-6 sm:space-y-8"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-1.5 sm:p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">history_edu</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold">My Journey</h3>
              </div>
              <p className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted leading-relaxed">
               I have a strong interest in programming. I began my journey by learning HTML, which introduced me to the world of programming. Later, I enrolled in a course on Programming Hero, where I continued deep learning and practice. Through this journey, I have become a MERN-based frontend developer today.
              </p>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-1.5 sm:p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">terminal</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold">What I Build</h3>
              </div>
              <p className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted leading-relaxed">
                Although I am currently focused on frontend development, I have completed several full-stack projects, including role-based systems. In all of my projects, I use modern technologies to build scalable and user-friendly applications.
              </p>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-card-dark border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-1.5 sm:p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">psychology</span>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold">Beyond Coding</h3>
              </div>
              <p className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted leading-relaxed">
                Beyond coding, I enjoy learning, exploring new ideas, and improving myself every day. I believe continuous learning and curiosity help me grow as a developer and as a person.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;