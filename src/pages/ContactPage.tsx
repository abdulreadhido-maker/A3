import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";



function ContactPage(){

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [subject,setSubject] = useState("");

  const [message,setMessage] = useState("");



  function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();

    console.log({

      name,

      email,

      subject,

      message

    });

  }



  return (

    <MainLayout>

      <section className="contact-page">

        <SectionTitle

          title="Contact Us"

          description="Send us a message and we'll get back to you."

          center

        />



        <GlassCard>

          <form onSubmit={handleSubmit}>

            <InputField

              label="Name"

              value={name}

              onChange={(e)=>setName(e.target.value)}

            />



            <InputField

              label="Email"

              type="email"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

            />



            <InputField

              label="Subject"

              value={subject}

              onChange={(e)=>setSubject(e.target.value)}

            />



            <label>

              Message

            </label>



            <textarea

              value={message}

              onChange={(e)=>setMessage(e.target.value)}

              rows={6}

            />



            <PrimaryButton

              type="submit"

            >

              Send Message

            </PrimaryButton>

          </form>

        </GlassCard>

      </section>

    </MainLayout>

  );

}



export default ContactPage;
