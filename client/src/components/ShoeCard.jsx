import React from 'react';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
	return (
		<Link
			to={'/edit/shoe/' + shoe.id}
			className="text-current hover:text-current"
		>
			<div className="flex flex-col  justify-start border rounded-lg shadow-md p-6 text-left gap-2 cursor-pointer ">
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
			</div>
		</Link>
	);
};

export default ShoeCard;
