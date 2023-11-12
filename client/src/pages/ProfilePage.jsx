import React from "react";
import Header from "../components/header";

const ProfilePage = ({ user }) => {
	return (
		<>
			<Header user={user} />

			<div className="w-full flex place-content-center justify-center text-center">
				<img
					src={user.avatarurl}
					className="w-1/4"
					alt=""
				/>
				<h1> Hi there, {user.username}</h1>
			</div>
		</>
	);
};

export default ProfilePage;
