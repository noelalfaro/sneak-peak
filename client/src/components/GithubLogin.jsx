import React from "react";

function GithubLogin() {
	const API_URL =
		process.env.NODE_ENV === "production"
			? "https://sneak-peak-server.up.railway.app"
			: "http://localhost:3001";
	const handleLogin = () => {
		window.location.href = `${API_URL}/auth/github/callback`;
	};

	return <button onClick={handleLogin}>Login with GitHub</button>;
}

export default GithubLogin;
