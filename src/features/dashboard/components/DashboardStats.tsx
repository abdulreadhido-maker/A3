import GlassCard from "../../../components/common/GlassCard";

import useDashboard from "../hooks";



function DashboardStats(){

  const {

    stats,

    loading

  } = useDashboard();



  if(loading){

    return <p>Loading...</p>;

  }



  if(!stats){

    return <p>No data available.</p>;

  }



  return (

    <div className="dashboard-stats-grid">

      <GlassCard>

        <h3>Total Projects</h3>

        <h2>{stats.totalProjects}</h2>

      </GlassCard>



      <GlassCard>

        <h3>Active Projects</h3>

        <h2>{stats.activeProjects}</h2>

      </GlassCard>



      <GlassCard>

        <h3>Completed Projects</h3>

        <h2>{stats.completedProjects}</h2>

      </GlassCard>



      <GlassCard>

        <h3>Total Revenue</h3>

        <h2>${stats.totalRevenue}</h2>

      </GlassCard>

    </div>

  );

}



export default DashboardStats;
