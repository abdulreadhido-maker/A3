import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import { useState } from "react";


const contactInfo = [

  {
    icon: Mail,
    title: "Email",
    value: "contact@torrema.com"
  },

  {
    icon: Phone,
    title: "Phone",
    value: "+966 000 000 000"
  },

  {
    icon: MapPin,
    title: "Location",
    value: "Saudi Arabia"
  }

];



function Contact() {


  const [form, setForm] = useState({

    name:"",
    email:"",
    message:""

  });



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ){

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  }



  function handleSubmit(
    e: React.FormEvent
  ){

    e.preventDefault();

    console.log(form);

  }



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

            Contact Torrema

          </h2>


          <p

            style={{

              maxWidth:"700px",

              margin:"20px auto",

              color:"var(--text-secondary)",

              lineHeight:1.8

            }}

          >

            Have a project idea?
            Send us a message and our team will contact you.

          </p>


        </motion.div>



        <div

          style={{

            display:"grid",

            gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",

            gap:"40px"

          }}

        >
                    {/* Contact Information */}

          <motion.div

            initial={{
              opacity:0,
              x:-40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.6
            }}

          >

            <div

              style={{

                display:"flex",

                flexDirection:"column",

                gap:"20px"

              }}

            >

              {contactInfo.map((item)=>(

                <div

                  key={item.title}

                  className="glass"

                  style={{

                    padding:"25px",

                    borderRadius:"22px",

                    display:"flex",

                    alignItems:"center",

                    gap:"18px"

                  }}

                >

                  <div

                    style={{

                      width:"55px",

                      height:"55px",

                      borderRadius:"16px",

                      background:

                      "linear-gradient(135deg,#3b82f6,#8b5cf6)",

                      display:"flex",

                      alignItems:"center",

                      justifyContent:"center"

                    }}

                  >

                    <item.icon

                      size={26}

                      color="white"

                    />

                  </div>



                  <div>

                    <h4>

                      {item.title}

                    </h4>


                    <p

                      style={{

                        color:"var(--text-secondary)",

                        marginTop:"5px"

                      }}

                    >

                      {item.value}

                    </p>


                  </div>


                </div>

              ))}


            </div>


          </motion.div>





          {/* Form */}

          <motion.form

            initial={{

              opacity:0,

              x:40

            }}

            whileInView={{

              opacity:1,

              x:0

            }}

            transition={{

              duration:.6

            }}

            onSubmit={handleSubmit}

            className="glass"

            style={{

              padding:"35px",

              borderRadius:"26px"

            }}

          >
            <input

              name="name"

              value={form.name}

              onChange={handleChange}

              placeholder="Your Name"

              style={{
                width:"100%",
                padding:"16px",
                marginBottom:"18px",
                borderRadius:"14px",
                border:"1px solid var(--border)",
                background:"transparent",
                color:"var(--text)"
              }}

              required

            />



            <input

              name="email"

              type="email"

              value={form.email}

              onChange={handleChange}

              placeholder="Your Email"

              style={{
                width:"100%",
                padding:"16px",
                marginBottom:"18px",
                borderRadius:"14px",
                border:"1px solid var(--border)",
                background:"transparent",
                color:"var(--text)"
              }}

              required

            />



            <textarea

              name="message"

              value={form.message}

              onChange={handleChange}

              placeholder="Your Message"

              rows={6}

              style={{
                width:"100%",
                padding:"16px",
                marginBottom:"25px",
                borderRadius:"14px",
                border:"1px solid var(--border)",
                background:"transparent",
                color:"var(--text)",
                resize:"none"
              }}

              required

            />



            <button

              type="submit"

              className="btn-primary"

              style={{
                width:"100%",
                justifyContent:"center"
              }}

            >

              Send Message

              <Send

                size={18}

                style={{
                  marginLeft:"8px"
                }}

              />

            </button>


          </motion.form>


        </div>


      </div>


    </section>

  );

}


export default Contact;
