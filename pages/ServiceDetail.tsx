import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES, IMAGES } from '../constants';

const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const service = SERVICES.find(s => s.id === slug);

    useEffect(() => {
        if (!service && slug) {
            // If service not found, maybe redirect or show error (optional)
            // navigate('/services');
        }
    }, [service, slug, navigate]);

    if (!service) {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-[#002b5c] mb-4">Serviço não encontrado</h1>
                <Link to="/" className="text-sky-500 hover:underline">Voltar para a Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20">
            {/* Header / Hero */}
            <div className="bg-[#002b5c] text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581093458791-9f302e6837b7?q=80&w=2670&auto=format&fit=crop"
                        alt="Service Background"
                        className="w-full h-full object-cover opacity-20 mix-blend-multiply"
                    />
                </div>
                <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-sky-500/20 rounded-full mb-6 backdrop-blur-sm border border-sky-500/30">
                        <span className="material-symbols-outlined text-5xl text-sky-400">{service.icon}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">{service.title}</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">{service.description}</p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 md:px-10 -mt-10 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Navigation */}
                    <aside className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
                            <h3 className="font-bold text-[#002b5c] uppercase mb-4 border-b border-slate-100 pb-2">Todos os Serviços</h3>
                            <ul className="space-y-2">
                                {SERVICES.map((s) => (
                                    <li key={s.id}>
                                        <Link
                                            to={`/services/${s.id}`}
                                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${s.id === slug
                                                    ? 'bg-[#002b5c] text-white shadow-md'
                                                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#002b5c]'
                                                }`}
                                        >
                                            {s.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4">
                        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-[#002b5c] mb-6">Detalhes do Serviço</h2>
                            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                {service.description} A Clarity Engenharia possui equipe técnica altamente qualificada e equipamentos de ponta para realizar este serviço com a máxima segurança e eficiência.
                            </p>

                            <h3 className="text-xl font-bold text-[#002b5c] mb-6">O que está incluso:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                {service.details?.map((detail, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="material-symbols-outlined text-sky-500 mt-0.5">check_circle</span>
                                        <span className="text-slate-700 font-medium">{detail}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#f0f9ff] border-l-4 border-sky-500 p-6 rounded-r-lg mb-10">
                                <h4 className="font-bold text-[#002b5c] mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined">info</span>
                                    Por que escolher a Clarity?
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    Nossa experiência de anos no mercado de energia crítica nos permite oferecer soluções que não apenas resolvem o problema imediato, mas também previnem falhas futuras, otimizando o seu investimento.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-t border-slate-100 pt-8">
                                <div>
                                    <p className="font-bold text-[#002b5c] text-lg">Precisa deste serviço?</p>
                                    <p className="text-slate-500 text-sm">Entre em contato agora mesmo e solicite um orçamento.</p>
                                </div>
                                <Link
                                    to="/contact"
                                    className="bg-[#002b5c] hover:bg-[#001f42] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                                >
                                    Solicitar Orçamento
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
