import { motion } from "framer-motion";
import {
  FolderKanban,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";


const projects = [

  {
    title:"Torrema Website",

    status:"Completed",

    progress:100,

    date:"July 2026"

  },


  {
    title:"AI Assistant Platform",

    status:"In Progress",

    progress:65,

    date:"July 2026"

  },


  {
    title:"E-Commerce System",

    status:"Pending",

    progress:25,

    date:"August 2026"

  }

];



function Projects(){


return (

<main>


<section className="section">


<div className="container">


<motion.div

initial={{

opacity:0,

y:30

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.6

}}

>

<h1 className="text-gradient">

My Projects

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Track your projects progress and updates.

</p>


</motion.div>


</div>


</section>
  <section className="section">

<div className="container">


<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(300px,1fr))",

gap:"30px"

}}

>


{projects.map((project,index)=>{


return (


<motion.div

key={project.title}

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.5,

delay:index*.1

}}

whileHover={{

y:-8

}}

className="glass"

style={{

padding:"35px",

borderRadius:"26px"

}}

>


<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

marginBottom:"25px"

}}

>


<FolderKanban

size={35}

color="#38bdf8"

/>



{

project.status === "Completed"

?

<CheckCircle

size={25}

color="#22c55e"

/>

:

<Clock

size={25}

color="#facc15"

/>

}


</div>



<h3>

{project.title}

</h3>



<p

style={{

color:"var(--text-secondary)",

marginTop:"10px"

}}

>

{project.date}

</p>



<div

style={{

marginTop:"25px"

}}

>


<div

style={{

display:"flex",

justifyContent:"space-between",

marginBottom:"10px"

}}

>

<span>

Progress

</span>


<span>

{project.progress}%

</span>


</div>


<div

style={{

height:"10px",

background:"rgba(255,255,255,.1)",

borderRadius:"20px",

overflow:"hidden"

}}

>


<div

style={{

width:`${project.progress}%`,

height:"100%",

background:

"linear-gradient(90deg,#38bdf8,#8b5cf6)"

}}

/>


</div>


</div>
  <div

style={{

marginTop:"25px"

}}

>


<Link

to="/dashboard/projects"

style={{

display:"inline-flex",

alignItems:"center",

gap:"8px",

color:"#38bdf8",

fontWeight:600

}}

>

View Details

<ArrowRight size={18}/>

</Link>


</div>



</motion.div>


);


})}


</div>


</div>


</section>


</main>


);


}


export default Projects;
