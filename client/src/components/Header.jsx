import React from "react";
import { Link } from "react-router-dom";
import GithubLogout from "./GithubLogout";
import PlusCard from "./PlusCard";
import ProfileCard from "./ProfileCard";

const Header = ({ user }) => {
	return (
		<div className="w-full flex flex-col items-start p-4 lg:flex-row lg:justify-between">
			<div className="w-full flex  justify-center lg:justify-start lg:w-1/2">
				<Link
					to={"/dashboard"}
					className="text-current hover:text-current"
				>
					<h1 className="text-4xl font-bold text-center py-4">Sneak-Peak 👟</h1>
				</Link>
			</div>

			<div className="w-full flex gap-4 justify-center lg:justify-end  lg:w-1/2">
				<Link
					to={"/add"}
					className="text-current hover:text-current"
				>
					<PlusCard />
				</Link>

				<ProfileCard user={user} />

				<GithubLogout />
			</div>
		</div>
	);
};

export default Header;
