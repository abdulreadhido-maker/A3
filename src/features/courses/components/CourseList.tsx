import CourseCard from "./CourseCard";

import useCourses from "../hooks";



function CourseList(){

  const {

    courses,

    loading,

    error

  } = useCourses();



  if(loading){

    return (

      <p>

        Loading courses...

      </p>

    );

  }



  if(error){

    return (

      <p>

        {error}

      </p>

    );

  }



  return (

    <div className="courses-grid">

      {

        courses.map((course)=>(

          <CourseCard

            key={course.id}

            course={course}

          />

        ))

      }

    </div>

  );

}



export default CourseList;
