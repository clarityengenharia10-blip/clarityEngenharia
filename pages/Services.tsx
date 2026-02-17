
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

      {/* Áreas de Atuação */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">Nosso Escopo</span>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-black text-[#002b5c] mb-8">Áreas de Atuação</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 font-medium">
            No-breaks, Retificadores, Grupos Geradores, Painéis Elétricos, Estabilizadores de Tensão, Manutenções Prediais
          </p>
          <p className="text-slate-500 leading-relaxed max-w-4xl mx-auto mb-12">
            Clarity Engenharia, empresa multimarcas que atua na área de assistência técnica, manutenção preventiva e corretiva, locação e comercialização de No-breaks, Grupos Geradores, Estabilizadores de Tensão, Retificadores e manutenção predial, oferecendo uma linha completa de produtos e serviços para atender as necessidades dos seus clientes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: 'bolt', label: 'No-breaks' },
              { icon: 'electrical_services', label: 'Retificadores' },
              { icon: 'electric_bolt', label: 'Grupos Geradores' },
              { icon: 'settings_power', label: 'Painéis Elétricos' },
              { icon: 'energy_savings_leaf', label: 'Estabilizadores' },
              { icon: 'domain', label: 'Manutenção Predial' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-6 bg-slate-50 rounded-xl min-w-[160px] hover:bg-white hover:shadow-lg transition-all border border-slate-100">
                <span className="material-symbols-outlined text-4xl text-sky-500">{item.icon}</span>
                <span className="font-bold text-[#002b5c]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & App Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">Tecnologia Exclusiva</h2>
              <h3 className="text-4xl font-black text-[#002b5c] mb-6 leading-tight">Gestão Inteligente na Palma da Mão</h3>
              <p className="text-lg text-slate-600 mb-8">
                Através do Sistema implantado pela Clarity Engenharia, torna-se possível programar rotinas de visitas, ciclos de visitas semanais, quinzenais e mensais.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#002b5c] flex-shrink-0">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002b5c] text-lg">Planejador de Tarefas</h4>
                    <p className="text-slate-600 text-sm">Roteiriza visitas agendadas e relaciona locais de atendimento e agentes através da distância entre eles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#002b5c] flex-shrink-0">
                    <span className="material-symbols-outlined">checklist</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002b5c] text-lg">Checklist Digital</h4>
                    <p className="text-slate-600 text-sm">Padronização de atendimentos com checklists digitais para geradores, nobreaks e infraestrutura.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#002b5c] flex-shrink-0">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002b5c] text-lg">Relatórios em Tempo Real</h4>
                    <p className="text-slate-600 text-sm">Relatórios técnicos gerados via APP, com fotos, pendências e assinaturas digitais.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup Representation */}
            <div className="flex-1 relative flex justify-center">
              <div className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl border-8 border-slate-800 max-w-[300px]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
                <div className="bg-slate-100 rounded-[2rem] overflow-hidden h-[550px] flex flex-col relative">
                  {/* Screen Content Mockup */}
                  <div className="bg-[#002b5c] p-6 pt-12 text-white">
                    <div className="flex justify-between items-center mb-6">
                      <span className="material-symbols-outlined">menu</span>
                      <span className="font-bold">CLARITY APP</span>
                      <span className="material-symbols-outlined">notifications</span>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl mb-4">
                      <p className="text-xs opacity-70">Próxima Visita</p>
                      <p className="font-bold">Banco BMG - Data Center</p>
                      <p className="text-xs mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">schedule</span> 14:00 - Hoje</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-600"><span className="material-symbols-outlined">check_circle</span></div>
                      <div>
                        <p className="font-bold text-sm text-slate-800">Checklist Preventiva</p>
                        <p className="text-xs text-slate-500">Concluído em 10:30</p>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                      <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><span className="material-symbols-outlined">warning</span></div>
                      <div>
                        <p className="font-bold text-sm text-slate-800">Alerta de Temperatura</p>
                        <p className="text-xs text-slate-500">Sala UPS 02 - 28°C</p>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><span className="material-symbols-outlined">description</span></div>
                      <div>
                        <p className="font-bold text-sm text-slate-800">Relatório Mensal</p>
                        <p className="text-xs text-slate-500">Disponível para download</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto p-4">
                    <button className="w-full bg-[#002b5c] text-white py-3 rounded-xl font-bold text-sm shadow-lg">Iniciar Nova Tarefa</button>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-20">
        <div className="flex flex-col gap-4 mb-12 md:mb-16 max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs">Serviços Especializados</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">Soluções Completas</h2>
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
              <div className="flex-1 flex flex-col">
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
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
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

      {/* Importance of Maintenance */}
      <section className="py-20 bg-[#002b5c] text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">A Importância da Manutenção</h2>
            <p className="text-blue-100 text-lg max-w-4xl mx-auto leading-relaxed">
              Através das manutenções preventivas, a vida útil do equipamento é estendida. É muito importante entender como as manutenções se dividem para aplicar a melhor estratégia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-8">
              <div className="bg-[#003875] p-6 rounded-xl border-l-4 border-green-500 hover:bg-[#004085] transition-colors">
                <h3 className="text-xl font-bold text-green-400 mb-3">Manutenção Preventiva</h3>
                <p className="text-sm opacity-90 leading-relaxed text-blue-50">
                  Através da manutenção preventiva, a vida útil do equipamento é estendida em aproximadamente 70% uma vez que é possível identificar e corrigir qualquer tipo de anomalia futura que possa causar paradas repentinas no sistema, garantindo a continuidade e perfeito funcionamento do equipamento, realizando checagem, limpeza interna e externa, ajustes gerais elétricos e mecânicos, verificação de baterias e análise das tensões.
                </p>
              </div>
              <div className="bg-[#003875] p-6 rounded-xl border-l-4 border-yellow-500 hover:bg-[#004085] transition-colors">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Manutenção Preditiva</h3>
                <p className="text-sm opacity-90 leading-relaxed text-blue-50">
                  A manutenção preditiva é o acompanhamento periódico de equipamentos ou máquinas, através de dados coletados por meio de inspeções. As técnicas mais comuns utilizadas para manutenção preditiva podem ser: análise de vibração, ultrassom, inspeção visual e outras técnicas de análise não destrutivas. Trata-se de um processo que diz o tempo de vida útil dos componentes das máquinas e equipamentos e as condições para que esse tempo de vida seja bem aproveitado.
                </p>
              </div>
              <div className="bg-[#003875] p-6 rounded-xl border-l-4 border-red-500 hover:bg-[#004085] transition-colors">
                <h3 className="text-xl font-bold text-red-400 mb-3">Manutenção Corretiva</h3>
                <p className="text-sm opacity-90 leading-relaxed text-blue-50">
                  A manutenção corretiva acontece quando o equipamento já está com alguma peça irregular, apresentando mal funcionamento, e ela precisa ser substituída. Essa manutenção pode ser necessária em duas situações: quando surge uma falha inesperada, ou então quando é detectada alguma falha que possa levar a algum problema maior futuramente.
                </p>
              </div>
            </div>

            {/* Corrective x Preventive Comparison */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center border-b border-white/10 pb-4">Manutenção Corretiva x Preventiva</h3>
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                <p className="text-blue-100 leading-relaxed">
                  A manutenção corretiva possui maior impacto financeiro do que a manutenção preventiva. Uma vez que pode implicar a suspensão prolongada da atividade das máquinas e equipamentos, podendo mesmo levar à indisponibilidade de uma linha de produção, ou outro serviço.
                </p>
                <div className="bg-green-500/20 p-6 rounded-xl border border-green-500/30">
                  <p className="font-bold text-green-300 mb-2">A Vantagem da Prevenção</p>
                  <p className="text-sm text-green-100">
                    A principal vantagem de ter um plano de manutenção preventiva é poder prevenir todas essas situações, substituindo os componentes usados no prazo certo, preservando e restaurando todas as peças necessárias.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
