import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Rocket,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";


const plans = [

  {
    icon: Rocket,
    name: "Starter",
    price: "$499",
    description:
      "Perfect for small businesses and personal projects.",

    features: [
      "Professional Landing Page",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support"
    ],

    popular: false
  },


  {
    icon: Sparkles,
    name: "Professional",
    price: "$1499",
    description:
      "Complete solution for growing businesses.",

    features: [
      "Multi-page Website",
      "Advanced UI/UX Design",
      "Database Integration",
      "Authentication System",
      "3 Months Support"
    ],

    popular: true
  },


  {
    icon: Crown,
    name: "Enterprise",
    price: "Custom",
    description:
      "Advanced solutions for large companies.",

    features: [
      "Custom Software",
      "AI Integration",
      "Cloud Architecture",
      "Advanced Security",
      "Dedicated Support"
    ],

    popular: false
  }

];


function Pricing() {


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
            Pricing Plans
          </h2>


          <p

            style={{
              maxWidth:"700px",
              margin:"20px auto",
              color:"var(--text-secondary)",
              lineHeight:1.8
            }}

          >

            Flexible plans designed for startups,
            businesses and enterprise projects.

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
                    {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (

              <motion.div

                key={plan.name}

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
                  position:"relative",
                  padding:"40px",
                  borderRadius:"28px",
                  border:
                  plan.popular
                  ?
                  "1px solid #3b82f6"
                  :
                  "1px solid var(--border)"
                }}

              >


                {plan.popular && (

                  <div

                    style={{
                      position:"absolute",
                      top:"20px",
                      right:"20px",
                      background:
                      "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                      padding:"7px 16px",
                      borderRadius:"999px",
                      fontSize:"13px",
                      fontWeight:600
                    }}

                  >

                    Popular

                  </div>

                )}




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
                    size={35}
                    color="white"
                  />

                </div>





                <h3
                  style={{
                    marginBottom:"10px"
                  }}
                >
                  {plan.name}
                </h3>



                <h2

                  className="text-gradient"

                  style={{
                    fontSize:"45px",
                    marginBottom:"15px"
                  }}

                >

                  {plan.price}

                </h2>



                <p

                  style={{
                    color:"var(--text-secondary)",
                    lineHeight:1.7,
                    marginBottom:"30px"
                  }}

                >

                  {plan.description}

                </p>





                <div

                  style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"16px",
                    marginBottom:"35px"
                  }}

                >

                  {plan.features.map((feature)=>(

                    <div

                      key={feature}

                      style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"10px"
                      }}

                    >

                      <Check
                        size={20}
                        color="#22c55e"
                      />

                      <span>
                        {feature}
                      </span>

                    </div>

                  ))}


                </div>
                <Link

                  to="/contact"

                  className={
                    plan.popular
                    ? "btn-primary"
                    : "btn-secondary"
                  }

                  style={{
                    width:"100%",
                    justifyContent:"center"
                  }}

                >

                  Choose Plan

                </Link>


              </motion.div>

            );

          })}

        </div>



        {/* Extra Note */}

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

          <p

            style={{
              color:"var(--text-muted)"
            }}

          >

            Need something different?
            Contact us for a custom quotation.

          </p>


        </motion.div>



      </div>

    </section>

  );

}


export default Pricing;
