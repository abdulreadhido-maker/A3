import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";


const articles = [

  {
    title:
    "How To Build Modern Web Applications",

    description:
    "Learn the latest technologies and practices used to create fast and scalable web applications.",

    author:
    "Torrema Team",

    date:
    "July 2026",

    category:
    "Development"

  },


  {
    title:
    "The Future Of Artificial Intelligence",

    description:
    "Discover how AI technologies are changing businesses and creating new opportunities.",

    author:
    "Torrema AI",

    date:
    "July 2026",

    category:
    "Artificial Intelligence"

  },


  {
    title:
    "Why UI/UX Design Matters",

    description:
    "A great user experience can improve engagement, usability and business growth.",

    author:
    "Design Team",

    date:
    "July 2026",

    category:
    "Design"

  },


  {
    title:
    "Cloud Systems For Modern Companies",

    description:
    "Understanding cloud infrastructure and why businesses are moving to scalable solutions.",

    author:
    "Torrema Cloud",

    date:
    "July 2026",

    category:
    "Cloud"

  }

];



function Blog(){


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

Torrema Blog

</h1>



<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginTop:"20px"

}}

>

Latest articles, tutorials and technology insights.

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


{articles.map((article,index)=>(


<motion.article


key={article.title}


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

height:"160px",

borderRadius:"20px",

background:

"linear-gradient(135deg,#1e293b,#334155)",

display:"flex",

alignItems:"center",

justifyContent:"center",

marginBottom:"25px"

}}

>


<span

style={{

fontSize:"45px"

}}

>

📝

</span>


</div>




<span

style={{

color:"#38bdf8",

fontSize:"14px"

}}

>

{article.category}

</span>




<h3

style={{

margin:"15px 0"

}}

>

{article.title}

</h3>




<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginBottom:"25px"

}}

>

{article.description}

</p>




<div

style={{

display:"flex",

flexDirection:"column",

gap:"10px",

color:"var(--text-secondary)",

fontSize:"14px"

}}

>


<div

style={{

display:"flex",

alignItems:"center",

gap:"8px"

}}

>

<User size={16}/>

{article.author}

</div>



<div

style={{

display:"flex",

alignItems:"center",

gap:"8px"

}}

>

<Calendar size={16}/>

{article.date}

</div>


</div>
  <div

style={{

marginTop:"25px"

}}

>


<Link

to="#"

style={{

display:"inline-flex",

alignItems:"center",

gap:"8px",

color:"#38bdf8",

fontWeight:600

}}

>

Read Article

<ArrowRight size={18}/>

</Link>


</div>



</motion.article>


))}


</div>


</div>


</section>


</main>


);


}


export default Blog;
