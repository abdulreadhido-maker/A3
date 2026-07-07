import { motion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const links = [

  {
    name:"Home",
    path:"/"
  },


  {
    name:"About",
    path:"/about"
  },


  {
    name:"Services",
    path:"/services"
  },


  {
    name:"Pricing",
    path:"/pricing"
  },


  {
    name:"Portfolio",
    path:"/portfolio"
  },


  {
    name:"Blog",
    path:"/blog"
  }

];



function Navbar(){


const [open,setOpen] = useState(false);


const [dark,setDark] = useState(true);



return (

<header

style={{

position:"fixed",

top:0,

left:0,

right:0,

zIndex:1000,

backdropFilter:"blur(15px)"

}}

>


<nav

className="glass"

style={{

margin:"15px",

padding:"15px 25px",

borderRadius:"20px",

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<Link

to="/"

className="text-gradient"

style={{

fontSize:"28px",

fontWeight:800

}}

>

Torrema

</Link>



<div

className="desktop-menu"

style={{

display:"flex",

gap:"25px"

}}

>
  {links.map((link)=>{


return (


<Link

key={link.path}

to={link.path}

style={{

color:"var(--text)",

textDecoration:"none",

fontWeight:500

}}

>

{link.name}

</Link>


);


})}



</div>




<div

style={{

display:"flex",

alignItems:"center",

gap:"15px"

}}

>


<button

onClick={()=>setDark(!dark)}

style={{

background:"transparent",

border:"none",

cursor:"pointer",

color:"var(--text)"

}}

>

{

dark

?

<Sun size={22}/>

:

<Moon size={22}/>

}


</button>





<button

style={{

background:"transparent",

border:"none",

cursor:"pointer",

color:"var(--text)"

}}

>

<Globe size={22}/>

</button>



<button

className="mobile-menu-btn"

onClick={()=>setOpen(!open)}

style={{

background:"transparent",

border:"none",

cursor:"pointer",

display:"none"

}}

>


{

open

?

<X size={25}/>

:

<Menu size={25}/>

}


</button>



</div>


</nav>
  {

open && (

<motion.div

initial={{

opacity:0,

height:0

}}

animate={{

opacity:1,

height:"auto"

}}

className="glass"

style={{

margin:"0 15px",

padding:"25px",

borderRadius:"20px",

display:"flex",

flexDirection:"column",

gap:"20px"

}}

>


{links.map((link)=>(


<Link

key={link.path}

to={link.path}

onClick={()=>setOpen(false)}

style={{

color:"var(--text)",

textDecoration:"none"

}}

>

{link.name}

</Link>


))}


</motion.div>


)


}



</header>


);


}


export default Navbar;
