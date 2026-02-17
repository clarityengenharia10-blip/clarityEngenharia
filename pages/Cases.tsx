import React from 'react';
import { CASES } from '../constants';
import { Link } from 'react-router-dom';

const Cases: React.FC = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Section */}
            <section className="bg-[#002b5c] text-white py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Cases de Sucesso</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Conheça como a Clarity Engenharia transformou a operação de grandes empresas com soluções de energia ininterrupta.
                    </p>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 gap-16">
                        {CASES.map((successCase, index) => (
                            <div key={successCase.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                                <div className="md:w-1/2 relative h-[300px] md:h-auto">
                                    <img
                                        src={successCase.image}
                                        alt={successCase.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/80 to-transparent md:bg-gradient-to-r"></div>
                                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                                        <span className="bg-sky-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                                            {successCase.tags[0]}
                                        </span>
                                        <h3 className="text-xl font-bold">{successCase.client}</h3>
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#002b5c] mb-6">{successCase.title}</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sky-600 font-bold mb-2">
                                                <span className="material-symbols-outlined">warning</span>
                                                Desafio
                                            </h4>
                                            <p className="text-slate-600 leading-relaxed">{successCase.challenge}</p>
                                        </div>

                                        <div>
                                            <h4 className="flex items-center gap-2 text-sky-600 font-bold mb-2">
                                                <span className="material-symbols-outlined">lightbulb</span>
                                                Solução
                                            </h4>
                                            <p className="text-slate-600 leading-relaxed">{successCase.solution}</p>
                                        </div>

                                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <h4 className="flex items-center gap-2 text-green-700 font-bold mb-2">
                                                <span className="material-symbols-outlined">trending_up</span>
                                                Resultado
                                            </h4>
                                            <p className="text-green-800 font-medium leading-relaxed">{successCase.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-sky-500 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-black mb-8">Quer ser nosso próximo case de sucesso?</h2>
                    <Link to="/contact" className="inline-block bg-[#002b5c] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#002b5c] transition-all shadow-lg transform hover:-translate-y-1">
                        Fale com um Especialista
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Cases;
