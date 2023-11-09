import  { useEffect, useState } from "react";
import ShoeCard from "../components/ShoeCard";
import PlusCard from "../components/PlusCard";

function WelcomePage() {
  const [shoes, setShoes] = useState([]);
   useEffect(() => {
    const fetchShoes = async () => {
      const response = await fetch("/api/shoes");
      const data = await response.json();
      setShoes(data);
    };
    fetchShoes();
  }, []);

  return (
    <div>
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
            <PlusCard></PlusCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
