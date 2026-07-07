export interface LoginForm {

  email:string;

  password:string;

}



export interface RegisterForm {

  name:string;

  email:string;

  password:string;

  confirmPassword:string;

}



export interface ContactForm {

  name:string;

  email:string;

  subject:string;

  message:string;

}



export interface ProjectForm {

  title:string;

  description:string;

  status:string;

}



export interface CourseForm {

  title:string;

  description:string;

  level:string;

}
