import { Link } from "react-router-dom";
import {
  Code2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        marginTop: "100px"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "50px",
            padding: "70px 0"
          }}
        >
          {/* Logo */}

          <div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px"
              }}
            >
              <Code2
                color="#3b82f6"
                size={30}
              />

              <h2 className="text-gradient">
                Torrema
              </h2>

            </div>

            <p>
              Torrema is a professional software development
              platform for building websites, applications,
              AI solutions and digital products.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3
              style={{
                marginBottom: "20px"
              }}
            >
              Navigation
            </h3>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px"
              }}
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3
              style={{
                marginBottom: "20px"
              }}
            >
              Contact
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px"
              }}
            >

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center"
                }}
              >
                <Mail size={18} />
                hello@torrema.com
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center"
                }}
              >
                <Phone size={18} />
                +966 XX XXX XXXX
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center"
                }}
              >
                <MapPin size={18} />
                Saudi Arabia
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3
              style={{
                marginBottom: "20px"
              }}
            >
              Follow Us
            </h3>

            <div
              style={{
                display: "flex",
                gap: "15px"
              }}
            >

              <a href="#">
                <Github />
              </a>

              <a href="#">
                <Linkedin />
              </a>

              <a href="#">
                <Twitter />
              </a>

            </div>

          </div>

        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "25px 0",
            textAlign: "center",
            color: "var(--text-muted)"
          }}
        >
          © {year} Torrema. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
