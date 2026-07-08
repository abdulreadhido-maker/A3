import { Link } from "react-router-dom";

import GlassCard from "../../../components/common/GlassCard";



const actions = [

  {

    id:1,

    title:"Create Project",

    path:"/dashboard/projects"

  },

  {

    id:2,

    title:"Browse Courses",

    path:"/courses"

  },

  {

    id:3,

    title:"Manage Profile",

    path:"/dashboard/profile"

  },

  {

    id:4,

    title:"Settings",

    path:"/dashboard/settings"

  }

];



function QuickActions(){

  return (

    <GlassCard>

      <h2>

        Quick Actions

      </h2>



      <div className="quick-actions">

        {

          actions.map((action)=>(

            <Link

              key={action.id}

              to={action.path}

            >

              {action.title}

            </Link>

          ))

        }

      </div>

    </GlassCard>

  );

}



export default QuickActions;
