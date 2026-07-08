export interface Project {

  id:string;

  title:string;

  description:string;

  image?:string;

  category?:string;

  status:
    | "pending"
    | "active"
    | "completed";

  ownerId:string;

  createdAt:string;

  updatedAt:string;

}



export interface CreateProjectRequest {

  title:string;

  description:string;

  category?:string;

}



export interface UpdateProjectRequest {

  title?:string;

  description?:string;

  status?:Project["status"];

}
