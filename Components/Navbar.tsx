import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-primary text-teritary sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">YelpCamp</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Sign In</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;