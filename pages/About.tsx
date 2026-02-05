
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const About: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-700">
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#002b5c]">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Corporate Office"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="block text-sky-500 font-bold tracking-widest uppercase mb-4 text-sm animate-in slide-in-from-bottom-5 fade-in duration-700">Desde 2010</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
                        Excelência em Energia Ininterrupta
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-5 fade-in duration-700 delay-200">
                        A Clarity Engenharia é referência no mercado de soluções energéticas, garantindo que sua empresa nunca pare.
                    </p>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="py-20 bg-slate-50 relative">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
                        {[
                            { title: 'Missão', icon: 'flag', desc: 'Prover soluções de energia segura e confiável, superando as expectativas dos clientes com tecnologia de ponta e excelência técnica.' },
                            { title: 'Visão', icon: 'visibility', desc: 'Ser reconhecida nacionalmente como a parceira estratégica número um em infraestrutura de missão crítica e eficiência energética.' },
                            { title: 'Valores', icon: 'diamond', desc: 'Integridade, Comprometimento, Inovação, Segurança e Sustentabilidade em cada projeto que executamos.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-sky-500 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#002b5c] mb-6">
                                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#002b5c] mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content - Who We Are */}
            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">Quem Somos</h2>
                        <h3 className="text-4xl font-black text-[#002b5c] mb-6 leading-tight">Expertise Técnica e<br />Compromisso Real</h3>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                A <strong>Clarity Engenharia</strong> nasceu da necessidade do mercado por um atendimento técnico verdadeiramente especializado em sistemas de energia ininterrupta (UPS/Nobreaks).
                            </p>
                            <p>
                                Contamos com um corpo técnico altamente qualificado, com engenheiros e técnicos certificados pelos principais fabricantes mundiais. Nosso laboratório próprio em São Paulo possui infraestrutura de ponta para reparos complexos, testes de carga e homologação de equipamentos.
                            </p>
                            <p>
                                Atuamos em todo o território nacional, atendendo desde pequenos escritórios até grandes data centers, hospitais e indústrias que não podem se dar ao luxo de parar.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-[#002b5c]">+15</span>
                                <span className="text-sm text-slate-500 font-bold uppercase">Anos de Mercado</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-[#002b5c]">+5k</span>
                                <span className="text-sm text-slate-500 font-bold uppercase">Atendimentos</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-[#002b5c]">100%</span>
                                <span className="text-sm text-slate-500 font-bold uppercase">Satisfação</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-sky-100 rounded-full -z-10 blur-3xl opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2670&auto=format&fit=crop"
                            alt="Engenheiro trabalhando"
                            className="rounded-2xl shadow-2xl relative z-10 border-8 border-white"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-[#002b5c] p-8 rounded-lg text-white shadow-xl z-20 max-w-xs hidden md:block">
                            <span className="material-symbols-outlined text-4xl text-sky-500 mb-4">verified_user</span>
                            <p className="font-bold text-lg">Certificação Técnica e Segurança em Primeiro Lugar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#002b5c] text-white">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-black mb-16 uppercase tracking-tight">O Diferencial Clarity</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Atendimento 24/7', icon: 'schedule', desc: 'Suporte emergencial a qualquer hora do dia ou da noite.' },
                            { title: 'Estoque Próprio', icon: 'inventory_2', desc: 'Peças de reposição e equipamentos para backup imediato.' },
                            { title: 'Equipe Certificada', icon: 'engineering', desc: 'Profissionais treinados diretamente pelos fabricantes.' },
                            { title: 'Frota Própria', icon: 'local_shipping', desc: 'Agilidade e segurança no transporte de equipamentos.' }
                        ].map((item, id) => (
                            <div key={id} className="bg-[#003875] p-8 rounded-xl border border-[#004e9a] hover:bg-[#004e9a] transition-colors group">
                                <span className="material-symbols-outlined text-5xl text-sky-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</span>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-sky-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10 text-white">
                    <h2 className="text-4xl font-black mb-6 uppercase">Pronto para elevar o nível da sua infraestrutura?</h2>
                    <p className="text-xl mb-10 text-blue-50">Converse com nossos engenheiros e descubra a solução ideal para o seu negócio.</p>
                    <div className="flex justify-center gap-6">
                        <Link to="/contact" className="bg-[#002b5c] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#002b5c] transition-all transform hover:-translate-y-1">
                            Fale Conosco Agora
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
