import React from "react";
import { tech } from "../assets/assets";

const ToolAndTech = () => {
  return (
    <div
      id="TT"
      className="w-full pt-20 flex  flex flex-col px-6 md:px-10 lg:px-30 py-5"
    >
      <h1 className=" my-10 font-medium text-2xl">Tool's & Tech</h1>
      <div className="bg-white  w-full rounded-2xl p-3 flex flex-row  flex-wrap justify-around">
        <div className="text-black font-medium text-xl flex">
          <ul className="p-4">
            <h1 className="font-semibold text-primary ">Languages</h1>
            {tech.Language.map((item, idx) => (
              <li key={idx} className="m-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-black font-medium text-xl flex ">
          <ul className="p-4">
            <h1 className="font-semibold text-primary ">Languages</h1>
            {tech.frameWork.map((item, idx) => (
              <li className="m-2">{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-black font-medium text-xl flex">
          <ul className="p-4">
            <h1 className="font-semibold text-primary ">Languages</h1>
            {tech.developerTool.map((item, idx) => (
              <li className="m-2">{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-black font-medium text-xl flex">
          <ul className="p-4">
            <h1 className="font-semibold text-primary ">Languages</h1>
            {tech.backend.map((item, idx) => (
              <li className="m-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolAndTech;
