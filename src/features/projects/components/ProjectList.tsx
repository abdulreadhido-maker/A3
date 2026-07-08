import ProjectCard from "./ProjectCard";

import useProjects from "../hooks";



function ProjectList(){

  const {

    projects,

    loading,

    error

  } = useProjects();



  if(loading){

    return (

      <p>

        Loading projects...

      </p>

    );

  }



  if(error){

    return (

      <p>

        {error}

      </p>

    );

  }



  return (

    <div className="projects-grid">

      {

        projects.map((project)=>(

          <ProjectCard

            key={project.id}

            project={project}

          />

        ))

      }

    </div>

  );

}



export default ProjectList;
