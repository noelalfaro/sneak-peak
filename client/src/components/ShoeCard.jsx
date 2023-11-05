// ShoeCard.js
import React from 'react';

const ShoeCard = ({ shoe }) => {
	return (
		<div className="flex flex-col justify-center border rounded-lg shadow-md p-6 text-left gap-2">
			<div className="aspect-w-16 aspect-h-9">
				<img
					src={shoe.img_url}
					alt={shoe.name}
					className="object-cover w-full h-auto rounded-lg "
				/>
			</div>
			<h2 className="text-xl font-semibold">{shoe.name}</h2>
			<p>
				<strong>Brand:</strong> {shoe.brand}
			</p>
			<p>
				<strong>Description:</strong> {shoe.description}
			</p>

			<p>
				<strong>Sizing Recommendations:</strong> {shoe.sizing_recommendations}
			</p>
		</div>
	);
};

export default ShoeCard;
