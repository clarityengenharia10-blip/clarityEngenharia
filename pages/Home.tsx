
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { IMAGES, SERVICES, BRANDS, CLIENTS, TESTIMONIALS, PRODUCTS } from '../constants';

const Home: React.FC = () => {
    const { cart } = useCart();
    const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);

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
