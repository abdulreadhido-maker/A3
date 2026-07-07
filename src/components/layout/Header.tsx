import { motion } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe
} from "lucide-react";
import {
  useState,
  useEffect
} from "react";
import {
  Link,
  useLocation
} from "react-router-dom";


interface LinkItem {
  name: string;
  path: string;
}


const links: LinkItem[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "Pricing",
    path: "/pricing"
  },
  {
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    name: "Blog",
    path: "/blog"
  }
];



function Header() {


  const location = useLocation();


  const [open, setOpen] =
    useState(false);



  const [dark, setDark] =
    useState<boolean>(() => {

      if(typeof window === "undefined")
        return true;


      return (
        localStorage.getItem("theme")
        !==
        "light"
      );

    });





  useEffect(()=>{


    if(dark){

      document.documentElement.classList.add(
        "dark"
      );


      localStorage.setItem(
        "theme",
        "dark"
      );


    }else{


      document.documentElement.classList.remove(
        "dark"
      );


      localStorage.setItem(
        "theme",
        "light"
      );


    }


  },[dark]);





  useEffect(()=>{

    setOpen(false);

  },[location]);







  return (

    <header className="header">


      <nav className="header-container glass">


        {/* Logo */}

        <Link
          to="/"
          className="logo text-gradient"
        >

          Torrema

        </Link>





        {/* Navigation */}

        <div className="nav-links">


          {
            links.map((link)=>(

              <Link

                key={link.path}

                to={link.path}

                className="nav-item"

              >

                {link.name}

              </Link>

            ))
          }


        </div>






        {/* Actions */}

        <div className="header-actions">



          <button

            className="icon-button"

            onClick={()=>
              setDark(!dark)
            }

            aria-label="Theme"

          >

            {

              dark

              ?

              <Sun size={22}/>

              :

              <Moon size={22}/>

            }


          </button>






          <button

            className="icon-button"

            aria-label="Language"

          >

            <Globe size={22}/>


          </button>






          <button

            className="icon-button mobile-button"

            onClick={()=>
              setOpen(!open)
            }

            aria-label="Menu"

          >

            {

              open

              ?

              <X size={25}/>

              :

              <Menu size={25}/>

            }


          </button>



        </div>


      </nav>







      {
        open && (


          <motion.div

            className="mobile-menu glass"


            initial={{
              opacity:0,
              y:-20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:.3
            }}

          >


            {

              links.map((link)=>(


                <Link

                  key={link.path}

                  to={link.path}

                  className="nav-item"

                >

                  {link.name}


                </Link>


              ))

            }


          </motion.div>


        )
      }



    </header>

  );

}



export default Header;
