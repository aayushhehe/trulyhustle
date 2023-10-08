import React from "react";
import logo from "./Ts.png";

function Navbar() {
  return (
    <>
      <header className="flex justify-center h-[10vh] items-center">
        <nav className="bg-[#FFFFFF] p-4 rounded-2xl h-[75%] lg:w-[25%] w-[60%]">
          <ul className="flex items-center justify-evenly">
            <li>
              <img src={logo} className="w-[85%] h-[85%] "></img>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#FDF1E8] rounded-xl">
                Features
              </button>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#FDF1E8] rounded-xl ">
                About
              </button>
            </li>
            <li>
              <button className="transform transition duration-500 py-2 px-3 hover:bg-[#FDF1E8] rounded-xl">
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
