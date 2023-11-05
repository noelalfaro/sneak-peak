import { useState,useEffect } from "react";
import "./App.css";
import ShoeCard from "./components/ShoeCard";

function App() {
  const [shoes, setShoes] = useState([])

  useEffect(() => {
    const fetchShoes = async ()=> {
      const response = await fetch("/api/shoes")
      const data = await response.json();
      setShoes(data);
    }
    fetchShoes();
  }, [])
  

  return (
    <>
      <div className="">
      <h1 className="text-4xl font-bold text-center py-4">Sneak-Peak 👟</h1>
      <div className="text-xl text-center py-2">
        By Noel Alfaro & Mohamed Falhi
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shoes.map((shoe, index) => (
            <ShoeCard key={index} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
