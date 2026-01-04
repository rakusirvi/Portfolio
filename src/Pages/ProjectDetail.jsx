import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../assets/assets";
import Loading from "../Components/Loading";
import Project_detail from "../Components/Project_detail";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const getProject = async () => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setProject(project);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

  return project ? (
    <div className="w-full px-6 md:px-10 py-20 lg:px-30 my-10  flex flex-col  justify-center">
      <Project_detail key={project.id} project={project} />
    </div>
  ) : (
    <Loading />
  );
};

export default ProjectDetail;
