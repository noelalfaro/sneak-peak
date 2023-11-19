import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
  return (
    <>
      <Link
        to={"/user/" + user.username}
        className="text-current hover:text-current"
      >
        <button
          className="flex w-fit items-center justify-center gap-2 rounded-lg border p-2 text-left shadow-md lg:p-4 "
          style={{ cursor: "pointer" }}
        >
          {user.username}
          <img
            width={"25px"}
            src={user.avatarurl}
            alt={user.username + "profile-picture.jpg"}
          />
        </button>
      </Link>
    </>
  );
};

export default ProfileCard;
