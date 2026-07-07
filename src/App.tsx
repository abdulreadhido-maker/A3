import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyEmail from "@/pages/auth/VerifyEmail";

import Dashboard from "@/pages/dashboard/Dashboard";
import Projects from "@/pages/dashboard/Projects";
import Orders from "@/pages/dashboard/Orders";
import Billing from "@/pages/dashboard/Billing";
import Profile from "@/pages/dashboard/Profile";
import Settings from "@/pages/dashboard/Settings";
import Notifications from "@/pages/dashboard/Notifications";

import AdminDashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import AdminProjects from "@/pages/admin/Projects";
import Payments from "@/pages/admin/Payments";
import Analytics from "@/pages/admin/Analytics";
import AdminSettings from "@/pages/admin/Settings";

import NotFound from "@/pages/NotFound";

import Layout from "@/components/layout/Layout";

function App() {
  return (
    <Routes>

      {/* الموقع */}

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* تسجيل الدخول */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* لوحة المستخدم */}

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/projects" element={<Projects />} />
      <Route path="/dashboard/orders" element={<Orders />} />
      <Route path="/dashboard/billing" element={<Billing />} />
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      <Route
        path="/dashboard/notifications"
        element={<Notifications />}
      />

      {/* لوحة الإدارة */}

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route path="/admin/payments" element={<Payments />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/settings" element={<AdminSettings />} />

      {/* 404 */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
