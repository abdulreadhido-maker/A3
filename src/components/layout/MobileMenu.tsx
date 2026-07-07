import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.25 }}
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "24px"
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px"
            }}
          >
            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              className="btn-secondary"
              to="/login"
              onClick={onClose}
            >
              Login
            </Link>

            <Link
              className="btn-primary"
              to="/register"
              onClick={onClose}
            >
              Get Started
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
