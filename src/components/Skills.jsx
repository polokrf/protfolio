import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiSocketdotio, SiPrisma,
  SiMongodb, SiPostgresql, SiSupabase,
  SiJsonwebtokens, SiFirebase,
  SiGit, SiGithub, SiStripe,
  SiOpenai, SiGooglegemini,
} from 'react-icons/si';
import { VscDebugAlt, VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { MdVerifiedUser, MdOutlineDesignServices } from 'react-icons/md';

const skillGroups = [
  {
    title: 'Frontend',
    tag: 'UI Layer',
    dot: 'bg-blue-400',
    underline: 'bg-blue-400',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Responsive Design', icon: MdOutlineDesignServices, color: '#38BDF8' },
    ],
  },
  {
    title: 'Backend',
    tag: 'Server Layer',
    dot: 'bg-emerald-400',
    underline: 'bg-emerald-400',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST APIs', icon: TbApi, color: '#34D399' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#FFFFFF' },
      { name: 'Prisma (ORM)', icon: SiPrisma, color: '#2D3748' },
    ],
  },
  {
    title: 'Database',
    tag: 'Data Layer',
    dot: 'bg-green-400',
    underline: 'bg-green-400',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    title: 'Auth',
    tag: 'Security',
    dot: 'bg-rose-400',
    underline: 'bg-rose-400',
    skills: [
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
      { name: 'Firebase Auth', icon: SiFirebase, color: '#FFCA28' },
      { name: 'NextAuth', icon: MdVerifiedUser, color: '#8B5CF6' },
    ],
  },
  {
    title: 'Tools',
    tag: 'Workflow',
    dot: 'bg-orange-400',
    underline: 'bg-orange-400',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Stripe (Test)', icon: SiStripe, color: '#635BFF' },
    ],
  },
  {
    title: 'Practices',
    tag: 'Additional',
    dot: 'bg-cyan-400',
    underline: 'bg-cyan-400',
    skills: [
      { name: 'Debugging', icon: VscDebugAlt, color: '#22D3EE' },
      { name: 'Clean Code Practices', icon: VscCode, color: '#38BDF8' },
    ],
  },
  {
    title: 'AI Workflow',
    tag: 'AI-Assisted Dev',
    dot: 'bg-violet-400',
    underline: 'bg-violet-400',
    skills: [
      { name: 'ChatGPT', icon: SiOpenai, color: '#FFFFFF' },
      { name: 'Gemini', icon: SiGooglegemini, color: '#8E75FF' },
      { name: 'GitHub Copilot', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Cursor', icon: VscCode, color: '#00BFA6' },
      { name: 'Antigravity', icon: VscCode, color: '#F472B6' },
      { name: 'Prompt Engineering', icon: MdOutlineDesignServices, color: '#A78BFA' },
      { name: 'AI-Assisted Debugging', icon: VscDebugAlt, color: '#F87171' },
      { name: 'README Writing', icon: VscCode, color: '#60A5FA' },
      { name: 'Test-case Generation', icon: TbApi, color: '#34D399' },
    ],
  },
];

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut', delay: i * 0.04 },
  }),
};

const Skills = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = skillGroups[activeTab];
  const tabsRef = useRef(null);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24  overflow-hidden bg-[#0b1120]" id="skills">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-14"
        >
         
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Technical{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              Skills
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          >
            My tech stack is centered around the JavaScript ecosystem. I constantly
            learn new tools to improve my workflow and product quality.
          </motion.p>
        </motion.div>

        {/* Tab bar — horizontally scrollable on mobile, no wrap */}
        <div className="relative mb-8 border-b border-white/[0.08]">
          <div
            ref={tabsRef}
            className="flex gap-1 overflow-x-auto scrollbar-none -mb-px"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillGroups.map((group, idx) => (
              <button
                key={group.title}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-shrink-0 flex items-center gap-1.5 px-3.5 sm:px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeTab === idx
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${group.dot} flex-shrink-0`} />
                {group.title}

                {/* Active underline indicator */}
                {activeTab === idx && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className={`absolute left-0 right-0 -bottom-px h-[2px] ${group.underline} rounded-full`}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Fade edges to hint scrollability on mobile */}
          <div className="sm:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0b1120] to-transparent pointer-events-none" />
        </div>

        {/* Active tab content */}
        <div className="min-h-[200px] sm:min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {/* Group meta */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                  {activeGroup.tag}
                </span>
                <span className="text-[10px] text-slate-700">
                  · {activeGroup.skills.length} skills
                </span>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {activeGroup.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      custom={i}
                      variants={chipVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ y: -3 }}
                      className="group flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                    >
                      <Icon
                        className="text-[16px] sm:text-[18px] flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;