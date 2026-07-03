import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── variants (unchanged) ── */
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.94, y: 16, transition: { duration: 0.22, ease: 'easeIn' } },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.3, delay: i * 0.06 } }),
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { duration: 0.25, delay: i * 0.04 } }),
};

/* ── helpers ── */
const SectionLabel = ({ children }) => (
    <p className="text-[10px] font-mono font-semibold tracking-[0.18em] uppercase text-primary mb-3">
        {children}
    </p>
);

const FeatureItem = ({ text, index }) => (
    <motion.li
        custom={index}
        variants={listItemVariants}
        initial="hidden"
        animate="visible"
        className="flex items-start gap-2.5 text-sm text-slate-300"
    >
        <span className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[11px]">check</span>
        </span>
        {text}
    </motion.li>
);

const ProblemItem = ({ text, index }) => (
    <motion.li
        custom={index}
        variants={listItemVariants}
        initial="hidden"
        animate="visible"
        className="flex items-start gap-2.5 text-sm text-slate-300"
    >
        <span className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full bg-secondary/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary text-[11px]">bolt</span>
        </span>
        {text}
    </motion.li>
);

const TechBadge = ({ tech, index }) => (
    <motion.span
        custom={index}
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.05] border border-white/[0.09] text-slate-300 hover:text-white hover:border-primary/40 transition-all duration-200 cursor-default"
    >
        {tech}
    </motion.span>
);

/* ── main modal ── */
const ProjectModal = ({ project, onClose }) => {
    const handleEsc = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleEsc);
        // Lock body scroll — store previous value so we restore it cleanly
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = prev;
        };
    }, [handleEsc]);

    const hasServerRepo = Boolean(project.serverRepo);

    return (
        <AnimatePresence>
            {/* ── Backdrop ── */}
            <motion.div
                key="backdrop"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} details`}
            >
                {/* ── Modal shell ──
            Two-layer structure:
            1. Outer wrapper  — fixed size cap, no overflow, rounded border
            2. Inner scroller — overflow-y-auto, only this scrolls
        ── */}
                <motion.div
                    key="modal"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                    /* overscroll-contain prevents scroll chaining to the page behind */
                    className="relative w-full max-w-2xl flex flex-col bg-[#0f1829] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 focus:outline-none"
                    style={{ maxHeight: 'min(90vh, 720px)' }}
                    tabIndex={-1}
                >

                    {/* ── Sticky close header ── */}
                    <div className="sticky top-0 z-10 flex items-center justify-end px-4 py-3 bg-[#0f1829] border-b border-white/[0.06] rounded-t-2xl flex-shrink-0">
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                        >
                            <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                    </div>

                    {/* ── Scrollable content ── */}
                    <div
                        className="overflow-y-auto overscroll-contain flex-1 min-h-0"
                        /* webkit momentum scrolling on iOS */
                        style={{ WebkitOverflowScrolling: 'touch' }}
                    >
                        <div className="p-5 sm:p-6 md:p-8 flex flex-col gap-6">

                            {/* Title + description */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div>
                                <SectionLabel>Key Features</SectionLabel>
                                <ul className="flex flex-col gap-2">
                                    {project.features.map((f, i) => (
                                        <FeatureItem key={i} text={f} index={i} />
                                    ))}
                                </ul>
                            </div>

                            {/* Problems Solved */}
                            <div>
                                <SectionLabel>Problems Solved</SectionLabel>
                                <ul className="flex flex-col gap-2">
                                    {project.problemsSolved.map((p, i) => (
                                        <ProblemItem key={i} text={p} index={i} />
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <SectionLabel>Technologies Used</SectionLabel>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <TechBadge key={tech} tech={tech} index={i} />
                                    ))}
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-3 pt-1 border-t border-white/[0.06]">
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all duration-200"
                                >
                                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                    Live Demo
                                </motion.a>

                                <motion.a
                                    href={project.clientRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.09] hover:border-white/[0.18] text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
                                >
                                    <span className="material-symbols-outlined text-[16px]">code</span>
                                    Client Repo
                                </motion.a>

                                {hasServerRepo && (
                                    <motion.a
                                        href={project.serverRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.03, y: -1 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.09] hover:border-white/[0.18] text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
                                    >
                                        <span className="material-symbols-outlined text-[16px]">dns</span>
                                        Server Repo
                                    </motion.a>
                                )}
                            </div>

                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
