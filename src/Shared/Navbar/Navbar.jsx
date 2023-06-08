import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.jpg";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link>home</Link>
      </li>
      <li>
        <Link> about</Link>
      </li>
      <li>
        <Link>category</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-blue-900 to-purple-500">
            <div className="avatar">
              <div className="w-14 h-10  rounded">
                <img src={logo} />
              </div>
            </div>
            <p className="text-white font-extrabold">Sports</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
