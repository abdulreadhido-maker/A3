import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera
} from "lucide-react";
import { useState } from "react";


function Profile(){


const [user,setUser] = useState({

  name:"Abdul",

  email:"user@torrema.com",

  phone:"+966 000 000 000",

  location:"Saudi Arabia"

});



function handleChange(
e:React.ChangeEvent<HTMLInputElement>
){

setUser({

...user,

[e.target.name]:e.target.value

});

}



return (

<main>


<section className="section">


<div className="container">


<motion.div

initial={{

opacity:0,

y:30

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.6

}}

>


<h1 className="text-gradient">

My Profile

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Manage your personal information.

</p>


</motion.div>


</div>


</section>



<section className="section">


<div className="container">


<motion.div

initial={{

opacity:0,

scale:.95

}}

whileInView={{

opacity:1,

scale:1

}}

transition={{

duration:.6

}}

className="glass"

style={{

maxWidth:"650px",

margin:"auto",

padding:"40px",

borderRadius:"30px"

}}

>
  <div

style={{

textAlign:"center",

marginBottom:"35px"

}}

>


<div

style={{

width:"110px",

height:"110px",

borderRadius:"50%",

margin:"auto",

background:

"linear-gradient(135deg,#3b82f6,#8b5cf6)",

display:"flex",

alignItems:"center",

justifyContent:"center",

position:"relative"

}}

>


<User

size={55}

color="white"

/>



<button

style={{

position:"absolute",

bottom:"0",

right:"0",

width:"35px",

height:"35px",

borderRadius:"50%",

border:"none",

background:"#38bdf8",

cursor:"pointer"

}}

>


<Camera

size={18}

color="white"

/>


</button>


</div>



<h2

style={{

marginTop:"20px"

}}

>

{user.name}

</h2>


</div>





<div

style={{

display:"flex",

flexDirection:"column",

gap:"20px"

}}

>


<div>

<label>

Name

</label>


<input

name="name"

value={user.name}

onChange={handleChange}

style={{

width:"100%",

padding:"15px",

borderRadius:"14px",

border:"1px solid var(--border)",

background:"transparent",

color:"var(--text)"

}}

/>


</div>




<div>

<label>

Email

</label>


<input

name="email"

value={user.email}

onChange={handleChange}

style={{

width:"100%",

padding:"15px",

borderRadius:"14px",

border:"1px solid var(--border)",

background:"transparent",

color:"var(--text)"

}}

/>


</div>
  <div>

<label>

Phone

</label>


<input

name="phone"

value={user.phone}

onChange={handleChange}

style={{

width:"100%",

padding:"15px",

borderRadius:"14px",

border:"1px solid var(--border)",

background:"transparent",

color:"var(--text)"

}}

/>


</div>





<div>

<label>

Location

</label>


<input

name="location"

value={user.location}

onChange={handleChange}

style={{

width:"100%",

padding:"15px",

borderRadius:"14px",

border:"1px solid var(--border)",

background:"transparent",

color:"var(--text)"

}}

/>


</div>




<button

className="btn-primary"

style={{

width:"100%",

justifyContent:"center",

marginTop:"10px"

}}

>

Save Changes

</button>



</div>


</motion.div>


</div>


</section>


</main>


);


}


export default Profile;
