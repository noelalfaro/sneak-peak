import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SneakersNotFound from "../assets/hung-sneakers.png";

const PageNotFound = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <div className="mt-20 flex w-full flex-col place-content-center items-center">
        <h2 className="place-content-center text-4xl font-bold">
          Page not found. 😕
        </h2>
        <img
          className="m-4 w-1/2"
          src={SneakersNotFound}
          alt="hung-sneakers.png"
        />

        <Link to={"/dashboard"} className="text-current hover:text-current">
          <button className="m-4 w-fit">Go Back Home</button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
