import { motion } from "framer-motion";
import {
  MailCheck,
  RefreshCcw
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


function VerifyEmail(){


const [loading,setLoading] = useState(false);



function resendEmail(){


setLoading(true);


setTimeout(()=>{

setLoading(false);

},1500);


}




return (

<main>


<section className="section">


<div className="container">


<motion.div

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.7

}}

className="glass"

style={{

maxWidth:"520px",

margin:"auto",

padding:"45px",

borderRadius:"30px",

textAlign:"center"

}}

>


<MailCheck

size={70}

color="#38bdf8"

style={{

marginBottom:"25px"

}}

/>



<h1 className="text-gradient">

Verify Your Email

</h1>



<p

style={{

color:"var(--text-secondary)",

lineHeight:1.8,

marginTop:"20px"

}}

>

We sent a verification link to your email address.
Please check your inbox and confirm your account.

</p>
  <button

onClick={resendEmail}

className="btn-primary"

style={{

width:"100%",

justifyContent:"center",

marginTop:"30px",

display:"flex",

alignItems:"center",

gap:"10px"

}}

>


<RefreshCcw

size={18}

style={{

animation:

loading

?

"spin 1s linear infinite"

:

"none"

}}

/>


{

loading

?

"Sending..."

:

"Resend Verification Email"

}


</button>




<p

style={{

marginTop:"25px",

color:"var(--text-secondary)"

}}

>


Already verified?


{" "}


<Link

to="/login"

style={{

color:"#38bdf8",

fontWeight:600

}}

>

Login

</Link>


</p>



</motion.div>


</div>


</section>


</main>


);


}


export default VerifyEmail;
