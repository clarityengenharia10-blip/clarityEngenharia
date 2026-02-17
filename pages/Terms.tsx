import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="bg-white text-slate-700 font-sans">
            <section className="bg-[#002b5c] text-white py-16">
                <div className="max-w-[1000px] mx-auto px-4 md:px-10">
                    <h1 className="text-4xl font-black mb-4">Termos de Uso</h1>
                    <p className="text-blue-100">Última atualização: 16 de Fevereiro de 2026</p>
                </div>
            </section>

            <section className="py-16 max-w-[1000px] mx-auto px-4 md:px-10 leading-relaxed text-lg space-y-8">
                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">1. Aceitação dos Termos</h2>
                    <p>
                        Ao acessar e utilizar o site da Clarity Engenharia, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">2. Propriedade Intelectual</h2>
                    <p>
                        Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones e imagens, é propriedade da Clarity Engenharia ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais do Brasil e internacionais.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">3. Uso do Site</h2>
                    <p>Você concorda em usar este site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja o uso e aproveitamento do site por qualquer outra pessoa.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">4. Limitação de Responsabilidade</h2>
                    <p>
                        A Clarity Engenharia não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do seu acesso ou uso deste site. O conteúdo é fornecido "como está", sem garantias de qualquer tipo.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">5. Links para Terceiros</h2>
                    <p>
                        Nosso site pode conter links para sites de terceiros. Estes links são fornecidos apenas para sua conveniência. A Clarity Engenharia não tem controle sobre o conteúdo desses sites e não assume responsabilidade por eles.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">6. Alterações</h2>
                    <p>
                        Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso contínuo do site após as alterações constitui aceitação dos novos termos.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#002b5c] mb-4">7. Lei Aplicável</h2>
                    <p>
                        Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais da comarca de São Paulo, SP.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Terms;
