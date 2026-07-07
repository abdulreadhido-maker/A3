import { motion } from "framer-motion";
import {
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";


const orders = [

  {
    id:"#TR-1001",

    service:"Website Development",

    status:"Completed",

    price:"$1500",

    date:"July 5, 2026"

  },


  {
    id:"#TR-1002",

    service:"AI Assistant",

    status:"Processing",

    price:"$2500",

    date:"July 10, 2026"

  },


  {
    id:"#TR-1003",

    service:"UI/UX Design",

    status:"Pending",

    price:"$700",

    date:"July 15, 2026"

  }


];



function Orders(){


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

My Orders

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

View your purchased services and order status.

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


{orders.map((order,index)=>{


return (


<motion.div

key={order.id}

initial={{

opacity:0,

x:-30

}}

whileInView={{

opacity:1,

x:0

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


<ShoppingBag

size={30}

color="white"

/>


</div>



<div>

<h3>

{order.service}

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

{order.id} • {order.date}

</p>


</div>


</div>





<div

style={{

textAlign:"right"

}}

>


<h3>

{order.price}

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

order.status === "Completed"

?

<CheckCircle

size={18}

color="#22c55e"

/>

:

order.status === "Processing"

?

<Clock

size={18}

color="#facc15"

/>

:

<XCircle

size={18}

color="#ef4444"

/>

}



<span>

{order.status}

</span>


</div>


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


export default Orders;
