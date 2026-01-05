import { Link } from "react-router-dom";

const projects = [
  {
    id: "cleanliness",
    name: "Community Cleanliness & Issue Reporting Portal",
    image: "https://images.unsplash.com/photo-1581579186989-6c1b3cdbcf4b",
    shortDesc:
      "A platform where users can report cleanliness issues and track their status."
  },
  {
    id: "garments",
    name: "Garments Order & Production Tracker System",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    shortDesc:
      "Order and production management system for garments industries."
  },
  {
    id: "portfolio",
    name: "Personal Developer Portfolio",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    shortDesc:
      "My personal portfolio showcasing projects, skills, and experience."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.shortDesc}
              </p>

              <Link
                to={`/project/${project.id}`}
                className="mt-auto bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-center font-semibold"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
