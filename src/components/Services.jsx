import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    useScrollAnimation,
    fadeInUp,
    fadeInLeft,
    staggerContainer,
} from '../hooks/useScrollAnimation';

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const services = [
    {
        icon: 'rocket_launch',
        title: 'Full-Stack Web Development',
        description:
            'Build complete MERN applications from frontend to backend with scalable architecture, responsive UI, secure APIs, and optimized databases.',
        badges: ['Javascript', 'Typescript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
        accent: 'from-blue-500/20 to-cyan-500/10',
        border: 'hover:border-blue-500/40',
        glow: 'hover:shadow-blue-500/10',
        iconColor: 'text-blue-400',
        iconBg: 'bg-blue-500/10',
    },
    {
        icon: 'palette',
        title: 'Frontend Development',
        description:
            'Create responsive, accessible, fast, and modern user interfaces using React, Next.js, Tailwind CSS, JavaScript, and TypeScript.',
        badges: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
        accent: 'from-violet-500/20 to-purple-500/10',
        border: 'hover:border-violet-500/40',
        glow: 'hover:shadow-violet-500/10',
        iconColor: 'text-violet-400',
        iconBg: 'bg-violet-500/10',
    },
    {
        icon: 'settings',
        title: 'Backend API Development',
        description:
            'Develop scalable REST APIs, authentication systems, database structures, and business logic using Node.js, Express.js, Prisma ORM, and PostgreSQL.',
        badges: ['Node.js', 'Express', 'REST API', 'Prisma', 'PostgreSQL', 'MongoDB'],
        accent: 'from-emerald-500/20 to-teal-500/10',
        border: 'hover:border-emerald-500/40',
        glow: 'hover:shadow-emerald-500/10',
        iconColor: 'text-emerald-400',
        iconBg: 'bg-emerald-500/10',
    },
    {
        icon: 'wifi_tethering',
        title: 'Real-Time Applications',
        description:
            'Build real-time chat systems, notifications, typing indicators, online status tracking, and socket-based applications using Socket.IO.',
        badges: ['Socket.IO', 'Node.js', 'Express', 'MongoDB'],
        accent: 'from-sky-500/20 to-blue-500/10',
        border: 'hover:border-sky-500/40',
        glow: 'hover:shadow-sky-500/10',
        iconColor: 'text-sky-400',
        iconBg: 'bg-sky-500/10',
    },
    {
        icon: 'lock',
        title: 'Authentication & Security',
        description:
            'Implement secure authentication and authorization using JWT, Firebase Authentication, NextAuth, protected routes, and role-based access control.',
        badges: ['JWT', 'Firebase Auth', 'NextAuth', 'Role-Based Access'],
        accent: 'from-rose-500/20 to-pink-500/10',
        border: 'hover:border-rose-500/40',
        glow: 'hover:shadow-rose-500/10',
        iconColor: 'text-rose-400',
        iconBg: 'bg-rose-500/10',
    },
    {
        icon: 'database',
        title: 'Database Design & Integration',
        description:
            'Design efficient database schemas, optimize queries, and integrate MongoDB, PostgreSQL, Supabase, and Prisma ORM for scalable applications.',
        badges: ['MongoDB', 'PostgreSQL', 'Supabase', 'Prisma'],
        accent: 'from-amber-500/20 to-orange-500/10',
        border: 'hover:border-amber-500/40',
        glow: 'hover:shadow-amber-500/10',
        iconColor: 'text-amber-400',
        iconBg: 'bg-amber-500/10',
    },
    {
        icon: 'smart_toy',
        title: 'AI-Assisted Development & Code Optimization',
        description:
            'Use modern AI tools to improve development speed, debugging, documentation, prompt engineering, README writing, testing, and code quality while maintaining clean architecture.',
        badges: ['ChatGPT', 'Gemini', 'GitHub Copilot', 'Cursor', 'Prompt Engineering', 'AI Debugging'],
        accent: 'from-fuchsia-500/20 to-purple-500/10',
        border: 'hover:border-fuchsia-500/40',
        glow: 'hover:shadow-fuchsia-500/10',
        iconColor: 'text-fuchsia-400',
        iconBg: 'bg-fuchsia-500/10',
    },
];

/* ══════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════ */
const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
    }),
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.22, delay: i * 0.04 },
    }),
};

/* ══════════════════════════════════════════════
   SERVICE CARD
══════════════════════════════════════════════ */
const ServiceCard = ({ service, globalIndex }) => (
    <motion.article
        layout
        custom={globalIndex}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: 20, scale: 0.96, transition: { duration: 0.22 } }}
        whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
        aria-label={service.title}
        className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 flex flex-col gap-4 overflow-hidden transition-shadow duration-300 ${service.border} hover:shadow-xl ${service.glow} cursor-default`}
    >
        {/* hover gradient wash */}
        <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />

        {/* watermark number */}
        <span className="absolute -right-1 -top-3 text-7xl font-black text-white/[0.025] select-none pointer-events-none leading-none">
            {String(globalIndex + 1).padStart(2, '0')}
        </span>

        {/* icon */}
        <motion.div
            whileHover={{ rotate: 8, scale: 1.12 }}
            transition={{ duration: 0.25 }}
            className={`relative w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center ${service.iconColor} flex-shrink-0`}
        >
            <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
        </motion.div>

        {/* title + description */}
        <div className="relative flex-1 flex flex-col gap-2">
            <h3 className="text-base sm:text-[17px] font-bold text-white leading-snug">
                {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {service.description}
            </p>
        </div>

        {/* badges */}
        <div className="relative flex flex-wrap gap-1.5">
            {service.badges.map((badge, i) => (
                <motion.span
                    key={badge}
                    custom={i}
                    variants={badgeVariants}
                    initial="hidden"
                    animate="visible"
                    className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-400 group-hover:text-slate-300 group-hover:border-white/[0.14] transition-all duration-200"
                >
                    {badge}
                </motion.span>
            ))}
        </div>
    </motion.article>
);

/* ══════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════ */

const INITIAL_COUNT = 3;
const BATCH_SIZE = 3;

const Services = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const sectionRef = useRef(null);

    const { ref: headerRef, controls: headerControls } = useScrollAnimation();

    const isFullyExpanded = visibleCount >= services.length;

    const handleSeeMore = () =>
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, services.length));

    const handleSeeLess = () => {
        setVisibleCount(INITIAL_COUNT);
        setTimeout(() => {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
    };

    const visibleServices = services.slice(0, visibleCount);

    return (
        <section
            ref={sectionRef}
            className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#0b1120]"
            id="services"
            aria-labelledby="services-heading"
        >
            {/* background blobs */}
            <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── section header ── */}
                <motion.div
                    ref={headerRef}
                    initial="hidden"
                    animate={headerControls}
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-4 sm:gap-6"
                >
                    <motion.div variants={fadeInLeft}>
                        <motion.span
                            variants={fadeInUp}
                            className="text-primary font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2 block"
                        >
                            What I Build
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            id="services-heading"
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white"
                        >
                            Services
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
                        >
                            I build modern, scalable, secure, and high-performance full-stack web
                            applications with intuitive user interfaces, powerful backend systems,
                            real-time features, and optimized databases.
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* ── grid ── */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleServices.map((service, i) => (
                            <ServiceCard
                                key={service.title}
                                service={service}
                                globalIndex={i}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── toggle button — swaps between See More / See Less ── */}
                <AnimatePresence mode="wait">
                    {!isFullyExpanded ? (
                        <motion.div
                            key="see-more"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.15 } }}
                            exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
                            className="flex justify-center mt-10 sm:mt-12"
                        >
                            <motion.button
                                onClick={handleSeeMore}
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                aria-expanded="false"
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.10] bg-white/[0.03] hover:bg-white/[0.07] hover:border-primary/40 text-slate-300 hover:text-white text-sm font-semibold backdrop-blur-sm transition-all duration-300 shadow-lg shadow-black/20"
                            >
                                <span className="material-symbols-outlined text-[18px] text-primary">expand_more</span>
                                See More Services
                                <span className="text-xs text-slate-600 font-normal">
                                    ({services.length - visibleCount} more)
                                </span>
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="see-less"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.15 } }}
                            exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
                            className="flex justify-center mt-10 sm:mt-12"
                        >
                            <motion.button
                                onClick={handleSeeLess}
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                aria-expanded="true"
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.10] bg-white/[0.03] hover:bg-white/[0.07] hover:border-primary/40 text-slate-300 hover:text-white text-sm font-semibold backdrop-blur-sm transition-all duration-300 shadow-lg shadow-black/20"
                            >
                                <span className="material-symbols-outlined text-[18px] text-primary">expand_less</span>
                                See Less
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Services;
