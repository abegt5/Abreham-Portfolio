import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MyBuild",
    description:
      "A mobile app for car enthusiasts to share builds, find parts, and discover local events. Built with React Native, Firebase, and Cloudinary.",
    imageSrc: "/src/assets/MyBuild.png",
    githubUrl: "https://github.com/abegt5/MyBuild",
  },
  {
    title: "FormFlowAI",
    description:
      "An AI-powered web app for document translation and summarization. Features TTS, text zooming, and multilingual support.",
    imageSrc: "/src/assets/FormFlowAI.png",
    githubUrl: "https://github.com/yourusername/formflowai",
  },
];

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black via-black/70 to-transparent py-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
