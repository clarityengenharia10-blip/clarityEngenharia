
import React from 'react';

const Careers: React.FC = () => {
    const openPositions = [
        {
            title: 'Técnico em Eletrônica / Eletrotécnica',
            type: 'Presencial - São Paulo/SP',
            desc: 'Realizar manutenção preventiva e corretiva em nobreaks e estabilizadores, atendimento em campo e laboratório.',
            reqs: ['CFT Ativo', 'Experiência com UPS', 'CNH B']
        },
        {
            title: 'Vendedor Técnico Interno',
            type: 'Híbrido - São Paulo/SP',
            desc: 'Prospecção de novos clientes, elaboração de propostas comerciais e dimensionamento básico de equipamentos.',
            reqs: ['Experiência em vendas B2B', 'Conhecimento em infraestrutura elétrica é um diferencial']
        },
        {
            title: 'Auxiliar Administrativo',
            type: 'Presencial - São Paulo/SP',
            desc: 'Suporte à equipe de vendas, emissão de notas fiscais, controle de estoque e rotinas administrativas.',
            reqs: ['Ensino Médio Completo', 'Pacote Office Intermediário']
        }
    ];

    return (
        <div className="bg-white font-sans text-slate-700">
            {/* Hero Section */}
            <div className="relative bg-[#002b5c] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-10 text-center">
                    <span className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4 block">Carreiras</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Venha fazer parte do time Clarity</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Buscamos talentos apaixonados por tecnologia e inovação para construir o futuro da energia segura conosco.
                    </p>
                </div>
            </div>

            {/* Culture Section */}
            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-[#002b5c] uppercase tracking-tight">Nossa Cultura</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Valorizamos pessoas que tenham iniciativa, gostem de aprender e queiram crescer junto com a empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Crescimento Contínuo', icon: 'trending_up', desc: 'Incentivamos a capacitação constante através de cursos e certificações.' },
                            { title: 'Ambiente Colaborativo', icon: 'groups', desc: 'Trtrabalhamos em equipe, compartilhando conhecimento e experiências.' },
                            { title: 'Reconhecimento', icon: 'star', desc: 'Valorizamos o desempenho e dedicação de cada colaborador.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-sky-100">
                                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-sky-500 mb-6 shadow-sm">
                                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#002b5c] mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-[1000px] mx-auto px-4 md:px-10">
                    <h2 className="text-3xl font-black text-[#002b5c] mb-12 text-center uppercase tracking-tight">Vagas Abertas</h2>

                    <div className="space-y-6">
                        {openPositions.map((job, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:border-sky-500 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#002b5c]">{job.title}</h3>
                                        <span className="text-xs font-bold text-sky-500 uppercase tracking-wide">{job.type}</span>
                                    </div>
                                    <a
                                        href={`mailto:rh@clarity.eng.br?subject=Aplicação para vaga: ${job.title}`}
                                        className="bg-[#002b5c] text-white px-6 py-2 rounded font-bold text-sm hover:bg-sky-500 transition-colors text-center whitespace-nowrap"
                                    >
                                        Candidatar-se
                                    </a>
                                </div>
                                <p className="text-slate-600 mb-4">{job.desc}</p>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Requisitos:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.reqs.map((req, i) => (
                                            <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-600 mb-4">Não encontrou a vaga ideal?</p>
                        <a
                            href="mailto:rh@clarity.eng.br?subject=Banco de Talentos"
                            className="text-[#002b5c] font-bold border-b-2 border-sky-500 hover:text-sky-600 hover:border-sky-600 transition-colors"
                        >
                            Envie seu currículo para nosso Banco de Talentos
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
