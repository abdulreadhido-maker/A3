import GlassCard from "../../../components/common/GlassCard";

import type {
  Course
} from "../types";



interface CourseCardProps {

  course: Course;

}



function CourseCard({

  course

}: CourseCardProps){

  return (

    <GlassCard>

      <div className="course-card">

        {

          course.image && (

            <img

              src={course.image}

              alt={course.title}

            />

          )

        }



        <h3>

          {course.title}

        </h3>



        <p>

          {course.description}

        </p>



        <span>

          Level: {course.level}

        </span>



        <strong>

          ${course.price}

        </strong>



        <p>

          {course.students} Students

        </p>



      </div>

    </GlassCard>

  );

}



export default CourseCard;
