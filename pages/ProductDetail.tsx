
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<string>(product?.variations?.[0] || '');
  const [isTechSpecsModalOpen, setIsTechSpecsModalOpen] = useState(false);

  // Monta lista real de thumbnails a partir das variationImages
  const galleryEntries: { label: string; src: string }[] = product
    ? product.variationImages && Object.keys(product.variationImages).length > 0
      ? Object.entries(product.variationImages).map(([label, src]) => ({ label, src }))
      : [{ label: '', src: product.image }]
    : [];

  if (!product) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Produto não encontrado</h2>
        <Link to="/products" className="text-primary font-bold underline">Voltar ao catálogo</Link>
      </div>
    );
  }

  const currentImage = galleryEntries[activeThumb]?.src || product.image;

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-10 print:hidden">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Lado Esquerdo: Galeria de Imagens */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <img
                src={currentImage}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Coluna de Miniaturas Vertical */}
            <div className="flex md:flex-col gap-2 order-first md:order-none">
              <div className="hidden md:flex flex-col items-center mb-2">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">expand_less</span>
                </button>
              </div>

              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px] no-scrollbar">
                {galleryEntries.map((entry, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveThumb(idx);
                      if (entry.label && product.variations?.includes(entry.label)) {
                        setSelectedVariation(entry.label);
                      }
                    }}
                    className={`size-20 md:size-24 border-2 rounded-lg p-1 flex-shrink-0 bg-white flex items-center justify-center transition-all ${activeThumb === idx ? 'border-primary' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    title={entry.label}
                  >
                    <img src={entry.src} className="max-w-full max-h-full object-contain" alt={entry.label} />
                  </button>
                ))}
              </div>

              <div className="hidden md:flex flex-col items-center mt-2">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">expand_more</span>
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Informações e Ações */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
              {product.name}
            </h1>

            <div className="h-1 w-16 bg-primary"></div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Variações do Produto */}
            {product.variations && product.variations.length > 0 && (
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Escolha a Variação:</span>
                <div className="flex flex-wrap gap-2">
                  {product.variations.map((variation) => (
                    <button
                      key={variation}
                      onClick={() => {
                        setSelectedVariation(variation);
                        const idx = galleryEntries.findIndex(e => e.label === variation);
                        if (idx !== -1) setActiveThumb(idx);
                      }}
                      className={`px-4 py-2 rounded text-sm font-medium transition-colors border ${selectedVariation === variation
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary/50'
                        }`}
                    >
                      {variation}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Grid de Botões Secundários */}
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setIsTechSpecsModalOpen(true)} className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-white/10 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">
                <span className="material-symbols-outlined text-primary text-xl">bolt</span>
                Dados Técnicos
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-white/10 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                <span className="material-symbols-outlined text-slate-400 text-xl">print</span>
                Impressão
              </button>
            </div>

            {/* Botão Principal de Orçamento */}
            <button
              onClick={() => {
                addToCart(product, selectedVariation || undefined);
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }}
              disabled={added}
              className={`w-full text-center py-4 rounded font-bold transition-all shadow-md flex items-center justify-center gap-2 ${added
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-[#2b6592] hover:bg-[#1e4a6d] text-white hover:scale-[1.02] active:scale-95'
                }`}
            >
              {added ? (
                <>
                  <span className="material-symbols-outlined">check</span>
                  Adicionado ao Orçamento
                </>
              ) : (
                'Adicionar ao orçamento'
              )}
            </button>

            {/* Links de Documentação reais */}
            {product.docs && product.docs.length > 0 && (
              <div className="flex flex-col gap-4 mt-2">
                {product.docs.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2 hover:bg-slate-50 dark:hover:bg-white/5 p-2 rounded transition-colors group"
                  >
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium group-hover:text-primary transition-colors">{doc.name}</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">picture_as_pdf</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Seção Inferior: Saiba Mais */}
        <div className="mt-20">
          <div className="relative mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block">
              Saiba mais sobre o produto
            </h2>
            <div className="absolute -bottom-3 left-0 h-1 w-20 bg-primary"></div>
          </div>

          <div className="flex flex-col gap-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            <p>
              O {product.name} é a solução ideal para garantir a estabilidade elétrica em ambientes que não podem sofrer interrupções.
              Desenvolvido com foco em alta eficiência e durabilidade, este equipamento protege seus computadores e periféricos contra
              flutuações de tensão e picos de energia que podem comprometer a integridade dos dados e do hardware.
            </p>
            <p>
              Equipado com sistemas de notificação inteligente, ele informa em tempo real sobre mudanças nas condições de energia da linha
              e do próprio sistema de baterias. O recurso de auto-teste periódico assegura que o sistema esteja sempre pronto para atuar,
              detectando precocemente a necessidade de manutenção ou substituição de componentes internos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-6">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm font-medium">{spec}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Versão Oculta para Impressão */}
      <div className="hidden print:block w-full max-w-4xl mx-auto p-8 bg-white text-black">
        {/* Header da Empresa */}
        <div className="flex border-b-2 border-[#002b5c] pb-6 mb-8 gap-6 items-center">
          <div className="w-1/3">
            <h1 className="text-3xl font-black text-[#002b5c] tracking-tight">
              CLAREZA<span className="text-sky-500 font-bold text-sm align-top ml-1">ENGENHARIA</span>
            </h1>
          </div>
          <div className="w-2/3 text-sm text-gray-600 text-right space-y-1">
            <p className="font-bold text-gray-800">Clarity Engenharia</p>
            <p>R. Aparecida de São Manuel, 338 - Vila Nova York, São Paulo - SP</p>
            <p>(11) 2781-5588 | contato@clarityengenharia.com.br</p>
            <p>www.clarityengenharia.com.br</p>
          </div>
        </div>

        {/* Produto Info */}
        <div className="flex gap-8 mb-8">
          <div className="w-1/3">
            <img src={currentImage} alt={product.name} className="w-full h-auto object-contain border border-gray-200 p-4 rounded-xl" />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold text-[#002b5c] mb-3">{product.name}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
            <h3 className="font-bold text-gray-900 mt-6 mb-3">Principais Características:</h3>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
              {product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dados Técnicos Tabela Print */}
        {product.detailedSpecs && (
          <div className="mb-8 mt-10">
            <h3 className="text-lg font-bold text-white bg-[#002b5c] px-4 py-2 rounded-t-lg">Especificações Técnicas</h3>
            <table className="w-full text-sm text-left border-collapse border border-gray-300">
              <tbody>
                {Object.entries(product.detailedSpecs).map(([key, value], idx) => (
                  <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <th className="px-4 py-3 font-medium border border-gray-300 w-1/3">{key}</th>
                    <td className="px-4 py-3 text-gray-700 border border-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer do PDF */}
        <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
          <p>Especificações geradas pelo sistema Clarity Engenharia. Consulte sempre o manual técnico oficial do fabricante para dados completos.</p>
        </div>
      </div>

      {/* Modal de Dados Técnicos */}
      {isTechSpecsModalOpen && product.detailedSpecs && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden"
          onClick={() => setIsTechSpecsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-[#001f42]/90 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#002b5c] px-6 py-4 flex items-center justify-between flex-shrink-0">
              <h2 className="text-white text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-400">handyman</span>
                Dados Técnicos - {product.name}
              </h2>
              <button
                onClick={() => setIsTechSpecsModalOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {Object.entries(product.detailedSpecs).map(([key, value], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-900'}>
                        <th className="px-6 py-4 font-medium text-slate-900 dark:text-white w-1/3">{key}</th>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
