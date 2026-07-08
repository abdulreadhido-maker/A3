import {
  useEffect,
  useState
} from "react";

import {
  getNotifications,
  createNotification,
  markAsRead,
  deleteNotification
} from "./services";

import type {
  Notification,
  CreateNotificationRequest
} from "./types";



function useNotifications(){

  const [notifications,setNotifications] =
  useState<Notification[]>([]);

  const [loading,setLoading] =
  useState(true);

  const [error,setError] =
  useState<string | null>(null);





  async function loadNotifications(){

    try{

      setLoading(true);

      setError(null);



      const data = await getNotifications();

      setNotifications(data);

    }catch(err:any){

      setError(err.message);

    }finally{

      setLoading(false);

    }

  }





  async function addNotification(

    data:CreateNotificationRequest

  ){

    const notification =

      await createNotification(data);



    setNotifications(prev=>[

      notification,

      ...prev

    ]);



    return notification;

  }





  async function readNotification(

    id:string

  ){

    const updated =

      await markAsRead(id);



    setNotifications(prev=>

      prev.map(notification=>

        notification.id === id

        ?

        updated

        :

        notification

      )

    );

  }





  async function removeNotification(

    id:string

  ){

    await deleteNotification(id);



    setNotifications(prev=>

      prev.filter(notification=>

        notification.id !== id

      )

    );

  }





  useEffect(()=>{

    loadNotifications();

  },[]);





  return {

    notifications,

    loading,

    error,

    refresh:loadNotifications,

    addNotification,

    readNotification,

    removeNotification

  };

}



export default useNotifications;
