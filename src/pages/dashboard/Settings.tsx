import { motion } from "framer-motion";
import {
  Settings as SettingsIcon,
  Moon,
  Globe,
  Bell,
  Shield,
  Save
} from "lucide-react";
import { useState } from "react";


function Settings(){


const [settings,setSettings] = useState({

  darkMode:true,

  language:"English",

  notifications:true,

  security:true

});



function toggleSetting(
key:keyof typeof settings
){

setSettings({

...settings,

[key]:!settings[key]

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

Account Settings

</h1>



<p

style={{

color:"var(--text-secondary)",

marginTop:"15px"

}}

>

Customize your Torrema experience.

</p>


</motion.div>


</div>


</section>





<section className="section">


<div className="container">


<motion.div

className="glass"

style={{

maxWidth:"700px",

margin:"auto",

padding:"40px",

borderRadius:"30px"

}}

>
  <div

style={{

display:"flex",

flexDirection:"column",

gap:"25px"

}}

>


<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<div

style={{

display:"flex",

alignItems:"center",

gap:"15px"

}}

>


<Moon

size={25}

color="#38bdf8"

/>



<div>

<h3>

Dark Mode

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

Enable dark interface

</p>


</div>


</div>



<button

onClick={()=>toggleSetting("darkMode")}

style={{

width:"55px",

height:"30px",

borderRadius:"20px",

border:"none",

cursor:"pointer",

background:

settings.darkMode

?

"#38bdf8"

:

"#475569"

}}

>


<div

style={{

width:"22px",

height:"22px",

borderRadius:"50%",

background:"white",

transform:

settings.darkMode

?

"translateX(28px)"

:

"translateX(3px)",

transition:".3s"

}}

/>


</button>


</div>





<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<div

style={{

display:"flex",

alignItems:"center",

gap:"15px"

}}

>


<Globe

size={25}

color="#38bdf8"

/>



<div>

<h3>

Language

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

Change website language

</p>


</div>


</div>
  <select

value={settings.language}

onChange={(e)=>

setSettings({

...settings,

language:e.target.value

})

}

style={{

padding:"10px",

borderRadius:"12px",

background:"transparent",

color:"var(--text)",

border:"1px solid var(--border)"

}}

>

<option>

English

</option>


<option>

Arabic

</option>


</select>


</div>





<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<div

style={{

display:"flex",

alignItems:"center",

gap:"15px"

}}

>


<Bell

size={25}

color="#38bdf8"

/>



<div>

<h3>

Notifications

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

Receive project updates

</p>


</div>


</div>



<button

onClick={()=>toggleSetting("notifications")}

className="btn-primary"

>

{

settings.notifications

?

"Enabled"

:

"Disabled"

}


</button>


</div>





<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<div

style={{

display:"flex",

alignItems:"center",

gap:"15px"

}}

>


<Shield

size={25}

color="#38bdf8"

/>



<div>

<h3>

Security

</h3>


<p

style={{

color:"var(--text-secondary)"

}}

>

Extra account protection

</p>


</div>


</div>


<button

onClick={()=>toggleSetting("security")}

className="btn-primary"

>

{

settings.security

?

"Active"

:

"Off"

}


</button>


</div>




<button

className="btn-primary"

style={{

marginTop:"15px",

justifyContent:"center"

}}

>

<Save size={18}/>

Save Settings

</button>



</div>


</motion.div>


</div>


</section>


</main>


);


}


export default Settings;
