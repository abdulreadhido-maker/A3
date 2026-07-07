import { motion } from "framer-motion";
import {
  CreditCard,
  Download,
  CheckCircle,
  Clock
} from "lucide-react";


const invoices = [

  {
    id:"#INV-001",

    title:"Website Development",

    amount:"$1500",

    status:"Paid",

    date:"July 2026"

  },


  {
    id:"#INV-002",

    title:"AI Platform Development",

    amount:"$2500",

    status:"Pending",

    date:"July 2026"

  },


  {
    id:"#INV-003",

    title:"UI/UX Design",

    amount:"$700",

    status:"Paid",

    date:"August 2026"

  }


];



function Billing(){


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

Billing & Payments

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Manage invoices and payment history.

</p>


</motion.div>


</div>


</section>
  <section className="section">

<div className="container">


<div

style={{

display:"flex",

flexDirection:"column",

gap:"25px"

}}

>


{invoices.map((invoice,index)=>{


return (


<motion.div

key={invoice.id}

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

className="glass"

style={{

padding:"30px",

borderRadius:"24px",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

flexWrap:"wrap",

gap:"20px"

}}

>


<div

style={{

display:"flex",

alignItems:"center",

gap:"18px"

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

justifyContent:"center"

}}

>


<CreditCard

size={30}

color="white"

/>


</div>



<div>


<h3>

{invoice.title}

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

{invoice.id} • {invoice.date}

</p>


</div>


</div>





<div

style={{

display:"flex",

alignItems:"center",

gap:"20px"

}}

>


<div>

<h3>

{invoice.amount}

</h3>


<div

style={{

display:"flex",

alignItems:"center",

gap:"8px",

marginTop:"8px"

}}

>


{

invoice.status === "Paid"

?

<CheckCircle

size={18}

color="#22c55e"

/>

:

<Clock

size={18}

color="#facc15"

/>

}


<span>

{invoice.status}

</span>


</div>


</div>
