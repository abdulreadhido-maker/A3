import { useState } from "react";

import {
  login,
  register,
  forgotPassword,
  resetPassword,
  logout
} from "./services";

import type {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest
} from "./types";



function useAuthFeature(){

  const [loading,setLoading] =
  useState(false);

  const [error,setError] =
  useState<string | null>(null);



  async function signIn(

    data:LoginRequest

  ){

    setLoading(true);
    setError(null);

    try{

      return await login(data);

    }catch(err:any){

      setError(err.message);

      throw err;

    }finally{

      setLoading(false);

    }

  }





  async function signUp(

    data:RegisterRequest

  ){

    setLoading(true);
    setError(null);

    try{

      return await register(data);

    }catch(err:any){

      setError(err.message);

      throw err;

    }finally{

      setLoading(false);

    }

  }





  async function requestPasswordReset(

    data:ForgotPasswordRequest

  ){

    return forgotPassword(data);

  }





  async function confirmPasswordReset(

    data:ResetPasswordRequest

  ){

    return resetPassword(data);

  }





  async function signOut(){

    return logout();

  }





  return {

    loading,

    error,

    signIn,

    signUp,

    requestPasswordReset,

    confirmPasswordReset,

    signOut

  };

}



export default useAuthFeature;
