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

  const [formSuccess, setFormSuccess] = useState(true);

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://sneak-peak-server.up.railway.app"
      : "http://localhost:3001";

  useEffect(() => {
    const fetchShoe = async () => {
      const result = await fetch(`${API_URL}/api/shoes/edit/${id}`);

      if (result.ok) {
        const data = await result.json();
        setShoe(data);
        console.log(data);
      } else {
        throw new Error("Failed to fetch shoe data");
      }
    };

    fetchShoe();
  }, [id, API_URL]);

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

      const response = await fetch(`${API_URL}/api/shoes/edit/${id}`, options);

      if (response.ok) {
        console.log("Shoe updated successfully");
        window.location.href = "/dashboard";
        setFormSuccess(true);
        // Handle success, maybe redirect or show a success message
      } else {
        setFormSuccess(false);
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

      const response = await fetch(`${API_URL}/api/shoes/edit/${id}`, options);

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
      <form className="flex w-96 flex-col  items-start gap-4 p-4">
        <label className="mb-1">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={shoe.name || ""}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />

        <label className="mb-1">Brand</label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={shoe.brand || ""}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />

        <label className="mb-1">Color</label>
        <input
          type="text"
          name="color"
          id="color"
          value={shoe.color || ""}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />

        <label className="mb-1">Description</label>
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={shoe.description || ""}
          onChange={handleChange}
          className="w-full rounded-lg border p-2"
        ></textarea>

        <label className="mb-1">Material</label>
        <input
          type="text"
          name="material"
          id="material"
          value={shoe.material || ""}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />

        <label className="mb-1">Technologies</label>
        <input
          type="text"
          name="technologies"
          id="technologies"
          value={shoe.technologies || ""}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />

        <label className="mb-1">Sizing Recommendations</label>
        <input
          type="text"
          name="sizing_recommendations"
          id="sizing_recommendations"
          value={shoe.sizing_recommendations || ""}
          onChange={handleChange}
          className="rounded-lg border p-2"
        />

        <label className="mb-1">Image URL</label>
        <input
          type="text"
          name="img_URL"
          id="img_URL"
          value={shoe.img_url || ""}
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

        <button
          type="submit"
          onClick={updateShoe}
          className="rounded-lg bg-blue-500 p-2 text-white"
        >
          Update Shoe
        </button>

        <button
          type="button"
          onClick={deleteShoe}
          className="rounded-lg bg-red-500 p-2 text-white"
        >
          Delete Shoe
        </button>
      </form>
    </>
  );
};

export default EditShoePage;
