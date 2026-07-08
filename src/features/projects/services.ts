import apiRequest from "../../services/api";

import type {
  Project,
  CreateProjectRequest,
  UpdateProjectRequest
} from "./types";



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

  data:CreateProjectRequest

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

  data:UpdateProjectRequest

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
