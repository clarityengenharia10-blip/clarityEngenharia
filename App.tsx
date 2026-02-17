
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Partner from './pages/Partner';
import Careers from './pages/Careers';
import Cart from './pages/Cart';
import Cases from './pages/Cases';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/services" element={<ServiceDetail />} /> {/* Fallback or main list if needed, or redirect */}
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
