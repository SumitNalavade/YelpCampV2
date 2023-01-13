import Link from "next/link";
import { signOut } from "next-auth/react";

import { User } from "next-auth";

interface SignedInNavProps {
  user: User;
}

const SignedInNav: React.FC<SignedInNavProps> = ({ user }) => {
  return (
    <ul>
      <Link href="/campgrounds/new"><li className="mx-2"><button className="btn btn-secondary btn-sm text-white">New Campground</button></li></Link>
      <li className="mx-2"><div className="dropdown dropdown-bottom dropdown-end">
      <div className="avatar" tabIndex={0}>
        <div className="w-8 rounded-full">
          <img src={user.image!} />
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        
        <div className="p-4 flex flex-col justify-center items-center">
            <div>
                <img src={user.image!} alt="" className="rounded-full w-full w-14" />
            </div>
            <p className="font-medium my-2">{user.name}</p>
            <Link href={"/user/campgrounds"} className="btn btn-primary btn-sm w-full my-2 text-xs text-white">My Campgrounds</Link>
            <button className="btn btn-secondary btn-sm w-full my-2 text-xs text-white" onClick={() => signOut()}>Sign Out</button>
        </div>

      </div>
    </div></li>
    </ul>
  );
};

export default SignedInNav;
