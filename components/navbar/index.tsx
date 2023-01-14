import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { User } from "next-auth";

import SignedInNav from "./SignedInNav";
import SignedOutNav from "./SignedOutNav";

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="container mx-auto navbar text-neutral">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case text-xl text-secondary"
            href="/campgrounds"
          >
            YelpCamp
          </Link>
        </div>
        { session ? <SignedInNav user={session.user as User} /> : <SignedOutNav /> }
      </div>
      <hr />
    </>
  );
};

export default Navbar;
