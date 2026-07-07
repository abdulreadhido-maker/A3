import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  Globe,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";


const projects = [

  {
    title: "AI Business Platform",
    category: "Artificial Intelligence",
    description:
      "An intelligent platform using AI automation tools and smart business solutions.",

    icon: Layers,

    technologies: [
      "React",
      "TypeScript",
      "AI",
      "Supabase"
    ]
  },


  {
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "Modern online store with payment integration, dashboard and product management.",

    icon: Globe,

    technologies: [
      "React",
      "Stripe",
      "Database",
      "Cloud"
    ]
  },


  {
    title: "Mobile Application",
    category: "Mobile Development",
    description:
      "High performance mobile application with smooth user experience.",

    icon: Smartphone,

    technologies: [
      "React Native",
      "API",
      "Authentication"
    ]
  },


  {
    title: "Enterprise System",
    category: "Software",
    description:
      "Custom management system built for business operations.",

    icon: Layers,

    technologies: [
      "Backend",
      "Security",
      "Cloud"
    ]
  }


];



function Portfolio() {


  return (

    <section
      className="section"
    >

      <div className="container">


        {/* Header */}

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

          style={{
            textAlign:"center",
            marginBottom:"70px"
          }}

        >

          <h2
            className="text-gradient"
          >
            Our Portfolio
          </h2>


          <p

            style={{
              maxWidth:"700px",
              margin:"20px auto",
              color:"var(--text-secondary)",
              lineHeight:1.8
            }}

          >

            Explore some of the digital products,
            websites and software solutions created by Torrema.

          </p>


        </motion.div>



        <div

          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
            gap:"30px"
          }}

        >
                    {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <motion.div

                key={project.title}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:.5,
                  delay:index * .1
                }}

                whileHover={{
                  y:-10
                }}

                className="glass"

                style={{
                  borderRadius:"26px",
                  padding:"35px",
                  overflow:"hidden"
                }}

              >


                {/* Project Image Placeholder */}

                <div

                  style={{
                    height:"180px",
                    borderRadius:"20px",
                    marginBottom:"25px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    background:
                    "linear-gradient(135deg,#1e293b,#334155)"
                  }}

                >

                  <Icon
                    size={70}
                    color="#38bdf8"
                  />

                </div>





                <span

                  style={{
                    color:"#60a5fa",
                    fontSize:"14px",
                    fontWeight:600
                  }}

                >

                  {project.category}

                </span>




                <h3

                  style={{
                    marginTop:"12px",
                    marginBottom:"15px"
                  }}

                >

                  {project.title}

                </h3>





                <p

                  style={{
                    color:"var(--text-secondary)",
                    lineHeight:1.8,
                    marginBottom:"25px"
                  }}

                >

                  {project.description}

                </p>





                {/* Technologies */}

                <div

                  style={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"10px",
                    marginBottom:"25px"
                  }}

                >

                  {project.technologies.map((tech)=>(

                    <span

                      key={tech}

                      style={{
                        padding:"6px 13px",
                        borderRadius:"999px",
                        background:
                        "rgba(139,92,246,.15)",
                        color:"#c4b5fd",
                        fontSize:"13px"
                      }}

                    >

                      {tech}

                    </span>

                  ))}


                </div>





                {/* Buttons */}

                <div

                  style={{
                    display:"flex",
                    gap:"15px"
                  }}

                >

                  <a

                    href="#"

                    style={{
                      display:"flex",
                      alignItems:"center",
                      gap:"8px",
                      color:"#38bdf8"
                    }}

                  >

                    Live Demo

                    <ExternalLink
                      size={17}
                    />

                  </a>



                  <a

                    href="#"

                    style={{
                      display:"flex",
                      alignItems:"center",
                      gap:"8px",
                      color:"var(--text-secondary)"
                    }}

                  >

                    Code

                    <Github
                      size={17}
                    />

                  </a>


                </div>


              </motion.div>

            );

          })}
        </div>


        {/* View More */}

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
            duration:.7
          }}

          style={{
            marginTop:"70px",
            textAlign:"center"
          }}

        >

          <Link

            to="/portfolio"

            className="btn-primary"

          >

            View All Projects

          </Link>


        </motion.div>



      </div>

    </section>

  );

}


export default Portfolio;
