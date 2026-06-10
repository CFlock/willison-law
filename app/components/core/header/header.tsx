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
  hover:text-primary
  active:bg-primary
  active:text-white
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [familyLawOpen, setFamilyLawOpen] = React.useState(false);
  const [estatePlanningOpen, setEstatePlanningOpen] = React.useState(false);
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
            <Link to="/family-law" className={navLinkClass}>
              Family Law
              <span className={underlineClass} />
            </Link>

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

              <li>
                <Link
                  to="/family-law/child-support"
                  className={dropdownItemClass}
                >
                  Child Support
                </Link>
              </li>

              <li>
                <Link
                  to="/family-law/domestic-violence"
                  className={dropdownItemClass}
                >
                  Domestic Violence
                </Link>
              </li>

              <li>
                <Link
                  to="/family-law/legal-separation"
                  className={dropdownItemClass}
                >
                  Legal Separation
                </Link>
              </li>

              <li>
                <Link
                  to="/family-law/grandparents-rights"
                  className={dropdownItemClass}
                >
                  Grandparents Rights
                </Link>
              </li>

              <li>
                <Link to="/family-law/mediation" className={dropdownItemClass}>
                  Mediation
                </Link>
              </li>

              <li>
                <Link to="/family-law/paternity" className={dropdownItemClass}>
                  Paternity
                </Link>
              </li>
            </ul>
          </div>

          {/* Estate Planning */}
          <div className="dropdown dropdown-hover">
            <Link to="/estate-planning" className={navLinkClass}>
              Estate Planning
              <span className={underlineClass} />
            </Link>

            <ul tabIndex={0} className={dropdownClass}>
              <li>
                <Link to="/estate-planning/issues" className={dropdownItemClass}>
                  Issues
                </Link>
              </li>

              <li>
                <Link to="/estate-planning/process" className={dropdownItemClass}>
                  Process
                </Link>
              </li>

              <li>
                <Link to="/estate-planning/trusts" className={dropdownItemClass}>
                  Trusts
                </Link>
              </li>

              <li>
                <Link to="/estate-planning/wills" className={dropdownItemClass}>
                  Wills
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
          z-60
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

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setFamilyLawOpen((open) => !open)}
                className={`${navLinkClass} flex items-center justify-between`}
              >
                <span>Family Law</span>
                <span className="inline-flex h-6 w-6 items-center justify-center text-lg leading-none">
                  {familyLawOpen ? "−" : "+"}
                </span>
              </button>
              {familyLawOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  <Link
                    to="/family-law"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/family-law/divorce"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Divorce
                  </Link>
                  <Link
                    to="/family-law/child-custody"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Child Custody
                  </Link>
                  <Link
                    to="/family-law/child-support"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Child Support
                  </Link>
                  <Link
                    to="/family-law/domestic-violence"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Domestic Violence
                  </Link>
                  <Link
                    to="/family-law/legal-separation"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Legal Separation
                  </Link>
                  <Link
                    to="/family-law/grandparents-rights"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Grandparents Rights
                  </Link>
                  <Link
                    to="/family-law/mediation"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Mediation
                  </Link>
                  <Link
                    to="/family-law/paternity"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Paternity
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setEstatePlanningOpen((open) => !open)}
                className={`${navLinkClass} flex items-center justify-between`}
              >
                <span>Estate Planning</span>
                <span className="inline-flex h-6 w-6 items-center justify-center text-lg leading-none">
                  {estatePlanningOpen ? "−" : "+"}
                </span>
              </button>
              {estatePlanningOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  <Link
                    to="/estate-planning"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/estate-planning/issues"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Issues
                  </Link>
                  <Link
                    to="/estate-planning/process"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Process
                  </Link>
                  <Link
                    to="/estate-planning/trusts"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Trusts
                  </Link>
                  <Link
                    to="/estate-planning/wills"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Wills
                  </Link>
                </div>
              )}
            </div>

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
