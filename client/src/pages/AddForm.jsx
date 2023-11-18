import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlusCard from "../components/PlusCard";
import { Header } from "../components/header";

const AddShoeForm = ({ user }) => {
	const [shoe, setShoe] = useState({
		name: "",
		brand: "",
		color: "",
		description: "",
		material: "",
		technologies: "",
		sizing_recommendations: "",
		img_URL: "",
		submitted_by: user.username,
	});
	const [formSuccess, setFormSuccess] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setShoe({ ...shoe, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(shoe),
			};

			const response = await fetch("/api/shoes", options);

			if (response.ok) {
				const addedShoe = await response.json();
				console.log("Shoe added successfully:", addedShoe);

				// Clear the form after submission
				setShoe({
					name: "",
					brand: "",
					color: "",
					description: "",
					material: "",
					technologies: "",
					sizing_recommendations: "",
					img_URL: "",
					submitted_by: user.username,
				});
				setFormSuccess(true);

				window.location.href = "/dashboard";
			} else {
				throw new Error("Failed to add the shoe");
			}
		} catch (error) {
			console.error("Error adding the shoe:", error);
			setFormSuccess(false);
			// Here you would handle the error, maybe setting an error state or displaying a message to the user
		}
	};

	return (
		<>
			{/* <div className="container flex flex-col items-center  lg:flex-row justify-between text-center "> */}
			<Header user={user} />
			<form
				className="w-96 flex lg:mx-auto flex-col gap-4 p-4"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="name"
					placeholder="Shoe Name"
					value={shoe.name}
					onChange={handleChange}
					className="border rounded-lg p-2"
					required
				/>
				<input
					type="text"
					name="brand"
					placeholder="Brand"
					value={shoe.brand}
					onChange={handleChange}
					className="border rounded-lg p-2"
					required
				/>
				<input
					type="text"
					name="color"
					placeholder="Shoe Colorway"
					value={shoe.color}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>
				<textarea
					name="description"
					placeholder="Description"
					value={shoe.description}
					onChange={handleChange}
					className="border rounded-lg p-2"
					required
				/>
				<input
					type="text"
					name="material"
					placeholder="Materials"
					value={shoe.material}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>
				<input
					type="text"
					name="technologies"
					placeholder="Technologies"
					value={shoe.technologies}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>
				<input
					type="text"
					name="sizing_recommendations"
					placeholder="Sizing Recommendations"
					value={shoe.sizing_recommendations}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>
				<input
					type="text"
					name="img_URL"
					placeholder="Image URL"
					value={shoe.img_URL}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>
				{!formSuccess && (
					<div className="p-4  border-red-600 rounded-lg border-2">
						<p className="text-red-600 font-bold">
							There was a problem submitting this shoe, try again.
						</p>
					</div>
				)}

				<button
					type="submit"
					className="bg-blue-500 text-white rounded-lg p-2"
				>
					Add Shoe
				</button>
			</form>
		</>
	);
};

export default AddShoeForm;
