import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./Pages/Cards";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import Train from "./Pages/Train";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/train" element={<Train />} />
          <Route path="/create" element={<Create />} />
          <Route path="/yourCards" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
