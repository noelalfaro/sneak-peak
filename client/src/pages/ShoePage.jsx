import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ShoePage = ({ user }) => {
	const { id } = useParams();
	const [shoe, setShoe] = useState({
		name: "",
		brand: "",
		color: "",
		description: "",
		material: "",
		technologies: "",
		sizing_recommendations: "",
		img_url: "",
		submitted_by: user.username,
	});

	useEffect(() => {
		const fetchShoe = async () => {
			try {
				const result = await fetch(`/api/shoes/${id}`);

				if (result.ok) {
					const data = await result.json();
					setShoe(data);
					// console.log(data);
				} else {
					throw new Error("Failed to fetch shoe data");
				}
			} catch (error) {
				console.log("error" + error);
			}
		};
		fetchShoe();
	}, [id]);

	const handleDelete = async (event) => {
		event.preventDefault();

		const options = {
			method: "DELETE",
		};

		await fetch("/api/shoes/edit/" + id, options);
		window.location.href = "/dashboard";
	};

	return (
		<>
			<Header user={user} />
			<div className="w-full flex flex-col place-content-center justify-start text-center p-6 gap-4">
				{/* Display all shoe properties */}
				<h2 className="text-2xl font-bold mb-2">{shoe.name}</h2>
				<div className="mt-6 flex place-content-center justify-center items-center gap-4">
					<img
						className="w-1/3 rounded-md"
						src={shoe.img_url}
						alt={shoe.name + ".png"}
					/>
					<ul className="text-left w-full p-6 text-xl">
						<li>
							<strong>Description:</strong> {shoe.description}
						</li>
						<li>
							{" "}
							<strong>Brand: </strong> {shoe.brand}
						</li>
						<li>
							<strong>Color:</strong> {shoe.color}
						</li>

						<li>
							<strong>Material: </strong> {shoe.material}
						</li>
						<li>
							<strong>Technologies:</strong> {shoe.technologies}
						</li>
						<li>
							<strong>Sizing Recommendations:</strong>{" "}
							{shoe.sizing_recommendations}
						</li>

						{/* Add more properties as needed */}
					</ul>
				</div>
				{user.username === shoe.submitted_by && (
					<>
						<div className="flex flex-col m-2 gap-2">
							<Link
								as="li"
								to={"/edit/shoe/" + shoe.id}
								className="text-current hover:text-current flex flex-col gap-2"
							>
								<button
									className="flex justify-center items-center border rounded-lg p-2 lg:p-4 text-left gap-2 w-full bg-stone-500 text-white "
									style={{ cursor: "pointer" }}
								>
									Edit
								</button>
							</Link>
							<button
								className="flex justify-center items-center border rounded-lg p-2 lg:p-4 text-left gap-2 w-full bg-red-600 text-white"
								style={{ cursor: "pointer" }}
								onClick={handleDelete}
							>
								Delete
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ShoePage;
