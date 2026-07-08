import GlassCard from "../../../components/common/GlassCard";

import useDashboard from "../hooks";



function RecentProjects(){

  const {

    activities,

    loading

  } = useDashboard();



  if(loading){

    return <p>Loading...</p>;

  }



  const projects = activities.filter(

    (activity)=>

      activity.type === "project"

  );



  return (

    <GlassCard>

      <h2>

        Recent Projects

      </h2>



      {

        projects.length === 0

        ?

        (

          <p>

            No recent projects found.

          </p>

        )

        :

        (

          <ul>

            {

              projects.map((project)=>(

                <li key={project.id}>

                  <strong>

                    {project.title}

                  </strong>



                  <p>

                    {project.description}

                  </p>

                </li>

              ))

            }

          </ul>

        )

      }

    </GlassCard>

  );

}



export default RecentProjects;
