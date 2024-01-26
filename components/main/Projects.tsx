import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
         
          src="/Screenshot 2024-01-26 at 10.20.59 PM.png"
          title="E-localize"
          description="E-localize, an ecommerce platform for local products. Built with React, Firebase for seamless buying and selling experiences."
        />
        <ProjectCard
          src="/250124780-af3048be-4475-45aa-8c8e-06a0880731f0.png"
          title="Gmail Clone"
          description="Gmail clone project: React, Material-UI frontend for sending, deleting, starring emails, composing, backed by Node.js, Express.js, MongoDB"
        />
        <ProjectCard
          src="/Screenshot 2024-01-26 at 10.26.00 PM.png"
          title="FimiDuniya"
          description="FilmiDuniya, a ReactJS movie app with authentication, dark mode, AI voice assistant, sorting, detailed info, and personalized features for users."
        />
      </div>
    </div>
  );
};

export default Projects;
