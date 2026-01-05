import { useParams } from "react-router-dom";

const projectData = {
  cleanliness: {
    name: "Community Cleanliness & Issue Reporting Portal",
    tech: "React, Tailwind, Node.js, Express, MongoDB, Firebase",
    description:
      "Users can report cleanliness issues, upload images, track issue status, and administrators can manage reports.",
    live: "https://your-live-link.vercel.app",
    github: "https://github.com/yourusername/cleanliness-client",
    challenges:
      "Handling role-based access and real-time updates.",
    improvements:
      "Add map integration, notification system, and admin analytics."
  },
  garments: {
    name: "Garments Order & Production Tracker System",
    tech: "React, Tailwind, Node.js, Express, MongoDB",
    description:
      "Tracks garment orders, production stages, and delivery status.",
    live: "https://your-live-link.vercel.app",
    github: "https://github.com/yourusername/garments-client",
    challenges:
      "Managing multiple user roles and order workflow.",
    improvements:
      "Add payment gateway and reporting dashboard."
  },
  portfolio: {
    name: "Personal Developer Portfolio",
    tech: "React, Tailwind CSS",
    description:
      "A professional portfolio website showcasing my work and skills.",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
    challenges:
      "Responsive layout and clean UI.",
    improvements:
      "Add animations and blog section."
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        {project.name}
      </h1>

      <p className="mb-4">
        <strong>Technology Stack:</strong> {project.tech}
      </p>

      <p className="mb-4">
        <strong>Description:</strong> {project.description}
      </p>

      <p className="mb-4">
        <strong>Challenges:</strong> {project.challenges}
      </p>

      <p className="mb-6">
        <strong>Future Improvements:</strong> {project.improvements}
      </p>

      <div className="flex gap-4">
        <a
          href={project.live}
          target="_blank"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Live Project
        </a>

        <a
          href={project.github}
          target="_blank"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          GitHub Client
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
