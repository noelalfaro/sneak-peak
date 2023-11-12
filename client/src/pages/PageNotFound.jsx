import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

const PageNotFound = ({ user }) => {
	return (
		<>
			<Header user={user} />
			<div className="flex flex-col mt-20 w-full place-content-center items-center">
				<h1 className="font-bold place-content-center">Page not found. 😕</h1>

				<Link
					to={"/welcome"}
					className="text-current hover:text-current"
				>
					<button className="w-fit m-4">Go Back Home</button>
				</Link>
			</div>
		</>
	);
};

export default PageNotFound;
