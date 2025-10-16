import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import ProfileImg from "../assets/Profile.jpg"; // ✅ correct

export default function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      {/* profile Image */}
      <button
        onClick={() => {
          const aboutText = document.getElementById("about-text");
          aboutText?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute top-2 left-2 z-50 rounded-full"
      >
        <motion.img
          src={ProfileImg}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-black"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{
            scale,
          }}
        />
      </button>

      {/* About box */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent overflow-hidden z-40 flex justify-center items-end">
        <motion.div
          id="about-text"
          initial={{ y: 0, opacity: 1, scale: 0.5 }}
          animate={{ y: -200, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            transformOrigin: "center bottom",
            rotateX: 25,
            perspective: 800,
            fontFamily: "monospace",
          }}
          className="text-black text-left max-w-3xl p-6 rounded-2xl bg-white/90 shadow-xl ml-4 mr-20"
        >
          <div className="typing-animation whitespace-pre-line">
            <h1 className="text-2xl font-bold mb-2">About Me</h1>
            {`Hello! I’m Abreham Tegegne, a first-generation Ethiopian and senior at the University of Washington majoring in Computer Science.

As a passionate software engineer, I have gained hands-on experience in various aspects of software development. I have worked two internships at TIAA, where I had the opportunity to work on impactful projects, including optimizing APIs with Java Spring Boot and building AI-driven tools that saved teams over 120 hours of manual work.

Outside of internships, I’ve also been growing through personal projects. Right now, I’m working solo on a mobile application called MyBuild, a platform for car enthusiasts to share builds, find parts, and discover local events. I’m hoping to launch it on the App Store soon. It’s been a great way to apply what I’ve learned while solving real problems and building something I am proud of.

I’m currently looking for new graduate software engineering roles where I can contribute to meaningful projects, learn from experienced teams, and continue to grow as a developer.

When I am not coding, I enjoy spending time with my family outdoors in the Pacific Northwest, playing basketball, working on my car, or mentoring students in an after school coding program. I am always looking for ways to learn something new, whether it is through hands-on projects or keeping up with the constantly evolving world of technology.

Let’s connect and collaborate!`}
          </div>
        </motion.div>
      </div>

      {/* Contact & Resume Container */}
      <div id="contact" className="z-50 w-full">
        {/* Mobile Layout (stacked under About text) */}
        <div className="flex flex-col items-center gap-4 md:hidden mt-8">
          <motion.div
            className="bg-white text-black p-4 rounded-2xl w-full max-w-md text-xl shadow-lg"
            style={{ scale }}
          >
            <p className="mb-3 text-center font-bold text-2xl">Contact Me</p>
            <p className="mb-3">
              <span>📍</span> Seattle, WA
            </p>
            <p className="mb-3">
              <span>👨‍💻</span> Software Engineer
            </p>
            <p className="mb-3">
              <a href="mailto:abreham@uw.edu">
                <span>✉️</span> Abreham@uw.edu
              </a>
            </p>
            <p className="font-bold">
              <a
                href="https://www.linkedin.com/in/abreham-tegegne/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center text-xl"
              >
                <FaLinkedin size={27} className="mr-2" />
                LinkedIn
              </a>
            </p>
          </motion.div>

          <motion.a
            href="/src/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white bg-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition text-lg font-bold"
            style={{
              scale,
            }}
          >
            Resume
          </motion.a>
        </div>

        {/* Desktop Layout (floating fixed to bottom right) */}
        <div className="hidden md:fixed md:bottom-61 md:right-7 md:flex flex-col items-end gap-4">
          <motion.div
            className="bg-white text-black p-4 rounded-2xl w-72 text-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            style={{ scale, fontFamily: "monospace" }}
          >
            <p className="mb-3 text-center font-bold text-2xl">Contact Me</p>
            <p className="mb-3">
              <span>📍</span> Seattle, WA
            </p>
            <p className="mb-3">
              <span>👨‍💻</span> Software Engineer
            </p>
            <p className="mb-3">
              <a
                href="mailto:abreham@uw.edu"
                className="text-[#2563eb] hover:text-[#1d4ed8]"
              >
                <span>✉️</span> Abreham@uw.edu
              </a>
            </p>
            <p className=" mb-3">
              <a
                href="https://www.linkedin.com/in/abreham-tegegne/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563eb] hover:text-[#1d4ed8] flex items-center text-xl"
              >
                <FaLinkedin size={27} className="mr-2" />
                LinkedIn
              </a>
            </p>
            <div className="flex justify-center mt-4 ">
              <motion.a
                href="/src/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white bg-[#2563eb] px-4 py-2 rounded-full hover:bg-[#1d4ed8] hover:text-gray-100 transition text-4xl font-bold"
                style={{
                  scale,
                }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
