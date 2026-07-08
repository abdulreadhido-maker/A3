import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";



const projects = [

  {
    id: 1,
    title: "Business Website",
    category: "Web Development",
    description: "Modern responsive website for a company."
  },

  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Complete online shopping solution."
  },

  {
    id: 3,
    title: "Mobile Application",
    category: "Mobile",
    description: "Cross-platform mobile application."
  },

  {
    id: 4,
    title: "AI Dashboard",
    category: "Artificial Intelligence",
    description: "Analytics dashboard powered by AI."
  }

];



function PortfolioPage(){

  return (

    <MainLayout>

      <section className="portfolio-page">

        <SectionTitle
          title="Our Portfolio"
          description="A selection of projects completed by Torrema."
          center
        />

        <div className="portfolio-grid">

          {projects.map((project)=>(

            <GlassCard key={project.id}>

              <span className="portfolio-category">

                {project.category}

              </span>

              <h3>

                {project.title}

              </h3>

              <p>

                {project.description}

              </p>

            </GlassCard>

          ))}

        </div>

      </section>

    </MainLayout>

  );

}



export default PortfolioPage;
