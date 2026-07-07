import apiRequest from "./api";



interface Course {

  id:string;

  title:string;

  description:string;

  image?:string;

  level?:string;

  createdAt:string;

}





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

data:Partial<Course>

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

data:Partial<Course>

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
