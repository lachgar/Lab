"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-primary-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-white">
            INSIGHT Lab
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggle}
            className="md:hidden text-white text-2xl focus:outline-none hover:text-primary-300 transition"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-primary-700 md:bg-transparent md:static md:flex md:space-x-6 text-center md:text-left`}
          >
            <ul className="flex flex-col md:flex-row md:items-center">
              {[
                { href: "/", label: "Home" },
                { href: "/team", label: "Team" },
                { href: "/projects", label: "Projects" },
                { href: "/publications", label: "Publications" },
                { href: "/subjects", label: "Subjects" },
                { href: "/doctorants", label: "Doctoral Students" },
              ].map((link) => (
                <li key={link.href} className="py-2 md:py-0">
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-2 rounded-md text-base font-medium text-white hover:bg-primary-400 hover:text-gray-900 transition duration-150 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
