import apiRequest from "../../services/api";

import type {
  Notification,
  CreateNotificationRequest
} from "./types";



export function getNotifications(){

  return apiRequest<Notification[]>(

    "/notifications"

  );

}





export function createNotification(

  data:CreateNotificationRequest

){

  return apiRequest<Notification>(

    "/notifications",

    {

      method:"POST",

      body:data

    }

  );

}





export function markAsRead(

  id:string

){

  return apiRequest<Notification>(

    `/notifications/${id}/read`,

    {

      method:"PUT"

    }

  );

}





export function deleteNotification(

  id:string

){

  return apiRequest(

    `/notifications/${id}`,

    {

      method:"DELETE"

    }

  );

}
