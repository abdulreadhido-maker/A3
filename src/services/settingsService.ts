import apiRequest from "./api";



interface Settings {

  siteName:string;

  description:string;

  logo?:string;

  language:string;

  maintenance:boolean;

}







export function getSettings(){

  return apiRequest<Settings>(

    "/settings"

  );

}







export function updateSettings(

data:Partial<Settings>

){

  return apiRequest<Settings>(

    "/settings",

    {

      method:"PUT",

      body:data

    }

  );

}
