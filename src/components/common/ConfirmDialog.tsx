import {
  ReactNode
} from "react";

import {
  AlertTriangle
} from "lucide-react";

import {
  motion
} from "framer-motion";



interface ConfirmDialogProps {

  open:boolean;

  title:string;

  message:string;

  confirmText?:string;

  cancelText?:string;

  onConfirm:()=>void;

  onCancel:()=>void;

}



function ConfirmDialog({

open,

title,

message,

confirmText="Confirm",

cancelText="Cancel",

onConfirm,

onCancel

}:ConfirmDialogProps){



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


className="confirm-dialog glass"


>


<AlertTriangle

size={45}

className="warning-icon"

/>



<h3>

{title}

</h3>



<p>

{message}

</p>





<div className="dialog-actions">


<button

className="secondary-button"

onClick={onCancel}

>

{cancelText}

</button>



<button

className="danger-button"

onClick={onConfirm}

>

{confirmText}

</button>



</div>



</motion.div>


</div>

);


}



export default ConfirmDialog;
