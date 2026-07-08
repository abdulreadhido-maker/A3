import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useCourses from "../hooks";



function CourseForm(){

  const {

    addCourse,

    loading

  } = useCourses();



  const [title,setTitle] =
  useState("");

  const [description,setDescription] =
  useState("");

  const [level,setLevel] =
  useState<

    "beginner" |
    "intermediate" |
    "advanced"

  >("beginner");

  const [price,setPrice] =
  useState(0);





  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    await addCourse({

      title,

      description,

      level,

      price

    });



    setTitle("");

    setDescription("");

    setPrice(0);

  }





  return (

    <form onSubmit={handleSubmit}>

      <InputField

        label="Course Title"

        value={title}

        onChange={(e)=>

          setTitle(e.target.value)

        }

      />



      <label>

        Description

      </label>



      <textarea

        value={description}

        onChange={(e)=>

          setDescription(e.target.value)

        }

      />



      <label>

        Level

      </label>



      <select

        value={level}

        onChange={(e)=>

          setLevel(

            e.target.value as

            typeof level

          )

        }

      >

        <option value="beginner">

          Beginner

        </option>



        <option value="intermediate">

          Intermediate

        </option>



        <option value="advanced">

          Advanced

        </option>

      </select>



      <InputField

        label="Price"

        type="number"

        value={price}

        onChange={(e)=>

          setPrice(

            Number(e.target.value)

          )

        }

      />



      <PrimaryButton

        type="submit"

        disabled={loading}

      >

        {

          loading

          ?

          "Creating..."

          :

          "Create Course"

        }

      </PrimaryButton>

    </form>

  );

}



export default CourseForm;
