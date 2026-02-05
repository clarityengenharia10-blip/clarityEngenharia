import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartTotal } = useCart();
  const cartTotal = getCartTotal();
  const location = useLocation();

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/products' },
    { name: 'Marcas', path: '/#marcas' },
    { name: 'Serviços', path: '/services' },
    { name: 'Deals', path: '/#deals' }, // Placeholder for specific links if needed
    { name: 'Blog', path: '/#blog' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-[#004e9a] text-white text-xs py-2 px-4 md:px-10 hidden lg:flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-amber-400 transition-colors">A Empresa</Link>
          <Link to="/contact" className="hover:text-amber-400 transition-colors">Fale Conosco</Link>
          <Link to="/partners" className="hover:text-amber-400 transition-colors">Seja um Credenciado</Link>
          <Link to="/careers" className="hover:text-amber-400 transition-colors">Trabalhe Conosco</Link>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-amber-400"><i className="fab fa-facebook-f"></i> FB</a>
          <a href="#" className="hover:text-amber-400"><i className="fab fa-instagram"></i> IG</a>
          <a href="#" className="hover:text-amber-400"><i className="fab fa-linkedin-in"></i> LI</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b-4 border-amber-400">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-[#004e9a] font-black text-3xl tracking-tighter italic">NOBREAK</span>
              <span className="text-amber-400 font-bold text-sm tracking-widest text-right">BRASIL</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase transition-colors ${location.pathname === link.path
                    ? 'text-[#004e9a]'
                    : 'text-slate-600 hover:text-[#004e9a]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar - Visual only for now */}
            <div className="relative">
              <input
                type="text"
                placeholder="O que você procura?"
                className="pl-3 pr-8 py-2 border border-slate-300 rounded text-sm w-64 focus:outline-none focus:border-[#004e9a]"
              />
              <span className="material-symbols-outlined absolute right-2 top-2 text-slate-400 text-lg">search</span>
            </div>

            <Link
              to="/contact"
              className="bg-[#004e9a] hover:bg-[#003b7a] text-white px-6 py-3 rounded font-bold text-sm transition-all shadow-md uppercase"
            >
              Peça um orçamento
            </Link>

            <Link
              to="/cart"
              className="relative text-[#004e9a] hover:text-amber-500 transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartTotal}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-[#004e9a]">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartTotal}
                </span>
              )}
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#004e9a]">
              <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-2 duration-300 absolute w-full shadow-xl">
            <nav className="flex flex-col p-4 gap-2">
              <div className="flex flex-col gap-2 mb-4 border-b pb-4">
                <Link to="/about" className="text-xs text-slate-500 uppercase font-bold">A Empresa</Link>
                <Link to="/contact" className="text-xs text-slate-500 uppercase font-bold">Fale Conosco</Link>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold px-4 py-3 rounded-lg uppercase ${location.pathname === link.path ? 'bg-[#004e9a]/10 text-[#004e9a]' : 'text-slate-600'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-[#004e9a] text-white text-center px-4 py-3 rounded-lg font-bold mt-2 uppercase"
              >
                Peça um orçamento
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Logo & About */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col leading-none mb-2">
                <span className="text-[#004e9a] font-black text-2xl tracking-tighter italic">NOBREAK</span>
                <span className="text-amber-400 font-bold text-sm tracking-widest text-right">BRASIL</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Líderes em soluções de energia ininterrupta. Protegendo seu patrimônio e garantindo a produtividade da sua empresa com tecnologia de ponta.
              </p>
              <div className="flex gap-3 mt-2">
                <a href="#" className="w-8 h-8 rounded bg-[#004e9a] text-white flex items-center justify-center hover:bg-amber-400 transition-colors"><span className="text-xs font-bold">FB</span></a>
                <a href="#" className="w-8 h-8 rounded bg-[#004e9a] text-white flex items-center justify-center hover:bg-amber-400 transition-colors"><span className="text-xs font-bold">IG</span></a>
              </div>
            </div>

            {/* Institucional */}
            <div>
              <h5 className="font-bold text-[#004e9a] uppercase tracking-wide mb-6">Institucional</h5>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">Quem Somos</Link></li>
                <li><Link to="/products" className="hover:text-amber-400 transition-colors">Produtos</Link></li>
                <li><Link to="/services" className="hover:text-amber-400 transition-colors">Serviços</Link></li>
                <li><Link to="/cases" className="hover:text-amber-400 transition-colors">Cases de Sucesso</Link></li>
                <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Política de Privacidade</Link></li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h5 className="font-bold text-[#004e9a] uppercase tracking-wide mb-6">Nossos Serviços</h5>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><Link to="/services" className="hover:text-amber-400 transition-colors">Manutenção de Nobreaks</Link></li>
                <li><Link to="/services" className="hover:text-amber-400 transition-colors">Locação de Equipamentos</Link></li>
                <li><Link to="/services" className="hover:text-amber-400 transition-colors">Instalação e Start-up</Link></li>
                <li><Link to="/services" className="hover:text-amber-400 transition-colors">Consultoria Técnica</Link></li>
                <li><Link to="/services" className="hover:text-amber-400 transition-colors">Contratos de Manutenção</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h5 className="font-bold text-[#004e9a] uppercase tracking-wide mb-6">Fale Conosco</h5>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-500 mt-0.5">location_on</span>
                  <span className="flex-1">R. Aparecida de São Manuel, 338 - Vila Nova York, São Paulo - SP, 03480-010</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-500">call</span>
                  <span className="font-bold text-lg">(11) 2781-5588</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-500">mail</span>
                  <a href="mailto:contato@clarity.eng.br" className="hover:text-[#004e9a]">contato@clarity.eng.br</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
            <p>© 2024 Nobreak Brasil. Todos os direitos reservados.</p>
            <p>Desenvolvido com excelência.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511947483910"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#128c7e] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 animate-in slide-in-from-bottom-5"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382C17.11 14.382 16.748 14.288 16.435 14.098C16.126 13.91 15.86 13.65 15.65 13.344C15.438 13.036 15.26 12.702 15.116 12.342C14.972 11.982 14.9 11.62 14.9 11.256C14.9 10.892 14.972 10.53 15.116 10.17C15.26 9.81 15.438 9.476 15.65 9.168C15.86 8.862 16.126 8.602 16.435 8.414C16.748 8.224 17.11 8.13 17.472 8.13C17.962 8.13 18.422 8.32 18.77 8.668C19.116 9.014 19.308 9.476 19.308 9.966C19.308 10.456 19.116 10.916 18.77 11.264C18.422 11.61 17.962 11.802 17.472 11.802" opacity="0" />
          <path d="M12.04 2C6.5 2 2 6.5 2 12.04C2 13.81 2.46 15.55 3.36 17.1L2.34 21.08C2.3 21.24 2.34 21.41 2.44 21.54C2.55 21.67 2.7 21.74 2.87 21.74C2.91 21.74 2.94 21.74 2.98 21.73L7.09 20.67C8.6 21.53 10.3 22 12.04 22C17.58 22 22.08 17.5 22.08 11.96C22.08 6.42 17.58 2 12.04 2ZM12.04 20.19C10.51 20.19 9.04 19.78 7.76 19L7.38 18.78L4.54 19.51L5.3 16.75L5.06 16.36C4.24 15.06 3.81 13.56 3.81 12.04C3.81 7.5 7.5 3.81 12.04 3.81C16.58 3.81 20.27 7.5 20.27 12.04C20.27 16.58 16.58 20.19 12.04 20.19ZM16.49 14.59C16.29 14.53 16.11 14.47 15.96 14.41C15.89 14.38 15.7 14.32 15.54 14.24C15.11 14.04 14.73 13.75 14.4 13.42C14.07 13.09 13.78 12.71 13.58 12.28C13.5 12.12 13.44 11.93 13.41 11.86C13.35 11.72 13.29 11.53 13.23 11.33C12.98 10.61 12.96 9.87 13.16 9.17C13.29 8.68 13.53 8.23 13.88 7.84C14.18 7.5 14.51 7.27 14.95 7.23C15.02 7.22 15.09 7.22 15.15 7.22C15.39 7.22 15.62 7.31 15.81 7.48C16.23 7.83 16.53 8.3 16.66 8.83C16.71 9.02 16.73 9.22 16.7 9.42C16.67 9.77 16.55 10.12 16.34 10.42C16.24 10.57 16.12 10.71 15.99 10.84C15.98 10.85 15.97 10.87 15.96 10.88C15.89 10.95 15.83 11 15.78 11.02C15.61 11.1 15.42 11.08 15.26 10.96C15.15 10.87 15.07 10.77 15.01 10.66C15.01 10.66 15.01 10.65 15.01 10.65C14.96 10.56 14.93 10.46 14.91 10.36C14.91 10.3 14.9 10.25 14.9 10.19C14.9 9.94 14.95 9.7 15.06 9.47C15.09 9.42 15.11 9.37 15.12 9.32C15.14 9.27 15.17 9.23 15.19 9.18C15.06 9.35 14.97 9.55 14.91 9.76C14.81 10.09 14.82 10.45 14.94 10.77C14.97 10.85 15.01 10.92 15.05 10.99C15.16 11.19 15.29 11.37 15.45 11.53C15.6 11.68 15.78 11.82 15.98 11.92C16.05 11.96 16.13 12 16.2 12.03C16.53 12.15 16.89 12.16 17.22 12.06C17.43 12 17.62 11.91 17.79 11.78C17.84 11.73 17.89 11.67 17.96 11.6C17.97 11.59 17.98 11.57 17.99 11.56C18.12 11.41 18.25 11.2 18.33 10.98C18.52 10.48 18.53 9.91 18.35 9.42C18.16 8.91 17.8 8.48 17.34 8.21C17.15 8.1 16.94 8.02 16.72 7.98C16.59 7.96 16.47 7.96 16.34 7.96C15.79 7.96 15.27 8.16 14.87 8.5C14.46 8.85 14.21 9.35 14.16 9.92C14.13 10.23 14.17 10.54 14.28 10.83C14.39 11.14 14.56 11.43 14.78 11.67C15.04 11.96 15.38 12.17 15.75 12.28C16.05 12.37 16.36 12.39 16.65 12.33C16.9 12.28 17.13 12.18 17.32 12.04C17.39 12 17.43 11.95 17.48 11.91C17.54 11.87 17.57 11.88 17.58 11.89C17.71 11.95 17.83 12.03 17.93 12.13C18.27 12.44 18.49 12.87 18.54 13.34C18.57 13.62 18.53 13.9 18.43 14.16C18.33 14.44 18.17 14.68 17.96 14.89C17.56 15.28 17.03 15.5 16.49 14.59Z" />
        </svg>
      </a>
    </div>
  );
};

export default Layout;
