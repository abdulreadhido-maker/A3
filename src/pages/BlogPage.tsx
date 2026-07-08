import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";



const posts = [

  {
    id: 1,
    title: "Getting Started with Torrema",
    excerpt: "Discover how Torrema helps businesses build modern digital solutions.",
    date: "July 2026"
  },

  {
    id: 2,
    title: "UI/UX Design Trends",
    excerpt: "Explore the latest trends in user interface and experience design.",
    date: "June 2026"
  },

  {
    id: 3,
    title: "Artificial Intelligence in Business",
    excerpt: "Learn how AI can improve productivity and customer experience.",
    date: "May 2026"
  }

];



function BlogPage(){

  return (

    <MainLayout>

      <section className="blog-page">

        <SectionTitle
          title="Latest Articles"
          description="News, tutorials and insights from the Torrema team."
          center
        />

        <div className="blog-grid">

          {posts.map((post)=>(

            <GlassCard key={post.id}>

              <small>

                {post.date}

              </small>

              <h3>

                {post.title}

              </h3>

              <p>

                {post.excerpt}

              </p>

              <PrimaryButton>

                Read More

              </PrimaryButton>

            </GlassCard>

          ))}

        </div>

      </section>

    </MainLayout>

  );

}



export default BlogPage;
