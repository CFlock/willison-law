import React from "react";
import { Link } from "react-router";
import "./Header.css";
import { getImageUrl } from "../../../utils";

const Header = () => {
  return (
    <header className="navbar border-b border-base-300 bg-base-100 px-8 py-4">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <img src="/logo.png" className="h-16 w-auto" alt="Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
        {/* Home */}
        <Link
          to="/"
          className="transition-colors duration-200 hover:text-primary"
        >
          Home
        </Link>

        {/* About */}
        <Link
          to="/about-us"
          className="transition-colors duration-200 hover:text-primary"
        >
          About
        </Link>

        {/* Family Law */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-primary"
          >
            Family Law
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu top-full left-0 w-64 border border-base-300 bg-base-100 p-2 shadow-xl z-[100]"
          >
            <li>
              <Link to="/family-law/divorce">Divorce</Link>
            </li>

            <li>
              <Link to="/family-law/child-custody">Child Custody</Link>
            </li>
          </ul>
        </div>

        {/* Estate Planning */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-primary"
          >
            Estate Planning
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu top-full left-0 w-64 border border-base-300 bg-base-100 p-2 shadow-xl z-[100]"
          >
            <li>
              <Link to="/estate-planning/wills">Wills</Link>
            </li>

            <li>
              <Link to="/estate-planning/trusts">Trusts</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-primary"
          >
            Resources
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu top-full left-0 w-64 border border-base-300 bg-base-100 p-2 shadow-xl z-[100]"
          >
            <li>
              <Link to="/resources/blog">Blog</Link>
            </li>

            <li>
              <Link to="/resources/faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Contact CTA */}
        <Link
          to="/contact-us"
          className="ml-4 border border-primary px-5 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-primary hover:text-primary-content"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
