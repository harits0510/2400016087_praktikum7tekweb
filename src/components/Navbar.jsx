import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {/* WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="src/assets/Logonav.png" className="w-7 md:w-8" alt="Logo" />
          <img src="src/assets/nav.png" className="h-6 md:h-7" alt="Ruang Ekspresi" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Program</a>
          <a href="#">Project</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white px-6 py-4 space-y-3 text-gray-700 transition-all duration-300 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <a className="block" href="#">Home</a>
        <a className="block" href="#">About</a>
        <a className="block" href="#">Program</a>
        <a className="block" href="#">Project</a>
        <a className="block" href="#">Testimonials</a>
        <a className="block" href="#">Contact</a>
      </div>
    </nav>
  );
}