import { Link } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";



function NotFoundPage(){

  return (

    <MainLayout>

      <section className="not-found-page">

        <SectionTitle

          title="404"

          description="The page you are looking for could not be found."

          center

        />



        <GlassCard>

          <h2>

            Oops!

          </h2>



          <p>

            The requested page doesn't exist or has been moved.

          </p>



          <Link to="/">

            <PrimaryButton>

              Back to Home

            </PrimaryButton>

          </Link>

        </GlassCard>

      </section>

    </MainLayout>

  );

}



export default NotFoundPage;
