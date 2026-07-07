import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown
} from "lucide-react";


const questions = [

  {
    question:
      "What services does Torrema provide?",

    answer:
      "Torrema provides web development, mobile applications, AI solutions, UI/UX design, cloud systems and custom software development."
  },


  {
    question:
      "Which technologies do you use?",

    answer:
      "We use modern technologies including React, TypeScript, Next.js, Supabase, cloud platforms and secure API systems."
  },


  {
    question:
      "Can you build custom software for companies?",

    answer:
      "Yes. We create custom software solutions based on each company's requirements, workflow and business goals."
  },


  {
    question:
      "Do you provide maintenance and support?",

    answer:
      "Yes. We offer continuous support, updates, security improvements and technical maintenance."
  },


  {
    question:
      "How long does a project take?",

    answer:
      "Project duration depends on complexity. Small websites may take weeks, while larger systems require more time."
  },


  {
    question:
      "Do you integrate payment systems?",

    answer:
      "Yes. We can integrate payment solutions such as Stripe and other secure payment providers."
  }

];



function FAQ() {


  const [open, setOpen] = useState<number | null>(null);



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
            marginBottom:"60px"
          }}

        >

          <h2
            className="text-gradient"
          >

            Frequently Asked Questions

          </h2>


          <p

            style={{
              maxWidth:"700px",
              margin:"20px auto",
              color:"var(--text-secondary)",
              lineHeight:1.8
            }}

          >

            Find answers to common questions
            about our services and process.

          </p>


        </motion.div>



        <div

          style={{
            maxWidth:"850px",
            margin:"auto",
            display:"flex",
            flexDirection:"column",
            gap:"18px"
          }}

        >
                    {questions.map((item, index) => (

            <motion.div

              key={item.question}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.4,
                delay:index * .08
              }}

              className="glass"

              style={{
                borderRadius:"20px",
                overflow:"hidden"
              }}

            >

              <button

                onClick={() =>
                  setOpen(
                    open === index
                    ? null
                    : index
                  )
                }

                style={{
                  width:"100%",
                  padding:"25px",
                  background:"transparent",
                  border:"none",
                  color:"var(--text)",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-between",
                  cursor:"pointer",
                  textAlign:"left"
                }}

              >

                <span

                  style={{
                    fontSize:"18px",
                    fontWeight:600
                  }}

                >

                  {item.question}

                </span>



                <ChevronDown

                  size={22}

                  style={{

                    transform:
                    open === index
                    ? "rotate(180deg)"
                    : "rotate(0deg)",

                    transition:".3s"

                  }}

                />


              </button>




              <motion.div

                initial={false}

                animate={{

                  height:
                  open === index
                  ? "auto"
                  : 0,

                  opacity:
                  open === index
                  ? 1
                  : 0

                }}

                style={{
                  overflow:"hidden"
                }}

              >

                <p

                  style={{
                    padding:"0 25px 25px",
                    color:"var(--text-secondary)",
                    lineHeight:1.8
                  }}

                >

                  {item.answer}

                </p>


              </motion.div>


            </motion.div>


          ))}
        </div>


        {/* Bottom CTA */}

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

          <div

            className="glass"

            style={{
              padding:"35px",
              borderRadius:"24px"
            }}

          >

            <h3

              style={{
                marginBottom:"15px"
              }}

            >

              Still Have Questions?

            </h3>



            <p

              style={{
                color:"var(--text-secondary)",
                marginBottom:"25px"
              }}

            >

              Our team is ready to help you with
              your next digital project.

            </p>



            <a

              href="/contact"

              className="btn-primary"

            >

              Contact Us

            </a>


          </div>


        </motion.div>



      </div>

    </section>

  );

}


export default FAQ;
