import "./App.css";
import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import AddShoeForm from "./pages/AddForm";
import WelcomePage from "./pages/WelcomePage";
import PageNotFound from "./pages/PageNotFound";
import EditShoePage from "./pages/EditShoePage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import ShoePage from "./pages/ShoePage";

function App() {
  const [user, setUser] = useState(null);
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://sneak-peak-server.up.railway.app"
      : "http://localhost:3001";

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, {
        credentials: "include",
      });
      const json = await response.json();
      setUser(json.user);
    };
    getUser();
  }, [API_URL]);

  let element = useRoutes([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/dashboard",
      element: user && user.id ? <Dashboard user={user} /> : <WelcomePage />,
    },
    {
      path: "/add",
      element: user && user.id ? <AddShoeForm user={user} /> : <WelcomePage />,
    },
    {
      path: "/shoe/:id",
      element: user && user.id ? <ShoePage user={user} /> : <WelcomePage />,
    },
    {
      path: "/edit/shoe/:id",
      element: user && user.id ? <EditShoePage user={user} /> : <WelcomePage />,
    },
    {
      path: "/user/:username",
      element: user && user.id ? <ProfilePage user={user} /> : <WelcomePage />,
    },
    {},
    {
      path: "/*",
      element: user && user.id ? <PageNotFound user={user} /> : <WelcomePage />,
    },
  ]);
  return (
    <>
      <div className="container w-screen ">{element}</div>
    </>
  );
}

export default App;
