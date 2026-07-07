import apiRequest from "./api";



interface UserProfile {

  id:string;

  name:string;

  email:string;

  role?:string;

  avatar?:string;

}





export function getUserProfile(){

  return apiRequest<UserProfile>(

    "/users/profile"

  );

}







export function updateUserProfile(

data:Partial<UserProfile>

){

  return apiRequest<UserProfile>(

    "/users/profile",

    {

      method:"PUT",

      body:data

    }

  );

}







export function deleteUserAccount(){

  return apiRequest(

    "/users/account",

    {

      method:"DELETE"

    }

  );

}
