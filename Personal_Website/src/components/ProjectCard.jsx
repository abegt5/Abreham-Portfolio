import { motion } from "framer-motion";

// Typewriter effect component
function Typewriter({ text, speed }) {
  const letters = text.split("");
  return (
    <span>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * (speed / 1000) }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// Main reusable project card component
export default function ProjectCard({
  title,
  description,
  imageSrc,
  githubUrl,
}) {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className=" w-5/6 flex justify-center mb-6 hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-5/6 bg-white rounded-xl shadow-lg p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-57 h-57 rounded-xl object-cover shadow-md"
        />

        {/* Details */}
        <div className="w-full md:w-1/2">
          <motion.h3
            className="text-3xl font-thin mb-4 text-black"
            style={{ fontFamily: "Courier New, monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typewriter text={title} speed={50} />
          </motion.h3>

          <p
            className="text-black font-light leading-relaxed"
            style={{ fontFamily: "Courier New, monospace" }}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
