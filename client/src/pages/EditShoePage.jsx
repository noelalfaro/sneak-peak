import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const EditShoePage = ({ user }) => {
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
			const result = await fetch(`/api/shoes/edit/${id}`);

			if (result.ok) {
				const data = await result.json();
				setShoe(data);
				console.log(data);
			} else {
				throw new Error("Failed to fetch shoe data");
			}
		};

		fetchShoe();
	}, [id]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setShoe({
			...shoe,
			[name]: value,
		});
	};

	const updateShoe = async (event) => {
		event.preventDefault();

		try {
			const options = {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(shoe),
			};
			console.log(shoe);

			const response = await fetch(`/api/shoes/edit/${id}`, options);

			if (response.ok) {
				console.log("Shoe updated successfully");
				window.location.href = "/dashboard";
				// Handle success, maybe redirect or show a success message
			} else {
				throw new Error("Failed to update the shoe");
			}
		} catch (error) {
			console.error("Error updating the shoe:", error);
			// Handle the error, maybe set an error state or display an error message to the user
		}
	};

	const deleteShoe = async () => {
		try {
			const options = {
				method: "DELETE",
			};

			const response = await fetch(`/api/shoes/edit/${id}`, options);

			if (response.ok) {
				console.log("Shoe deleted successfully");
				window.location.href = "/";
			} else {
				throw new Error("Failed to delete the shoe");
			}
		} catch (error) {
			console.error("Error deleting the shoe:", error);
		}
	};

	return (
		<>
			<Header user={user} />
			<form className="w-96 flex items-start  flex-col gap-4 p-4">
				<label className="mb-1">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					value={shoe.name || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<label className="mb-1">Brand</label>
				<input
					type="text"
					name="brand"
					id="brand"
					value={shoe.brand || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<label className="mb-1">Color</label>
				<input
					type="text"
					name="color"
					id="color"
					value={shoe.color || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<label className="mb-1">Description</label>
				<textarea
					rows="5"
					cols="50"
					id="description"
					name="description"
					value={shoe.description || ""}
					onChange={handleChange}
					className="border rounded-lg p-2 w-full"
				></textarea>

				<label className="mb-1">Material</label>
				<input
					type="text"
					name="material"
					id="material"
					value={shoe.material || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<label className="mb-1">Technologies</label>
				<input
					type="text"
					name="technologies"
					id="technologies"
					value={shoe.technologies || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<label className="mb-1">Sizing Recommendations</label>
				<input
					type="text"
					name="sizing_recommendations"
					id="sizing_recommendations"
					value={shoe.sizing_recommendations || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<label className="mb-1">Image URL</label>
				<input
					type="text"
					name="img_URL"
					id="img_URL"
					value={shoe.img_url || ""}
					onChange={handleChange}
					className="border rounded-lg p-2"
				/>

				<button
					type="submit"
					onClick={updateShoe}
					className="bg-blue-500 text-white rounded-lg p-2"
				>
					Update Shoe
				</button>

				<button
					type="button"
					onClick={deleteShoe}
					className="bg-red-500 text-white rounded-lg p-2"
				>
					Delete Shoe
				</button>
			</form>
		</>
	);
};

export default EditShoePage;
