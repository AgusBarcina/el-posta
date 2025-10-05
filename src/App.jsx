import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Navbar/NavBar";
import HomePage from "./pages/HomePage";
import Catalogo from "./pages/Catalogo";
import ProductoDetalle from './pages/ProductoDetalle';
import ShopPage from "../src/pages/Shopage";
import { ShopProvider } from './Context/ShopContext';

import Carrito from '../src/Components/Carrito/Carrito';
import FinalizarCompra from './pages/FinalizarCompra';

const App = () => {
  const handleFilterChange = (category) => {
    console.log('Filtro seleccionado:', category);
  };

  return (
    <ShopProvider>
      <Router>
        <NavBar onFilterChange={handleFilterChange} />
        

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
};

export default App;