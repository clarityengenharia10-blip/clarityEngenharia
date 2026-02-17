
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
                        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-sky-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#002b5c] mb-6">
                                <span className="material-symbols-outlined text-4xl">flag</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Missão</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Ser excelência em assistência técnica com atendimento personalizado e compromisso ambiental.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-sky-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#002b5c] mb-6">
                                <span className="material-symbols-outlined text-4xl">visibility</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Visão</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Ser conhecida como empresa que supera as expectativas de seus clientes.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-sky-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#002b5c] mb-6">
                                <span className="material-symbols-outlined text-4xl">diamond</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Valores</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Ética, Excelência, Confiabilidade e Capacitação são os pilares pautados e definidos como fundamentais em nossa organização.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Who We Are */}
            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">A Empresa</h2>
                        <h3 className="text-4xl font-black text-[#002b5c] mb-6 leading-tight">Líder em Soluções de Qualidade e Segurança Energética</h3>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                            <p>
                                <strong>Clarity Engenharia</strong>, empresa multimarcas, líder em soluções de qualidade e de segurança energética, especializada em sistemas ininterruptos e condicionamento de energia, atuando em diversos segmentos como: Hospitais, Laboratórios, Instituições Financeiras, Órgãos Governamentais, Indústrias e Comércio em Geral.
                            </p>
                            <p>
                                Com corpo técnico especializado conquistou o respeito e a confiança de centenas de clientes, fornecendo produtos e serviços com elevada qualidade e avançada tecnologia.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-sky-100 rounded-full -z-10 blur-3xl opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                            alt="Escritório Corporativo"
                            className="rounded-2xl shadow-2xl relative z-10 border-8 border-white"
                        />
                    </div>
                </div>
            </section>

            {/* Structure Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">Nossa Estrutura</h2>
                        <h3 className="text-4xl font-black text-[#002b5c] mb-6 leading-tight">Infraestrutura Completa para Atender Você</h3>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                            <p>
                                Clarity Engenharia, instalada em uma área de <strong>2600 m²</strong>, distribuídos em escritório administrativo, laboratório técnico, almoxarifado de placas e componentes.
                            </p>
                            <p>
                                Possui também um vasto estoque de equipamentos para backup e locação, garantindo agilidade e disponibilidade imediata para nossos clientes.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                            alt="Laboratório Técnico"
                            className="rounded-2xl shadow-2xl border-8 border-white"
                        />
                    </div>
                </div>
            </section>

            {/* Quality & Safety */}
            <section className="py-20 bg-[#002b5c] text-white">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="material-symbols-outlined text-5xl text-sky-500">verified</span>
                                <h3 className="text-3xl font-black uppercase">Política de Qualidade</h3>
                            </div>
                            <p className="text-lg text-blue-100 leading-relaxed text-justify">
                                Assegurar e aprimorar continuamente a qualidade de nossos produtos, serviços e processos, de maneira a satisfazer nossos clientes através da excelência em atendimento e soluções técnicas.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="material-symbols-outlined text-5xl text-sky-500">health_and_safety</span>
                                <h3 className="text-3xl font-black uppercase">Higiene e Segurança</h3>
                            </div>
                            <p className="text-lg text-blue-100 leading-relaxed text-justify">
                                Zelar pela proteção dos funcionários é inegociável para a Clarity Engenharia. Garantimos condições seguras de trabalho instruindo e treinando nossa equipe técnica quanto a utilização dos EPI e EPC, além do compromisso pela organização do ambiente onde se encontra o cliente.
                            </p>
                        </div>
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
