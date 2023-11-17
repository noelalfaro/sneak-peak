import React from "react";
import plus_Icon from "../assets/plus.svg";
function PlusCard() {
	return (
		<button
			className="flex flex-col justify-center border rounded-lg shadow-md p-2 lg:p-4 text-left gap-2 w-fit "
			style={{ cursor: "pointer" }}
		>
			{/* <div className="aspect-w-16 aspect-h-9">
				<img
					src={plus_Icon}
				/>
			</div> */}
			Add Sneaker
		</button>
	);
}

export default PlusCard;
