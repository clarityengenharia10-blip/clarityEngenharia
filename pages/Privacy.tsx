import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="bg-white text-slate-700 font-sans">
            <section className="bg-[#002b5c] text-white py-16">
                <div className="max-w-[1000px] mx-auto px-4 md:px-10">
                    <h1 className="text-4xl font-black mb-4">Política de Privacidade</h1>
                    <p className="text-blue-100">Última atualização: 16 de Fevereiro de 2026</p>
                </div>
            </section>

            <section className="py-16 max-w-[1000px] mx-auto px-4 md:px-10 leading-relaxed text-lg space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">1. Introdução</h2>
                    <p>
                        A Clarity Engenharia ("nós", "nosso") está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você visita nosso site ou utiliza nossos serviços.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">2. Coleta de Dados</h2>
                    <p>Podemos coletar as seguintes informações:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Informações de Contato:</strong> Nome, e-mail, telefone, empresa (quando fornecidos voluntariamente via formulários).</li>
                        <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de permanência (via cookies e analytics).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">3. Uso das Informações</h2>
                    <p>Utilizamos seus dados para:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Responder a suas solicitações de orçamento e contato.</li>
                        <li>Melhorar a experiência do usuário em nosso site.</li>
                        <li>Enviar comunicações de marketing (apenas se autorizado).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">4. Compartilhamento de Dados</h2>
                    <p>
                        Não vendemos, trocamos ou alugamos suas informações pessoais. Podemos compartilhar dados com prestadores de serviço terceirizados que nos auxiliam na operação do site, desde que concordem em manter essas informações confidenciais.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">5. Segurança</h2>
                    <p>
                        Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">6. Seus Direitos (LGPD)</h2>
                    <p>
                        De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Acessar seus dados pessoais.</li>
                        <li>Corrigir dados incompletos ou inexatos.</li>
                        <li>Solicitar a exclusão de seus dados.</li>
                        <li>Revogar seu consentimento a qualquer momento.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">7. Contato</h2>
                    <p>
                        Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco através do e-mail: <strong>contato@clarityengenharia.com.br</strong>.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
