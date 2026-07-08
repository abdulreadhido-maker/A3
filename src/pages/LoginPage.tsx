import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";

import useAuth from "../hooks/useAuth";



function LoginPage(){

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");



  function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    login({

      id:"1",

      name:"Demo User",

      email,

      role:"user"

    });



    navigate("/dashboard");

  }



  return (

    <MainLayout>

      <section className="login-page">

        <SectionTitle

          title="Login"

          description="Sign in to your Torrema account."

          center

        />



        <GlassCard>

          <form onSubmit={handleSubmit}>

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



            <PrimaryButton

              type="submit"

            >

              Login

            </PrimaryButton>

          </form>

        </GlassCard>

      </section>

    </MainLayout>

  );

}



export default LoginPage;
