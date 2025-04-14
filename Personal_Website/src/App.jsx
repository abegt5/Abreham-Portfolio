import { useState } from "react";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <nav
        className="fixed top-0 w-full bg-transparent  z-50 flex justify-end gap-6 p-4 pr-10"
        style={{
          fontFamily: "StarJedi",
        }}
      >
        <a href="#about" className="hover:text-yellow-400 text-black">
          About
        </a>
        <a href="#projects" className="hover:text-yellow-400 text-black">
          Projects
        </a>
        <a href="#contact" className="hover:text-yellow-400 text-black">
          Contact
        </a>
      </nav>

      <div>
        <About />
        <ProjectsSection />
      </div>
    </>
  );
}

export default App;
