export interface Notification {

  id: string;

  title: string;

  message: string;

  type:
    | "info"
    | "success"
    | "warning"
    | "error";

  read: boolean;

  createdAt: string;

}



export interface NotificationPreferences {

  email: boolean;

  push: boolean;

  sms: boolean;

}



export interface CreateNotificationRequest {

  title: string;

  message: string;

  type: Notification["type"];

}
