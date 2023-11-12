import React from "react";

const GithubLogout = () => {
	const API_URL = "http://localhost:3001";

	const logout = async () => {
		const url = `${API_URL}/auth/logout`;
		const response = await fetch(url, { credentials: "include" });
		const json = await response.json();
		window.location.href = "/";
	};

	return (
		<button
			className=" p-2 lg:p-4 flex justify-center items-center border rounded-lg shadow-md w-fit"
			onClick={logout}
		>
			Logout
		</button>
	);
};

export default GithubLogout;
