import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-green-600">MD Soriful Islam</span>
          </h2>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Frontend / MERN Stack Developer
          </h3>

          <p className="text-gray-600 mb-6">
            I build clean, responsive, and user-friendly web applications
            using modern technologies.
          </p>

          <div className="flex gap-4 mb-6">
            <a
              href="/resume.pdf"
              download
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-4 text-2xl text-gray-700">
            <a href="https://github.com/" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank"><FaLinkedin /></a>
            <a href="https://facebook.com/" target="_blank"><FaFacebook /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/7GJv0Ff/profile.png"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
