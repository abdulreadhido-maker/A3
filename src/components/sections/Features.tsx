import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Shield,
  Cloud,
  Database,
  Code2,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Modern Websites",
    description:
      "Professional responsive websites using React, TypeScript and the latest web technologies."
  },

  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications with excellent performance and user experience."
  },

  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "AI-powered solutions, automation, chatbots and intelligent business systems."
  },

  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Secure authentication, encrypted data and enterprise-level protection."
  },

  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud deployment, scalable infrastructure and high availability."
  },

  {
    icon: Database,
    title: "Database Systems",
    description:
      "Supabase, PostgreSQL and scalable database architecture."
  },

  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions designed specifically for your business."
  },

  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimized code, blazing-fast loading and modern best practices."
  }
];

function Features() {

  return (

    <section
      className="section"
      style={{
        background: "var(--background)"
      }}
    >

      <div className="container">

        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: .7
          }}

          style={{
            textAlign: "center",
            marginBottom: "70px"
          }}
        >

          <h2
            className="text-gradient"
            style={{
              marginBottom: "20px"
            }}
          >
            Why Choose Torrema?
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "var(--text-secondary)",
              lineHeight: 1.8
            }}
          >
            We combine modern technologies,
            elegant design and scalable architecture
            to build software that grows with your business.
          </p>

        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px"
          }}
        >
          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div

                key={feature.title}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: .5,
                  delay: index * 0.08
                }}

                whileHover={{
                  y: -10,
                  scale: 1.02
                }}

                className="glass"

                style={{
                  borderRadius: "24px",
                  padding: "32px",
                  transition: ".3s"
                }}
              >

                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "18px",
                    background:
                      "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px"
                  }}
                >
                  <Icon
                    size={34}
                    color="white"
                  />
                </div>

                <h3
                  style={{
                    marginBottom: "16px"
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8
                  }}
                >
                  {feature.description}
                </p>

              </motion.div>

            );

          })}
                  </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
          style={{
            marginTop: "80px",
            textAlign: "center"
          }}
        >
          <div
            className="glass"
            style={{
              padding: "40px",
              borderRadius: "24px",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            <h2
              style={{
                marginBottom: "18px"
              }}
            >
              Ready to Build Your Next Project?
            </h2>

            <p
              style={{
                maxWidth: "650px",
                margin: "0 auto 30px",
                color: "var(--text-secondary)",
                lineHeight: 1.8
              }}
            >
              Whether you need a business website, SaaS platform,
              mobile application, AI integration or enterprise software,
              Torrema can help turn your idea into reality.
            </p>

            <a
              href="/contact"
              className="btn-primary"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Features;
