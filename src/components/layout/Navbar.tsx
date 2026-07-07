import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Code2, Menu, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";

const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Pricing", path: "/pricing" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    document.documentElement.classList.toggle("light");
    document.documentElement.classList.toggle("dark");

    setDarkMode(!darkMode);
  }

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(15,23,42,.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)"
        }}
      >
        <div className="container">

          <div
            style={{
              height: "75px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >

            {/* Logo */}

            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <Code2
                size={30}
                color="#3b82f6"
              />

              <h2 className="text-gradient">
                Torrema
              </h2>

            </Link>

            {/* Desktop Menu */}

            <nav
              className="desktop-nav"
              style={{
                display: "flex",
                gap: "28px"
              }}
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) => ({
                    color: isActive
                      ? "#3b82f6"
                      : "var(--text)",
                    fontWeight: 500
                  })}
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}
            >

              <button
                onClick={toggleTheme}
                className="btn-secondary"
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              <Link
                to="/login"
                className="btn-secondary"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn-primary"
              >
                Get Started
              </Link>

              <button
                className="mobile-button"
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
              >
                <Menu size={28} />
              </button>

            </div>

          </div>

        </div>
      </motion.header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
