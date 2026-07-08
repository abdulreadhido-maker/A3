import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useAuthFeature from "../hooks";



function ForgotPasswordForm(){

  const {

    requestPasswordReset,

    loading

  } = useAuthFeature();



  const [email,setEmail] =
  useState("");



  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    await requestPasswordReset({

      email

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



      <PrimaryButton

        type="submit"

        disabled={loading}

      >

        {

          loading

          ?

          "Sending..."

          :

          "Send Reset Link"

        }

      </PrimaryButton>

    </form>

  );

}



export default ForgotPasswordForm;
