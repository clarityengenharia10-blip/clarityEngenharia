
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { getTechnicalAdvice } from '../services/geminiService';

const Contact: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleAiChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    const result = await getTechnicalAdvice(prompt);
    setAiResponse(result || '');
    setLoading(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Header */}
      <section className="w-full flex justify-center py-6 md:py-10">
        <div className="w-full max-w-[1280px] px-4 md:px-10">
          <div
            className="flex min-h-[300px] md:min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 text-center relative overflow-hidden shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(rgba(19, 109, 236, 0.7) 0%, rgba(16, 24, 34, 0.9) 100%), url("${IMAGES.substation}")`
            }}
          >
            <h1 className="text-white text-3xl md:text-6xl font-black leading-tight tracking-tight animate-in zoom-in duration-700">
              Fale com nossos Engenheiros
            </h1>
            <p className="text-white/90 text-sm md:text-xl font-normal leading-normal max-w-2xl">
              Estamos prontos para auxiliar com suas soluções de energia e necessidades de manutenção. Entre em contato hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        {/* Contact Form */}
        <div className="flex flex-col gap-8 md:gap-10">
          <div>
            <h2 className="text-slate-900 dark:text-white text-3xl font-black leading-tight mb-3">Envie uma Mensagem</h2>
            <p className="text-slate-500 dark:text-slate-400">Preencha o formulário abaixo e nossa equipe retornará em até 24 horas úteis.</p>
          </div>

          {formSent ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-2xl text-center">
              <span className="material-symbols-outlined text-green-500 text-6xl mb-4 fill-icon">check_circle</span>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Mensagem Enviada!</h3>
              <p className="text-green-700 dark:text-green-400">Obrigado por contatar a Clarity Engenharia. Um engenheiro entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Nome Completo</label>
                  <input required type="text" placeholder="Ex: João Silva" className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">E-mail Corporativo</label>
                  <input required type="email" placeholder="joao@empresa.com.br" className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all text-sm" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Serviço de Interesse</label>
                <select className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all text-sm">
                  <option>Manutenção Preventiva</option>
                  <option>Manutenção Corretiva</option>
                  <option>Instalação de Equipamentos</option>
                  <option>Consultoria Técnica</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">Sua Mensagem</label>
                <textarea required rows={5} placeholder="Descreva os requisitos técnicos do seu projeto..." className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-sm"></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white py-5 rounded-xl font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                Enviar Orçamento
              </button>
            </form>
          )}

          {/* AI Tech Support Assistant */}
          <div className="mt-6 bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl animate-pulse">smart_toy</span>
              <h3 className="text-lg md:text-xl font-bold">Assistente de IA Técnico</h3>
            </div>
            <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed">
              Dúvidas rápidas sobre dimensionamento ou normas NBR/NR? Pergunte à nossa IA.
            </p>
            <form onSubmit={handleAiChat} className="flex gap-2">
              <input
                type="text"
                placeholder="Ex: Qual a importância da NR-10?"
                className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-primary transition-all"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button disabled={loading} className="bg-primary p-3 rounded-xl hover:bg-primary/90 disabled:opacity-50">
                <span className="material-symbols-outlined">{loading ? 'sync' : 'send'}</span>
              </button>
            </form>
            {aiResponse && (
              <div className="mt-6 p-4 bg-white/5 border border-white/5 rounded-xl text-xs leading-relaxed text-slate-300 animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="font-bold text-primary mb-2 uppercase tracking-widest text-[10px]">Análise Técnica:</p>
                {aiResponse}
              </div>
            )}
          </div>
        </div>

        {/* Info & Map Column */}
        <div className="flex flex-col gap-10">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 md:p-8 border border-primary/10">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-8">Informações de Contato</h3>
            <div className="flex flex-col gap-8">
              {[
                { icon: 'location_on', title: 'Sede Administrativa', content: 'R. Aparecida de São Manuel, 338 - Vila Nova York\nSão Paulo - SP, 03480-010' },
                { icon: 'call', title: 'Telefones Diretos', content: '(11) 2781-5588' },
                { icon: 'mail', title: 'Nossos E-mails', content: 'contato@clarity.eng.br\nsuporte@clarity.eng.br' }
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-primary rounded-xl p-3 text-white flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm whitespace-pre-line leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3475992984857!2d-46.5204781!3d-23.5855799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d80d2449839%3A0x4d80a60db84d5d59!2sClarity%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1706660000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
