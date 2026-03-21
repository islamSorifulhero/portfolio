import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, ShieldCheck, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: 'Full Stack Developer',
    description:
      'Deep expertise in MERN stack and modern development paradigms for robust applications.',
  },
  {
    icon: <Cloud className="w-8 h-8 text-accent" />,
    title: 'Remote Native',
    description:
      'Fluid collaboration across global time zones with industry-standard remote tooling.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: 'Logical Precision',
    description:
      'A rigorous approach to problem-solving and clean, scalable architecture.',
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: 'Velocity & Quality',
    description:
      'High-speed delivery without compromising on code integrity or user experience.',
  },
];

const WhyMe = () => {
  return (
    <section
      id="why-me"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 overflow-hidden"
      style={{ borderTop: '1px solid var(--border-color)' }}
    >
      {/* Heading */}
      <div className="mb-12 md:mb-16 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 uppercase font-display tracking-tight break-words"
          style={{ color: 'var(--text-primary)' }}
        >
          STRATEGY<span style={{ color: 'var(--accent-color)' }}>.</span>
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg font-bold tracking-normal md:tracking-wide break-words"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Why I am the strategic fit for your Global Team.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.4 } }}
            className="relative p-5 sm:p-6 md:p-8 bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] rounded-2xl md:rounded-[2rem] group transition-all hover:shadow-xl break-words"
            style={{ wordWrap: 'break-word' }}
          >
            <div className="mb-6 sm:mb-8 text-accent group-hover:text-accent transition-colors">
              {reason.icon}
            </div>
            <h3
              className="text-lg sm:text-xl font-black mb-4 uppercase font-display group-hover:text-accent transition-colors break-words"
              style={{ color: 'var(--text-primary)' }}
            >
              {reason.title}
            </h3>
            <p
              className="text-xs sm:text-sm font-bold leading-relaxed tracking-normal break-words"
              style={{ color: 'var(--text-tertiary)' }}
            >
              {reason.description}
            </p>
            {/* subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;