import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code2,
  Globe,
  Smartphone
} from "lucide-react";


const projects = [

  {
    icon: Code2,

    title:"AI Development Platform",

    category:"Web Application",

    description:
    "A modern AI-powered platform designed to automate business processes and improve productivity.",

    tech:[

      "React",

      "TypeScript",

      "AI",

      "Supabase"

    ]

  },


  {
    icon: Globe,

    title:"E-Commerce System",

    category:"Online Store",

    description:
    "A complete shopping platform with products, payments and customer management.",

    tech:[

      "React",

      "Stripe",

      "Database",

      "Cloud"

    ]

  },


  {
    icon: Smartphone,

    title:"Mobile Application",

    category:"Mobile App",

    description:
    "A high-performance mobile application with a clean interface and smooth experience.",

    tech:[

      "React Native",

      "API",

      "Authentication"

    ]

  },


  {
    icon: Code2,

    title:"Business Management System",

    category:"Software",

    description:
    "Custom software solution helping companies manage their operations.",

    tech:[

      "Backend",

      "Security",

      "Database"

    ]

  }

];



function Portfolio(){


return (

<main>


<section className="section">


<div className="container">


<motion.div

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.7

}}

style={{

textAlign:"center",

maxWidth:"800px",

margin:"auto"

}}

>


<h1 className="text-gradient">

Our Portfolio

</h1>



<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginTop:"20px"

}}

>

Explore our previous projects,
digital products and software solutions.

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


const Icon = project.icon;


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

y:-10

}}


className="glass"


style={{

padding:"35px",

borderRadius:"26px"

}}


>


<div

style={{

height:"180px",

borderRadius:"20px",

background:

"linear-gradient(135deg,#1e293b,#334155)",

display:"flex",

alignItems:"center",

justifyContent:"center",

marginBottom:"25px"

}}

>


<Icon

size={70}

color="#38bdf8"

/>


</div>




<span

style={{

color:"#60a5fa",

fontSize:"14px"

}}

>

{project.category}

</span>




<h3

style={{

margin:"12px 0"

}}

>

{project.title}

</h3>




<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginBottom:"20px"

}}

>

{project.description}

</p>




<div

style={{

display:"flex",

flexWrap:"wrap",

gap:"10px",

marginBottom:"25px"

}}

>


{project.tech.map((item)=>(


<span

key={item}

style={{

padding:"6px 12px",

borderRadius:"999px",

background:

"rgba(59,130,246,.15)",

fontSize:"13px"

}}

>

{item}

</span>


))}


</div>
  <div

style={{

display:"flex",

gap:"20px"

}}

>


<a

href="#"

style={{

display:"flex",

alignItems:"center",

gap:"8px",

color:"#38bdf8"

}}

>

Live Demo

<ExternalLink size={17}/>

</a>



<a

href="#"

style={{

display:"flex",

alignItems:"center",

gap:"8px",

color:"var(--text-secondary)"

}}

>

Source Code

<Github size={17}/>

</a>


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


export default Portfolio;
