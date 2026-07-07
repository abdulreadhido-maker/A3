import { motion } from "framer-motion";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  Code2,
  Rocket
} from "lucide-react";


const values = [

  {
    icon: Target,
    title: "Our Mission",
    description:
      "Building powerful digital solutions that help businesses grow and succeed in the modern technology world."
  },


  {
    icon: Users,
    title: "Expert Team",
    description:
      "A team of developers, designers and technology specialists working together to create high-quality products."
  },


  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Using modern technologies and creative ideas to solve complex business challenges."
  },


  {
    icon: Award,
    title: "Quality",
    description:
      "Delivering reliable, secure and scalable solutions with attention to every detail."
  }

];



function About() {


  return (

    <main>


      {/* Hero */}

      <section
        className="section"
      >

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

            style={{
              textAlign:"center",
              maxWidth:"850px",
              margin:"auto"
            }}

          >

            <Code2

              size={60}

              color="#38bdf8"

              style={{
                marginBottom:"25px"
              }}

            />


            <h1
              className="text-gradient"
              style={{
                marginBottom:"25px"
              }}
            >

              About Torrema

            </h1>


            <p

              style={{
                color:"var(--text-secondary)",
                lineHeight:1.9,
                fontSize:"18px"
              }}

            >

              Torrema is a software development platform
              focused on creating modern websites,
              applications, AI solutions and digital
              products for businesses and startups.

            </p>


          </motion.div>


        </div>

      </section>
      {/* Values Section */}

      <section
        className="section"
      >

        <div className="container">


          <div

            style={{

              display:"grid",

              gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",

              gap:"30px"

            }}

          >

            {values.map((item,index)=>{

              const Icon = item.icon;


              return (

                <motion.div

                  key={item.title}

                  initial={{

                    opacity:0,

                    y:40

                  }}

                  whileInView={{

                    opacity:1,

                    y:0

                  }}

                  transition={{

                    duration:.5,

                    delay:index*.1

                  }}

                  whileHover={{

                    y:-10

                  }}

                  className="glass"

                  style={{

                    padding:"35px",

                    borderRadius:"26px"

                  }}

                >

                  <div

                    style={{

                      width:"70px",

                      height:"70px",

                      borderRadius:"20px",

                      background:

                      "linear-gradient(135deg,#3b82f6,#8b5cf6)",

                      display:"flex",

                      alignItems:"center",

                      justifyContent:"center",

                      marginBottom:"25px"

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

                    {item.title}

                  </h3>



                  <p

                    style={{

                      color:"var(--text-secondary)",

                      lineHeight:1.8

                    }}

                  >

                    {item.description}

                  </p>


                </motion.div>


              );

            })}


          </div>


        </div>

      </section>





      {/* Vision Section */}

      <section

        className="section"

      >

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

              padding:"50px",

              borderRadius:"30px",

              textAlign:"center"

            }}

          >

            <Rocket

              size={50}

              color="#38bdf8"

              style={{

                marginBottom:"20px"

              }}

            />


            <h2

              className="text-gradient"

            >

              Our Vision

            </h2>


            <p

              style={{

                maxWidth:"750px",

                margin:"20px auto 0",

                color:"var(--text-secondary)",

                lineHeight:1.9

              }}

            >

              We aim to become a trusted technology partner
              by creating innovative solutions that connect
              ideas with real-world results.

            </p>


          </motion.div>


        </div>

      </section>
          </main>

  );

}


export default About;
