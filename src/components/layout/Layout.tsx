import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "var(--background)",
          color: "var(--text)"
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
