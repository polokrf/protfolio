import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-secondary/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoOTksIDEwMiwgMjQxLCAwLjEpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 sm:gap-6 md:gap-8 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-1 sm:gap-2">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 w-fit"
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-text-muted dark:text-text-dark-muted uppercase tracking-wider">
                  Open to opportunities
                </span>
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                Hi, I am <br/>
                <span className="gradient-text">Polok Kumar</span> 
              </motion.h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-text-muted dark:text-text-dark-muted max-w-lg leading-relaxed font-light"
            >
              I'm a <span className="font-medium text-text-main dark:text-text-dark-main">MERN Stack Developer</span> with a strong focus on frontend development. My goal is to become a full-stack developer in the future. I am passionate about learning and improving my skills.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4"
            >
              <motion.a 
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-primary hover:bg-primary-dark text-white h-10 sm:h-12 px-6 sm:px-8 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/25 flex items-center gap-2 w-fit" 
                href="#projects"
              >
                View Projects
                <motion.span 
                  whileHover={{ x: 4 }}
                  className="material-symbols-outlined text-[16px] sm:text-[18px] transition-transform"
                >
                  arrow_forward
                </motion.span>
              </motion.a>
              
              <div className="flex items-center gap-1 sm:gap-2 px-2">
                <motion.a 
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email" 
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-text-muted hover:text-text-main dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" 
                  href="mailto:polokkumar9030@gmail.com"
                >
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">mail</span>
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800 mt-3 sm:mt-4"
            >
              <p className="text-[10px] sm:text-xs font-mono text-text-muted mb-2 sm:mb-3 uppercase tracking-widest">Tech Stack</p>
              <motion.div 
                className="flex gap-4 sm:gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-blue-500 text-[20px] sm:text-[24px]">javascript</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-cyan-500 text-[20px] sm:text-[24px]">html</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-purple-500 text-[20px] sm:text-[24px]">database</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full bg-cover bg-center" 
                style={{backgroundImage: "url('https://i.ibb.co.com/Kzj3KLRN/polok-Profile.jpg')"}}
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 z-20"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-[16px] sm:text-[20px] md:text-[24px]">code_blocks</span>
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">MERN Stack Developer</p>
                    <p className="text-white/70 text-[10px] sm:text-xs">Rajshahi,Bangladesh</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 sm:-top-8 md:-top-12 -right-6 sm:-right-8 md:-right-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl -z-10"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primary rounded-full blur-3xl -z-10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;