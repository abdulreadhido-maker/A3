import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";



function AboutPage(){

  return (

    <MainLayout>

      <section className="about-page">

        <SectionTitle
          title="About Torrema"
          description="Learn more about our mission, vision and values."
          center
        />

        <GlassCard>

          <p>

            Torrema is a technology company focused on software development,
            artificial intelligence, UI/UX design, cloud solutions and digital
            transformation.

          </p>

        </GlassCard>

      </section>

    </MainLayout>

  );

}



export default AboutPage;
