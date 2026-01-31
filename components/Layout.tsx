
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartTotal } = useCart();
  const cartTotal = getCartTotal();
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/products' },
    { name: 'Serviços', path: '/services' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary size-8 transform group-hover:scale-110 transition-transform">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
              </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Clarity Engenharia</h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                aria-label="Alternar tema"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <span className="material-symbols-outlined">
                  {isDarkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <Link
                to="/cart"
                className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Carrinho de Orçamento"
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartTotal > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in">
                    {cartTotal}
                  </span>
                )}
              </Link>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
              <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-white/10 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-bold px-4 py-2 rounded-lg ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-300'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-white text-center px-4 py-3 rounded-lg font-bold"
              >
                Solicitar Orçamento
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background-dark text-white pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="text-primary size-8">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
                  </svg>
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">Clarity Engenharia</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Liderando o caminho em soluções de engenharia elétrica sustentáveis e eficientes para um futuro brilhante.
              </p>
              <div className="flex gap-4">
                <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">public</span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Links Rápidos</h5>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                <li><Link to="/services" className="hover:text-primary transition-colors">Nossos Serviços</Link></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">Catálogo de Produtos</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Suporte Técnico</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Serviços</h5>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                <li><Link to="/services" className="hover:text-primary transition-colors">Manutenção</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Instalação</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Consultoria</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Contato</h5>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  Av. Paulista, 1000 - São Paulo, Brasil
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  +55 (11) 4002-8922
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  contato@clarity.eng.br
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs text-center md:text-left">
            <p>© 2024 Clarity Engenharia. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
