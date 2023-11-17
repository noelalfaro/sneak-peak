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
					className="flex justify-center items-center border rounded-lg shadow-md p-2 lg:p-4 text-left gap-2 w-fit "
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
