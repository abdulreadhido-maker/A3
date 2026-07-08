import apiRequest from "../../services/api";

import type {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AuthResponse
} from "./types";



export function login(

  data: LoginRequest

){

  return apiRequest<AuthResponse>(

    "/auth/login",

    {

      method: "POST",

      body: data

    }

  );

}





export function register(

  data: RegisterRequest

){

  return apiRequest<AuthResponse>(

    "/auth/register",

    {

      method: "POST",

      body: data

    }

  );

}





export function forgotPassword(

  data: ForgotPasswordRequest

){

  return apiRequest(

    "/auth/forgot-password",

    {

      method: "POST",

      body: data

    }

  );

}





export function resetPassword(

  data: ResetPasswordRequest

){

  return apiRequest(

    "/auth/reset-password",

    {

      method: "POST",

      body: data

    }

  );

}





export function logout(){

  return apiRequest(

    "/auth/logout",

    {

      method: "POST"

    }

  );

}
