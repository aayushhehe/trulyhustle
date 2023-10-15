import React from "react";
import logo from "./Ts.png";

function Navbar() {
  return (
    <>
      <header className="flex justify-evenly h-[10vh] items-center header">
        <nav className="p-4 rounded-2xl lg:w-[25%] w-[60%] nav mt-4">
          <ul className="flex items-center justify-evenly">
            <li>
              <img src={logo} className="w-[85%] h-[85%] "></img>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#ffffff] rounded-xl">
                Features
              </button>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#ffffff] rounded-xl ">
                About
              </button>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#ffffff] rounded-xl">
                Learn
              </button>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#fbdb96] font-medium py-2 px-[1.5rem] bg-[#ffb800] rounded-xl">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
