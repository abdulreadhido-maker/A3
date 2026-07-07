import {
  ReactNode
} from "react";

import {
  motion
} from "framer-motion";



interface GlassCardProps {

  children: ReactNode;

  className?: string;

}



function GlassCard({

children,

className=""

}:GlassCardProps){



return (

<motion.div


initial={{

opacity:0,

y:20

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

duration:.5

}}


viewport={{

once:true

}}


className={`glass-card ${className}`}


>


{children}


</motion.div>

);


}



export default GlassCard;
