import React from "react";

const dashboard = () => {
  return (
    <div>
      <div className="flex flex-col w-[15vw] h-[100vh]">
        <ul className="text-center">
          <li>LOGO</li>
          <li>Dashboard</li>
          <li>Learn</li>
          <li>Settings</li>
        </ul>
        <div className="align-bottom">
          <ul>
            <li>User</li>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
