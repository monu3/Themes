import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantShop from "./components/PlantShop";
import ElectronicsShop from "./components/ElectronicsShop";
import CosmeticsShop from "./components/CosmeticsShop";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant-shop" element={<PlantShop />} />
          <Route path="/electronics-shop" element={<ElectronicsShop />} />
          <Route path="/cosmetics-shop" element={<CosmeticsShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;