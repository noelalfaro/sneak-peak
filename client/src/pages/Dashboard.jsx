import React from "react";
import ShoeCard from "../components/ShoeCard";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

const Dashboard = ({ user }) => {
	const [shoes, setShoes] = useState([]);

	const API_URL =
		process.env.NODE_ENV === "production"
			? "https://sneak-peak-server.up.railway.app"
			: "http://localhost:3001";

	useEffect(() => {
		const fetchShoes = async () => {
			const response = await fetch(`${API_URL}/api/shoes`);
			const data = await response.json();
			setShoes(data);
			console.log(data);

			console.log("error" + error);
		};
		fetchShoes();
	}, [API_URL]);

	return (
		<>
			<Header user={user} />
			<div className="w-full mx-auto py-4">
				<div className="flex flex-wrap">
					{shoes.map((shoe, index) => (
						<div
							key={index}
							className="w-full md:w-1/2 lg:w-1/3 p-4"
						>
							<ShoeCard
								shoe={shoe}
								key={index}
								user={user}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
