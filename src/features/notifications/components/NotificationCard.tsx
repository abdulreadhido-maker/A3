import GlassCard from "../../../components/common/GlassCard";
import PrimaryButton from "../../../components/common/PrimaryButton";

import type {
  Notification
} from "../types";



interface NotificationCardProps {

  notification: Notification;

  onRead?: (id:string)=>void;

  onDelete?: (id:string)=>void;

}



function NotificationCard({

  notification,

  onRead,

  onDelete

}: NotificationCardProps){

  return (

    <GlassCard>

      <div className="notification-card">

        <h3>

          {notification.title}

        </h3>



        <p>

          {notification.message}

        </p>



        <small>

          {notification.createdAt}

        </small>



        <p>

          Status: {

            notification.read

            ?

            "Read"

            :

            "Unread"

          }

        </p>



        <div className="notification-actions">

          {

            !notification.read && (

              <PrimaryButton

                onClick={()=>

                  onRead?.(

                    notification.id

                  )

                }

              >

                Mark as Read

              </PrimaryButton>

            )

          }



          <PrimaryButton

            onClick={()=>

              onDelete?.(

                notification.id

              )

            }

          >

            Delete

          </PrimaryButton>

        </div>

      </div>

    </GlassCard>

  );

}



export default NotificationCard;
