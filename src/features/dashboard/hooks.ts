import { useEffect, useState } from "react";

import {
  getDashboardStats,
  getRecentActivities,
  getDashboardSummary
} from "./services";

import type {
  DashboardStats,
  Activity
} from "./types";



function useDashboard(){

  const [stats,setStats] =
  useState<DashboardStats | null>(null);

  const [activities,setActivities] =
  useState<Activity[]>([]);

  const [summary,setSummary] =
  useState<any>(null);

  const [loading,setLoading] =
  useState(true);

  const [error,setError] =
  useState<string | null>(null);



  async function loadDashboard(){

    try{

      setLoading(true);

      setError(null);



      const [

        statsData,

        activitiesData,

        summaryData

      ] = await Promise.all([

        getDashboardStats(),

        getRecentActivities(),

        getDashboardSummary()

      ]);



      setStats(statsData);

      setActivities(activitiesData);

      setSummary(summaryData);

    }catch(err:any){

      setError(err.message);

    }finally{

      setLoading(false);

    }

  }



  useEffect(()=>{

    loadDashboard();

  },[]);



  return {

    stats,

    activities,

    summary,

    loading,

    error,

    refresh:loadDashboard

  };

}



export default useDashboard;
