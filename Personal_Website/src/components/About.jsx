import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

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
      className="min-h-screen flex items-center justify-center bg-white text-black relative px-6"
    >
      <button
        onClick={() => {
          const aboutText = document.getElementById("about-text");
          aboutText?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute top-2 left-2 z-50  border-black rounded-full"
      >
        <motion.img
          src="/src/assets/Profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{
            scale,
          }}
        />
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent overflow-hidden z-40 flex justify-center items-end">
        <motion.div
          id="about-text"
          initial={{ y: 0, opacity: 1, scale: 1 }}
          animate={{ y: -200, opacity: 1, scale: 0.9 }}
          transition={{ duration: 12, ease: "easeInOut" }}
          style={{
            transformOrigin: "center bottom",
            rotateX: 25,
            perspective: 800,
            fontFamily: "StarJedi",
          }}
          className="text-yellow-400 text-center max-w-2xl px-4"
        >
          <p
            style={{
              fontFamily: "StarJedi",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)", // makes yellow pop
              lineHeight: "2rem", // improves spacing
            }}
            className="text-2xl leading-snug"
          >
            A long time ago, in a codebase far, far away... <br />
            Hi! I’m a first-generation Ethiopian and a student at the University
            of Washington, graduating in June 2025 with a B.S. in Computer
            Science. I’m actively seeking new grad software engineering roles
            where I can grow, contribute, and build meaningful tech. With a
            strong foundation in software development and hands-on experience
            from two internships at TIAA, I’ve worked on impactful projects
            ranging from API optimization in Java Spring Boot to building
            AI-driven tools that saved teams over 120 hours of manual work. I’m
            passionate about creating user-focused, scalable solutions—whether
            that’s building full-stack apps, developing tools that enhance
            accessibility, or mentoring the next generation of coders. Let’s
            connect!
          </p>
        </motion.div>
      </div>

      {/* Contact & Resume Container */}
      <div className="z-50 w-full">
        {/* Mobile Layout (stacked under About text) */}
        <div className="flex flex-col items-center gap-4 md:hidden mt-8">
          <motion.div
            id="contact"
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
              opacity,
            }}
          >
            Resume
          </motion.a>
        </div>

        {/* Desktop Layout (floating fixed to bottom right) */}
        <div className="hidden md:fixed md:bottom-8 md:right-7 md:flex flex-col items-end gap-4">
          <motion.div
            id="contact"
            className="bg-white text-black p-4 rounded-2xl w-72 text-xl shadow-lg"
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
              <a
                href="mailto:abreham@uw.edu"
                className="text-blue-600  hover:text-blue-800"
              >
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
              opacity,
            }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
