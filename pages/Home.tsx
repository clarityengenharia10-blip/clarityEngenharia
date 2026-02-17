
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { IMAGES, SERVICES, BRANDS, CLIENTS, TESTIMONIALS, PRODUCTS } from '../constants';

const Home: React.FC = () => {
    const { cartItems } = useCart();
    const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            image: "https://images.unsplash.com/photo-1581093452413-48869b4d8d17?q=80&w=2670&auto=format&fit=crop", // Industrial/Maintenance
            title: "Não deixe sua operação parar",
            subtitle: "Manutenção Preventiva e Corretiva especializada para garantir a continuidade do seu negócio.",
            cta: "Fale Conosco",
            link: "/contact"
        },
        {
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop", // Server/Tech
            title: "Soluções de Energia de Alta Performance",
            subtitle: "Nobreaks, Baterias e infraestrutura completa para missão crítica.",
            cta: "Ver Produtos",
            link: "/products"
        },
        {
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop", // Engineering/Consulting
            title: "Engenharia e Consultoria Especializada",
            subtitle: "Projetos elétricos e certificações com quem entende do assunto.",
            cta: "Nossos Serviços",
            link: "/services"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

    return (
        <div className="bg-white font-sans text-slate-800">

            {/* Hero Carousel Section */}
            <section className="relative w-full h-[500px] md:h-[600px] bg-[#002b5c] overflow-hidden group">

                {/* Carousel Slides */}
                <div
                    className="flex transition-transform duration-700 ease-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {heroSlides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#002b5c]/95 via-[#002b5c]/70 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="max-w-[1400px] mx-auto px-4 md:px-10 w-full">
                                    <div className={`max-w-2xl transition-all duration-1000 transform ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase drop-shadow-lg leading-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-blue-100 text-lg md:text-2xl font-light mb-8 max-w-lg leading-relaxed border-l-4 border-sky-500 pl-6">
                                            {slide.subtitle}
                                        </p>
                                        <div className="flex gap-4">
                                            <Link
                                                to={slide.link}
                                                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2 group/btn"
                                            >
                                                {slide.cta}
                                                <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    <button
                        onClick={prevSlide}
                        className="bg-black/30 hover:bg-sky-500/80 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 pointer-events-auto transform hover:scale-110"
                    >
                        <span className="material-symbols-outlined text-3xl">chevron_left</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-black/30 hover:bg-sky-500/80 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 pointer-events-auto transform hover:scale-110"
                    >
                        <span className="material-symbols-outlined text-3xl">chevron_right</span>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-12 bg-sky-500' : 'w-2 bg-white/50 hover:bg-white'}`}
                        ></button>
                    ))}
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-[1400px] mx-auto px-4 md:px-10">
                    <h2 className="text-center text-3xl font-black text-[#002b5c] mb-12 uppercase tracking-tight">Portfólio</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Smart UPS Card */}
                        <Link to="/products?category=smart_power_supply" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                            <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                <img src={PRODUCTS.find(p => p.id === 'ups5000-h')?.image || IMAGES.hero} alt="UPS Inteligente" className="h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="bg-[#002b5c] p-4 flex justify-between items-center text-white">
                                <span className="font-bold text-lg">UPS Inteligente</span>
                                <span className="material-symbols-outlined bg-sky-500 text-white rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
                            </div>
                        </Link>
                        {/* Modular DC Card */}
                        <Link to="/products?category=smart_modular_dc" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                            <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                <img src={PRODUCTS.find(p => p.id === 'fusionmodule2000')?.image || IMAGES.hero} alt="Data Center Modular" className="h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="bg-[#002b5c] p-4 flex justify-between items-center text-white">
                                <span className="font-bold text-lg">Data Center Modular</span>
                                <span className="material-symbols-outlined bg-sky-500 text-white rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
                            </div>
                        </Link>
                        {/* SmartLi Card */}
                        <Link to="/products?category=smart_power_supply" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                            <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                <img src={PRODUCTS.find(p => p.id === 'smartli')?.image || IMAGES.hero} alt="Baterias Lítio" className="h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="bg-[#002b5c] p-4 flex justify-between items-center text-white">
                                <span className="font-bold text-lg">Baterias Lítio</span>
                                <span className="material-symbols-outlined bg-sky-500 text-white rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
                            </div>
                        </Link>
                        {/* Cooling Card */}
                        <Link to="/products?category=smart_cooling" className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                            <div className="h-48 p-6 flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors">
                                <img src={PRODUCTS.find(p => p.id === 'netcol5000')?.image || IMAGES.hero} alt="Climatização" className="h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="bg-[#002b5c] p-4 flex justify-between items-center text-white">
                                <span className="font-bold text-lg">Climatização</span>
                                <span className="material-symbols-outlined bg-sky-500 text-white rounded-full p-1 text-sm transform group-hover:rotate-45 transition-transform">arrow_forward</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="py-12 border-t border-slate-100 overflow-hidden bg-white">
                <div className="max-w-full">
                    <h3 className="text-center text-xl font-bold text-slate-400 uppercase tracking-widest mb-10">Marcas</h3>

                    <div className="relative w-full overflow-hidden mask-image-linear-gradient">
                        <div className="flex w-max animate-scroll hover:pause-animation">
                            {/* Duplicate brands for infinite loop effect */}
                            {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
                                <div key={idx} className="mx-8 md:mx-14 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Banner */}
            <section className="bg-slate-50 py-10 border-y border-slate-200">
                <div className="max-w-[1400px] mx-auto px-4 md:px-10 text-center">
                    <h2 className="text-[#002b5c] font-black text-xl md:text-2xl uppercase tracking-wide">
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

            {/* Services Section (Redesigned) */}
            <section className="py-24 relative overflow-hidden bg-[#002b5c]">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-[#001f42] transform -skew-y-3 origin-top opacity-50"></div>

                <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
                    <h2 className="text-center text-3xl font-black text-white mb-16 uppercase tracking-tight">Serviços</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES.slice(0, 3).map((service, index) => (
                            <div key={index} className="group relative bg-[#0a3d75] hover:bg-[#004e9a] transition-all duration-300 rounded-xl overflow-hidden hover:-translate-y-2 shadow-2xl border border-[#1e5aa0]/30">
                                <div className="p-10 flex flex-col items-center text-center h-full">
                                    <div className="w-20 h-20 rounded-full bg-[#002b5c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-sky-500 shadow-lg">
                                        <span className="material-symbols-outlined text-4xl text-sky-500">{service.icon}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{service.title}</h3>

                                    <div className="w-12 h-1 bg-sky-500 mb-6 rounded-full"></div>

                                    <p className="text-slate-200 text-sm mb-8 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <Link to="/services" className="inline-block border-2 border-sky-500 text-sky-500 px-6 py-2 rounded-full hover:bg-sky-500 hover:text-white font-bold text-xs transition-colors uppercase tracking-wider">
                                        VER MAIS
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Slider Navigation Dots */}
                    <div className="flex justify-center mt-12 gap-2">
                        <span className="w-8 h-1 bg-sky-500 rounded-full"></span>
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
            <section className="py-20 bg-[#002b5c] text-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                        {/* Left Text */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 leading-tight">
                                Veja o que nossos clientes dizem nas avaliações do Google
                            </h2>
                            <div className="bg-sky-500 text-white inline-flex items-center gap-3 px-4 py-2 rounded-lg font-bold">
                                <span className="text-2xl">5.0</span>
                                <div className="flex flex-col text-xs leading-none">
                                    <span>Google</span>
                                    <span className="flex text-white">★★★★★</span>
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
                                            <div className="flex text-sky-400 text-xs">★★★★★</div>
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
                        <h2 className="text-3xl font-black text-[#002b5c] uppercase tracking-tight mb-2">Saiba Mais</h2>
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
                                    <span className="text-xs font-bold text-sky-500 uppercase mb-2 block">Novidade</span>
                                    <h3 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-[#002b5c] transition-colors">
                                        A importância da manutenção preventiva em nobreaks
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                        Descubra como evitar paradas inesperadas e garantir a longevidade dos seus equipamentos com rotinas adequadas.
                                    </p>
                                    <a href="#" className="text-[#002b5c] font-bold text-sm hover:underline">Ler mais</a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/blog" className="bg-[#002b5c] text-white px-8 py-3 rounded font-bold hover:bg-[#001f42] transition-colors shadow">
                            Ver todas as postagens
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA / Warehouse Image */}
            <section className="py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 order-2 md:order-1 relative">
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-500 -z-10 rounded-tl-3xl"></div>
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" alt="Warehouse" className="rounded-xl shadow-2xl relative z-10" />
                    </div>
                    <div className="flex-1 order-1 md:order-2 text-right">
                        <h2 className="text-3xl md:text-4xl font-black text-[#002b5c] mb-6 leading-tight">
                            Clarity Engenharia Energia que protege. Confiança que transforma.
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            Com ampla experiência e estoque diversificado, oferecemos as melhores soluções do mercado para garantir que sua empresa nunca pare.
                        </p>
                        <Link to="/about" className="text-[#002b5c] font-bold border-b-2 border-sky-500 hover:text-sky-600 hover:border-sky-600 transition-colors pb-1">
                            Conheça nossa história
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
