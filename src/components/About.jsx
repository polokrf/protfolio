import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer } from '../hooks/useScrollAnimation';

const cards = [
  {
    number: '01',
    icon: 'history_edu',
    title: 'My Journey',
    description:
      "I started my programming journey with HTML, which opened the door to web development. I later trained through Programming Hero, going deep into the MERN stack and Next.js. Today, I build full-stack applications end-to-end — from database schema design to REST APIs to responsive, production-ready UIs.",
    accent: 'from-blue-500/20 to-cyan-500/10',
    border: 'hover:border-blue-500/40',
    glow: 'hover:shadow-blue-500/10',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    dot: 'bg-blue-400',
    tag: 'Origin Story',
    offset: 'lg:translate-y-0',
  },
  {
    number: '02',
    icon: 'terminal',
    title: 'What I Build',
    description:
      "I've shipped three real-world full-stack projects: DoChat, a real-time chat platform with Socket.IO; a role-based Blood Donation Platform with Stripe integration; and a collaborative School Management Platform with AI chatbot integration. I focus on scalable architecture, clean code, and interfaces people actually enjoy using.",
    accent: 'from-violet-500/20 to-purple-500/10',
    border: 'hover:border-violet-500/40',
    glow: 'hover:shadow-violet-500/10',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    dot: 'bg-violet-400',
    tag: 'Craft',
    offset: 'lg:translate-y-8',
  },
  {
    number: '03',
    icon: 'psychology',
    title: 'Beyond Coding',
    description:
      "Beyond writing code, I actively use AI-assisted workflows — GitHub Copilot, Cursor, ChatGPT — to move faster and write cleaner code. I'm constantly learning, exploring new tools, and pushing myself to grow both as a developer and as a person.",
    accent: 'from-amber-500/20 to-orange-500/10',
    border: 'hover:border-amber-500/40',
    glow: 'hover:shadow-amber-500/10',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    dot: 'bg-amber-400',
    tag: 'Mindset',
    offset: 'lg:translate-y-4',
  },
];

const techBadges = ['Javascript','Typescript','React','Next.js','Node.js', 'MongoDB', 'Express', 'PostgreSQL','Prisma','Supabase'];

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '1+', label: 'Years Learning' },
  { value: 'MERN', label: 'Core Stack' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.12 },
  }),
};

const About = () => {
  const { ref: sectionRef, controls: sectionControls } = useScrollAnimation();
  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation();

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24  overflow-hidden bg-[#0b1120]"
      id="about"
    >
      {/* Subtle background texture blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={sectionControls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
        >
          {/* ── Left panel ── */}
          <motion.div
            variants={fadeInLeft}
            className="lg:w-5/12 xl:w-1/3 lg:sticky lg:top-28"
          >

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold leading-tight text-white mb-2"
            >
              About{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Me
              </span>
            </motion.h2>

            {/* Accent line */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 mb-5"
            >
              <div className="h-px w-10 bg-gradient-to-r from-blue-400 to-violet-400" />
              <div className="h-px w-4 bg-slate-700" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8"
            >
             MERN-Stack developer. I design the database, build the API, ship the UI — and I care about all three being done right
              </motion.p>
            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm ring-1 ring-inset ring-white/[0.03]"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-lg sm:text-xl font-bold text-white">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech badge row */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-blue-500/30 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA row */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 flex-wrap">
              <motion.a
                whileHover={{ x: 4 }}
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Let&apos;s work together
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </motion.a>

              <a
                href="https://drive.google.com/file/d/1hnyDW-5PHxJUK_nJeKv0E-sH_fX4xZ1A/view?usp=sharing"
                target='blank'
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.2] rounded-lg px-3 py-1.5 transition-all duration-200"
              >
               
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ── Cards panel ── */}
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            className="lg:w-7/12 xl:w-2/3 w-full"
          >
            <div className="flex flex-col gap-5 sm:gap-6 lg:block lg:space-y-0 relative">
              {/* Vertical timeline line */}
              <div className="hidden lg:block absolute left-[26px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/30 via-violet-500/20 to-transparent" />

              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={cardsControls}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`relative group rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 transition-all duration-300 ${card.border} hover:shadow-xl ${card.glow} ring-1 ring-inset ring-white/[0.03] ${card.offset} lg:mb-16 last:lg:mb-0 cursor-default overflow-hidden`}
                >
                  {/* Gradient background wash */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Large faint background number */}
                  <span className="absolute -right-2 -top-4 text-7xl sm:text-8xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
                    {card.number}
                  </span>

                  {/* Card inner */}
                  <div className="relative flex items-start gap-4">
                    {/* Timeline dot + icon column */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      {/* Timeline dot (aligns with vertical line on lg) */}
                      <span
                        className={`hidden lg:block absolute -left-[34px] top-5 w-2.5 h-2.5 rounded-full ${card.dot} ring-4 ring-[#0b1120]`}
                      />
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      {/* Top row: title + tag */}
                      <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {card.title}
                        </h3>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-500 border border-white/[0.06]">
                          {card.tag}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;