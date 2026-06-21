import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navLinks } from "../data/siteData.js";
import { useAuthStore } from "../store/authStore.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const dashboardPath =
    user?.role === "student" ? "/student/dashboard" : "/admin";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#020711]/80 backdrop-blur-2xl">
      <nav className="container flex min-h-16 items-center justify-between py-3">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Avion Academy home"
        >
          {/* <span className="grid h-10 w-10 place-items-center rounded-2xl bg-avion-green text-avion-ink shadow-glow">
            <Rocket size={20} />
          </span> */}
          <span>
            {/* <span className="block text-base font-black uppercase tracking-[0.22em] text-white">Avion</span> */}
            <img
              className="w-28 object-cover h-8 object-center"
              src="/assets/avion-logo.png"
              loading="lazy"
              alt="Futuristic Avion academy technology environment"
            />
            <span className="block text-xs text-white/55">
              Training & Placement Centre
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <button
                className="btn btn-ghost"
                onClick={() => navigate(dashboardPath)}
              >
                Dashboard
              </button>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-ghost" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary" to="/register">
                Register Now
              </Link>
            </>
          )}
        </div>

        <button
          className="icon-btn lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-avion-ink px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              className="btn btn-primary mt-3 justify-center"
              to={user ? dashboardPath : "/register"}
              onClick={() => setOpen(false)}
            >
              {user ? "Dashboard" : "Register Now"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
