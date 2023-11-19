import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const ShoeCard = ({ user, shoe }) => {
  return (
    <div className="flex cursor-pointer  flex-col justify-start gap-4 rounded-lg border p-6 text-left shadow-md ">
      <Link
        as="li"
        to={"/shoe/" + shoe.id}
        className="flex flex-col gap-2 text-current hover:text-current"
      >
        <div className="aspect-w-16 aspect-h-9">
          <div className="relative">
            <img
              src={shoe.img_url}
              alt={shoe.name}
              className="h-64 min-h-max w-full rounded-lg object-cover"
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
        <h3 className="text-l inline font-semibold">
          Submitted By:{" "}
          <p className="inline text-blue-600">{shoe.submitted_by}</p>
        </h3>
      </Link>
    </div>
  );
};

export default ShoeCard;
