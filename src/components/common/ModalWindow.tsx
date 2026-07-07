import {
  ReactNode
} from "react";

import {
  X
} from "lucide-react";

import {
  motion
} from "framer-motion";



interface ModalWindowProps {

  open:boolean;

  onClose:()=>void;

  title:string;

  children:ReactNode;

}



function ModalWindow({

open,

onClose,

title,

children

}:ModalWindowProps){



if(!open) return null;



return (

<div className="modal-overlay">


<motion.div


initial={{

opacity:0,

scale:.9

}}


animate={{

opacity:1,

scale:1

}}


transition={{

duration:.3

}}


className="modal-window glass"


>



<div className="modal-header">


<h3>

{title}

</h3>



<button

onClick={onClose}

className="icon-button"

aria-label="Close"

>

<X size={22}/>

</button>


</div>





<div className="modal-content">


{children}


</div>




</motion.div>


</div>

);


}



export default ModalWindow;
