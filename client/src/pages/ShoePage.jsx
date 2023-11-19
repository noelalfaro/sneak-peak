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

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://sneak-peak-server.up.railway.app"
      : "http://localhost:3001";

  useEffect(() => {
    const fetchShoe = async () => {
      const result = await fetch(`${API_URL}/api/shoes/${id}`);

      if (result.ok) {
        const data = await result.json();
        setShoe(data);
        // console.log(data);
      } else {
        throw new Error("Failed to fetch shoe data");
      }
    };
    fetchShoe();
  }, [id, API_URL]);

  const handleDelete = async (event) => {
    event.preventDefault();

    const options = {
      method: "DELETE",
    };

    await fetch(`${API_URL}/api/shoes/edit/` + id, options);
    window.location.href = "/dashboard";
  };

  return (
    <>
      <Header user={user} />
      <div className="flex w-full flex-col place-content-center justify-start gap-4 p-6 text-center">
        {/* Display all shoe properties */}
        <h2 className="mb-2 text-2xl font-bold">{shoe.name}</h2>
        <div className="mt-6 flex flex-col place-content-center items-center justify-center gap-4 lg:flex-row">
          <img
            className="w-1/3 rounded-md"
            src={shoe.img_url}
            alt={shoe.name + ".png"}
          />
          <ul className="w-full p-6 text-left text-xl">
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
            <div className="m-2 flex flex-col gap-2">
              <Link
                as="li"
                to={"/edit/shoe/" + shoe.id}
                className="flex flex-col gap-2 text-current hover:text-current"
              >
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-lg border bg-stone-500 p-2 text-left text-white lg:p-4 "
                  style={{ cursor: "pointer" }}
                >
                  Edit
                </button>
              </Link>
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border bg-red-600 p-2 text-left text-white lg:p-4"
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
