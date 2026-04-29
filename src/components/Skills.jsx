import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: gridRef, controls: gridControls } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      icon: "html",
      color: "blue",
      skills: [
        { name: "HTML5 & CSS3", color: "blue-500" },
        { name: "JavaScript (ES6+)", color: "yellow-500" },
        { name: "React.js", color: "cyan-500" },
        { name: "Next.js", color: "green-500" },
        { name: "NextAuth", color: "yellow-700"},
        { name: "Firebase Auth", color: "green-200"},
        { name: "Tailwind CSS", color: "teal-500"}
      ]
    },
    {
      title: "Backend",
      icon: "dns",
      color: "green",
      skills: [
        { name: "Node.js", color: "green-500" },
        { name: "Express.js", color: "slate-500" },
        { name: "REST APIs", color: "purple-500" },
        { name: "JWT Auth", color: "orange-500" },
        { name: "Socket.Io", color: "blue-500" }
      ]
    },
    {
      title: "Database",
      icon: "database",
      color: "purple",
      skills: [
        { name: "MongoDB", color: "green-600" }
      ]
    },
    {
      title: "Tools",
      icon: "build",
      color: "orange",
      skills: [
        { name: "Git & GitHub", color: "slate-900 dark:bg-white" },
        { name: "VS Code", color: "blue-600" },
        { name: "Postman", color: "orange-600" },
        { name: "Vercel", color: "black dark:bg-white" }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" id="skills">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-primary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block"
          >
            My Arsenal
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted max-w-2xl mx-auto"
          >
            My tech stack is centered around the JavaScript ecosystem. I constantly learn new tools to improve my workflow and product quality.
          </motion.p>
        </motion.div>
        
        <motion.div 
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white dark:bg-card-dark p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-${category.color}-500/30 transition-all hover:shadow-lg hover:shadow-${category.color}-500/5 relative overflow-hidden`}
            >
              <motion.div 
                className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-${category.color}-500/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-500`}
                whileHover={{ scale: 1.5 }}
              ></motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-${category.color}-50 dark:bg-${category.color}-900/20 rounded-lg sm:rounded-xl flex items-center justify-center text-${category.color}-600 dark:text-${category.color}-400 mb-4 sm:mb-6 transition-transform`}
              >
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">{category.icon}</span>
              </motion.div>
              <motion.h3 
                variants={fadeInUp}
                className="text-base sm:text-lg font-bold mb-3 sm:mb-4"
              >
                {category.title}
              </motion.h3>
              <motion.ul 
                variants={staggerContainer}
                className="space-y-2 sm:space-y-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex} 
                    variants={skillItemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-text-muted dark:text-text-dark-muted cursor-default"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-${skill.color}`}
                    ></motion.span>
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;