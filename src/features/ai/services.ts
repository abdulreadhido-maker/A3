import apiRequest from "../../services/api";

import type {
  ChatRequest,
  ChatResponse,
  AIConversation,
  AIModel
} from "./types";



export function sendMessage(

  data:ChatRequest

){

  return apiRequest<ChatResponse>(

    "/ai/chat",

    {

      method:"POST",

      body:data

    }

  );

}





export function getConversations(){

  return apiRequest<AIConversation[]>(

    "/ai/conversations"

  );

}





export function getConversation(

  id:string

){

  return apiRequest<AIConversation>(

    `/ai/conversations/${id}`

  );

}





export function deleteConversation(

  id:string

){

  return apiRequest(

    `/ai/conversations/${id}`,

    {

      method:"DELETE"

    }

  );

}





export function getModels(){

  return apiRequest<AIModel[]>(

    "/ai/models"

  );

}
