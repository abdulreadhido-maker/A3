import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";



const services = [

  {
    title: "Web Development",
    description: "Modern websites and web applications."
  },

  {
    title: "Mobile Apps",
    description: "Android and iOS application development."
  },

  {
    title: "UI / UX Design",
    description: "Professional interfaces and user experiences."
  },

  {
    title: "Artificial Intelligence",
    description: "Smart AI solutions and automation."
  }

];



function ServicesPage(){

  return (

    <MainLayout>

      <section className="services-page">

        <SectionTitle
          title="Our Services"
          description="Explore the professional services offered by Torrema."
          center
        />

        <div className="services-grid">

          {services.map((service)=>(

            <GlassCard key={service.title}>

              <h3>

                {service.title}

              </h3>

              <p>

                {service.description}

              </p>

            </GlassCard>

          ))}

        </div>

      </section>

    </MainLayout>

  );

}



export default ServicesPage;
