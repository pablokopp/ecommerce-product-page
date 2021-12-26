import { CartProvider } from "./context/CartContext";
import Navbar from "./containers/Navbar";
import ProdContainer from "./containers/ProdContainer";
import React from "react";
import Slider from "./containers/Slider";
function App() {
  return (
    <div className="container-app">
      <CartProvider>
        <Navbar />
        <Slider />
        <ProdContainer />
      </CartProvider>
    </div>
  );
}

export default App;
