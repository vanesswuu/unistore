import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/orders", label: "My Orders" },
  { to: "/about", label: "About" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `block rounded-full px-4 py-2 text-sm font-semibold transition hover:text-indigo-600 ${
      isActive ? "text-indigo-600" : "text-slate-600"
    }`;

  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-indigo-600">
          UniStore
        </Link>

        <button
          className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current transition" />
          <span className="mt-1 block h-0.5 w-5 bg-current transition" />
          <span className="mt-1 block h-0.5 w-5 bg-current transition" />
        </button>

        <nav className="hidden gap-4 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 text-sm md:flex">
          <Link to="/login" className="font-medium text-slate-600 hover:text-indigo-600">
            Login
          </Link>
          <Link to="/cart" className="rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white">
            Cart
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="space-y-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClasses} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link
              to="/login"
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-center font-semibold text-slate-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="w-full rounded-full bg-indigo-600 px-4 py-2 text-center font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
