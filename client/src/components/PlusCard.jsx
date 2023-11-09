import React from 'react'
import plus_Icon from '../assets/plus.svg'
function PlusCard() {
	return (
		<div className="flex flex-col justify-center border rounded-lg shadow-md p-12 text-left gap-2" style={{cursor : "pointer"}}  >
			<div className="aspect-w-16 aspect-h-9">
				<img
					src={plus_Icon}
					 
					className="object-cover w-full h-auto rounded-lg "
				/>
			</div>
 			 

			 
		</div>
	);
}

export default PlusCard
