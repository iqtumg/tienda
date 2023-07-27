import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Actualización aquí
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductCatalog from './components/ProductCatalog';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes> {/* Actualización aquí */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes> {/* Actualización aquí */}
      <Footer />
    </Router>
  );
};

export default App;
