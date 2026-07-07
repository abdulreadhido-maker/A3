import { motion } from "framer-motion";
import {
  Star,
  Quote
} from "lucide-react";


const testimonials = [

  {
    name: "Ahmed Khalid",
    role: "Startup Founder",
    message:
      "Torrema transformed our idea into a powerful digital product. The quality and speed were amazing.",
    rating: 5
  },


  {
    name: "Sarah Mohammed",
    role: "Business Owner",
    message:
      "Professional team, modern design and excellent communication throughout the project.",
    rating: 5
  },


  {
    name: "Omar Ali",
    role: "Software Manager",
    message:
      "The system they built improved our workflow and helped our company grow.",
    rating: 5
  },


  {
    name: "Lina Hassan",
    role: "Product Designer",
    message:
      "Great UI/UX experience with clean code and attention to every detail.",
    rating: 5
  }

];



function Testimonials() {


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
            Client Testimonials
          </h2>


          <p

            style={{
              maxWidth:"700px",
              margin:"20px auto",
              color:"var(--text-secondary)",
              lineHeight:1.8
            }}

          >

            What our clients say about working
            with Torrema.

          </p>


        </motion.div>



        <div

          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
            gap:"30px"
          }}

        >
                    {testimonials.map((item, index) => (

            <motion.div

              key={item.name}

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
                padding:"35px",
                borderRadius:"26px",
                position:"relative"
              }}

            >


              {/* Quote Icon */}

              <Quote

                size={45}

                style={{
                  opacity:.25,
                  marginBottom:"20px"
                }}

                color="#38bdf8"

              />



              <p

                style={{
                  color:"var(--text-secondary)",
                  lineHeight:1.8,
                  marginBottom:"25px"
                }}

              >

                {item.message}

              </p>




              {/* Rating */}

              <div

                style={{
                  display:"flex",
                  gap:"5px",
                  marginBottom:"25px"
                }}

              >

                {Array.from({
                  length:item.rating
                }).map((_,i)=>(

                  <Star

                    key={i}

                    size={18}

                    fill="#facc15"

                    color="#facc15"

                  />

                ))}

              </div>





              {/* Client */}

              <div

                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"15px"
                }}

              >

                <div

                  style={{
                    width:"50px",
                    height:"50px",
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    background:
                    "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                    fontWeight:700
                  }}

                >

                  {item.name.charAt(0)}

                </div>




                <div>

                  <h4>

                    {item.name}

                  </h4>


                  <span

                    style={{
                      color:"var(--text-secondary)",
                      fontSize:"14px"
                    }}

                  >

                    {item.role}

                  </span>


                </div>


              </div>



            </motion.div>


          ))}
        </div>


        {/* Trust Banner */}

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
            marginTop:"80px"
          }}

        >

          <div

            className="glass"

            style={{
              padding:"35px",
              borderRadius:"24px",
              textAlign:"center"
            }}

          >

            <h3

              style={{
                marginBottom:"15px"
              }}

            >

              Trusted By Businesses Worldwide

            </h3>



            <p

              style={{
                color:"var(--text-secondary)",
                lineHeight:1.8
              }}

            >

              We focus on quality, security and long-term
              partnerships to deliver successful digital solutions.

            </p>


          </div>


        </motion.div>



      </div>

    </section>

  );

}


export default Testimonials;
