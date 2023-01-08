import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
    <div className="container mx-auto navbar text-secondary">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">YelpCamp</Link>
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
    <hr />
    </>
  );
};

export default Navbar;