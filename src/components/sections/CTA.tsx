import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";


function CTA() {


  return (

    <section
      className="section"
    >

      <div className="container">


        <motion.div

          initial={{
            opacity:0,
            y:50
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

            position:"relative",

            overflow:"hidden",

            padding:"70px 40px",

            borderRadius:"35px",

            textAlign:"center"

          }}

        >


          {/* Background Glow */}

          <div

            style={{

              position:"absolute",

              width:"350px",

              height:"350px",

              borderRadius:"50%",

              background:
              "rgba(59,130,246,.2)",

              filter:"blur(120px)",

              top:"-150px",

              left:"50%",

              transform:"translateX(-50%)"

            }}

          />



          <div
            style={{
              position:"relative"
            }}
          >

            <Rocket

              size={55}

              color="#38bdf8"

              style={{
                marginBottom:"25px"
              }}

            />


            <h2

              className="text-gradient"

              style={{
                marginBottom:"20px"
              }}

            >

              Ready To Build Something Amazing?

            </h2>



            <p

              style={{

                maxWidth:"700px",

                margin:"0 auto 35px",

                color:"var(--text-secondary)",

                lineHeight:1.8

              }}

            >

              Turn your idea into a powerful digital product
              with Torrema's expert development team.

            </p>

            <div

              style={{

                display:"flex",

                justifyContent:"center",

                flexWrap:"wrap",

                gap:"18px"

              }}

            >


              <Link

                to="/contact"

                className="btn-primary"

              >

                Start Your Project

                <ArrowRight

                  size={18}

                  style={{
                    marginLeft:"8px"
                  }}

                />

              </Link>



              <Link

                to="/services"

                className="btn-secondary"

              >

                <MessageCircle

                  size={18}

                  style={{
                    marginRight:"8px"
                  }}

                />

                Explore Services

              </Link>


            </div>


          </div>


        </motion.div>


      </div>


    </section>

  );

}


export default CTA;
