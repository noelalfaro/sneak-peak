import ShoeCard from "../components/ShoeCard";
import PlusCard from "../components/PlusCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GithubLogin from "../components/GithubLogin";

function WelcomePage({ shoes }) {
	// const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	fetch("/api/auth/login/success")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			if (data.success && data.user) {
	// 				setUser(data.user);
	// 				console.log(data.user);
	// 			}
	// 		})
	// 		.catch((err) => console.log(err + "test"));
	// }, []);

	return (
		<>
			<div className="w-full flex flex-col items-center p-4 lg:flex-row lg:justify-between">
				<Link
					to={"/"}
					className="text-current hover:text-current"
				>
					<h1 className="text-4xl font-bold text-center py-4">Sneak-Peak 👟</h1>
				</Link>
			</div>

			<div className="w-full p-4 lg:p-4">
				<h3 className=" flex text-2xl justify-start text-left items-start font-bold">
					Welcome to Shoehead Repository, where every step tells a story!
					Whether you're a sneaker newbie looking to build your collection or a
					seasoned sneakerhead showcasing your style, our platform is your
					digital closet.
					<br />
					<br />
					Easily catalog, explore, and highlight your favorite kicks in one
					place, connecting with a community passionate about the art of the
					sole.
				</h3>
			</div>
			<GithubLogin />
		</>
	);
}

export default WelcomePage;
