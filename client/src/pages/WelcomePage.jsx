import ShoeCard from "../components/ShoeCard";
import PlusCard from "../components/PlusCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GithubLogin from "../components/GithubLogin";

function WelcomePage() {
  return (
    <>
      <div className="flex w-full flex-col items-center p-4 lg:flex-row lg:justify-between">
        <Link to={"/"} className="text-current hover:text-current">
          <h1 className="py-4 text-center text-4xl font-bold">Sneak-Peak 👟</h1>
        </Link>
      </div>

      <div className="w-full p-4 lg:p-4">
        <h3 className=" flex items-start justify-start text-left text-2xl font-bold">
          Welcome to Shoehead Repository, where every step tells a story!
          Whether you're a sneaker newbie looking to build your collection or a
          seasoned sneakerhead showcasing your style, our platform is your
          digital closet.
          <br />
          <br />
          Easily catalog, explore, and highlight your favorite kicks in one
          place, connecting with a community passionate about the art of the
          sole.
        </h3>
      </div>
      <GithubLogin />
    </>
  );
}

export default WelcomePage;
