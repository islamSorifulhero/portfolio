const skills = {
  Frontend: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "Firebase", "Vercel"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className="bg-white shadow rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
