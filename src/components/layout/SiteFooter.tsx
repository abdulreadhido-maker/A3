import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUp
} from "lucide-react";
import { Link } from "react-router-dom";


const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About",
        path: "/about"
      },
      {
        name: "Services",
        path: "/services"
      },
      {
        name: "Portfolio",
        path: "/portfolio"
      },
      {
        name: "Blog",
        path: "/blog"
      }
    ]
  },


  {
    title: "Support",
    links: [
      {
        name: "Contact",
        path: "/contact"
      },
      {
        name: "Help Center",
        path: "/help"
      },
      {
        name: "Privacy",
        path: "/privacy"
      },
      {
        name: "Terms",
        path: "/terms"
      }
    ]
  }
];



function SiteFooter(){


function scrollTop(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}



return (

<footer className="site-footer">


<div className="footer-container">



{/* Brand */}


<div className="footer-brand">


<h2 className="text-gradient">

Torrema

</h2>



<p>

Building modern software solutions,
AI systems and digital experiences.

</p>



<div className="social-links">


<a
href="#"
aria-label="Github"
>

<Github size={20}/>

</a>


<a
href="#"
aria-label="Twitter"
>

<Twitter size={20}/>

</a>


<a
href="#"
aria-label="Linkedin"
>

<Linkedin size={20}/>

</a>


<a
href="#"
aria-label="Email"
>

<Mail size={20}/>

</a>


</div>


</div>





{/* Links */}


{

footerLinks.map((section)=>(


<div
key={section.title}
className="footer-column"
>


<h3>

{section.title}

</h3>


{

section.links.map((item)=>(


<Link

key={item.path}

to={item.path}

>

{item.name}

</Link>


))

}


</div>


))

}





{/* Back To Top */}


<button

className="top-button"

onClick={scrollTop}

aria-label="Back to top"

>

<ArrowUp size={20}/>

</button>



</div>





<div className="footer-bottom">


<p>

© {new Date().getFullYear()} Torrema.
All rights reserved.

</p>


</div>


</footer>


);


}



export default SiteFooter;
