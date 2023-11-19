import React from "react";

const GithubLogout = () => {
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://sneak-peak-server.up.railway.app"
      : "http://localhost:3001";

  const logout = async () => {
    const url = `${API_URL}/auth/logout`;
    const response = await fetch(url, { credentials: "include" });
    const json = await response.json();
    window.location.href = "/";
  };

  return (
    <button
      className=" flex w-fit items-center justify-center rounded-lg border p-2 shadow-md lg:p-4"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default GithubLogout;
