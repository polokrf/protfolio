import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from '../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';

/* ══════════════════════════════════════════════
   PROJECT DATA
══════════════════════════════════════════════ */
const projects = [
  {
    title: 'School Management Platform',
    shortDescription:
      'A complete MERN-based school management system with role-based access, payment integration, dashboards, and modern management tools.',
    fullDescription:
      'This is a team project where we built a complete school management platform using the MERN stack. Users can join the platform and access different features depending on their roles such as Admin, Teacher, Student, and General User. The project includes secure payment integration, optimized data fetching, and modern UI to improve user experience.',
    image: 'https://i.ibb.co.com/BHKPcM4s/school-mangement.png',
    features: [
      'Role-Based Authentication',
      'Admin Dashboard',
      'Teacher Panel',
      'Student Dashboard',
      'Exam Result Management',
      'Attendance Tracking',
      'Notifications',
      'Chatbot Integration',
      'Stripe Payment',
    ],
    problemsSolved: [
      'Role-based authorization ensuring secure, scoped access per user type',
      'Large dataset management with pagination and optimized queries',
      'Secure end-to-end payment workflow via Stripe',
      'Optimized data fetching reducing unnecessary re-renders',
      'Unified dashboard experience across multiple roles',
    ],
    technologies: [
      'MongoDB', 'Express', 'React', 'Node', 'Firebase',
      'TanStack Query', 'React Hook Form', 'Stripe', 'Tailwind CSS',
    ],
    live: 'https://nexus-school2.netlify.app/',
    clientRepo: 'https://github.com/emon35410/Nexus-School.git',
    serverRepo:"https://github.com/MahialamDev/nexus-school-server.git",
  },
  {
    title: 'DoChat',
    shortDescription:
      'A real-time full-stack chat application with authentication, friend system, socket communication, and secure messaging.',
    fullDescription:
      'DoChat is a modern real-time social chat platform where users can securely register, search users, send friend requests, manage friendships, and chat instantly. The project focuses on scalability, security, and real-world chat functionality.',
    image: 'https://i.ibb.co.com/vCXYQzS9/chat-App-34.png',
    features: [
      'Authentication',
      'User Search',
      'Friend Request System',
      'Cancel / Accept / Unfriend flows',
      'Real-Time Chat with Socket.IO',
      'Online Status indicator',
      'Typing Indicator',
      'Notifications',
      'Pagination',
    ],
    problemsSolved: [
      'Duplicate friend request prevention with server-side guards',
      'Socket reconnect handling for unstable connections',
      'JWT-based stateless authorization across API routes',
      'Secure credential storage and hashed passwords',
      'Real-time state synchronization between clients',
    ],
    technologies: [
      'Next.js', 'Tailwind CSS', 'DaisyUI', 'Axios',
      'TanStack Query', 'NextAuth', 'Node.js', 'Express',
      'MongoDB', 'JWT', 'Socket.IO',
    ],
    live: 'https://do-chat-client.vercel.app/',
    clientRepo: 'https://github.com/polokrf/Do-Chat-client.git',
    serverRepo: 'https://github.com/polokrf/Do-Chat-server.git',
  },
  {
    title: 'Blood Donation',
    shortDescription:
      'A blood donation management platform connecting donors with patients quickly during emergencies.',
    fullDescription:
      'Blood Donation is a full-stack web application that helps connect blood donors with people in urgent need. Users can search donors, create donation requests, and support blood donation campaigns.',
    image: 'https://i.ibb.co.com/n8VG0NqL/blood-donation.png',
    features: [
      'Search Donors by blood group & location',
      'Blood Request creation and management',
      'Request Management dashboard',
      'Responsive UI across all devices',
      'Real-Time Notifications',
      'Smooth Data Fetching with TanStack Query',
      'Modern Animations with AOS',
    ],
    problemsSolved: [
      'Faster donor search reducing time in emergency situations',
      'Organised donation requests with status tracking',
      'Improved user accessibility across mobile and desktop',
      'Fully responsive experience with no layout breaks',
    ],
    technologies: [
      'React', 'JavaScript', 'Tailwind CSS', 'DaisyUI',
      'React Hook Form', 'TanStack Query', 'Axios',
      'SweetAlert2', 'React Toastify', 'AOS',
    ],
    live: 'https://blood-donation.pages.dev',
    clientRepo: 'https://github.com/polokrf/Blood-Donation-Application.git',
    serverRepo: "https://github.com/polokrf/Blood-Donation-Application-server.git",
  },
];

/* ══════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════ */
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageOverlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.25 } },
};

const codeButtonVariants = {
  rest: { scale: 0.8, opacity: 0, y: 6 },
  hover: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
};

/* ══════════════════════════════════════════════
   PROJECT CARD
══════════════════════════════════════════════ */
const ProjectCard = ({ project, onOpenModal }) => (
  <motion.article
    variants={cardVariants}
    whileHover="hover"
    initial="rest"
    animate="rest"
    layout
    className="group bg-white dark:bg-card-dark rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
  >
    {/* ── Image ── */}
    <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      />

      {/* Dark overlay with Code button */}
      <motion.div
        variants={imageOverlayVariants}
        className="absolute inset-0 bg-slate-900/65 backdrop-blur-[2px] flex items-center justify-center"
      >
        <motion.a
          href={project.clientRepo}
          target="_blank"
          rel="noopener noreferrer"
          variants={codeButtonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`View ${project.title} source code`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-bold shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="material-symbols-outlined text-[16px]">code</span>
          Code
        </motion.a>
      </motion.div>
    </div>

    {/* ── Body ── */}
    <div className="p-5 sm:p-6 flex-1 flex flex-col gap-3">
      <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-xs sm:text-sm text-text-muted dark:text-text-dark-muted leading-relaxed line-clamp-3 flex-1">
        {project.shortDescription}
      </p>

      {/* ── Bottom buttons ── */}
      <div className="flex gap-2.5 pt-1">
        <motion.button
          onClick={() => onOpenModal(project)}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          aria-label={`See details for ${project.title}`}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[15px]">info</span>
          See Details
        </motion.button>

        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          aria-label={`Open live demo for ${project.title}`}
          className="flex-1 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/30 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[15px]">open_in_new</span>
          Live Demo
        </motion.a>
      </div>
    </div>
  </motion.article>
);

/* ══════════════════════════════════════════════
   PROJECTS SECTION
══════════════════════════════════════════════ */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: gridRef, controls: gridControls } = useScrollAnimation();

  return (
    <>
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-light dark:bg-surface-dark/50"
        id="projects"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

          {/* ── Section header ── */}
          <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleControls}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-4 sm:gap-6"
          >
            <motion.div variants={fadeInLeft}>
              
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
              href="https://github.com/polokrf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 dark:border-slate-700 font-medium text-xs sm:text-sm hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
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

          {/* ── Cards grid ── */}
          <motion.div
            ref={gridRef}
            initial="hidden"
            animate={gridControls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenModal={setActiveProject}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Modal (portal-like, rendered outside section flow) ── */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
