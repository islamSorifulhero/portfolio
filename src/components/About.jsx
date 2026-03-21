import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, Zap, Rocket, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black mb-6 md:mb-8 uppercase tracking-tight">
            ABOUT ME<span className="text-accent">.</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-sm sm:text-base leading-relaxed text-gray-400">
            <p>
              Hi! I’m a passionate MERN Stack Developer who began exploring the inner workings
              of websites and applications out of curiosity. I started with HTML & CSS and later
              moved to JavaScript, React, Node.js, Express, and MongoDB.
            </p>

            <p>
              I enjoy solving problems and turning ideas into real-world applications. Outside
              coding, I love traveling and learning new technologies.
            </p>

            <p className="pl-4 py-2 border-l-4 border-accent text-white bg-white/5 rounded">
              FULLY EQUIPPED FOR GLOBAL REMOTE COLLABORATION.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 md:mt-12 pt-6 border-t">
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2 text-accent">
              <GraduationCap size={14} /> EDUCATION
            </h4>

            <p className="text-sm md:text-base font-semibold">
              B.Sc (Honours) in Botany – Govt. Titumir College
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-xs text-gray-400">
              <span>Dhaka University, Bangladesh</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-accent">2022 - Present</span>
            </div>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { icon: Globe, title: 'GLOBAL READY', desc: 'Remote collaboration' },
            { icon: Zap, title: 'FAST ADAPTATION', desc: 'Quick tech learning' },
            { icon: Lightbulb, title: 'PROBLEM SOLVER', desc: 'Logical solutions' },
            { icon: Rocket, title: 'RESULT DRIVEN', desc: 'Production ready work' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="p-4 sm:p-6 md:p-8 rounded-2xl border bg-white/5"
              >
                <div className="mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-sm md:text-base font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;