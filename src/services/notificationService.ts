import apiRequest from "./api";



interface Notification {

  id:string;

  title:string;

  message:string;

  read:boolean;

  createdAt:string;

}







export function getNotifications(){

  return apiRequest<Notification[]>(

    "/notifications"

  );

}







export function markNotificationAsRead(

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
