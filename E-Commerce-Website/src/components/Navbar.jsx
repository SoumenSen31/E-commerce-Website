import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50 lg:px-10 navbar backdrop-blur-lg shadow-xl">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            Shopi{""}
            <span className="text-orange-500">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link to="/auth" className="btn btn-outline btn-primary">
            Login
          </Link>
          <Link to="/auth" className="btn btn-outline text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
