import { motion } from "framer-motion";


function AppLoader(){


return (

<div className="app-loader">


<motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.5
}}

className="loader-content"

>


<h1 className="text-gradient">

Torrema

</h1>



<p>

Initializing experience...

</p>



<div className="loader-track">


<motion.div

className="loader-progress"

initial={{
width:0
}}

animate={{
width:"100%"
}}

transition={{
duration:2
}}


/>


</div>


</motion.div>


</div>

);


}


export default AppLoader;
