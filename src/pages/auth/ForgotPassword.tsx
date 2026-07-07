import { motion } from "framer-motion";
import {
  Mail,
  KeyRound
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


function ForgotPassword(){


const [email,setEmail] = useState("");



function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


console.log(email);


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

maxWidth:"500px",

margin:"auto",

padding:"45px",

borderRadius:"30px"

}}

>


<div

style={{

textAlign:"center",

marginBottom:"35px"

}}

>


<KeyRound

size={55}

color="#38bdf8"

style={{

marginBottom:"20px"

}}

/>



<h1 className="text-gradient">

Forgot Password?

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px",

lineHeight:1.7

}}

>

Enter your email and we will send
you a password reset link.

</p>


</div>




<form

onSubmit={handleSubmit}

>
  <div

style={{

marginBottom:"25px"

}}

>


<label>

Email

</label>



<div

style={{

position:"relative"

}}

>


<Mail

size={20}

style={{

position:"absolute",

left:"16px",

top:"50%",

transform:"translateY(-50%)"

}}

color="#38bdf8"

/>



<input

type="email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

placeholder="Enter your email"

required

style={{

width:"100%",

padding:"16px 16px 16px 50px",

borderRadius:"14px",

border:"1px solid var(--border)",

background:"transparent",

color:"var(--text)"

}}

/>


</div>


</div>





<button

type="submit"

className="btn-primary"

style={{

width:"100%",

justifyContent:"center",

marginBottom:"25px"

}}

>

Send Reset Link

</button>




<p

style={{

textAlign:"center",

color:"var(--text-secondary)"

}}

>


Remember your password?

{" "}


<Link

to="/login"

style={{

color:"#38bdf8",

fontWeight:600

}}

>

Back To Login

</Link>


</p>



</form>


</motion.div>


</div>


</section>


</main>


);


}


export default ForgotPassword;
