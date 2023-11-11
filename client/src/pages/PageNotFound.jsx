import React from 'react';
import { Link } from 'react-router-dom';
import PlusCard from '../components/PlusCard';

const PageNotFound = () => {
	return (
		<>
			<div className="w-full flex flex-col items-start p-4 lg:flex-row lg:justify-between">
				<Link
					to={'/'}
					className="text-current hover:text-current"
				>
					<h1 className="text-4xl font-bold text-center py-4">Sneak-Peak 👟</h1>
				</Link>

				<Link
					to={'/add'}
					className="text-current hover:text-current"
				>
					<PlusCard />
				</Link>
			</div>
			<div className="flex flex-col mt-20 w-full place-content-center items-center">
				<h1 className="font-bold place-content-center">Page not found. 😕</h1>

				<Link
					to={'/'}
					className="text-current hover:text-current"
				>
					<button className="w-fit m-4">Go Back Home</button>
				</Link>
			</div>
		</>
	);
};

export default PageNotFound;
