import React from "react";
import Navbar from "./HomePage/Navbar";
import Navbar2 from "./HomePage/Navbar2";
import Adds from "./HomePage/Adds";
import Product from "./HomePage/Product";
import { Routes, Route } from "react-router-dom";
import Cart from "./CartPage/Cart";

const App = () => {
  return (
    <div id="homepage">
      <Navbar />
      <Navbar2 />
      <Adds />
      <Product />
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
