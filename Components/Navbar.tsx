import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

interface SignedInNavProps {
  user: any;
}
const SignedInNav: React.FC<SignedInNavProps> = ({ user }) => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <div className="avatar">
            <div className="w-6 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={user.image} onClick={() => signOut()} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

const SignedOutNav: React.FC = () => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => signIn()}>Sign In</a>
          </li>
        </ul>
    </div>
  );
};

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="container mx-auto navbar text-secondary">
        <div className="flex-1">
          <Link
            className="btn btn-ghost normal-case text-xl"
            href="/campgrounds"
          >
            YelpCamp
          </Link>
        </div>
        { session ? <SignedInNav user={session?.user} /> : <SignedOutNav /> }
      </div>
      <hr />
    </>
  );
};

export default Navbar;
