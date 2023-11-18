import React from "react";
import ShoeCard from "../components/ShoeCard";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

const Dashboard = ({ user }) => {
	const [shoes, setShoes] = useState([]);

	useEffect(() => {
		const fetchShoes = async () => {
			const response = await fetch("/api/shoes");
			const data = await response.json();
			setShoes(data);
		};
		console.log(data);

		fetchShoes();
	}, []);

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
