import {
  motion
} from "framer-motion";



interface SectionTitleProps {

  title:string;

  description?:string;

  center?:boolean;

}



function SectionTitle({

title,

description,

center=false

}:SectionTitleProps){



return (

<motion.div


initial={{

opacity:0,

y:25

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


className={

center

?

"section-title center"

:

"section-title"

}


>


<h2 className="text-gradient">

{title}

</h2>




{

description && (

<p>

{description}

</p>

)

}



</motion.div>

);


}



export default SectionTitle;
