import React from "react";
import { FolderIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "Mini-game website project",
    description:
      "A website where users can play educational and fun mini-games.",
    url: "https://github.com/NgaMae/Mini-games-project",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my development projects.",
    url: "https://github.com/NgaMae/portfolio",
  },
  {
    title: "Tuk-Tuk Taxi Service App",
    description:
      "mobile-based project to book Tuk-Tuk(3-wheeled vehicles) in pyay.",
    url: "https://github.com/NgaMae/TukTuk-Admin-Page",
  },
  {
    title: "Obby (backend)",
    description:
      "API endpoints for website and mobile app of The Tuk-Tuk Project.",
    url: "https://github.com/NgaMae/Obby",
  },
  {
    title: "Easy UCSP",
    description: "Voting website for 2024 welcome ceremony of UCSP.",
    url: "https://github.com/NgaMae/easy-ucspyay",
  },
  {
    title: "Adaptive Learning platform",
    description: "Ai-powered leaning platform with teacher/student ui",
    url: "https://github.com/NgaMae/adaptive_learning_platform",
  },
];

const SeeMyProjects = () => {
  return (
    <section id="projects" className="pt-24 max-w-7xl mx-auto px-6">
      <p className="text-center text-gray-500 uppercase tracking-widest">
        My Work
      </p>
      <h2 className="text-center text-4xl font-bold mt-2 mb-8">
        See My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
          >
            <div className="flex justify-center mb-4">
              <a href={project.url} target="_blank">
                <FolderIcon className="h-12 w-12 text-indigo-500" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {project.title}
            </h3>
            <p className="text-gray-600 flex-grow">{project.description}</p>
            {/* Optional: Add a link button if needed */}
            {/* <a href="#" className="mt-4 text-indigo-600 hover:underline">View Project</a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeeMyProjects;
