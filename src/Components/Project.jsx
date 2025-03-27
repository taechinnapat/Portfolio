import React from 'react';
import portfolio from '../assets/Portfolio.jpg';
import project from "../assets/project.jpg";
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/taechinnapat/Portfolio",
  },
  {
    id: 2,
    title: "Web Project",
    image: project,
    github: "https://github.com/taechinnapat/Web_Project",
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white text-center py-16 px-6" id="projects">
      <h2 className="text-3xl font-bold mb-10">My Projects</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
          >
            <img
              src={project.image}
              
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
