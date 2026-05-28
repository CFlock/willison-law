import React from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import "./Header.css";

const navLinkClass = `
  group
  relative
  inline-flex
  items-center
  cursor-pointer
  select-none
  py-2
  text-sm
  lg:text-[13px]
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
  bottom-[6px]
  h-[1.5px]
  w-full
  origin-left
  scale-x-0
  bg-accent
  transition-transform
  duration-500
  ease-[cubic-bezier(0.77,0,0.175,1)]
  group-hover:scale-x-100
`;

const dropdownClass = `
  dropdown-content
  menu
  top-full
  left-0
  z-[100]
  w-64
  border
  border-base-300
  bg-base-100
  p-2
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
  hover:bg-blue-100
  hover:text-[#0c306e]
  active:bg-[#0c306e]
  active:text-white
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          w-full
          items-center
          border-b
          border-base-300/70
          bg-base-100/90
          px-6
          py-4
          backdrop-blur-md
          transition-all
          duration-700
          ease-[cubic-bezier(0.77,0,0.175,1)]
          lg:px-8
          lg:py-5
        `}
      >
        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
            <img src="/logo.png" className="h-12 w-auto lg:h-16" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link to="/" className={navLinkClass}>
            Home
            <span className={underlineClass} />
          </Link>

          <Link to="/about-us" className={navLinkClass}>
            About
            <span className={underlineClass} />
          </Link>

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
                <Link
                  to="/estate-planning/trusts"
                  className={dropdownItemClass}
                >
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
          <Link to="/contact-us" className={navLinkClass}>
            Contact
            <span className={underlineClass} />
          </Link>
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setMobileOpen(true)} className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          inset-0
          z-[60]
          bg-black/40
          transition-opacity
          duration-300
          lg:hidden
          ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={() => setMobileOpen(false)}
      >
        <aside
          className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-80
            flex-col
            bg-base-100
            p-8
            shadow-2xl
            transition-transform
            duration-500
            ease-[cubic-bezier(0.77,0,0.175,1)]
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-10 flex items-center justify-between">
            <img src="/logo.png" className="h-10 w-auto" alt="Logo" />

            <button onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>

            <Link to="/about-us" className={navLinkClass}>
              About
            </Link>

            <Link to="/family-law/divorce" className={navLinkClass}>
              Divorce
            </Link>

            <Link to="/family-law/child-custody" className={navLinkClass}>
              Child Custody
            </Link>
            <Link to="/estate-planning/wills" className={navLinkClass}>
              Wills
            </Link>

            <Link to="/estate-planning/trusts" className={navLinkClass}>
              Trusts
            </Link>

            <Link to="/resources/blog" className={navLinkClass}>
              Blog
            </Link>

            <Link to="/resources/faqs" className={navLinkClass}>
              FAQs
            </Link>
            <Link to="/contact-us" className={navLinkClass}>
              Contact
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
