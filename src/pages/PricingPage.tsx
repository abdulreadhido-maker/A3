import MainLayout from "../components/layout/MainLayout";
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import PrimaryButton from "../components/common/PrimaryButton";



const plans = [

  {

    name: "Starter",

    price: "$99",

    features: [

      "Landing Page",

      "Responsive Design",

      "Basic Support"

    ]

  },

  {

    name: "Professional",

    price: "$299",

    features: [

      "Business Website",

      "SEO Optimization",

      "Priority Support"

    ]

  },

  {

    name: "Enterprise",

    price: "Custom",

    features: [

      "Custom Development",

      "AI Integration",

      "Dedicated Support"

    ]

  }

];





function PricingPage(){

  return (

    <MainLayout>

      <section className="pricing-page">

        <SectionTitle

          title="Pricing"

          description="Choose the plan that fits your business."

          center

        />



        <div className="pricing-grid">

          {

            plans.map((plan)=>(

              <GlassCard key={plan.name}>

                <h3>

                  {plan.name}

                </h3>



                <h2>

                  {plan.price}

                </h2>



                <ul>

                  {

                    plan.features.map((feature)=>(

                      <li key={feature}>

                        {feature}

                      </li>

                    ))

                  }

                </ul>



                <PrimaryButton>

                  Choose Plan

                </PrimaryButton>

              </GlassCard>

            ))

          }

        </div>

      </section>

    </MainLayout>

  );

}



export default PricingPage;
