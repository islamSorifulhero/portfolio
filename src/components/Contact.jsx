import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding py-20 md:py-40 overflow-hidden"
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-sm md:text-lg font-black mb-4 md:mb-6 tracking-tighter uppercase font-display"
            style={{ color: 'var(--text-primary)' }}
          >
            LET&apos;S CONNECT
          </h3>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-8 font-display uppercase tracking-tighter"
            style={{ color: 'var(--text-primary)' }}
          >
            HIRE<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>

          <p
            className="text-base md:text-xl font-bold uppercase tracking-wide md:tracking-widest mb-10 md:mb-16 leading-relaxed max-w-md"
            style={{ color: 'var(--text-tertiary)' }}
          >
            I AM CURRENTLY OPEN TO GLOBAL REMOTE OPPORTUNITIES. LET&apos;S BUILD
            SOMETHING EXTRAORDINARY.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-8 md:space-y-10">
            {[
              {
                label: 'EMAIL',
                value: 'islamsoriful.hero@gmail.com',
                icon: <Mail size={20} />,
                href: 'mailto:islamsoriful.hero@gmail.com',
              },
              {
                label: 'GITHUB',
                value: 'github.com/islamSorifulhero',
                icon: <Github size={20} />,
                href: 'https://github.com/islamSorifulhero',
              },
              {
                label: 'LINKEDIN',
                value: 'linkedin.com/in/md-soriful-islam-hero2',
                icon: <Linkedin size={20} />,
                href: 'https://www.linkedin.com/in/md-soriful-islam-hero2',
              },
              {
                label: 'MOBILE',
                value: '01770-886813 || 01518-713398',
                icon: <Phone size={20} />,
                href: 'tel:01518713398 || 01770886813',
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.label === 'EMAIL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-8 group"
              >
                <div className="text-accent group-hover:scale-125 transition-transform shrink-0">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p
                    className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] mb-1 uppercase"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm md:text-base font-black group-hover:text-accent transition-colors tracking-tighter font-display truncate"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="p-6 md:p-16"
          style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '1.5rem',
          }}
        >
          <form
            className="space-y-6 md:space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="text-[10px] font-black tracking-[0.4em] uppercase text-tertiary">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent py-3 md:py-4 outline-none text-base md:text-lg font-bold"
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            <div>
              <label className="text-[10px] font-black tracking-[0.4em] uppercase text-tertiary">
                Your Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-transparent py-3 md:py-4 outline-none text-base md:text-lg font-bold"
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            <div>
              <label className="text-[10px] font-black tracking-[0.4em] uppercase text-tertiary">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Project details..."
                className="w-full bg-transparent py-3 md:py-4 outline-none text-base md:text-lg font-bold resize-none"
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            <motion.button
              type="submit"
              className="btn-premium w-full py-4 md:py-5 hover:scale-[1.02] active:scale-95 transition-all"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
