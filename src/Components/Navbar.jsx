import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-col items-center justify-center h-1/6 ">
      <div className="flex items-center justify-around py-5 ">
        <div className="flex mr-[100px] items-center ">
          <Link to="/">
            <div>
              <span className="text-rose-500 text-[70px] font-normal font-['Kumbh Sans']">
                Aid
              </span>
              <span className="text-black text-[70px] font-normal font-['Kumbh Sans']">
                wise
              </span>
            </div>
          </Link>
        </div>
        {/* Navbar */}

        {/* Login sign up button */}

        <NavLink to="/logsign" className="your-class-name">
          <div>Login</div>
        </NavLink>
      </div>
      {/* Navbar closes */}
    </div>
  );
};

export default Navbar;
