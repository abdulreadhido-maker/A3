import { useState } from "react";

import InputField from "../../../components/common/InputField";
import PrimaryButton from "../../../components/common/PrimaryButton";

import useProjects from "../hooks";



function ProjectForm(){

  const {

    addProject,

    loading

  } = useProjects();



  const [title,setTitle] =
  useState("");

  const [description,setDescription] =
  useState("");

  const [category,setCategory] =
  useState("");





  async function handleSubmit(

    e:React.FormEvent<HTMLFormElement>

  ){

    e.preventDefault();



    await addProject({

      title,

      description,

      category

    });



    setTitle("");

    setDescription("");

    setCategory("");

  }





  return (

    <form onSubmit={handleSubmit}>

      <InputField

        label="Project Title"

        value={title}

        onChange={(e)=>

          setTitle(e.target.value)

        }

      />



      <InputField

        label="Category"

        value={category}

        onChange={(e)=>

          setCategory(e.target.value)

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

        rows={5}

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

          "Create Project"

        }

      </PrimaryButton>

    </form>

  );

}



export default ProjectForm;
