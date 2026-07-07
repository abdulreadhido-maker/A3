import apiRequest from "./api";



interface ContactMessage {

  name:string;

  email:string;

  subject:string;

  message:string;

}







export function sendContactMessage(

data:ContactMessage

){

  return apiRequest(

    "/contact",

    {

      method:"POST",

      body:data

    }

  );

}







export function getContactMessages(){

  return apiRequest<ContactMessage[]>(

    "/contact"

  );

}







export function deleteContactMessage(

id:string

){

  return apiRequest(

    `/contact/${id}`,

    {

      method:"DELETE"

    }

  );

}
