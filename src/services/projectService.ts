import apiRequest from "./api";



interface Project {

  id:string;

  title:string;

  description:string;

  status:string;

  createdAt:string;

}





export function getProjects(){

  return apiRequest<Project[]>(

    "/projects"

  );

}







export function getProjectById(

id:string

){

  return apiRequest<Project>(

    `/projects/${id}`

  );

}







export function createProject(

data:Partial<Project>

){

  return apiRequest<Project>(

    "/projects",

    {

      method:"POST",

      body:data

    }

  );

}







export function updateProject(

id:string,

data:Partial<Project>

){

  return apiRequest<Project>(

    `/projects/${id}`,

    {

      method:"PUT",

      body:data

    }

  );

}







export function deleteProject(

id:string

){

  return apiRequest(

    `/projects/${id}`,

    {

      method:"DELETE"

    }

  );

}
