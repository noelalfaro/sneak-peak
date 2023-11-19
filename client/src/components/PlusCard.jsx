import React from "react";
import plus_Icon from "../assets/plus.svg";
function PlusCard() {
  return (
    <button
      className="flex w-fit flex-col justify-center gap-2 rounded-lg border p-2 text-left  shadow-md lg:p-4 "
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
