import { useNavigate } from "react-router-dom";

const ProjectCard = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="w-auto  flex flex-row max-md:flex-col ">
      <div>
        <img
          className="h-full w-auto rounded-2xl"
          src={projects.thumbnail}
          alt={projects.title}
        />
      </div>
      <div className="flex flex-col mx-5 max-md:mt-6 justify-around">
        <h1 className="text-primary-dull text-xl font-medium mb-2">
          {projects.title}
        </h1>
        <p className="md:w-[50vw]">{projects.description}</p>
        <div className="flex gap-2 m-5 ">
          <button
            onClick={() => navigate(`/projects/${projects.id}`)}
            className="text-primary-dull border-1  text-center  px-4 py-2 rounded-[10px] transition-all  hover:bg-primary-dull hover:text-white hover:border-primary-dull cursor-pointer active:scale-97"
          >
            Check Out
          </button>
          <button
            onClick={() => window.open(projects.liveDemo)}
            className="text-white bg-primary-dull max-md:px-8 text-center px-5 py-2 rounded-[10px] transition-all hover:translate-y-0.5 cursor-pointer active:scale-98"
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
