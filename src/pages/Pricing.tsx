import { motion } from "framer-motion";
import {
  Check,
  Rocket,
  Sparkles,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";


const pricingPlans = [

  {
    icon: Rocket,

    name:"Starter",

    price:"$499",

    description:
    "Perfect for individuals and small projects.",

    features:[

      "Landing Page",

      "Responsive Design",

      "Basic SEO",

      "Contact Form",

      "Basic Support"

    ]

  },


  {
    icon: Sparkles,

    name:"Professional",

    price:"$1499",

    description:
    "Complete solution for growing businesses.",

    features:[

      "Multi Page Website",

      "Advanced UI/UX",

      "Database Integration",

      "Authentication",

      "Premium Support"

    ],

    popular:true

  },


  {
    icon:Crown,

    name:"Enterprise",

    price:"Custom",

    description:
    "Advanced systems for large organizations.",

    features:[

      "Custom Software",

      "AI Integration",

      "Cloud Systems",

      "Advanced Security",

      "Dedicated Team"

    ]

  }


];



function Pricing(){


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

Pricing Plans

</h1>



<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginTop:"20px"

}}

>

Choose the right plan for your
digital project with Torrema.

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


{pricingPlans.map((plan,index)=>{


const Icon = plan.icon;


return (


<motion.div


key={plan.name}


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

y:-12

}}


className="glass"


style={{

padding:"40px",

borderRadius:"28px",

position:"relative",

border:

plan.popular

?

"1px solid #38bdf8"

:

"1px solid var(--border)"

}}


>


{plan.popular && (


<div

style={{

position:"absolute",

top:"20px",

right:"20px",

padding:"7px 15px",

borderRadius:"999px",

background:

"linear-gradient(135deg,#3b82f6,#8b5cf6)",

fontSize:"13px"

}}

>

Most Popular

</div>


)}



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




<h3>

{plan.name}

</h3>




<h2

className="text-gradient"

style={{

fontSize:"45px",

margin:"15px 0"

}}

>

{plan.price}

</h2>




<p

style={{

color:"var(--text-secondary)",

lineHeight:1.7,

marginBottom:"25px"

}}

>

{plan.description}

</p>
<ul

style={{

listStyle:"none",

padding:0,

display:"flex",

flexDirection:"column",

gap:"15px",

marginBottom:"35px"

}}

>


{plan.features.map((feature)=>(


<li

key={feature}

style={{

display:"flex",

alignItems:"center",

gap:"10px"

}}

>


<Check

size={20}

color="#22c55e"

/>


{feature}


</li>


))}


</ul>



<Link

to="/contact"

className="btn-primary"

style={{

width:"100%",

justifyContent:"center"

}}

>

Choose Plan

</Link>



</motion.div>


);


})}


</div>


</div>


</section>



</main>


);


}


export default Pricing;
