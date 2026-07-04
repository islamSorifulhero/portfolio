import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X, Calendar, Code, Rocket } from 'lucide-react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/Project3.jpg';
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';

const projects = [
  {
    id: 1,
    title: 'Garments Project',
    description: 'Garments Order and Production Tracker System.',
    fullDescription: 'A comprehensive garment order and production tracking system designed to streamline the entire manufacturing process. This platform enables efficient management of orders, production schedules, and inventory tracking for garments manufacturing companies.',
    tech: ['REACT', 'FIREBASE', 'NODE', 'EXPRESS'],
    image: project1,
    live: 'https://sunny-axolotl-1dff72.netlify.app',
    github: 'https://github.com/islamSorifulhero/client-side-project',
    challenges: [
      'Complex state management across multiple production stages',
      'Real-time order tracking required WebSocket integration',
      'Inventory synchronization across different warehouses',
      'Performance optimization for large data sets'
    ],
    improvements: [
      'Implement AI-based production forecasting',
      'Add real-time analytics dashboard',
      'Integrate barcode scanning for inventory management',
      'Develop mobile app for field workers'
    ]
  },
  {
    id: 2,
    title: 'Cleanliness Community',
    description: 'Community Cleanliness & Issue Reporting Portal.',
    fullDescription: 'A community-driven platform for reporting and tracking cleanliness issues in neighborhoods. Citizens can report problems, track resolution status, and contribute to maintaining a clean environment through community participation.',
    tech: ['REACT', 'FIREBASE', 'NODE', 'EXPRESS'],
    image: project2,
    live: 'https://animated-cat-0a19c2.netlify.app',
    github: 'https://github.com/islamSorifulhero/client',
    challenges: [
      'Implementing accurate location tracking for issue reports',
      'Managing user roles and permissions effectively',
      'Real-time update system for issue status changes',
      'Handling image uploads with proper optimization'
    ],
    improvements: [
      'Add AI-powered image recognition for issue categorization',
      'Implement gamification system for active participants',
      'Create admin dashboard with advanced analytics',
      'Integrate with municipal service APIs'
    ]
  },
  {
    id: 3,
    title: 'Appverse',
    description: 'An official platform for discovering and downloading mobile applications.',
    fullDescription: 'Appverse is a comprehensive app store platform that allows users to discover, download, and review applications. It features a modern UI, user authentication, app categorization, and rating system for an enhanced user experience.',
    tech: ['REACT', 'FIREBASE', 'NODE', 'EXPRESS'],
    image: project3,
    live: 'https://appvers.netlify.app',
    github: 'https://github.com/islamSorifulhero/appverse',
    challenges: [
      'Implementing secure user authentication and data protection',
      'Creating efficient search and filter functionality',
      'Managing app categories and ratings system',
      'Ensuring responsive design across all devices'
    ],
    improvements: [
      'Add user reviews and rating system',
      'Implement recommendation engine using ML',
      'Create developer dashboard for app submission',
      'Add multi-language support for global reach'
    ]
  }
];

// Project Detail Modal Component
const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8"
        style={{ 
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-color)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          <X size={24} />
        </button>

        {/* Project Image */}
        <div className="w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden mb-6">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border"
                style={{ 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Description
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {project.fullDescription}
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Rocket size={20} /> Challenges Faced
          </h3>
          <ul className="space-y-2">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="text-sm pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
                <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }} />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Code size={20} /> Future Improvements
          </h3>
          <ul className="space-y-2">
            {project.improvements.map((improvement, idx) => (
              <li key={idx} className="text-sm pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
                <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }} />
                {improvement}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <Magnetic>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105"
              style={{ 
                backgroundColor: 'var(--accent-color)',
                color: 'white'
              }}
            >
              Live Demo <ExternalLink size={16} />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 border"
              style={{ 
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              GitHub <Github size={16} />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

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
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest" style={{ color: 'var(--text-secondary)' }}>
            Selected Projects Delivering High Value.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ 
              backgroundColor: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)'
            }}
          >
            {/* Image */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
              
              {/* Tech Tags Overlay */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                {project.tech.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[8px] px-2 py-0.5 rounded-full bg-black/70 text-white"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="text-[8px] px-2 py-0.5 rounded-full bg-black/70 text-white">
                    +{project.tech.length - 2}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              {/* View Details Button */}
              <button
                onClick={() => handleViewDetails(project)}
                className="w-full px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02]"
                style={{ 
                  backgroundColor: 'var(--accent-color)',
                  color: 'white'
                }}
              >
                View More / Details
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Quick Action Buttons */}
              <div className="flex gap-2">
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                    style={{ 
                      backgroundColor: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <ExternalLink size={12} /> Live
                  </a>
                </Magnetic>
                
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                    style={{ 
                      backgroundColor: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <Github size={12} /> Code
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={handleCloseDetails} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;