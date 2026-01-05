// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";

import About from "../About";
import Contact from "../Contact";
import Education from "../Education";
import Experience from "../Experience";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Projects from "../Projects";
import Skills from "../Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
