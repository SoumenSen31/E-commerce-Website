import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="">
      <div className="sticky top-0 z-50 lg:px-10 navbar backdrop-blur-lg shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/checkout">🛒Cart</Link></li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl">
            Shopi<span className="text-orange-500">-Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>Home</Link>
            </li>
            <li>
              <Link to="/checkout"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>Cart</Link>
            </li>
          </ul>
        </div>
        {!user ? (
          <div className="navbar-end gap-5">
            {/* <Link to="/auth" className="btn btn-outline btn-primary">
              Login
            </Link>
            <Link
              to="/auth"
              className="btn btn-outline text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Signup
            </Link> */}
            <Link to="/auth?mode=login" className="btn btn-outline btn-primary">
              Login
            </Link>

            <Link
              to="/auth?mode=signup"
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
