export interface Course {

  id:string;

  title:string;

  description:string;

  image?:string;

  instructor?:string;

  level:
    | "beginner"
    | "intermediate"
    | "advanced";

  price:number;

  lessons:number;

  students:number;

  createdAt:string;

  updatedAt:string;

}





export interface CreateCourseRequest {

  title:string;

  description:string;

  level:Course["level"];

  price:number;

}





export interface UpdateCourseRequest {

  title?:string;

  description?:string;

  level?:Course["level"];

  price?:number;

}
