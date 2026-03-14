import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
        {!user ? (
          <div className="navbar-end gap-5">
            <Link to="/auth" className="btn btn-outline btn-primary">
              Login
            </Link>
            <Link
              to="/auth"
              className="btn btn-outline text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="navbar-end gap-5">
            <div className="avatar hover:cursor-pointer">
              <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <button className="btn btn-dash btn-error" onClick={() => logOut()}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
