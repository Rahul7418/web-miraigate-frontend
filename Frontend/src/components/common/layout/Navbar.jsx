import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto w-full bg-white border-b md:border-b-0 py-4 lg:py-5">
      <div className="px-4 lg:px-15 lg:pr-20 flex items-center justify-between h-20">

        {/* Logo */}
        <div className="flex items-center">
          <img
            width={180}
            src="/src/assets/images/Transparent-2048x818-removebg-preview.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-20 text-sm font-bold text-black">

          <li className="group flex items-center gap-1 cursor-pointer">
            <span>Services</span>
            <span className="inline-block pt-1 text-[8px] transition-transform duration-200 ease-out group-hover:-rotate-90">
              ▼
            </span>
          </li>

          <li className="group flex items-center gap-1 cursor-pointer">
            <span>Resources</span>
            <span className="inline-block pt-1 text-[8px] transition-transform duration-200 ease-out group-hover:-rotate-90">
              ▼
            </span>
          </li>

          <li className="group flex items-center gap-1 cursor-pointer">
            <span>Company</span>
            <span className="inline-block pt-1 text-[8px] transition-transform duration-200 ease-out group-hover:-rotate-90">
              ▼
            </span>
          </li>

          <li className="group flex items-center gap-1 cursor-pointer">
            <span>Portfolio</span>
            <span className="inline-block pt-1 text-[8px] transition-transform duration-200 ease-out group-hover:-rotate-90">
              ▼
            </span>
          </li>

        </ul>

        {/* Desktop Button */}
        <button
          className="
            hidden lg:block
            bg-black text-white
            px-3 py-3
            rounded-md
            text-sm font-medium
            transition-all duration-300 ease-out
            transform-gpu
            hover:scale-105
            hover:shadow-lg
          "
        >
          Schedule a call
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-black text-2xl font-bold focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-6">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-black">
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Portfolio</li>
          </ul>

          <button className="mt-6 w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:scale-105 transition">
            Schedule a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
