import React from "react";
import { projects } from "../assets/assets";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full px-6 py-10  md:px-10 lg:px-30 my-10  flex   justify-center">
      <div className="my-10 ">
        <div className="m-10 w-auto text-4xl font-medium  text-center">
          My Projects
        </div>
        <div className=" m-10 max-md:m-0 max-md:mt-10 mb-20 w-auto  h-full flex flex-col gap-5 ">
          {projects.map((project, idx) => (
            <div className="w-auto  border rounded-2xl flex flex-row max-md:flex-col p-4 min-h-60  hover:scale-99">
              {" "}
              <ProjectCard key={idx} projects={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
