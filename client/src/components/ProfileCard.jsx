import React from "react";

const ProfileCard = ({ user }) => {
	return (
		<>
			<button
				className="flex justify-center items-center border rounded-lg shadow-md p-2 lg:p-4 text-left gap-2 w-fit "
				style={{ cursor: "pointer" }}
			>
				{user.username}
				<img
					width={"25px"}
					src={user.avatarurl}
					alt={user.username + "profile-picture.jpg"}
				/>
			</button>{" "}
		</>
	);
};

export default ProfileCard;
