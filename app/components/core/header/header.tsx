import React from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

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
  h-[2px]
  w-full
  bg-accent
  origin-right
  scale-x-0
  transform-gpu
  transition-transform
  duration-500
  ease-[cubic-bezier(0.77,0,0.175,1)]
  group-hover:origin-left
  group-hover:scale-x-100
  will-change-transform
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
  const [activeDesktopDropdown, setActiveDesktopDropdown] = React.useState<
    "familyLaw" | "estatePlanning" | null
  >(null);

  const closeDesktopDropdown = React.useCallback(() => {
    setActiveDesktopDropdown(null);
  }, []);

  React.useEffect(() => {
    if (!activeDesktopDropdown) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-desktop-dropdown]")) return;
      setActiveDesktopDropdown(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [activeDesktopDropdown]);

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      setActiveDesktopDropdown(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (mobileOpen) closeButtonRef.current?.focus();
  }, [mobileOpen]);

  const dropdownProps = (name: "familyLaw" | "estatePlanning") => ({
    onMouseEnter: () => setActiveDesktopDropdown(name),
    onMouseLeave: () =>
      setActiveDesktopDropdown((current) => (current === name ? null : current)),
    onFocus: () => setActiveDesktopDropdown(name),
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setActiveDesktopDropdown((current) => (current === name ? null : current));
      }
    },
  });

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
          border-b-[0.5px]
          border-primary
          bg-base-100/95
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
            <img src="/logo.png" className="h-12 w-auto lg:h-16" alt="Willison Law, PC - Home" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          <Link to="/" className={navLinkClass}>
            Home
            <span className={underlineClass} />
          </Link>

          <Link to="/about-us" className={navLinkClass}>
            About
            <span className={underlineClass} />
          </Link>

          <div
            data-desktop-dropdown
            className="relative"
            {...dropdownProps("familyLaw")}
          >
            <Link
              to="/family-law"
              className={navLinkClass}
              onClick={closeDesktopDropdown}
            >
              Family Law
              <span className={underlineClass} />
            </Link>

            {activeDesktopDropdown === "familyLaw" ? (
              <ul tabIndex={0} className={`${dropdownClass} absolute`}>
                <li>
                  <Link to="/family-law/divorce" className={dropdownItemClass} onClick={closeDesktopDropdown}>
                    Divorce
                  </Link>
                </li>

                <li>
                  <Link
                    to="/family-law/child-custody"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Child Custody
                  </Link>
                </li>

                <li>
                  <Link
                    to="/family-law/child-support"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Child Support
                  </Link>
                </li>

                <li>
                  <Link
                    to="/family-law/domestic-violence"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Domestic Violence
                  </Link>
                </li>

                <li>
                  <Link
                    to="/family-law/legal-separation"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Legal Separation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/family-law/grandparents-rights"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Grandparents Rights
                  </Link>
                </li>

                <li>
                  <Link to="/family-law/mediation" className={dropdownItemClass} onClick={closeDesktopDropdown}>
                    Mediation
                  </Link>
                </li>

                <li>
                  <Link to="/family-law/paternity" className={dropdownItemClass} onClick={closeDesktopDropdown}>
                    Paternity
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          {/* Estate Planning */}
          <div
            data-desktop-dropdown
            className="relative"
            {...dropdownProps("estatePlanning")}
          >
            <Link
              to="/estate-planning"
              className={navLinkClass}
              onClick={closeDesktopDropdown}
            >
              Estate Planning
              <span className={underlineClass} />
            </Link>

            {activeDesktopDropdown === "estatePlanning" ? (
              <ul tabIndex={0} className={`${dropdownClass} absolute`}>
                <li>
                  <Link
                    to="/estate-planning/issues"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Issues
                  </Link>
                </li>

                <li>
                  <Link
                    to="/estate-planning/process"
                    className={dropdownItemClass}
                    onClick={closeDesktopDropdown}
                  >
                    Process
                  </Link>
                </li>

                <li>
                  <Link to="/estate-planning/wills" className={dropdownItemClass} onClick={closeDesktopDropdown}>
                    Wills
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
          <Link to="/contact-us" className={navLinkClass}>
            Contact
            <span className={underlineClass} />
          </Link>
          <a href="tel:+19284453334" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary text-white">
            (928) 445-3534
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        inert={!mobileOpen}
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
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`
            absolute
            right-6
            top-0
            flex
            h-full
            w-80
            max-w-[calc(100vw-1.5rem)]
            flex-col
            bg-base-100
            p-6
            shadow-2xl
            transition-transform
            duration-500
            ease-[cubic-bezier(0.77,0,0.175,1)]
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-10 flex items-center justify-between">
            <img src="/logo.png" className="h-10 w-auto" alt="Willison Law, PC" />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-6">
            <Link to="/" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <Link to="/about-us" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              About
            </Link>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setFamilyLawOpen((open) => !open)}
                aria-expanded={familyLawOpen}
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
                aria-expanded={estatePlanningOpen}
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
                    to="/estate-planning/wills"
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    Wills
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact-us" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <a
              href="tel:+19284453334"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              (928) 445-3534
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
