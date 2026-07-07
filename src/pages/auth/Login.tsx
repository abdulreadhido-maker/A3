import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Login(){


const [showPassword,setShowPassword] = useState(false);


const [form,setForm] = useState({

  email:"",
  password:""

});



function handleChange(
e:React.ChangeEvent<HTMLInputElement>
){

setForm({

...form,

[e.target.name]:e.target.value

});

}




function handleSubmit(
e:React.FormEvent
){

e.preventDefault();


console.log(form);


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


<LogIn

size={55}

color="#38bdf8"

style={{

marginBottom:"20px"

}}

/>



<h1 className="text-gradient">

Welcome Back

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Login to your Torrema account

</p>


</div>



<form

onSubmit={handleSubmit}

>
  <div

style={{

marginBottom:"20px"

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

name="email"

value={form.email}

onChange={handleChange}

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





<div

style={{

marginBottom:"25px"

}}

>


<label>

Password

</label>



<div

style={{

position:"relative"

}}

>


<Lock

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

type={

showPassword

?

" text"

:

"password"

}

name="password"

value={form.password}

onChange={handleChange}

placeholder="Enter your password"

required

style={{

width:"100%",

padding:"16px 50px",

borderRadius:"14px",

border:"1px solid var(--border)",

background:"transparent",

color:"var(--text)"

}}

/>



<button

type="button"

onClick={()=>setShowPassword(!showPassword)}

style={{

position:"absolute",

right:"15px",

top:"50%",

transform:"translateY(-50%)",

background:"none",

border:"none",

cursor:"pointer"

}}

>


{

showPassword

?

<EyeOff size={20}/>

:

<Eye size={20}/>

}


</button>



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

Login

</button>




<div

style={{

textAlign:"center",

color:"var(--text-secondary)"

}}

>


<p>

Don't have an account?

{" "}

<Link

to="/register"

style={{

color:"#38bdf8",

fontWeight:600

}}

>

Create Account

</Link>


</p>



<p

style={{

marginTop:"15px"

}}

>


<Link

to="/forgot-password"

style={{

color:"#38bdf8"

}}

>

Forgot Password?

</Link>


</p>


</div>



</form>


</motion.div>


</div>


</section>


</main>


);


}


export default Login;
