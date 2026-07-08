import {
  useEffect,
  useState
} from "react";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from "./services";

import type {
  Project,
  CreateProjectRequest,
  UpdateProjectRequest
} from "./types";



function useProjects(){

  const [projects,setProjects] =
  useState<Project[]>([]);

  const [loading,setLoading] =
  useState(true);

  const [error,setError] =
  useState<string | null>(null);





  async function loadProjects(){

    try{

      setLoading(true);

      const data = await getProjects();

      setProjects(data);

    }catch(err:any){

      setError(err.message);

    }finally{

      setLoading(false);

    }

  }





  async function addProject(

    data:CreateProjectRequest

  ){

    const project =
      await createProject(data);


    setProjects(prev=>[

      ...prev,

      project

    ]);


    return project;

  }





  async function editProject(

    id:string,

    data:UpdateProjectRequest

  ){

    const updated =
      await updateProject(id,data);


    setProjects(prev=>

      prev.map(project=>

        project.id === id

        ?

        updated

        :

        project

      )

    );


    return updated;

  }





  async function removeProject(

    id:string

  ){

    await deleteProject(id);


    setProjects(prev=>

      prev.filter(project=>

        project.id !== id

      )

    );

  }





  useEffect(()=>{

    loadProjects();

  },[]);





  return {

    projects,

    loading,

    error,

    refresh:loadProjects,

    addProject,

    editProject,

    removeProject

  };

}



export default useProjects;
