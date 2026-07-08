import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";



function HomePage(){

  return (

    <MainLayout>

      <section className="hero-section">

        <SectionTitle
          title="Welcome to Torrema"
          description="Modern software development, AI solutions and digital innovation."
          center
        />

        <GlassCard>

          <p>

            Build websites, applications and smart solutions with Torrema.

          </p>

          <PrimaryButton>

            Get Started

          </PrimaryButton>

        </GlassCard>

      </section>

    </MainLayout>

  );

}



export default HomePage;
