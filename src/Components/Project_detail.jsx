import React from "react";

const Project_detail = ({ project }) => {
  return (
    <div className="w-full px-6 md:px-10 lg:px-20 my-5 flex flex-col items-center gap-8">
      <h2 className="text-3xl  text-primary-dull">{project.title}</h2>
      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <img
          className="w-full md:w-1/3 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          src={project.img1}
          alt={project.title}
        />
        {project.img2 && (
          <img
            className="w-full md:w-1/3 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            src={project.img2}
            alt={project.title}
          />
        )}
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Description */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull text-2xl font-semibold mb-2">
            Description
          </h2>
          <p className="text-gray-800">{project.detailDescription} </p>
        </div>

        {/* Timeline */}
        <div className="bg-white h-fit p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull  text-2xl font-semibold mb-2">
            Timeline
          </h2>
          <div className="flex items-center gap-2">
            <span className={`h-5 w-7 rounded-full ${project.projectTimeline.toLowerCase() === "pending" ? ' bg-red-600':'bg-yellow-300'}`}></span>
            <span className="text-gray-700">{project.projectTimeline}</span>
          </div>
        </div>

        {/* Learnings */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull text-2xl font-semibold mb-2">
            Learnings & Challenges
          </h2>
          <p className="text-gray-700">{project.learning}</p>
        </div>

        {/* Future Enhancements */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull text-2xl font-semibold mb-2">
            Future Enhancements
          </h2>
          <p className="text-gray-700">{project.futureEnhancement} </p>
        </div>

        {/* Purpose */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull text-2xl font-semibold mb-2">
            Purpose & Motivation
          </h2>
          <p className="text-gray-700">{project.purpose}</p>
        </div>

        {/* Tech Stack */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull text-2xl font-semibold mb-2">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.techStack.map((tech) => (
              <li key={project.id}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Collaborative Member */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-primary-dull text-2xl font-semibold mb-2">
            Collaborative Member
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.collaborativeMember.map((tech) => (
              <li key={project.id}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project_detail;
