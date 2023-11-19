import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlusCard from "../components/PlusCard";
import Header from "../components/Header";

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

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://sneak-peak-server.up.railway.app"
      : "http://localhost:3001";

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

      const response = await fetch(`${API_URL}/api/shoes`, options);

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
        setFormSuccess(false);
        throw new Error("Failed to add the shoe");
      }
    } catch (error) {
      console.error("Error adding the shoe:", error);
    }
  };

  return (
    <>
      {/* <div className="container flex flex-col items-center  lg:flex-row justify-between text-center "> */}
      <Header user={user} />
      <form
        className="flex w-96 flex-col gap-4 p-4 lg:mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Shoe Name"
          value={shoe.name}
          onChange={handleChange}
          className="rounded-lg border p-2"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={shoe.brand}
          onChange={handleChange}
          className="rounded-lg border p-2"
          required
        />
        <input
          type="text"
          name="color"
          placeholder="Shoe Colorway"
          value={shoe.color}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={shoe.description}
          onChange={handleChange}
          className="rounded-lg border p-2"
          required
        />
        <input
          type="text"
          name="material"
          placeholder="Materials"
          value={shoe.material}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />
        <input
          type="text"
          name="technologies"
          placeholder="Technologies"
          value={shoe.technologies}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />
        <input
          type="text"
          name="sizing_recommendations"
          placeholder="Sizing Recommendations"
          value={shoe.sizing_recommendations}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />
        <input
          type="text"
          name="img_URL"
          placeholder="Image URL"
          value={shoe.img_URL}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />
        {!formSuccess && (
          <div className="rounded-lg  border-2 border-red-600 p-4">
            <p className="font-bold text-red-600">
              There was a problem submitting this shoe, try again.
            </p>
          </div>
        )}

        <button type="submit" className="rounded-lg bg-blue-500 p-2 text-white">
          Add Shoe
        </button>
      </form>
    </>
  );
};

export default AddShoeForm;
