import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { useParams } from "react-router-dom";
import ShoeCard from "../components/ShoeCard";
import SneakersNotFound from "../assets/hung-sneakers.png";

const ProfilePage = ({ user }) => {
	const [userShoes, setUserShoes] = useState([]);
	const { username } = useParams();
	// console.log(username);
	const [profile, setProfile] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(`/api/users/${username}`);
				if (response.ok) {
					const user = await response.json();

					setProfile(user);
					// console.log("profile:" + profile);
					// console.log(user);
				} else {
					console.error("Failed to fetch user 😭");
				}
			} catch (error) {
				console.error("Error fetching user:", error);
			}
		};

		const fetchUserShoes = async () => {
			try {
				const response = await fetch(`/api/shoes/user/${username}`);
				if (response.ok) {
					const shoes = await response.json();

					setUserShoes(shoes);
					// console.log(shoes);
				} else {
					console.error("Failed to fetch user shoes");
				}
			} catch (error) {
				console.error("Error fetching user shoes:", error);
			}
		};
		fetchUserShoes();
		fetchUser();
	}, [username]);

	return (
		<>
			<Header user={user} />

			<div className="w-full flex place-content-center justify-start text-center p-6  ">
				<img
					src={
						username === profile.username ? profile.avatarurl : SneakersNotFound
					}
					className="w-1/4 rounded-md"
					alt="profile-pic.png"
				/>
				<div className="w-3/4 m-3 flex flex-col justify-start">
					<h1 className="text-4xl font-bold w-fit ">{username}</h1>
					<ul className="place-content-start text-left">
						<li>Status: {userShoes.length > 5 ? "sneakerhead" : "newbie"} </li>
						<li>User: {profile.id}</li>
						<li>Shoes in Locker: {userShoes.length}</li>
					</ul>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-2xl font-bold mb-2">Locker</h2>
				<div className="flex flex-wrap">
					{userShoes.map((shoe, index) => (
						<div
							key={index}
							className="w-full md:w-1/2 lg:w-1/3 p-4"
						>
							<ShoeCard
								shoe={shoe}
								key={index}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
