import React from "react";
import ProjectCard from "./ProjectCard";
import { Certification } from "../assets/assets";

const Achievements = () => {
  return (
    <div className="w-full px-6 md:p-10 lg:px-30 my-10  flex flex-col  justify-center">
      <h1 className=" mt-10 font-medium text-2xl">
        Acehivments & Participation
      </h1>
      <div className=" m-10 max-md:m-0 max-md:mt-10 mb-20 w-auto  h-full flex flex-col gap-5 ">
        {Certification.map((project, idx) => (
          <div
            key={idx}
            className="w-auto  border rounded-2xl flex flex-row max-md:flex-col p-4 min-h-60  hover:scale-99"
          >
            <ProjectCard key={idx} projects={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
