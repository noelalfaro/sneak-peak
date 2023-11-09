import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddShoeForm from "./pages/AddForm";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>

          <Route path="/add" element={<AddShoeForm />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
