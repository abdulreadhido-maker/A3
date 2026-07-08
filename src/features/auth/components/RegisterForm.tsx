import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useAuthFeature from "../hooks";



function RegisterForm(){

  const {

    signUp,

    loading

  } = useAuthFeature();



  const [name,setName] =
  useState("");

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  const [confirmPassword,setConfirmPassword] =
  useState("");



  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    await signUp({

      name,

      email,

      password,

      confirmPassword

    });

  }



  return (

    <form onSubmit={handleSubmit}>

      <InputField

        label="Full Name"

        value={name}

        onChange={(e)=>

          setName(e.target.value)

        }

      />



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



      <InputField

        label="Confirm Password"

        type="password"

        value={confirmPassword}

        onChange={(e)=>

          setConfirmPassword(e.target.value)

        }

      />



      <PrimaryButton

        type="submit"

        disabled={loading}

      >

        {

          loading

          ?

          "Creating..."

          :

          "Create Account"

        }

      </PrimaryButton>

    </form>

  );

}



export default RegisterForm;
