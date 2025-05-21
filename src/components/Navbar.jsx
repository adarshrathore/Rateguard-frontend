import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import insurance from "/images/insurance-bg.jpg";  // ✅ correct variable name

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          {/* <h1 to="/" className="logo">Rateguard</h1> */}
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Rateguard Analytics</NavLink>
        </div>
        <div className="navbar-right">
          <div className="">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
            <NavLink to="/" state={{ scrollTo: "services" }} className={({ isActive }) => (isActive ? "" : "")}>
              Services
            </NavLink>

            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
          </div>

        </div>
      </nav>


    </div>
  );
};

export default Navbar;
