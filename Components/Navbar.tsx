import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
    <div className="container mx-auto navbar text-secondary">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/campgrounds">YelpCamp</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => signIn()}>Sign In</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Navbar;