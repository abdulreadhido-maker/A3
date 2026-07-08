import GlassCard from "../../../components/common/GlassCard";

import useDashboard from "../hooks";



function RecentNotifications(){

  const {

    activities,

    loading

  } = useDashboard();



  if(loading){

    return <p>Loading...</p>;

  }



  const notifications = activities.filter(

    (activity)=>

      activity.type === "notification"

  );



  return (

    <GlassCard>

      <h2>

        Recent Notifications

      </h2>



      {

        notifications.length === 0

        ?

        (

          <p>

            No notifications found.

          </p>

        )

        :

        (

          <ul>

            {

              notifications.map((notification)=>(

                <li key={notification.id}>

                  <strong>

                    {notification.title}

                  </strong>



                  <p>

                    {notification.description}

                  </p>

                </li>

              ))

            }

          </ul>

        )

      }

    </GlassCard>

  );

}



export default RecentNotifications;
