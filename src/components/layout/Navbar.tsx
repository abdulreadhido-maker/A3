import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(15,23,42,.85)",
        borderBottom: "1px solid rgba(255,255,255,.08)"
      }}
    >
      <div className="container">
        <div
          style={{
            height: "75px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* Logo */}

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 700,
              fontSize: "24px"
            }}
          >
            <Code2 color="#3b82f6" size={30} />

            <span className="text-gradient">
              Torrema
            </span>
          </Link>

          {/* Desktop */}

          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              gap: "30px"
            }}
          >
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? "#3b82f6" : "#ffffff",
                  fontWeight: 500,
                  transition: ".3s"
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Buttons */}

          <div
            className="desktop-nav"
            style={{
              display: "flex",
              gap: "12px"
            }}
          >
            <Link
              className="btn-secondary"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn-primary"
              to="/register"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-button"
          >
            {mobileOpen ? (
              <X size={28} color="white" />
            ) : (
              <Menu size={28} color="white" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              paddingBottom: "25px"
            }}
          >
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;
