import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg";

<ParticlesBg />

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark container" : "container"}>
      <Navbar />

      <div className="toggle" onClick={() => setDark(!dark)}>
  <motion.div
    className="toggle-btn"
    animate={{ x: dark ? 32 : 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {dark ? "🌙" : "☀️"}
  </motion.div>
</div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;