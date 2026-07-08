import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useAuthFeature from "../hooks";



interface ResetPasswordFormProps {

  token:string;

}



function ResetPasswordForm({

  token

}:ResetPasswordFormProps){

  const {

    confirmPasswordReset,

    loading

  } = useAuthFeature();



  const [password,setPassword] =
  useState("");

  const [confirmPassword,setConfirmPassword] =
  useState("");



  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    await confirmPasswordReset({

      token,

      password,

      confirmPassword

    });

  }



  return (

    <form onSubmit={handleSubmit}>

      <InputField

        label="New Password"

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

          "Updating..."

          :

          "Reset Password"

        }

      </PrimaryButton>

    </form>

  );

}



export default ResetPasswordForm;
