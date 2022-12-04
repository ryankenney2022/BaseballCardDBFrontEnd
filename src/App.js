import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import Collection from "./pages/Collection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/addCard" element={<AddCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
