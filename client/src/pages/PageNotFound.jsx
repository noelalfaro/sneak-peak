import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import SneakersNotFound from "../../public/hung-sneakers.png";

const PageNotFound = ({ user }) => {
	return (
		<>
			<Header user={user} />
			<div className="flex flex-col mt-20 w-full place-content-center items-center">
				<h2 className="font-bold place-content-center text-4xl">
					Page not found. 😕
				</h2>
				<img
					className="w-1/2 m-4"
					src={SneakersNotFound}
					alt="hung-sneakers.png"
				/>

				<Link
					to={"/dashboard"}
					className="text-current hover:text-current"
				>
					<button className="w-fit m-4">Go Back Home</button>
				</Link>
			</div>
		</>
	);
};

export default PageNotFound;
