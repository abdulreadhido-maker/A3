import {
  ReactNode
} from "react";

import {
  motion
} from "framer-motion";



interface AuthLayoutProps {

  children: ReactNode;

}



function AuthLayout({

children

}: AuthLayoutProps){



return (

<div className="auth-layout">





<motion.div


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:.6

}}


className="auth-container glass"


>



<div className="auth-logo">


<h1 className="text-gradient">

Torrema

</h1>



<p>

Build your future with smart technology.

</p>


</div>





<div className="auth-content">


{children}


</div>





</motion.div>





</div>

);


}



export default AuthLayout;
