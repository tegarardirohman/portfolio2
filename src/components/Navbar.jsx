import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="bg-white flex justify-between px-10 py-6 mt-10 items-center w-11/12 rounded-3xl m-auto sticky -mb-32 z-50">
        <div className="font-extrabold font-black text-4xl">  
            T.
        </div>
        <div className="hidden md:block">
            <ul className="flex items-center gap-9 text-gray-500 font-medium">
              <li className="hover:text-neutral-900">
                <NavLink className={({isActive}) => isActive ? "text-black" : ""} to="/">HOME</NavLink>
              </li>
              <li className="hover:text-neutral-900">
                <NavLink className={({isActive}) => isActive ? "text-black" : ""} to="/about">ABOUT</NavLink>
              </li>
              <li className="hover:text-neutral-900">
                <NavLink className={({isActive}) => isActive ? "text-black" : ""} to="/project">PROJECT</NavLink>
              </li>
              <li className="hover:text-neutral-900">
                <NavLink className={({isActive}) => isActive ? "text-black" : ""} to="/contact">CONTACT</NavLink>
              </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
