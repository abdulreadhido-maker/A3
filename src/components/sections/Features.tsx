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
