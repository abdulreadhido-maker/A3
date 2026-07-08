import apiRequest from "../../services/api";

import type {
  DashboardStats,
  Activity
} from "./types";



export function getDashboardStats(){

  return apiRequest<DashboardStats>(

    "/dashboard/stats"

  );

}





export function getRecentActivities(){

  return apiRequest<Activity[]>(

    "/dashboard/activities"

  );

}





export function getDashboardSummary(){

  return apiRequest(

    "/dashboard/summary"

  );

}
