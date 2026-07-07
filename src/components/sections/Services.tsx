import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  BrainCircuit,
  CloudCog,
  Settings,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";


const services = [

  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, secure and scalable websites using modern technologies like React, TypeScript and Next.js.",
    tags: [
      "React",
      "TypeScript",
      "Next.js"
    ]
  },


  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Creating modern user interfaces with excellent experiences, clean designs and responsive layouts.",
    tags: [
      "Figma",
      "Design System",
      "Prototype"
    ]
  },


  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing powerful mobile applications with smooth performance and beautiful interfaces.",
    tags: [
      "Android",
      "iOS",
      "Cross Platform"
    ]
  },


  {
    icon: BrainCircuit,
    title: "AI Development",
    description:
      "Integrating artificial intelligence solutions, automation and smart business tools.",
    tags: [
      "AI",
      "Automation",
      "Machine Learning"
    ]
  },


  {
    icon: CloudCog,
    title: "Cloud Solutions",
    description:
      "Deploying reliable cloud systems with scalable infrastructure and secure environments.",
    tags: [
      "Cloud",
      "Database",
      "API"
    ]
  },


  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Designing custom software solutions built around your specific business requirements.",
    tags: [
      "Enterprise",
      "Systems",
      "Integration"
    ]
  }

];


function Services() {

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
            style={{
              marginBottom:"20px"
            }}
          >
            Our Services
          </h2>


          <p
            style={{
              maxWidth:"700px",
              margin:"auto",
              color:"var(--text-secondary)",
              lineHeight:1.8
            }}
          >
            Complete digital solutions to help companies
            build, launch and scale their technology products.
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
                    {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div

                key={service.title}

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
                  y:-12
                }}

                className="glass"

                style={{
                  padding:"35px",
                  borderRadius:"26px",
                  position:"relative",
                  overflow:"hidden"
                }}

              >


                {/* Icon */}

                <div

                  style={{
                    width:"70px",
                    height:"70px",
                    borderRadius:"20px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    marginBottom:"25px",
                    background:
                    "linear-gradient(135deg,#3b82f6,#8b5cf6)"
                  }}

                >

                  <Icon
                    size={34}
                    color="white"
                  />

                </div>



                <h3
                  style={{
                    marginBottom:"15px"
                  }}
                >
                  {service.title}
                </h3>



                <p

                  style={{
                    color:"var(--text-secondary)",
                    lineHeight:1.8,
                    marginBottom:"25px"
                  }}

                >
                  {service.description}
                </p>




                {/* Tags */}

                <div

                  style={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"10px",
                    marginBottom:"25px"
                  }}

                >

                  {service.tags.map((tag)=>(

                    <span

                      key={tag}

                      style={{
                        padding:"6px 14px",
                        borderRadius:"999px",
                        background:
                        "rgba(59,130,246,.15)",
                        color:"#60a5fa",
                        fontSize:"14px"
                      }}

                    >

                      {tag}

                    </span>

                  ))}


                </div>




                <Link

                  to="/contact"

                  style={{
                    display:"inline-flex",
                    alignItems:"center",
                    gap:"8px",
                    color:"#38bdf8",
                    fontWeight:600
                  }}

                >

                  Learn More

                  <ArrowRight
                    size={18}
                  />

                </Link>



              </motion.div>

            );

          })}
        </div>


        {/* Bottom Section */}

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
            marginTop:"90px",
            textAlign:"center"
          }}

        >

          <div

            className="glass"

            style={{
              padding:"45px",
              borderRadius:"28px",
              maxWidth:"900px",
              margin:"auto"
            }}

          >

            <h2
              style={{
                marginBottom:"18px"
              }}
            >
              Need A Custom Solution?
            </h2>


            <p

              style={{
                maxWidth:"650px",
                margin:"0 auto 30px",
                color:"var(--text-secondary)",
                lineHeight:1.8
              }}

            >
              Every business has unique needs.
              Our team builds custom digital solutions
              designed specifically for your goals.
            </p>



            <Link

              to="/contact"

              className="btn-primary"

            >

              Contact Torrema

              <ArrowRight
                size={18}
                style={{
                  marginLeft:"8px"
                }}
              />

            </Link>


          </div>


        </motion.div>



      </div>

    </section>

  );

}


export default Services;
