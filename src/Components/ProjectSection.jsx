import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full px-6 md:px-10 lg:px-30 my-10 flex flex-col justify-center">
        <h1 className="mt-20 text-2xl font-medium flex">Project's -</h1>

        {/* Parent needs group */}
        <div className="m-10 max-md:m-0 max-md:mt-10 mb-20 w-auto h-full flex flex-col gap-5 group">
          {projects.slice(0, 3).map((project, idx) => (
            <div
              key={idx}
              className="w-auto border rounded-2xl flex flex-row max-md:flex-col p-4 min-h-60 
                         transition duration-400 
                         group-hover:blur-[.9px] hover:blur-none hover:scale-99 "
            >
              <ProjectCard projects={project} />
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/projects")}
          className="text-white bg-primary-dull flex text-2xl m-auto max-md:px-8 max-md:my-10 text-center px-8 py-3 rounded-[10px] transition-all hover:translate-y-0.5 cursor-pointer active:scale-98"
        >
          Show More
        </button>
      </div>
    </>
  );
};

export default ProjectSection;
