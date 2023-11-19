import React from "react";
import { Link } from "react-router-dom";
import GithubLogout from "./GithubLogout";
import PlusCard from "./PlusCard";
import ProfileCard from "./ProfileCard";

const Header = ({ user }) => {
  return (
    <div className="flex w-full flex-col items-center p-4 lg:flex-row lg:justify-between">
      <div className="flex w-full  justify-center lg:w-1/2 lg:justify-start">
        <Link to={"/dashboard"} className="text-current hover:text-current">
          <h1 className="py-4 text-center text-4xl font-bold">Sneak-Peak 👟</h1>
        </Link>
      </div>

      <div className="flex h-full  w-full flex-nowrap place-content-center items-center gap-4 lg:w-1/2  lg:justify-end">
        <Link to={"/add"} className="text-current hover:text-current">
          <PlusCard />
        </Link>

        <ProfileCard user={user} />

        <GithubLogout />
      </div>
    </div>
  );
};

export default Header;
