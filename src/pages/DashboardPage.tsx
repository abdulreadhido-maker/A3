import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";

import useAuth from "../hooks/useAuth";



function DashboardPage(){

  const { user, logout } = useAuth();



  return (

    <MainLayout>

      <section className="dashboard-page">

        <SectionTitle
          title="Dashboard"
          description="Welcome back to your Torrema dashboard."
          center
        />

        <div className="dashboard-grid">

          <GlassCard>

            <h3>

              Welcome

            </h3>

            <p>

              {user?.name}

            </p>

            <p>

              {user?.email}

            </p>

          </GlassCard>



          <GlassCard>

            <h3>

              Projects

            </h3>

            <p>

              12 Active Projects

            </p>

          </GlassCard>



          <GlassCard>

            <h3>

              Courses

            </h3>

            <p>

              5 Enrolled Courses

            </p>

          </GlassCard>



          <GlassCard>

            <h3>

              Account

            </h3>

            <PrimaryButton
              onClick={logout}
            >

              Logout

            </PrimaryButton>

          </GlassCard>

        </div>

      </section>

    </MainLayout>

  );

}



export default DashboardPage;
