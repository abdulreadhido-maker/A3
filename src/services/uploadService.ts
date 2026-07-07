import apiRequest from "./api";



interface UploadResponse {

  url:string;

  fileName:string;

}







export function uploadFile(

file:File

){

  const formData = new FormData();


  formData.append(
    "file",
    file
  );



  return fetch(

    `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/upload`,

    {

      method:"POST",

      body:formData

    }

  )
  .then(response=>{


    if(!response.ok){

      throw new Error(
        "File upload failed"
      );

    }


    return response.json() as Promise<UploadResponse>;


  });

}







export function deleteFile(

fileName:string

){

  return apiRequest(

    `/upload/${fileName}`,

    {

      method:"DELETE"

    }

  );

}
