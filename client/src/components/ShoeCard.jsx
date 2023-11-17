import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const ShoeCard = ({ user, shoe }) => {
	return (
		<div className="flex flex-col  justify-start border rounded-lg shadow-md p-6 text-left gap-4 cursor-pointer ">
			<Link
				as="li"
				to={"/shoe/" + shoe.id}
				className="text-current hover:text-current flex flex-col gap-2"
			>
				<div className="aspect-w-16 aspect-h-9">
					<div className="relative">
						<img
							src={shoe.img_url}
							alt={shoe.name}
							className="object-cover w-full h-64 rounded-lg min-h-max"
						/>
					</div>
				</div>
				<h2 className="text-xl font-semibold">{shoe.name}</h2>
				<h3 className="text-l font-semibold">{shoe.brand}</h3>
				<p>{shoe.description}</p>
			</Link>
			<Link
				as="li"
				to={"/user/" + shoe.submitted_by}
				className="text-current hover:text-current"
			>
				<h3 className="text-l font-semibold inline">
					Submitted By:{" "}
					<p className="text-blue-600 inline">{shoe.submitted_by}</p>
				</h3>
			</Link>
		</div>
	);
};

export default ShoeCard;
