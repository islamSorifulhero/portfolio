import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    frontend: [
        {
            name: 'HTML5',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
            )
        },
        {
            name: 'CSS3',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
            )
        },
        {
            name: 'JavaScript',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#F7DF1E" d="M0 0h24v24H0z" />
                    <path d="M18.663 19.335c-.437.68-1.14 1.132-2.14 1.132-.96 0-1.74-.53-2.175-1.155l1.018-.6c.245.41.6.685 1.157.685.545 0 .914-.263.914-.725 0-.41-.305-.595-.91-.86l-1.1-.39c-.933-.404-1.57-.96-1.57-1.95 0-.895.84-1.55 1.762-1.55.765 0 1.25.26 1.71.74l-.74.6c-.343-.3-.591-.497-1.012-.497-.37 0-.71.185-.71.6 0 .33.205.51.7.72l1.1.48c1.1.47 1.63 1.05 1.63 2.05 0 1.1-.73 1.65-1.635 1.65zm-7.615.112c.16.29.35.48.58.62.3.16.63.24 1.01.24.41 0 .73-.08.97-.24.25-.17.38-.41.38-.72V10h1.16v8.43c0 .59-.16 1.07-.48 1.45-.44.5-1.15.8-1.96.8-.75 0-1.39-.18-1.84-.55-.44-.36-.66-.86-.81-1.6l1.01-.64z" fill="#000" />
                </svg>
            )
        },
        {
            name: 'React',
            icon: (
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10">
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                    <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            )
        },
        {
            name: 'Next.js',
            icon: (
                <svg viewBox="0 0 180 180" className="w-10 h-10">
                    <mask id="next-mask" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                        <circle cx="90" cy="90" r="90" fill="black" />
                    </mask>
                    <g mask="url(#next-mask)">
                        <circle cx="90" cy="90" r="90" fill="black" />
                        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.1836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                        <path d="M115.223 54H127.337V125.97H115.223V54Z" fill="white" />
                    </g>
                </svg>
            )
        },
        {
            name: 'TypeScript',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#3178C6" d="M3 3h18v18H3V3zm10.15 12.6v1.53c.44.25 1.04.45 1.74.45.99 0 1.63-.42 1.63-1.23 0-.85-.62-1.3-1.63-1.74l-.61-.25c-1.48-.6-2.2-1.45-2.2-2.73 0-1.7 1.45-2.77 3.56-2.77.88 0 1.61.18 2.11.46v1.5c-.47-.27-1.12-.44-1.83-.44-.9 0-1.42.38-1.42.99 0 .81.62 1.15 1.57 1.54l.61.25c1.76.72 2.45 1.48 2.45 2.81 0 1.68-1.49 2.79-3.8 2.79-1.23 0-2.18-.31-2.82-.7zm-2.8-6.53h-2.8v11.86h-2.2v-11.86h-2.8v-1.88h7.8v1.88z" />
                </svg>
            )
        },
        {
            name: 'Tailwind CSS',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#38bdf8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
            )
        },
        {
            name: 'Bootstrap',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#7952B3" d="M11.943 0H5.557v24h12.886V0h-6.5zm1.765 16.808c-.328.332-.814.497-1.46.497-.628 0-1.097-.151-1.407-.452-.31-.301-.465-.762-.465-1.383h-1.638c.016.949.312 1.696.888 2.243.576.546 1.364.819 2.363.819.945 0 1.707-.255 2.286-.766.579-.511.869-1.209.869-2.094 0-.644-.172-1.148-.518-1.514-.345-.366-.869-.64-1.571-.822l-.718-.183c-.438-.113-.757-.277-.957-.493-.2-.216-.3-.508-.3-.875 0-.409.114-.72.342-.935.229-.215.566-.322 1.012-.322.506 0 .883.135 1.131.405.248.27.372.687.372 1.25h1.585c-.016-.816-.317-1.46-.903-1.934-.586-.474-1.361-.711-2.326-.711-.957 0-1.725.253-2.303.759-.578.506-.867 1.165-.867 1.977 0 .67.192 1.198.577 1.585.384.387.919.666 1.605.837l.724.183c.57.135.981.312 1.232.531.252.219.378.555.378 1.008.001.41-.127.73-.38.96z" />
                </svg>
            )
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: (
                <svg viewBox="0 0 256 256" className="w-10 h-10">
                    <path d="M128 32l-94.8 54.8v109.4L128 251l94.8-54.8V86.8L128 32zm82.8 157.4L128 238.4l-82.8-49V92.6L128 43.6l82.8 49v102.8z" fill="#339933" />
                    <path d="M128 64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="#339933" />
                </svg>
            )
        },
        {
            name: 'Express.js',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                    <path d="M7.4 17.5h.8v-3.8h2.3v-.6H8.2v-1.9H11v-.6H7.4v6.9zm4.2-.6l1-1.8 1.1 1.8h.9l-1.4-2.2 1.4-2.4h-.9L12.7 14l-1-1.6h-.9l1.4 2.2-1.4 2.3h.8zm5.5 1.5c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8zm0-3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zM5.5 14h.6c.6 0 1-.4 1-.9 0-.6-.4-.9-1-.9h-.6v1.8zm-.7.8h.7c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6H4V18h.8v-3.2zm14.3.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 3c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8z" />
                </svg>
            )
        },
        {
            name: 'MongoDB',
            icon: (
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                    <path d="M37 23.5c0 7.8-6.7 14.1-13 14.1s-13-6.3-13-14.1c0-4.6 2.3-8.8 6.1-11.4l6.9-4.1 6.9 4.1c3.8 2.6 6.1 6.8 6.1 11.4z" fill="#47a248" />
                    <path d="M24 6l6.9 4.1c3.8 2.6 6.1 6.8 6.1 11.4 0 3.3-1.2 6.4-3.2 8.7-1.1-3-2.1-7.1-2.1-11.2 0-.3 0-.7-.1-1L24 6z" fill="#3fa049" />
                    <path d="M24 37.6c-4.4 0-8.5-4-10.7-9.4 1.1 2.3 2.9 4.3 5.3 5.6 1.7.9 3.6 1.4 5.4 1.4V37.6z" fill="#47a248" />
                </svg>
            )
        },
        {
            name: 'Firebase',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#FFCA28" d="M3.89 15.672L6.255.461A.545.545 0 017.27.284l2.258 4.248L3.89 15.672zm.068.423l6.23-11.832 2.378 4.471-8.608 7.361zm16.152-.423L17.745.461a.545.545 0 00-1.015-.177L14.472 4.532l5.638 10.717zM12 4.743l2.006 3.844-2.006 1.714-2.006-1.714L12 4.743zm0 6.64l2.035-1.738.001.001 6.014 11.417a.545.545 0 01-.84.66L12 15.313 4.79 21.724a.545.545 0 01-.84-.66L9.964 9.645l2.036 1.738z" />
                </svg>
            )
        },
        {
            name: 'PostgreSQL',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#336791" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.3 7.3c.2.6.3 1.3.2 2.1-.1.8-.3 1.6-.7 2.4-.4.8-.9 1.5-1.5 2.1-.6.6-1.3 1.2-2.1 1.6-.8.4-1.6.7-2.5.8-.9.1-1.8 0-2.6-.3-.8-.3-1.5-.7-2.1-1.3-.6-.6-1-1.3-1.3-2.1-.3-.8-.4-1.6-.3-2.5.1-.9.4-1.7.8-2.5.4-.8.9-1.5 1.5-2.1.6-.6 1.3-1.1 2.1-1.4.8-.3 1.6-.5 2.5-.5.9 0 1.7.2 2.5.5.8.3 1.5.8 2.1 1.4.6.6 1 1.3 1.3 2.1z" />
                    <circle cx="12" cy="12" r="4" fill="white" />
                </svg>
            )
        }
    ],
    tools: [
        {
            name: 'Git',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#F05033" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.516.66 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.719-1.881.719-2.6 0-.719-.717-.719-1.879 0-2.598.182-.18.387-.316.605-.41V8.835c-.218-.094-.426-.23-.605-.41-.526-.525-.69-1.275-.482-1.938L7.26 3.768.452 10.574c-.603.604-.603 1.582 0 2.188l10.48 10.48c.604.603 1.582.603 2.188 0l10.426-10.43c.603-.604.603-1.582 0-2.188z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            )
        },
        {
            name: 'VS Code',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#007ACC" d="M23.15 3.8l-4.83-2.96c-.36-.22-.82-.16-1.1.14L0 17.07 3.85 20 22.3 7.54c.38-.25.52-.74.35-1.15l.5-2.59z" />
                    <path fill="#007ACC" d="M23.15 3.8l-4.83-2.96c-.36-.22-.82-.16-1.1.14L0 17.07 3.85 20 22.3 7.54c.38-.25.52-.74.35-1.15l.5-2.59z" />
                    <path fill="#0065A9" d="M4.8 20.56l-1.36-1.24L0 17.07l3.85 2.93" />
                    <path fill="#007ACC" d="M1.3 3.15L.45 3.8c-.35.25-.46.74-.29 1.15l.5 2.59 3.96-3.21" />
                    <path fill="#0065A9" d="M4.8 20.56l4.6-3.95" />
                </svg>
            )
        },
        {
            name: 'Postman',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#FF6C37" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z" />
                    <path fill="white" d="M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.762 0 5 2.238 5 5s-2.238 5-5 5-5-2.238-5-5 2.238-5 5-5z" />
                    <path fill="#FF6C37" d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 2c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" />
                </svg>
            )
        },
        {
            name: 'Netlify',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                    <path fill="#00C7B7" d="M12 0L0 6.75v10.5L12 24l12-6.75V6.75L12 0zm0 4.5L22.5 10.5v6L12 22.5 1.5 16.5v-6L12 4.5z" />
                    <path fill="#00C7B7" d="M12 7.5L7.5 10.5v6L12 19.5l4.5-3v-6L12 7.5z" />
                </svg>
            )
        },
        {
            name: 'Vercel',
            icon: (
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                    <path d="M12 3L2 21h20L12 3zm0 4.5L17.5 19h-11L12 7.5z" />
                </svg>
            )
        }
    ]
};

const SkillCategory = ({ title, skills, categoryIndex }) => {
    return (
        <div className="mb-16 last:mb-0">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-8"
            >
                <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {title}
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full mt-2" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 1, 0, -1, 0],
                            x: [0, 3, 0, -3, 0],
                        }}
                        transition={{
                            y: {
                                duration: 8 + (idx * 0.3),
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1],
                                delay: idx * 0.5 + categoryIndex * 0.2
                            },
                            rotate: {
                                duration: 12 + (idx * 0.4),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.6 + categoryIndex * 0.3
                            },
                            x: {
                                duration: 10 + (idx * 0.2),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.4 + categoryIndex * 0.1
                            },
                            opacity: { duration: 1.2, delay: idx * 0.1 + categoryIndex * 0.1 },
                            filter: { duration: 1.2, delay: idx * 0.1 + categoryIndex * 0.1 }
                        }}
                        viewport={{ once: true, margin: "-5%" }}
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                            transition: { duration: 0.4, ease: "easeOut" }
                        }}
                        className="p-6 md:p-10 flex flex-col items-center justify-center gap-4 md:gap-6 group transition-all relative overflow-hidden rounded-2xl md:rounded-3xl"
                        style={{
                            backgroundColor: 'var(--glass-bg)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid var(--glass-border)',
                        }}
                    >
                        <div className="relative z-10 p-3 md:p-5 rounded-xl md:rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-2xl overflow-hidden" style={{ backgroundColor: 'var(--glass-bg)' }}>
                            {/* Internal Glow on Hover */}
                            <motion.div
                                animate={{
                                    opacity: [0, 0.5, 0],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="relative z-10">
                                {skill.icon}
                            </div>
                        </div>
                        <h3 className="relative z-10 text-[10px] md:text-xs font-black text-center tracking-widest uppercase font-display transition-colors" style={{ color: 'var(--text-tertiary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}>
                            {skill.name}
                        </h3>

                        {/* Subtle Gradient Glow on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section-padding py-4 md:py-12" style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
            <div className="mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black mb-4">
                        Technical Skill<span className="text-accent">.</span>
                    </h2>
                    <p className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                        Technologies and tools I work with
                    </p>
                </motion.div>
            </div>

            <div className="space-y-12 md:space-y-16">
                <SkillCategory title="⚡ Frontend Development" skills={skills.frontend} categoryIndex={0} />
                <SkillCategory title="🚀 Backend Development" skills={skills.backend} categoryIndex={1} />
                <SkillCategory title="🛠️ Tools & Platforms" skills={skills.tools} categoryIndex={2} />
            </div>
        </section>
    );
};

export default Skills;