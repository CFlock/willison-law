import React from "react";
import { Link } from "react-router";
import "./Header.css";

const navLinkClass = `
  group
  relative
  inline-flex
  items-center
  cursor-pointer
  select-none
  py-2
  text-[13px]
  font-medium
  tracking-[0.14em]
  uppercase
  text-neutral-800
  transition-colors
  duration-300
  hover:text-primary
`;

const underlineClass = `
  pointer-events-none
  absolute
  left-0
  bottom-[2px]
  h-px
  w-full
  origin-left
  scale-x-0
  bg-accent/90
  transition-transform
  duration-500
  ease-[cubic-bezier(0.77,0,0.175,1)]
  group-hover:scale-x-100
`;

const dropdownClass = `
  dropdown-content
  top-full
  left-0
  z-[100]
  pt-3
  w-64
  border
  border-base-300
  bg-base-100
  p-3
  shadow-xl
`;

const dropdownItemClass = `
  block
  rounded-sm
  px-3
  py-2
  text-sm
  text-neutral-700
  transition-colors
  duration-200
`;

type HeaderProps = {
  scrolled: boolean;
};

const Header = () => {
  return (
    <header
      className="
        navbar
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-base-300
        bg-base-100/95
        px-8
        py-5
        backdrop-blur-sm
        transition-all
        duration-700
      "
    >
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <img src="/logo.png" className="h-16 w-auto" alt="Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-10">
        {/* Home */}
        <Link to="/" className={navLinkClass}>
          Home
          <span className={underlineClass} />
        </Link>

        {/* About */}
        <Link to="/about-us" className={navLinkClass}>
          About
          <span className={underlineClass} />
        </Link>

        {/* Family Law */}
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className={navLinkClass}>
            Family Law
            <span className={underlineClass} />
          </div>

          <ul tabIndex={0} className={dropdownClass}>
            <li>
              <Link to="/family-law/divorce" className={dropdownItemClass}>
                Divorce
              </Link>
            </li>

            <li>
              <Link
                to="/family-law/child-custody"
                className={dropdownItemClass}
              >
                Child Custody
              </Link>
            </li>
          </ul>
        </div>

        {/* Estate Planning */}
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className={navLinkClass}>
            Estate Planning
            <span className={underlineClass} />
          </div>

          <ul tabIndex={0} className={dropdownClass}>
            <li>
              <Link to="/estate-planning/wills" className={dropdownItemClass}>
                Wills
              </Link>
            </li>

            <li>
              <Link to="/estate-planning/trusts" className={dropdownItemClass}>
                Trusts
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className={navLinkClass}>
            Resources
            <span className={underlineClass} />
          </div>

          <ul tabIndex={0} className={dropdownClass}>
            <li>
              <Link to="/resources/blog" className={dropdownItemClass}>
                Blog
              </Link>
            </li>

            <li>
              <Link to="/resources/faqs" className={dropdownItemClass}>
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <Link to="/contact-us" className={navLinkClass}>
          Contact
          <span className={underlineClass} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
