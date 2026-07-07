export interface User {

  id:string;

  name:string;

  email:string;

  role?:string;

  avatar?:string;

}



export interface Project {

  id:string;

  title:string;

  description:string;

  status:string;

  createdAt:string;

}



export interface Course {

  id:string;

  title:string;

  description:string;

  image?:string;

  level?:string;

  createdAt:string;

}



export interface Notification {

  id:string;

  title:string;

  message:string;

  read:boolean;

  createdAt:string;

}



export interface ApiResponse<T>{

  data:T;

  message?:string;

  success:boolean;

}
