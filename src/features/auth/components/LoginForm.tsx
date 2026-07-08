import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useAuthFeature from "../hooks";



function LoginForm(){

  const {

    signIn,

    loading

  } = useAuthFeature();



  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");



  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();

    await signIn({

      email,

      password

    });

  }



  return (

    <form onSubmit={handleSubmit}>

      <InputField

        label="Email"

        type="email"

        value={email}

        onChange={(e)=>

          setEmail(e.target.value)

        }

      />



      <InputField

        label="Password"

        type="password"

        value={password}

        onChange={(e)=>

          setPassword(e.target.value)

        }

      />



      <PrimaryButton

        type="submit"

        disabled={loading}

      >

        {

          loading

          ?

          "Signing In..."

          :

          "Sign In"

        }

      </PrimaryButton>

    </form>

  );

}



export default LoginForm;
