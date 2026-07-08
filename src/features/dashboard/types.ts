export interface DashboardStats {

  totalProjects:number;

  activeProjects:number;

  completedProjects:number;

  totalCourses:number;

  enrolledCourses:number;

  totalOrders:number;

  totalRevenue:number;

  unreadNotifications:number;

}



export interface Activity {

  id:string;

  title:string;

  description:string;

  type:
    | "project"
    | "course"
    | "order"
    | "notification";

  createdAt:string;

}



export interface QuickAction {

  id:string;

  title:string;

  icon:string;

  path:string;

}
