import { motion } from "framer-motion";
import {
  Lock,
  Eye,
  EyeOff,
  RefreshCcw
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


function ResetPassword(){


const [showPassword,setShowPassword] = useState(false);


const [form,setForm] = useState({

  password:"",
  confirmPassword:""

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

maxWidth:"520px",

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


<RefreshCcw

size={55}

color="#38bdf8"

style={{

marginBottom:"20px"

}}

/>



<h1 className="text-gradient">

Reset Password

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Create a new secure password for your account.

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

New Password

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

"text"

:

"password"

}

name="password"

value={form.password}

onChange={handleChange}

placeholder="Enter new password"

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





<div

style={{

marginBottom:"25px"

}}

>


<label>

Confirm Password

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

type="password"

name="confirmPassword"

value={form.confirmPassword}

onChange={handleChange}

placeholder="Confirm password"

required

style={{

width:"100%",

padding:"16px",

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

Update Password

</button>




<p

style={{

textAlign:"center",

color:"var(--text-secondary)"

}}

>


Back to

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



</form>


</motion.div>


</div>


</section>


</main>


);


}


export default ResetPassword;
