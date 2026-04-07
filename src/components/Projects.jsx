import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: gridRef, controls: gridControls } = useScrollAnimation();

  const projects = [
    {
      title: 'School Management Platform',
      description: `This is a team project where we built a complete school management platform using the MERN stack.Users can join the system and access different features based on their roles such as Admin, Teacher, Student, and General User.The platform also includes modern tools like secure payment integration and efficient data fetching to improve performance and user experience`,
      image: 'https://i.ibb.co.com/BHKPcM4s/school-mangement.png',
      technologies: [
        'React.js',
        'Firebase',
        'Tailwind',
        'MongoDB',
        ' Express.js',
        ' Node.js',
        'TanStack Query',
        'React Hook Form',
        'Stripe',
      ],
      link: 'https://nexus-school2.netlify.app/',
      git: 'https://github.com/emon35410/Nexus-School.git',
    },
    {
      title: 'Blood Donation',
      description:
        'This full-stack project focuses on role-based access control and payment system integration. It is a blood donation platform built to ensure secure access, smooth transactions, and efficient donation management',
      image: 'https://i.ibb.co.com/7JTyycVm/blood.png',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Firebase',
        'JWT',
        'Stripe',
      ],
      link: 'https://blood-donation.pages.dev',
      git: 'https://github.com/polokrf/Blood-Donation-Application.git',
    },
    {
      title: 'Social Development Events',
      description:
        'This is a full-stack project built with both frontend and backend technologies. The project mainly focuses on implementing a dynamic dashboard system. It is a social development events platform designed to manage and showcase various events effectively',
      image: 'https://i.ibb.co.com/pBwmYDbt/socila.png',
      technologies: [
        'React',
        'Firebase',
        'Jwt',
        'Tailwind',
        'Node.js',
        'Express',
        'MongoDB',
      ],
      link: 'https://social-development-events.pages.dev',

      git: 'https://github.com/polokrf/social-development-events-platform.git',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-light dark:bg-surface-dark/50" id="projects">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-4 sm:gap-6"
        >
          <motion.div variants={fadeInLeft}>
            <motion.span 
              variants={fadeInUp}
              className="text-primary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block"
            >
              My Portfolio
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted max-w-xl"
            >
              A selection of personal and professional projects that demonstrate my skills in action.
            </motion.p>
          </motion.div>
          <motion.a 
            variants={fadeInRight}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 dark:border-slate-700 font-medium text-xs sm:text-sm hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center gap-2" 
            href="https://github.com/polokrf" 
            target="_blank"
          >
            View GitHub 
            <motion.span 
              whileHover={{ x: 2, y: -2 }}
              className="material-symbols-outlined text-sm"
            >
              arrow_outward
            </motion.span>
          </motion.a>
        </motion.div>
        
        <motion.div 
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white dark:bg-card-dark rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className="h-40 sm:h-48 md:h-56 overflow-hidden relative">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full bg-cover bg-center" 
                  style={{backgroundImage: `url('${project.image}')`}}
                ></motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-slate-900/60 flex items-center justify-center gap-4 backdrop-blur-sm"
                >
                  <motion.a 
                    href={project.git} 
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-slate-900 p-2 sm:p-3 rounded-full shadow-lg" 
                    title="View Code"
                  >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">code</span>
                  </motion.a>
                </motion.div>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <motion.h3 
                    whileHover={{ color: '#3b82f6' }}
                    className="text-lg sm:text-xl font-bold transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                </div>
                <motion.p 
                  variants={fadeInUp}
                  className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted mb-4 sm:mb-6 flex-1 leading-relaxed"
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  variants={staggerContainer}
                  className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      variants={techBadgeVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  Details
                  <motion.span 
                    whileHover={{ x: 4 }}
                    className="material-symbols-outlined text-sm transition-transform"
                  >
                    arrow_forward
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;