import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Acceuil from "./pages/Acceuil";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/acceuil" element={<Acceuil />} />;
          <Route path="/" element={<Acceuil />} />;
          <Route path="/*" element={<Acceuil />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
