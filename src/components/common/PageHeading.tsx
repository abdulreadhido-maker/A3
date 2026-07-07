import {
  motion
} from "framer-motion";



interface PageHeadingProps {

  title:string;

  description?:string;

}



function PageHeading({

title,

description

}:PageHeadingProps){



return (

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

duration:.5

}}


className="page-heading"


>



<h1 className="text-gradient">

{title}

</h1>




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



export default PageHeading;
