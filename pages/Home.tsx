
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SERVICES, BRANDS, CLIENTS, TESTIMONIALS, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800">

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden bg-[#004e9a]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004e9a] via-[#004e9a]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-10 w-full flex items-center justify-between">
          <div className="flex flex-col max-w-2xl animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl font-black text-amber-400 mb-2 uppercase drop-shadow-sm">
              NÃO deixe sua operação parar!
            </h1>
            <p className="text-white text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed">
              Manutenção Preventiva e Corretiva especializada para manter seu nobreak sempre funcionando.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-amber-400 hover:bg-amber-500 text-[#004e9a] px-8 py-3 rounded-md font-bold text-lg transition-transform hover:scale-105 shadow-lg">
                FALE CONOSCO
              </Link>
            </div>
          </div>

          {/* Hero Image (Engineer) */}
          <div className="hidden md:block h-[500px] w-auto relative mt-20 animate-in slide-in-from-right duration-1000">
            <img
              src={IMAGES.engineer}
              alt="Engineer"
              className="h-full w-auto object-contain drop-shadow-2xl mask-image-b"
            />
          </div>
        </div>

        {/* Carousel Dots (Visual Only) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="w-3 h-3 rounded-full bg-white opacity-100 cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-100 transition-opacity"></span>
          <span className="w-3 h-3 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-100 transition-opacity"></span>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <h2 className="text-center text-3xl font-black text-[#004e9a] mb-12 uppercase tracking-tight">Portfólio</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* UPS Card */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <img src={PRODUCTS.find(p => p.category === 'ups')?.image || IMAGES.hero} alt="Nobreaks" className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="bg-[#004e9a] p-4 flex justify-between items-center text-white">
                <span className="font-bold text-lg">Nobreaks</span>
                <span className="material-symbols-outlined bg-amber-400 text-[#004e9a] rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Racks Card */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <img src={PRODUCTS.find(p => p.id === 'rack-ar3100')?.image || IMAGES.hero} alt="Racks" className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="bg-[#004e9a] p-4 flex justify-between items-center text-white">
                <span className="font-bold text-lg">Armários e Racks</span>
                <span className="material-symbols-outlined bg-amber-400 text-[#004e9a] rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Batteries Card */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <img src={PRODUCTS.find(p => p.category === 'batteries')?.image || IMAGES.hero} alt="Baterias" className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="bg-[#004e9a] p-4 flex justify-between items-center text-white">
                <span className="font-bold text-lg">Baterias</span>
                <span className="material-symbols-outlined bg-amber-400 text-[#004e9a] rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Solar/Other Card */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <img src={PRODUCTS.find(p => p.id === 'bms-hub')?.image || IMAGES.hero} alt="Outros" className="h-full object-contain mix-blend-multiply" />
              </div>
              <div className="bg-[#004e9a] p-4 flex justify-between items-center text-white">
                <span className="font-bold text-lg">Acessórios</span>
                <span className="material-symbols-outlined bg-amber-400 text-[#004e9a] rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 text-center">
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-10">Marcas</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
            {BRANDS.map((brand, idx) => (
              <img key={idx} src={brand.logo} alt={brand.name} className="h-10 md:h-14 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banner */}
      <section className="bg-slate-50 py-10 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 text-center">
          <h2 className="text-[#004e9a] font-black text-xl md:text-2xl uppercase tracking-wide">
            Parceiro Credenciado e autorizado pelos maiores fabricantes
          </h2>
          <div className="mt-8 flex justify-center gap-8">
            {/* Placeholder for badges */}
            <div className="border-2 border-green-500 text-green-600 px-4 py-2 rounded font-bold uppercase text-sm">Assistência Técnica Autorizada</div>
            <div className="border-2 border-green-500 text-green-600 px-4 py-2 rounded font-bold uppercase text-sm hidden md:block">Revenda Autorizada</div>
            <div className="border-2 border-blue-500 text-blue-600 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span> Verified Partner
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Blue Diagonal Background) */}
      <section className="py-24 relative overflow-hidden bg-[#004e9a]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[#003b7a] transform -skew-y-3 origin-top opacity-50"></div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
          <h2 className="text-center text-3xl font-black text-white mb-16 uppercase tracking-tight">Serviços</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <div key={index} className="group relative bg-[#005bb5] hover:bg-[#00438a] transition-colors rounded-xl overflow-hidden hover:-translate-y-2 duration-300 shadow-2xl">
                {/* Image Half */}
                <div className="h-48 bg-slate-800 relative overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x600?tech,server,${index}`}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-amber-400 drop-shadow-md">{service.icon}</span>
                  </div>
                </div>

                {/* Content Half */}
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-4 uppercase">{service.title}</h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/services" className="inline-block border border-amber-400 text-amber-400 px-6 py-2 rounded hover:bg-amber-400 hover:text-[#004e9a] font-bold text-sm transition-colors uppercase">
                    VER MAIS
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Slider Navigation Dots */}
          <div className="flex justify-center mt-12 gap-2">
            <span className="w-8 h-1 bg-amber-400 rounded-full"></span>
            <span className="w-2 h-1 bg-white/30 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-16 uppercase tracking-tight">Clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 items-center">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={client.logo} alt={client.name} className="max-h-12 max-w-[120px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#004e9a] text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Veja o que nossos clientes dizem nas avaliações do Google
              </h2>
              <div className="bg-amber-400 text-[#004e9a] inline-flex items-center gap-3 px-4 py-2 rounded-lg font-bold">
                <span className="text-2xl">5.0</span>
                <div className="flex flex-col text-xs leading-none">
                  <span>Google</span>
                  <span className="flex text-[#004e9a]">★★★★★</span>
                </div>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="lg:col-span-2 flex flex-col md:flex-row gap-6">
              {TESTIMONIALS.slice(0, 2).map((t, i) => (
                <div key={i} className="bg-white text-slate-800 p-6 rounded-xl shadow-lg flex-1">
                  <p className="text-sm text-slate-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <div className="flex text-amber-500 text-xs">★★★★★</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saiba Mais / Blog Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#004e9a] uppercase tracking-tight mb-2">Saiba Mais</h2>
            <p className="text-slate-500">Confira nossas últimas postagens</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fake Blog Posts */}
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-100 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x600?industry,${post}`}
                    alt="Blog Post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-amber-500 uppercase mb-2 block">Novidade</span>
                  <h3 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-[#004e9a] transition-colors">
                    A importância da manutenção preventiva em nobreaks
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    Descubra como evitar paradas inesperadas e garantir a longevidade dos seus equipamentos com rotinas adequadas.
                  </p>
                  <a href="#" className="text-[#004e9a] font-bold text-sm hover:underline">Ler mais</a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="bg-[#004e9a] text-white px-8 py-3 rounded font-bold hover:bg-[#003b7a] transition-colors shadow">
              Ver todas as postagens
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA / Warehouse Image */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-400 -z-10 rounded-tl-3xl"></div>
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" alt="Warehouse" className="rounded-xl shadow-2xl relative z-10" />
          </div>
          <div className="flex-1 order-1 md:order-2 text-right">
            <h2 className="text-3xl md:text-4xl font-black text-[#004e9a] mb-6 leading-tight">
              Nobreak Brasil Energia que protege. Confiança que transforma.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Com ampla experiência e estoque diversificado, oferecemos as melhores soluções do mercado para garantir que sua empresa nunca pare.
            </p>
            <Link to="/about" className="text-[#004e9a] font-bold border-b-2 border-amber-400 hover:text-amber-500 hover:border-amber-500 transition-colors pb-1">
              Conheça nossa história
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
