import {
  motion
} from "framer-motion";



function LoadingScreen(){



return (

<div className="loading-screen">


<motion.div

initial={{

scale:0.8,

opacity:0

}}


animate={{

scale:1,

opacity:1

}}


transition={{

duration:.6

}}


className="loading-content"


>



<h1 className="text-gradient">

Torrema

</h1>



<p>

Loading digital experience...

</p>




<div className="loading-bar">


<motion.div

initial={{

width:0

}}


animate={{

width:"100%"

}}


transition={{

duration:2.5

}}


className="loading-progress"

/>


</div>



</motion.div>


</div>

);


}



export default LoadingScreen;
