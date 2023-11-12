import "./App.css";
import { useState, useEffect } from 'react';
import { useRoutes } from "react-router-dom";
import AddShoeForm from "./pages/AddForm";
import WelcomePage from "./pages/WelcomePage";
import PageNotFound from "./pages/PageNotFound";
import EditShoePage from "./pages/EditShoePage";
import Dashboard from "./pages/Dashboard";


function App() {

  // const [shoes, setShoes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const getUser = async () => {
      const response = await fetch(`http://localhost:3001/auth/login/success`, { credentials: 'include' })
      const json = await response.json()
      setUser(json.user)

    }

    getUser();


  }, []);


  let element = useRoutes([
    {
      path: '/',
      element: <WelcomePage  />
    },
    {
      path: '/dashboard',
      element:user && user.id ? <Dashboard user={user} /> : <WelcomePage/>
    },
    {
      path: '/add',
      element: user && user.id ?  <AddShoeForm  user={user}/> : <WelcomePage/>
    },
    {
      path: '/edit/shoe/:id',
      element: user && user.id ?  <EditShoePage user={user} /> : <WelcomePage/>
    },
    {
      path: "/*",
      element: user && user.id ?  <PageNotFound user={user}/> : <WelcomePage/>
    },

  ])
  return (
    <>
      <div className="container w-screen ">
        {element}
      </div>

      {/* 
        <Routes>
          
            <Route path="/" element={<WelcomePage />}></Route>

            <Route path="/add" element={<AddShoeForm />}></Route>
          
          
        </Routes> */}
    </>
  );
}

export default App;
