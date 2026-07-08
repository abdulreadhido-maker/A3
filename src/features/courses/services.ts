import apiRequest from "../../services/api";

import type {
  Course,
  CreateCourseRequest,
  UpdateCourseRequest
} from "./types";



export function getCourses(){

  return apiRequest<Course[]>(

    "/courses"

  );

}





export function getCourseById(

  id:string

){

  return apiRequest<Course>(

    `/courses/${id}`

  );

}





export function createCourse(

  data:CreateCourseRequest

){

  return apiRequest<Course>(

    "/courses",

    {

      method:"POST",

      body:data

    }

  );

}





export function updateCourse(

  id:string,

  data:UpdateCourseRequest

){

  return apiRequest<Course>(

    `/courses/${id}`,

    {

      method:"PUT",

      body:data

    }

  );

}





export function deleteCourse(

  id:string

){

  return apiRequest(

    `/courses/${id}`,

    {

      method:"DELETE"

    }

  );

}
