
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';

// ScrollToTop helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    console.log("App mounted successfully");
  }, []);

  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            {/* Fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
