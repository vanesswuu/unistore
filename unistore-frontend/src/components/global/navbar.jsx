import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/orders", label: "My Orders" },
  { to: "/about", label: "About" },
];

function Navbar() {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-semibold text-indigo-600">
          UniStore
        </Link>
        <nav className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-indigo-600 ${isActive ? "text-indigo-600" : "text-slate-600"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/login" className="font-medium text-slate-600 hover:text-indigo-600">
            Login
          </Link>
          <Link to="/cart" className="rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
