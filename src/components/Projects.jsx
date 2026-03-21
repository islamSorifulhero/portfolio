import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/Project3.jpg';
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'Garments Project',
    description: 'Garments Order & Production Tracker System.',
    tech: ['REACT', 'FIREBASE', 'NODE', 'EXPRESS'],
    image: project1,
    live: 'https://sunny-axolotl-1dff72.netlify.app',
    github: 'https://github.com/islamSorifulhero/client-side-project',
  },
  {
    title: 'Cleanliness Community',
    description: 'Community Cleanliness & Issue Reporting Portal.',
    tech: ['REACT', 'FIREBASE', 'NODE', 'EXPRESS'],
    image: project2,
    live: 'https://animated-cat-0a19c2.netlify.app',
    github: 'https://github.com/islamSorifulhero/client',
  },
  {
    title: 'appverse',
    description: 'It serves as the official app store.',
    tech: ['REACT', 'FIREBASE', 'NODE', 'EXPRESS'],
    image: project3,
    live: 'https://appvers.netlify.app',
    github: 'https://github.com/islamSorifulhero/appverse',
  },
];

const Projects = () => {
  const [activeIdx, setActiveIdx] = React.useState(null);

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24"
      style={{ borderTop: '1px solid var(--border-color)' }}
    >
      {/* Heading */}
      <div className="mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight">
            Latest Work<span style={{ color: 'var(--accent-color)' }}>.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-gray-400">
            Selected Projects Delivering High Value.
          </p>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image */}
            <div
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              className="lg:col-span-7 relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className={cn(
                  'absolute inset-0 bg-black/60 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-300',
                  activeIdx === idx ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                )}
              >
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black rounded-full text-xs font-bold flex items-center gap-2"
                  >
                    LIVE <ExternalLink size={14} />
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-white text-white rounded-full text-xs font-bold flex items-center gap-2"
                  >
                    CODE <Github size={14} />
                  </a>
                </Magnetic>
              </div>

              {/* Tag */}
              <div className="absolute top-3 left-3 text-[10px] px-3 py-1 bg-black/60 rounded-full text-white">
                PROJECT {idx + 1}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-3 py-1 border rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="h-[2px] w-16 bg-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
