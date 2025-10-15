import ProjectCard from "./ProjectCard";
import FormFlow from "../assets/FormFlowAI.png";
import MyBuild from "../assets/MyBuild.png";
const projects = [
  {
    title: "MyBuild",
    description:
      "A mobile app for car enthusiasts to share builds, find parts, and discover local events. Built with React Native, Firebase, and Cloudinary.",
    imageSrc: MyBuild,
    githubUrl: "https://github.com/abegt5/MyBuild",
  },
  {
    title: "FormFlowAI",
    description:
      "An AI-powered web app for document translation and summarization. Features TTS, text zooming, and multilingual support.",
    imageSrc: FormFlow,
    githubUrl: "https://github.com/yourusername/formflowai",
  },
];

export default function ProjectsSection() {
  return (
    <div id="projects" className="bg-gradient-to-b from-black to-white py-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
