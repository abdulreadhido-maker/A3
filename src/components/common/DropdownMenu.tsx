import {
  ReactNode,
  useState
} from "react";

import {
  ChevronDown
} from "lucide-react";

import {
  motion
} from "framer-motion";



interface DropdownItem {

  label:string;

  icon?:ReactNode;

  onClick?:()=>void;

}



interface DropdownMenuProps {

  title:string;

  items:DropdownItem[];

}





function DropdownMenu({

title,

items

}:DropdownMenuProps){



const [open,setOpen] =
useState(false);





return (

<div className="dropdown-wrapper">



<button

className="dropdown-button"

onClick={()=>setOpen(!open)}

>


{title}


<ChevronDown

size={18}

/>


</button>







{

open && (


<motion.div


initial={{

opacity:0,

y:-10

}}


animate={{

opacity:1,

y:0

}}


className="dropdown-menu glass"


>



{

items.map((item,index)=>(


<button

key={index}

className="dropdown-item"

onClick={()=>{

item.onClick?.();

setOpen(false);

}}


>


{

item.icon

}


<span>

{item.label}

</span>


</button>


))


}



</motion.div>


)


}



</div>

);


}



export default DropdownMenu;
