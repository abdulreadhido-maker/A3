import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Palette,
  Cloud,
  ShieldCheck,
  Database,
  Settings
} from "lucide-react";


const services = [

  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern, fast and scalable websites using React, TypeScript and advanced web technologies.",

    details:[
      "Responsive websites",
      "Web applications",
      "Dashboard systems",
      "API integration"
    ]
  },


  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating powerful mobile applications with smooth performance and excellent user experience.",

    details:[
      "Android applications",
      "iOS applications",
      "Cross-platform apps",
      "Mobile optimization"
    ]
  },


  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Developing intelligent systems using artificial intelligence and automation technologies.",

    details:[
      "AI assistants",
      "Automation systems",
      "Smart analytics",
      "Machine learning solutions"
    ]
  },


  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Designing beautiful interfaces focused on usability and user experience.",

    details:[
      "User research",
      "Wireframes",
      "Prototypes",
      "Design systems"
    ]
  },


  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Deploying secure and scalable cloud infrastructure for modern applications.",

    details:[
      "Cloud deployment",
      "Server management",
      "Database setup",
      "Performance optimization"
    ]
  },


  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Protecting applications with modern security practices and secure architecture.",

    details:[
      "Authentication",
      "Data protection",
      "Security testing",
      "Access control"
    ]
  },


  {
    icon: Database,
    title: "Database Systems",
    description:
      "Creating reliable database structures for applications and businesses.",

    details:[
      "Supabase",
      "PostgreSQL",
      "Database design",
      "Data management"
    ]
  },


  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Building custom software solutions based on your business requirements.",

    details:[
      "Business systems",
      "Automation",
      "Integrations",
      "Custom platforms"
    ]
  }

];



function Services(){


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
Our Services
</h1>


<p

style={{
color:"var(--text-secondary)",
lineHeight:1.8,
marginTop:"20px"
}}

>

Complete technology solutions designed
to help businesses grow and innovate.

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


{services.map((service,index)=>{


const Icon = service.icon;


return (


<motion.div

key={service.title}

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

delay:index*.08

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

width:"70px",

height:"70px",

borderRadius:"20px",

background:

"linear-gradient(135deg,#3b82f6,#8b5cf6)",

display:"flex",

alignItems:"center",

justifyContent:"center",

marginBottom:"25px"

}}

>


<Icon

size={35}

color="white"

/>


</div>



<h3

style={{

marginBottom:"15px"

}}

>

{service.title}

</h3>



<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginBottom:"25px"

}}

>

{service.description}

</p>




<ul

style={{

padding:0,

listStyle:"none",

display:"flex",

flexDirection:"column",

gap:"12px"

}}

>


{service.details.map((detail)=>(


<li

key={detail}

style={{

display:"flex",

alignItems:"center",

gap:"10px"

}}

>


<span

style={{

width:"8px",

height:"8px",

borderRadius:"50%",

background:"#38bdf8"

}}

/>


{detail}


</li>


))}


</ul>



</motion.div>


);


})}


</div>


</div>


</section>
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

className="glass"

style={{

padding:"50px",

borderRadius:"30px",

textAlign:"center"

}}

>


<h2

className="text-gradient"

style={{

marginBottom:"20px"

}}

>

Need A Custom Technology Solution?

</h2>



<p

style={{

maxWidth:"700px",

margin:"auto",

color:"var(--text-secondary)",

lineHeight:1.8

}}

>

Our team can design and build a custom
solution specifically created for your business goals.

</p>



<a

href="/contact"

className="btn-primary"

style={{

display:"inline-flex",

marginTop:"30px"

}}

>

Start Your Project

</a>



</motion.div>


</div>


</section>



</main>

);


}


export default Services;
