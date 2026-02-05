
import React, { useState } from 'react';


const Partner: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        cnpj: '',
        contactName: '',
        email: '',
        phone: '',
        region: '',
        interest: 'Revenda'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Obrigado pelo interesse! Nossa equipe de canais entrará em contato em breve.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-slate-50 font-sans text-slate-700">
            {/* Header */}
            <div className="bg-[#002b5c] text-white py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <span className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4 block">Programa de Canais</span>
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Seja um Credenciado Clarity</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Expanda seu portfólio e ofereça as melhores soluções de energia do mercado com o suporte de quem é especialista.
                    </p>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Benefits Side */}
                    <div>
                        <h2 className="text-3xl font-black text-[#002b5c] mb-8">Por que ser um parceiro?</h2>

                        <div className="space-y-8">
                            {[
                                { title: 'Tabela de Preços Exclusiva', desc: 'Margens competitivas para revenda de equipamentos e baterias.' },
                                { title: 'Suporte Técnico Prioritário', desc: 'Acesso direto à nossa engenharia para dimensionamento e projetos.' },
                                { title: 'Líderes de Mercado', desc: 'Trabalhe com as marcas mais renomadas: APC, Eaton, Vertiv, SMS.' },
                                { title: 'Treinamento e Capacitação', desc: 'Workshops técnicos e comerciais para sua equipe.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                                        <span className="material-symbols-outlined">check</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#002b5c]">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
                            <h3 className="font-bold text-lg text-[#002b5c] mb-4">Perfil do Parceiro</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li>Empresas de TI e Infraestrutura</li>
                                <li>Instaladores Elétricos e Engenharia</li>
                                <li>Integradores de Sistemas</li>
                                <li>Revendas de Informática</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-t-8 border-sky-500">
                        <h3 className="text-2xl font-bold text-[#002b5c] mb-2">Cadastre sua Empresa</h3>
                        <p className="text-slate-500 mb-8 text-sm">Preencha o formulário abaixo para iniciarmos o processo de homologação.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome Fantasia</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CNPJ</label>
                                    <input
                                        type="text"
                                        name="cnpj"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome do Contato</label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Cargo</label>
                                    <input
                                        type="text"
                                        name="role"
                                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">E-mail Corporativo</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Cidade / Estado</label>
                                    <input
                                        type="text"
                                        name="region"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Interesse Principal</label>
                                <select
                                    name="interest"
                                    className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:outline-none focus:border-sky-500 transition-colors"
                                >
                                    <option value="Revenda">Revenda de Equipamentos</option>
                                    <option value="Servicos">Parceria em Serviços</option>
                                    <option value="Ambos">Ambos</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full bg-[#002b5c] text-white font-bold py-4 rounded hover:bg-sky-500 transition-colors uppercase tracking-wide">
                                    Enviar Solicitação
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;
