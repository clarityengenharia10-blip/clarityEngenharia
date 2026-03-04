import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const { getCartTotal } = useCart();
  const cartTotal = getCartTotal();
  const location = useLocation();

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesModalOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Produtos', path: '/products' },
    { name: 'Serviços', path: '/services' },
    { name: 'Deals', path: '/#deals' }, // Placeholder for specific links if needed
    { name: 'Blog', path: '/#blog' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-[#002b5c] text-white text-xs py-2 px-4 md:px-10 hidden lg:flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-sky-400 transition-colors">A Empresa</Link>
          <Link to="/contact" className="hover:text-sky-400 transition-colors">Fale Conosco</Link>
          <Link to="/partners" className="hover:text-sky-400 transition-colors">Seja um Credenciado</Link>
          <Link to="/careers" className="hover:text-sky-400 transition-colors">Trabalhe Conosco</Link>
        </div>
        <div className="flex gap-4 items-center">
          {/* Instagram */}
          <a href="https://www.instagram.com/clarity_engenharia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/5511278155888" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://br.linkedin.com/in/clarity-engenharia-4274a058" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b-4 border-sky-500">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-[#002b5c] font-black text-3xl tracking-tighter italic">CLARITY</span>
              <span className="text-sky-500 font-bold text-sm tracking-widest text-right">ENGENHARIA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link to="/" className="text-sm font-bold uppercase text-[#002b5c] hover:text-sky-500 transition-colors">Home</Link>

              {/* Produtos Dropdown */}
              <div className="group relative">
                <Link to="/products" className="flex items-center gap-1 text-sm font-bold uppercase text-slate-600 hover:text-[#002b5c] transition-colors py-4">
                  Produtos <span className="material-symbols-outlined text-lg">expand_more</span>
                </Link>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-[#002b5c] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="flex flex-col py-2">
                    {[
                      { name: 'Data Center Pré-Fabricado', link: '/products?category=prefabricated_modular_dc' },
                      { name: 'Data Center Modular Inteligente', link: '/products?category=smart_modular_dc' },
                      { name: 'Energia Inteligente (UPS)', link: '/products?category=smart_power_supply' },
                      { name: 'Resfriamento Inteligente', link: '/products?category=smart_cooling' },
                    ].map((item) => (
                      <li key={item.name}>
                        <Link to={item.link} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#002b5c] transition-colors border-l-4 border-transparent hover:border-sky-400">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-slate-100 mt-2 pt-2">
                      <Link to="/products" className="block px-4 py-2 text-sm font-bold text-[#002b5c] hover:underline">
                        Ver todos os produtos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>



              {/* Serviços — abre modal ao clicar */}
              <button
                onClick={() => setIsServicesModalOpen(true)}
                className="flex items-center gap-1 text-sm font-bold uppercase text-slate-600 hover:text-[#002b5c] transition-colors py-4"
              >
                Serviços <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>

              <Link to="/cases" className="text-sm font-bold uppercase text-slate-600 hover:text-[#002b5c] transition-colors">Cases</Link>
              <Link to="/blog" className="text-sm font-bold uppercase text-slate-600 hover:text-[#002b5c] transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm font-bold uppercase text-slate-600 hover:text-[#002b5c] transition-colors">Contato</Link>
            </nav>

            {/* Search Bar - Visual only for now */}
            <div className="relative hidden xl:block">
              <input
                type="text"
                placeholder="O que você procura?"
                className="pl-3 pr-8 py-2 border border-slate-300 rounded text-sm w-48 focus:outline-none focus:border-[#002b5c]"
              />
              <span className="material-symbols-outlined absolute right-2 top-2 text-slate-400 text-lg">search</span>
            </div>

            <Link
              to="/contact"
              className="bg-[#002b5c] hover:bg-[#001f42] text-white px-5 py-2.5 rounded font-bold text-xs transition-all shadow-md uppercase whitespace-nowrap"
            >
              Orçamento
            </Link>

            <Link
              to="/cart"
              className="relative text-[#002b5c] hover:text-sky-500 transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">shopping_cart</span>
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartTotal}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/cart" className="relative text-[#002b5c]">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 bg-sky-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartTotal}
                </span>
              )}
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#002b5c]">
              <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-2 duration-300 absolute w-full shadow-xl h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col p-4 gap-2">
              <div className="flex flex-col gap-2 mb-4 border-b pb-4">
                <Link to="/about" className="text-xs text-slate-500 uppercase font-bold">A Empresa</Link>
                <Link to="/contact" className="text-xs text-slate-500 uppercase font-bold">Fale Conosco</Link>
              </div>

              <Link to="/" className="text-sm font-bold px-4 py-3 rounded-lg uppercase text-[#002b5c] bg-blue-50">Home</Link>

              <div className="px-4 py-2">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Produtos</p>
                <div className="flex flex-col gap-2 pl-2 border-l-2 border-slate-100">
                  <Link to="/products?category=prefabricated_modular_dc" className="text-sm text-slate-600">Data Center Pré-Fabricado</Link>
                  <Link to="/products?category=smart_modular_dc" className="text-sm text-slate-600">Data Center Modular Inteligente</Link>
                  <Link to="/products?category=smart_power_supply" className="text-sm text-slate-600">Energia Inteligente (UPS)</Link>
                  <Link to="/products?category=smart_cooling" className="text-sm text-slate-600">Resfriamento Inteligente</Link>
                  <Link to="/products" className="text-sm text-[#002b5c] font-bold">Ver todos</Link>
                </div>
              </div>


              <Link to="/services" className="text-sm font-bold px-4 py-3 rounded-lg uppercase text-slate-600">Serviços</Link>
              <Link to="/cases" className="text-sm font-bold px-4 py-3 rounded-lg uppercase text-slate-600">Cases</Link>
              <Link to="/blog" className="text-sm font-bold px-4 py-3 rounded-lg uppercase text-slate-600">Blog</Link>
              <Link to="/contact" className="text-sm font-bold px-4 py-3 rounded-lg uppercase text-slate-600">Contato</Link>

              <Link
                to="/contact"
                className="bg-[#002b5c] text-white text-center px-4 py-3 rounded-lg font-bold mt-4 uppercase"
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
      {/* Mapa da Empresa */}
      <section className="w-full bg-[#002b5c]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3 text-white">
              <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">Onde estamos</p>
              <h2 className="text-2xl font-black mb-4">Visite nossa sede</h2>
              <div className="flex items-start gap-3 text-slate-300 text-sm mb-3">
                <span className="material-symbols-outlined text-sky-500 mt-0.5 flex-shrink-0">location_on</span>
                <span>R. Aparecida de São Manuel, 338 - Vila Nova York, São Paulo - SP, 03480-010</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm mb-3">
                <span className="material-symbols-outlined text-sky-500 flex-shrink-0">call</span>
                <span>(11) 2781-5588</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="material-symbols-outlined text-sky-500 flex-shrink-0">mail</span>
                <a href="mailto:contato@clarityengenharia.com.br" className="hover:text-white transition-colors">contato@clarityengenharia.com.br</a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.+Aparecida+de+S%C3%A3o+Manuel,+338+-+Vila+Nova+York,+S%C3%A3o+Paulo+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-lg">open_in_new</span>
                Abrir no Google Maps
              </a>
            </div>
            <div className="lg:w-2/3 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10" style={{ height: '380px' }}>
              <iframe
                title="Localização Clarity Engenharia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.5!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d8a2f0b1c27%3A0x4c4b3e7c6f5b2a1e!2sR.%20Aparecida%20de%20S%C3%A3o%20Manuel%2C%20338%20-%20Vila%20Nova%20York%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003480-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=R.+Aparecida+de+S%C3%A3o+Manuel,+338+-+Vila+Nova+York,+S%C3%A3o+Paulo+-+SP,+03480-010"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8">

        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Logo & About */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col leading-none mb-2">
                <span className="text-[#002b5c] font-black text-2xl tracking-tighter italic">CLARITY</span>
                <span className="text-sky-500 font-bold text-sm tracking-widest text-right">ENGENHARIA</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Líderes em soluções de energia ininterrupta. Protegendo seu patrimônio e garantindo a produtividade da sua empresa com tecnologia de ponta.
              </p>
              <div className="flex gap-3 mt-2">
                <a href="#" className="w-8 h-8 rounded bg-[#002b5c] text-white flex items-center justify-center hover:bg-sky-400 transition-colors"><span className="text-xs font-bold">FB</span></a>
                <a href="#" className="w-8 h-8 rounded bg-[#002b5c] text-white flex items-center justify-center hover:bg-sky-400 transition-colors"><span className="text-xs font-bold">IG</span></a>
              </div>
            </div>

            {/* Institucional */}
            <div>
              <h5 className="font-bold text-[#002b5c] uppercase tracking-wide mb-6">Institucional</h5>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><Link to="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-sky-400 transition-colors">Quem Somos</Link></li>
                <li><Link to="/products" className="hover:text-sky-400 transition-colors">Produtos</Link></li>
                <li><Link to="/services" className="hover:text-sky-400 transition-colors">Serviços</Link></li>
                <li><Link to="/cases" className="hover:text-sky-400 transition-colors">Cases de Sucesso</Link></li>
                <li><Link to="/privacy" className="hover:text-sky-400 transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-sky-400 transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h5 className="font-bold text-[#002b5c] uppercase tracking-wide mb-6">Nossos Serviços</h5>
              <ul className="flex flex-col gap-3 text-sm font-medium">
                <li><Link to="/services/manutencao-preventiva" className="hover:text-sky-400 transition-colors">Manutenção de Nobreaks</Link></li>
                <li><Link to="/services/locacao-nobreak" className="hover:text-sky-400 transition-colors">Locação de Equipamentos</Link></li>
                <li><Link to="/services/ativacao-startup" className="hover:text-sky-400 transition-colors">Instalação e Start-up</Link></li>
                <li><Link to="/services/consultoria-tecnica" className="hover:text-sky-400 transition-colors">Consultoria Técnica</Link></li>
                <li><Link to="/services/contrato-manutencao" className="hover:text-sky-400 transition-colors">Contratos de Manutenção</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h5 className="font-bold text-[#002b5c] uppercase tracking-wide mb-6">Fale Conosco</h5>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sky-500 mt-0.5">location_on</span>
                  <span className="flex-1">R. Aparecida de São Manuel, 338 - Vila Nova York, São Paulo - SP, 03480-010</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sky-500">call</span>
                  <span className="font-bold text-lg">(11) 2781-5588</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sky-500">mail</span>
                  <a href="mailto:contato@clarityengenharia.com.br" className="hover:text-[#002b5c]">contato@clarityengenharia.com.br</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
            <p>© 2024 Clarity Engenharia. Todos os direitos reservados.</p>
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

      {/* Modal de Serviços */}
      {isServicesModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsServicesModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#001f42]/90 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#002b5c] px-8 py-6 flex items-center justify-between">
              <div>
                <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-1">Nossos Serviços</p>
                <h2 className="text-white text-2xl font-black">Qual serviço você precisa?</h2>
              </div>
              <button
                onClick={() => setIsServicesModalOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            {/* Services Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Manutenção Preventiva de Nobreaks', link: '/services/manutencao-preventiva', icon: 'shield_check' },
                { name: 'Manutenção Corretiva de Nobreaks', link: '/services/manutencao-corretiva', icon: 'build' },
                { name: 'Locação de Nobreak', link: '/services/locacao-nobreak', icon: 'inventory_2' },
                { name: 'Contrato de Manutenção de Nobreak', link: '/services/contrato-manutencao', icon: 'contract' },
                { name: 'Ativação (Startup) de Nobreaks', link: '/services/ativacao-startup', icon: 'power_settings_new' },
                { name: 'Calibração e Parametrização de Nobreaks', link: '/services/calibracao-parametrizacao', icon: 'tune' },
                { name: 'Troca de Baterias de Nobreak', link: '/services/troca-baterias', icon: 'battery_charging_full' },
                { name: 'Consultoria Técnica Especializada em Nobreak', link: '/services/consultoria-tecnica', icon: 'engineering' },
              ].map((service) => (
                <Link
                  key={service.name}
                  to={service.link}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#002b5c]/10 group-hover:bg-[#002b5c] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <span className="material-symbols-outlined text-[#002b5c] group-hover:text-white text-xl transition-colors duration-200">{service.icon}</span>
                  </div>
                  <span className="text-slate-700 font-semibold text-sm group-hover:text-[#002b5c] leading-tight">{service.name}</span>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-sky-500 ml-auto text-lg transition-colors">chevron_right</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <Link
                to="/services"
                className="block w-full text-center bg-[#002b5c] hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Ver todos os serviços
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Layout;
