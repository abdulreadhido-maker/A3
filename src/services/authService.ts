import apiRequest from "./api";



interface LoginData {

  email:string;

  password:string;

}





interface RegisterData {

  name:string;

  email:string;

  password:string;

}





interface AuthResponse {

  user:{

    id:string;

    name:string;

    email:string;

    role?:string;

  };

  token:string;

}







export function loginUser(

data:LoginData

){

  return apiRequest<AuthResponse>(

    "/auth/login",

    {

      method:"POST",

      body:data

    }

  );

}







export function registerUser(

data:RegisterData

){

  return apiRequest<AuthResponse>(

    "/auth/register",

    {

      method:"POST",

      body:data

    }

  );

}







export function logoutUser(){

  return apiRequest(

    "/auth/logout",

    {

      method:"POST"

    }

  );

}
