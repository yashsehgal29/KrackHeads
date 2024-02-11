import React from "react";
import { NavLink } from "react-router-dom";
const Navbar2 = () => {
  return (
    <div>
      <div className="flex items-center gap-[50px] ">
        <NavLink to="/" className="nav-link">
          <div className="text-black text-[25px] font-normal font-['Kumbh Sans']  ">
            Home
          </div>
        </NavLink>
        {/* About page */}
        <NavLink to="/about" className="nav-link">
          {" "}
          <div className="text-black text-[25px] font-normal font-['Kumbh Sans']">
            About us
          </div>
        </NavLink>
        {/* Services */}
        <NavLink to="/services" className="nav-link">
          {" "}
          <div className="text-black text-[25px] font-normal font-['Kumbh Sans']">
            Services
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar2;
