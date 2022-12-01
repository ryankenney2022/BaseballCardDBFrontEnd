import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Collection from "./pages/Collection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/addCard" element={<AddCard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
