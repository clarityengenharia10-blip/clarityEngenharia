
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative w-full px-4 md:px-10 py-6 md:py-10 max-w-[1280px] mx-auto">
        <div className="overflow-hidden rounded-xl relative group">
          <div 
            className="flex min-h-[500px] md:min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 md:px-16 pb-12 md:pb-16 relative overflow-hidden"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(16, 24, 34, 0.9) 100%), url("${IMAGES.hero}")` 
            }}
          >
            <div className="flex flex-col gap-4 text-left max-w-[700px] z-10">
              <span className="bg-primary/20 backdrop-blur-md text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest border border-primary/30">
                Precisão em Engenharia
              </span>
              <h1 className="text-white text-3xl md:text-6xl font-black leading-tight tracking-tight animate-in slide-in-from-bottom-4 duration-1000">
                Excelência em Engenharia de Energia
              </h1>
              <p className="text-white/90 text-sm md:text-lg font-normal leading-relaxed animate-in slide-in-from-bottom-6 duration-1000 delay-150">
                Manutenção confiável, consultoria especializada e soluções de infraestrutura inovadoras para sistemas de energia de alta tensão.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 z-10 w-full sm:w-auto">
              <Link to="/services" className="bg-primary hover:bg-primary/90 text-white text-center px-8 py-4 rounded-lg text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30">
                Nossos Serviços
              </Link>
              <Link to="/products" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-center px-8 py-4 rounded-lg text-base font-bold transition-all border border-white/20">
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white dark:bg-background-dark border-y border-slate-100 dark:border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4">
          <p className="text-center text-slate-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-10">Confiado por Líderes de Infraestrutura</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {['SIEMENS', 'SCHNEIDER', 'VERTIV', 'APC', 'EATON'].map(name => (
               <div key={name} className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter cursor-default hover:text-primary transition-colors">{name}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src={IMAGES.engineer} 
                alt="Expertise em Engenharia" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 md:p-8 rounded-xl hidden md:block shadow-2xl animate-bounce-slow">
              <p className="text-white text-3xl md:text-4xl font-black">15+</p>
              <p className="text-white/80 text-[10px] md:text-xs font-medium uppercase tracking-widest">Anos de Experiência</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs md:text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-primary"></span>
              Quem Somos
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">Engenharia Especializada para Necessidades Industriais</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              A Clarity Engenharia é líder em engenharia elétrica de alta tensão. Especializamo-nos na manutenção, instalação e otimização de sistemas de energia para clientes industriais de grande escala.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                'Conformidade Certificada (ISO 45001)',
                'Suporte de Manutenção Emergencial 24/7',
                'Equipamentos de Diagnóstico de Última Geração'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-800 dark:text-white font-medium group text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform fill-icon">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4">
               <Link to="/contact" className="text-primary font-bold inline-flex items-center gap-2 group">
                 Agendar Visita Técnica
                 <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 md:py-24 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-primary font-bold text-xs md:text-sm uppercase tracking-widest mb-3">Soluções Principais</h2>
            <h3 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-4">Nossos Serviços Profissionais</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">Serviços abrangentes projetados para minimizar o tempo de inatividade e maximizar a eficiência energética.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all group border border-transparent hover:border-primary/20">
                <div className="size-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 dark:text-white">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                  Saiba Mais <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col items-center text-center shadow-2xl shadow-primary/20">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
           
           <h2 className="text-2xl md:text-5xl font-black mb-6 z-10">Pronto para proteger sua infraestrutura?</h2>
           <p className="text-white/80 text-base md:text-lg max-w-xl mb-10 z-10">
             Entre em contato com nossa equipe de engenharia hoje mesmo para uma avaliação técnica completa de suas instalações.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto">
              <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-xl text-center">
                 Agendar Consultoria
              </Link>
              <Link to="/products" className="bg-primary-dark border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
                 Baixar Catálogo Completo
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
