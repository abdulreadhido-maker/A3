import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";

import useAuth from "../hooks/useAuth";



function RegisterPage(){

  const navigate = useNavigate();

  const { login } = useAuth();

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [confirmPassword,setConfirmPassword] =
  useState("");



  function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();


    if(password !== confirmPassword){

      alert("Passwords do not match.");

      return;

    }



    login({

      id:crypto.randomUUID(),

      name,

      email,

      role:"user"

    });



    navigate("/dashboard");

  }



  return (

    <MainLayout>

      <section className="register-page">

        <SectionTitle
          title="Create Account"
          description="Register a new Torrema account."
          center
        />

        <GlassCard>

          <form onSubmit={handleSubmit}>

            <InputField
              label="Full Name"
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
              label="Password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />

            <PrimaryButton type="submit">

              Create Account

            </PrimaryButton>

          </form>

        </GlassCard>

      </section>

    </MainLayout>

  );

}



export default RegisterPage;
