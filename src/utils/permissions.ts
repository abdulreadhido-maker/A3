export type UserRole =
  | "admin"
  | "user"
  | "student"
  | "developer";



const permissions = {


  admin:[
    "manage_users",
    "manage_projects",
    "manage_settings",
    "view_dashboard"
  ],



  user:[
    "view_dashboard",
    "manage_profile"
  ],



  student:[
    "view_courses",
    "manage_profile"
  ],



  developer:[
    "create_projects",
    "manage_projects",
    "view_dashboard"
  ]


};





function hasPermission(

role:UserRole,

permission:string

){


return permissions[role]?.includes(
  permission
) ?? false;


}





export default hasPermission;
