import {
  useEffect,
  useState
} from "react";

import {
  sendMessage,
  getConversations,
  getConversation,
  deleteConversation,
  getModels
} from "./services";

import type {
  AIConversation,
  AIModel,
  AIMessage
} from "./types";



function useAI(){

  const [conversations,setConversations] =
  useState<AIConversation[]>([]);

  const [currentConversation,setCurrentConversation] =
  useState<AIConversation | null>(null);

  const [models,setModels] =
  useState<AIModel[]>([]);

  const [loading,setLoading] =
  useState(false);

  const [error,setError] =
  useState<string | null>(null);





  async function loadConversations(){

    try{

      setLoading(true);

      setError(null);

      const data = await getConversations();

      setConversations(data);

    }catch(err:any){

      setError(err.message);

    }finally{

      setLoading(false);

    }

  }





  async function loadModels(){

    const data = await getModels();

    setModels(data);

  }





  async function openConversation(

    id:string

  ){

    const conversation =

      await getConversation(id);

    setCurrentConversation(conversation);

  }





  async function chat(

    message:string

  ){

    if(!currentConversation){

      return;

    }



    const response = await sendMessage({

      message,

      conversationId:currentConversation.id

    });



    const assistantMessage:AIMessage = {

      id:crypto.randomUUID(),

      role:"assistant",

      content:response.reply,

      createdAt:new Date().toISOString()

    };



    setCurrentConversation({

      ...currentConversation,

      messages:[

        ...currentConversation.messages,

        assistantMessage

      ]

    });

  }





  async function removeConversation(

    id:string

  ){

    await deleteConversation(id);

    setConversations(prev=>

      prev.filter(item=>

        item.id !== id

      )

    );

  }





  useEffect(()=>{

    loadConversations();

    loadModels();

  },[]);





  return {

    conversations,

    currentConversation,

    models,

    loading,

    error,

    openConversation,

    chat,

    removeConversation,

    refresh:loadConversations

  };

}



export default useAI;
