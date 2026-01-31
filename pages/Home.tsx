
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-[#0f172a] min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-glow delay-1000"></div>
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-10 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-left animate-in slide-in-from-left-8 duration-1000">
            <span className="glass w-fit px-4 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-[0.2em] border-primary/20 bg-primary/5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Precisão em Engenharia
            </span>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              Excelência em <br />
              <span className="text-gradient">Engenharia de Energia</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Manutenção confiável, consultoria especializada e soluções de infraestrutura inovadoras para sistemas de energia de alta tensão e missão crítica.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <Link to="/services" className="relative overflow-hidden group bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Nossos Serviços <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </Link>
              <Link to="/products" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all border-white/10 hover:border-white/30 active:scale-95 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">grid_view</span> Ver Catálogo
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-[500px] md:h-[700px] w-full hidden lg:block perspective-1000">
            <div className="absolute top-0 right-0 w-[90%] h-full rounded-3xl overflow-hidden glass border-white/10 shadow-2xl animate-float">
              <img
                src={IMAGES.hero}
                alt="Engenharia de Energia"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
            </div>
            {/* Floating Card 1 */}
            <div className="absolute bottom-10 left-0 bg-[#0f172a]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Status</p>
                  <p className="text-white font-bold text-lg">100% Operacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Infinite Scroll) */}
      <section className="py-10 bg-black/20 border-y border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 relative">
          <p className="text-center text-slate-500 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8">Confiado por Líderes de Infraestrutura</p>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-scroll">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-20 mx-10">
                  {['SIEMENS', 'SCHNEIDER', 'VERTIV', 'APC', 'EATON', 'TESLA', 'ABB', 'WEG'].map((name, idx) => (
                    <span key={idx} className="text-2xl md:text-3xl font-black text-slate-700 hover:text-white transition-colors cursor-default whitespace-nowrap">{name}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Glassmorphism) */}
      <section className="relative py-24 px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">Soluções Principais</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Nossos Serviços</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Tecnologia de ponta aplicada à estabilidade energética da sua empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={service.id} className="glass-card rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                  <span className="material-symbols-outlined text-[150px]">{service.icon}</span>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20 shadow-lg shadow-primary/10">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wider">
                    Explorar <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Modern) */}
      <section className="py-24 px-4">
        <div className="max-w-[1280px] mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-30 transform rotate-1"></div>
          <div className="relative glass-card rounded-[2.5rem] bg-[#0f172a]/80 p-10 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10">Pronto para elevar seu padrão?</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 relative z-10">
              Nossa equipe de engenharia está pronta para realizar uma auditoria completa em sua infraestrutura. Potencialize sua segurança energética hoje.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link to="/contact" className="bg-white text-[#0f172a] px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Iniciar Projeto
              </Link>
              <Link to="/products" className="glass hover:bg-white/5 text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg transition-all hover:border-white/40">
                Ver Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
