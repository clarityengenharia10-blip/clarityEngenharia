
import React from 'react';
import { SERVICES, IMAGES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Hero Header */}
      <section className="mx-auto max-w-[1280px] p-4 md:p-6">
        <div
          className="flex min-h-[350px] md:min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-6 md:p-8 text-center relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 24, 34, 0.7) 0%, rgba(16, 24, 34, 0.95) 100%), url("${IMAGES.substation}")`
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl z-10">
            <h1 className="text-white text-3xl md:text-6xl font-black leading-tight tracking-tight">
              Serviços de Engenharia Especializada
            </h1>
            <p className="text-white/90 text-base md:text-xl font-normal leading-relaxed">
              Construindo confiança através de soluções de energia confiáveis, conformidade rigorosa e manutenção profissional 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-20">
        <div className="flex flex-col gap-4 mb-12 md:mb-16 max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs">Excelência Operacional</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">Nossas Áreas de Atuação</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Fornecemos serviços de engenharia elétrica de ponta a ponta, projetados para manter sua infraestrutura crítica sempre funcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map(s => (
            <div key={s.id} className="group flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">{s.icon}</span>
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {s.details?.map(detail => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-semibold">
                      <span className="material-symbols-outlined text-[14px] text-primary">circle</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                  <a
                    href={`https://wa.me/5511947483910?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre ${s.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16 md:py-24 px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">
              Confiança Técnica e Conformidade
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              Segurança não é negociável. Seguimos as rígidas normas da ABNT (NBR-5410, NBR-14039) e padrões internacionais IEC. Cada projeto é executado por profissionais certificados para garantir total conformidade com a NR-10.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: 'verified', label: 'Registro no CREA' },
                { icon: 'gavel', label: 'Normas NR-10 e NR-35' },
                { icon: 'card_membership', label: 'Certificação ISO' },
                { icon: 'emergency_home', label: 'Resposta em Emergências' }
              ].map(feat => (
                <div key={feat.label} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg fill-icon">{feat.icon}</span>
                  <span className="font-bold text-slate-800 dark:text-white text-sm">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl rotate-2 z-0"></div>
            <div className="relative z-10 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/5">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-white/5 pb-4">
                  <div className="size-10 md:size-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-black text-sm md:text-base">500+</div>
                  <p className="text-sm font-bold">Projetos de Engenharia Concluídos</p>
                </div>
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-white/5 pb-4">
                  <div className="size-10 md:size-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-black text-sm md:text-base">24/7</div>
                  <p className="text-sm font-bold">Suporte Técnico e Monitoramento Remoto</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-10 md:size-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-black text-sm md:text-base">100%</div>
                  <p className="text-sm font-bold">Conformidade com Normas de Segurança</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
