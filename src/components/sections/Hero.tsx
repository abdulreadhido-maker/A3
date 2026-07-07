import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const stats = [
  {
    number: "150+",
    title: "Projects Completed",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
];

const features = [
  "Modern Website Development",
  "React & Next.js Applications",
  "Mobile App Development",
  "AI Solutions",
  "Cloud Infrastructure",
  "Stripe & Supabase Integration",
];

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#020617 0%,#0f172a 45%,#111827 100%)",
      }}
    >
      {/* Glow */}

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(59,130,246,.18)",
          filter: "blur(140px)",
          top: -150,
          left: -150,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(139,92,246,.18)",
          filter: "blur(140px)",
          bottom: -150,
          right: -150,
        }}
      />

      <div className="container">

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "70px",
            alignItems: "center",
          }}
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .7,
            }}
          >
            <div
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                borderRadius: "999px",
                marginBottom: "25px",
              }}
            >
              <Sparkles
                size={18}
                color="#38bdf8"
              />

              <span>
                Professional Software Development
              </span>

            </div>

            <h1
              style={{
                fontSize: "clamp(42px,7vw,74px)",
                lineHeight: 1.05,
                fontWeight: 800,
                marginBottom: "24px",
              }}
            >
              Build the Future
              <br />

              with

              <span
                className="text-gradient"
                style={{
                  marginLeft: 12,
                }}
              >
                Torrema
              </span>

            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                maxWidth: "620px",
                marginBottom: "35px",
              }}
            >
              We create high-performance websites,
              custom software, AI solutions,
              cloud systems and scalable digital
              products for startups and enterprises.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "18px",
                marginBottom: "40px",
              }}
            >
              <Link
                to="/contact"
                className="btn-primary"
              >
                Start Project

                <ArrowRight
                  size={18}
                  style={{
                    marginLeft: 8,
                  }}
                />
              </Link>

              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                View Portfolio
              </Link>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "16px",
              }}
            >
              {features.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CheckCircle
                    color="#22c55e"
                    size={20}
                  />

                  <span>{item}</span>

                </div>
              ))}
            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: .8
            }}
            style={{
              position: "relative"
            }}
          >

            {/* Main Card */}

            <div
              className="glass shadow-glow"
              style={{
                borderRadius: "30px",
                padding: "35px",
                position: "relative",
                overflow: "hidden"
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "30px"
                }}
              >

                <div>

                  <h2
                    style={{
                      marginBottom: "8px"
                    }}
                  >
                    Torrema
                  </h2>

                  <p>
                    Software Development Platform
                  </p>

                </div>

                <Code2
                  size={55}
                  color="#3b82f6"
                />

              </div>

              <div
                style={{
                  display: "grid",
                  gap: "18px"
                }}
              >

                <div
                  className="glass"
                  style={{
                    padding: "18px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px"
                  }}
                >

                  <Rocket
                    color="#38bdf8"
                    size={34}
                  />

                  <div>

                    <h4>
                      Fast Development
                    </h4>

                    <p>
                      High quality code with modern technologies.
                    </p>

                  </div>

                </div>

                <div
                  className="glass"
                  style={{
                    padding: "18px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px"
                  }}
                >

                  <ShieldCheck
                    color="#22c55e"
                    size={34}
                  />

                  <div>

                    <h4>
                      Secure Systems
                    </h4>

                    <p>
                      Authentication, Database and Cloud Security.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <motion.div

              animate={{
                y: [-10, 10, -10]
              }}

              transition={{
                duration: 5,
                repeat: Infinity
              }}

              className="glass"

              style={{
                position: "absolute",
                right: "-30px",
                bottom: "-30px",
                padding: "22px",
                borderRadius: "22px",
                width: "230px"
              }}
            >

              <h3
                style={{
                  marginBottom: "15px"
                }}
              >
                Live Status
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px"
                }}
              >

                <span>Servers</span>

                <span
                  style={{
                    color: "#22c55e"
                  }}
                >
                  Online
                </span>

              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px"
                }}
              >

                <span>Security</span>

                <span
                  style={{
                    color: "#22c55e"
                  }}
                >
                  Active
                </span>

              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >

                <span>API</span>

                <span
                  style={{
                    color: "#22c55e"
                  }}
                >
                  Running
                </span>

              </div>

            </motion.div>

          </motion.div>

        </div>
                {/* Statistics */}

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
            duration: 0.8,
            delay: 0.2
          }}
          style={{
            marginTop: "90px"
          }}
        >
          <div
            className="glass"
            style={{
              padding: "35px",
              borderRadius: "24px"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(180px,1fr))",
                gap: "30px"
              }}
            >
              {stats.map((item) => (
                <div
                  key={item.title}
                  style={{
                    textAlign: "center"
                  }}
                >
                  <h2
                    className="text-gradient"
                    style={{
                      fontSize: "48px",
                      marginBottom: "10px"
                    }}
                  >
                    {item.number}
                  </h2>

                  <p
                    style={{
                      color: "var(--text-secondary)"
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
