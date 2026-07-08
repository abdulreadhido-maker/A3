import GlassCard from "../../../components/common/GlassCard";

import type {
  Project
} from "../types";



interface ProjectCardProps {

  project: Project;

}



function ProjectCard({

  project

}: ProjectCardProps){



  return (

    <GlassCard>

      <div className="project-card">

        {

          project.image && (

            <img

              src={project.image}

              alt={project.title}

            />

          )

        }



        <h3>

          {project.title}

        </h3>



        <p>

          {project.description}

        </p>



        <span>

          {project.status}

        </span>



      </div>

    </GlassCard>

  );

}



export default ProjectCard;
