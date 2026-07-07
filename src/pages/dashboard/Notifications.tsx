import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle,
  MessageSquare,
  CreditCard,
  Rocket,
  Trash2
} from "lucide-react";
import { useState } from "react";


const initialNotifications = [

  {
    id:1,

    icon:Rocket,

    title:"Project Started",

    message:
    "Your AI Platform project has been started.",

    time:"10 minutes ago",

    type:"success"

  },


  {
    id:2,

    icon:MessageSquare,

    title:"New Message",

    message:
    "You received a new message from Torrema team.",

    time:"1 hour ago",

    type:"message"

  },


  {
    id:3,

    icon:CreditCard,

    title:"Payment Confirmed",

    message:
    "Your payment has been successfully processed.",

    time:"Yesterday",

    type:"payment"

  },


  {
    id:4,

    icon:CheckCircle,

    title:"Task Completed",

    message:
    "Your website delivery has been completed.",

    time:"2 days ago",

    type:"success"

  }

];



function Notifications(){


const [notifications,setNotifications] =
useState(initialNotifications);



function removeNotification(id:number){

setNotifications(

notifications.filter(

item=>item.id!==id

)

);

}



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

Notifications

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Stay updated with your latest activities.

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

gap:"20px"

}}

>


{

notifications.length === 0

?

<motion.div

className="glass"

style={{

padding:"40px",

borderRadius:"25px",

textAlign:"center"

}}

>

<Bell

size={50}

color="#38bdf8"

/>


<h3

style={{

marginTop:"20px"

}}

>

No Notifications

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

You are all caught up.

</p>


</motion.div>


:


notifications.map((notification,index)=>{


const Icon = notification.icon;


return (


<motion.div

key={notification.id}

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

padding:"25px",

borderRadius:"24px",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

gap:"20px",

flexWrap:"wrap"

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

width:"55px",

height:"55px",

borderRadius:"18px",

background:

"linear-gradient(135deg,#3b82f6,#8b5cf6)",

display:"flex",

alignItems:"center",

justifyContent:"center"

}}

>


<Icon

size={28}

color="white"

/>


</div>




<div>


<h3>

{notification.title}

</h3>


<p

style={{

color:"var(--text-secondary)",

marginTop:"5px"

}}

>

{notification.message}

</p>


<span

style={{

fontSize:"13px",

color:"#38bdf8"

}}

>

{notification.time}

</span>


</div>


</div>
  <button

onClick={()=>removeNotification(notification.id)}

style={{

background:"transparent",

border:"none",

cursor:"pointer",

color:"#ef4444",

display:"flex",

alignItems:"center"

}}

>

<Trash2 size={22}/>

</button>



</motion.div>


);


})


}


</div>


</div>


</section>


</main>


);


}


export default Notifications;
