import NotificationCard from "./NotificationCard";

import useNotifications from "../hooks";



function NotificationList(){

  const {

    notifications,

    loading,

    error,

    readNotification,

    removeNotification

  } = useNotifications();



  if(loading){

    return (

      <p>

        Loading notifications...

      </p>

    );

  }



  if(error){

    return (

      <p>

        {error}

      </p>

    );

  }



  if(notifications.length === 0){

    return (

      <p>

        No notifications available.

      </p>

    );

  }



  return (

    <div className="notifications-list">

      {

        notifications.map((notification)=>(

          <NotificationCard

            key={notification.id}

            notification={notification}

            onRead={readNotification}

            onDelete={removeNotification}

          />

        ))

      }

    </div>

  );

}



export default NotificationList;
