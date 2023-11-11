import "./App.css";
import { useState, useEffect } from 'react';
import {  useRoutes } from "react-router-dom";
import AddShoeForm from "./pages/AddForm";
import WelcomePage from "./pages/WelcomePage";
import PageNotFound from "./pages/PageNotFound";
import EditShoePage from "./pages/EditShoePage";

function App() {

  const [shoes, setShoes] = useState([]);

	useEffect(() => {
		const fetchShoes = async () => {
			const response = await fetch('/api/shoes');
			const data = await response.json();
			setShoes(data);
		};
    
		fetchShoes();
	}, []);


  let element = useRoutes([
    {
      path: '/',
      element: <WelcomePage shoes={shoes}/>
    },
    {
      path: '/add',
      element: <AddShoeForm/>
    },
    {
      path: '/edit/shoe/:id',
      element: <EditShoePage shoes={shoes}/>
    },
    {
      path: "/*",
      element: <PageNotFound />,
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
