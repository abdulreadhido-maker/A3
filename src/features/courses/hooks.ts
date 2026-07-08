import {
  useEffect,
  useState
} from "react";

import {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse
} from "./services";

import type {
  Course,
  CreateCourseRequest,
  UpdateCourseRequest
} from "./types";



function useCourses(){

  const [courses,setCourses] =
  useState<Course[]>([]);



  const [loading,setLoading] =
  useState(true);



  const [error,setError] =
  useState<string | null>(null);





  async function loadCourses(){

    try{

      setLoading(true);

      setError(null);



      const data = await getCourses();


      setCourses(data);


    }catch(err:any){

      setError(err.message);


    }finally{

      setLoading(false);

    }

  }





  async function addCourse(

    data:CreateCourseRequest

  ){

    const course =

      await createCourse(data);



    setCourses(prev=>[

      ...prev,

      course

    ]);



    return course;

  }





  async function editCourse(

    id:string,

    data:UpdateCourseRequest

  ){

    const updated =

      await updateCourse(

        id,

        data

      );



    setCourses(prev=>

      prev.map(course=>

        course.id === id

        ?

        updated

        :

        course

      )

    );



    return updated;

  }





  async function removeCourse(

    id:string

  ){

    await deleteCourse(id);



    setCourses(prev=>

      prev.filter(course=>

        course.id !== id

      )

    );

  }





  useEffect(()=>{

    loadCourses();

  },[]);





  return {

    courses,

    loading,

    error,

    refresh:loadCourses,

    addCourse,

    editCourse,

    removeCourse

  };

}



export default useCourses;
