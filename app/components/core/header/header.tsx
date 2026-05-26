import React from "react";
import { Link } from "react-router";
import "./Header.css"; // Import your custom CSS
import { getImageUrl } from "../../../utils";
const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/"><img src={getImageUrl("logo.png")} className="h-16 w-auto"/></Link>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost"><Link to="/">Home</Link></a>
          <a className="btn btn-ghost"><Link to="/about-us">About</Link></a>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              Family Law
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              Estate Planning
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              Resources
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <a className="btn btn-ghost">Contact US</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
<ul className="nav-links"></ul>;
