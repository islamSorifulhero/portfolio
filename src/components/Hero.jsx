import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import soriful from '../assets/soriful.png.jpg';
import Magnetic from './Magnetic';

const Hero = ({ show }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // disable heavy effect on small devices
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 30;
    const y = (clientY - innerHeight / 2) / 30;
    setMousePosition({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24"
      onMouseMove={handleMouseMove}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center w-full">
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.span
            variants={itemVariants}
            className="text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 inline-block px-4 py-1 rounded-full border"
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4"
          >
            MD. <span className="text-accent">SORIFUL</span> ISLAM
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-gray-400"
          >
            Specializing in React.js, Next.js, and the MERN Stack. I build responsive,
            high-performance web applications with clean code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >


            <Magnetic>
              <a
                href="/resume of soriful.pdf"
                download
                className="px-6 py-3 bg-white text-black rounded-full text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Resume <Download size={16} />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#projects"
                className="px-6 py-3 border rounded-full text-sm font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Projects <ArrowRight size={16} />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="px-6 py-3 text-sm flex border rounded-full items-center gap-2"
              >
                Contact <Mail size={16} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[420px]">
            <img
              src={soriful}
              alt="Soriful"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
    </section>
  );
};

export default Hero;