export interface AIMessage {

  id:string;

  role:
    | "user"
    | "assistant"
    | "system";

  content:string;

  createdAt:string;

}



export interface AIConversation {

  id:string;

  title:string;

  messages:AIMessage[];

  createdAt:string;

  updatedAt:string;

}



export interface ChatRequest {

  message:string;

  conversationId?:string;

}



export interface ChatResponse {

  reply:string;

  conversationId:string;

}



export interface AIModel {

  id:string;

  name:string;

  provider:string;

  description?:string;

}
