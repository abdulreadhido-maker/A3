import { motion } from "framer-motion";
import {
  FolderKanban,
  CreditCard,
  Clock,
  CheckCircle,
  TrendingUp
} from "lucide-react";


const stats = [

  {
    icon:FolderKanban,

    title:"Active Projects",

    value:"12"

  },


  {
    icon:CreditCard,

    title:"Total Payments",

    value:"$8,450"

  },


  {
    icon:Clock,

    title:"Pending Tasks",

    value:"5"

  },


  {
    icon:CheckCircle,

    title:"Completed",

    value:"28"

  }

];



function Dashboard(){


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

Welcome To Torrema Dashboard

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Manage your projects, payments and account settings.

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

"repeat(auto-fit,minmax(230px,1fr))",

gap:"25px"

}}

>
  {stats.map((item,index)=>{


const Icon = item.icon;


return (


<motion.div

key={item.title}

initial={{

opacity:0,

y:30

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

padding:"30px",

borderRadius:"24px"

}}

>


<div

style={{

width:"60px",

height:"60px",

borderRadius:"18px",

background:

"linear-gradient(135deg,#3b82f6,#8b5cf6)",

display:"flex",

alignItems:"center",

justifyContent:"center",

marginBottom:"20px"

}}

>


<Icon

size={30}

color="white"

/>


</div>




<h3>

{item.value}

</h3>



<p

style={{

color:"var(--text-secondary)",

marginTop:"8px"

}}

>

{item.title}

</p>



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

y:30

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.6

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

alignItems:"center",

gap:"15px",

marginBottom:"25px"

}}

>


<TrendingUp

size={30}

color="#38bdf8"

/>



<h2>

Recent Activity

</h2>


</div>




<div

style={{

display:"flex",

flexDirection:"column",

gap:"18px"

}}

>


<div>

✅ Website project completed

<p

style={{

color:"var(--text-secondary)"

}}

>

Your landing page has been delivered successfully.

</p>

</div>



<div>

🚀 New project started

<p

style={{

color:"var(--text-secondary)"

}}

>

AI development platform is now in progress.

</p>

</div>



<div>

💳 Payment received

<p

style={{

color:"var(--text-secondary)"

}}

>

Your latest payment has been confirmed.

</p>

</div>



</div>



</motion.div>


</div>


</section>


</main>


);


}


export default Dashboard;
