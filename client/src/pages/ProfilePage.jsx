import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import ShoeCard from "../components/ShoeCard";
import SneakersNotFound from "../assets/hung-sneakers.png";

const ProfilePage = ({ user }) => {
  const [userShoes, setUserShoes] = useState([]);
  const { username } = useParams();
  // console.log(username);
  const [profile, setProfile] = useState({});

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://sneak-peak-server.up.railway.app"
      : "http://localhost:3001";

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${API_URL}/api/users/${username}`);
      if (response.ok) {
        const user = await response.json();
        setProfile(user);
      } else {
        console.error("Failed to fetch user 😭");
      }
    };

    const fetchUserShoes = async () => {
      const response = await fetch(`${API_URL}/api/shoes/user/${username}`);
      if (response.ok) {
        const shoes = await response.json();

        setUserShoes(shoes);
        // console.log(shoes);
      } else {
        console.error("Failed to fetch user shoes");
      }
    };
    fetchUserShoes();
    fetchUser();
  }, [username, API_URL]);

  return (
    <>
      <Header user={user} />

      <div className="flex w-full place-content-center justify-start p-6 text-center  ">
        <img
          src={
            username === profile.username ? profile.avatarurl : SneakersNotFound
          }
          className="w-1/4 rounded-md"
          alt="profile-pic.png"
        />
        <div className="m-3 flex w-3/4 flex-col justify-start">
          <h1 className="w-fit text-4xl font-bold ">{username}</h1>
          <ul className="place-content-start text-left">
            <li>Status: {userShoes.length > 5 ? "sneakerhead" : "newbie"} </li>
            <li>User: {profile.id}</li>
            <li>Shoes in Locker: {userShoes.length}</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-2xl font-bold">Locker</h2>
        <div className="flex flex-wrap">
          {userShoes.map((shoe, index) => (
            <div key={index} className="w-full p-4 md:w-1/2 lg:w-1/3">
              <ShoeCard shoe={shoe} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
