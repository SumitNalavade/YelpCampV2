import { signIn } from "next-auth/react";

const SignedOutNav: React.FC = () => {
  return (
    <div className="avatar cursor-pointer" tabIndex={0} onClick={() => signIn()}>
      <div className="w-8 rounded-full">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
      </div>
    </div>
  );
};

export default SignedOutNav;
