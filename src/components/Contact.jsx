import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 md:py-4 lg:py-12"
      style={{ borderTop: '1px solid var(--border-color)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs sm:text-sm md:text-base font-bold mb-3 uppercase tracking-wider">
            LET'S CONNECT
          </h3>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4">
            HIRE<span className="text-accent">.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 max-w-md">
            I am open to remote opportunities. Let's build something amazing together.
          </p>

          <div className="space-y-6">
            {[
              {
                label: 'EMAIL',
                value: 'islamsoriful.hero@gmail.com',
                icon: <Mail size={18} />,
                href: 'mailto:islamsoriful.hero@gmail.com',
              },
              {
                label: 'GITHUB',
                value: '@islamSorifulhero',
                icon: <Github size={18} />,
                href: 'https://github.com/islamSorifulhero',
              },
              {
                label: 'LINKEDIN',
                value: '@md-soriful-islam-hero2',
                icon: <Linkedin size={18} />,
                href: 'https://www.linkedin.com/in/md-soriful-islam-hero2',
              },
              {
                label: 'PHONE',
                value: '01770-886813',
                icon: <Phone size={18} />,
                href: 'tel:01770886813',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.label === 'EMAIL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <div className="text-accent mt-1">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold break-all sm:truncate group-hover:text-accent">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border bg-white/5"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            <div>
              <label className="text-[10px] uppercase tracking-wider text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent py-3 outline-none text-sm sm:text-base border-b"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-wider text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-transparent py-3 outline-none text-sm sm:text-base border-b"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-wider text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Project details..."
                className="w-full bg-transparent py-3 outline-none text-sm sm:text-base border-b resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-white text-black rounded-full text-sm font-semibold hover:scale-[1.02] active:scale-95 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
