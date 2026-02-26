
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

  if (!product) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Produto não encontrado</h2>
        <Link to="/products" className="text-primary font-bold underline">Voltar ao catálogo</Link>
      </div>
    );
  }

  // Mock thumbnails based on the main image
  const thumbnails = [product.image, product.image, product.image];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Lado Esquerdo: Galeria de Imagens */}
          <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
              <img
                src={thumbnails[activeThumb]}
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

              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
                {thumbnails.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(idx)}
                    className={`size-20 md:size-24 border-2 rounded-lg p-1 flex-shrink-0 bg-white flex items-center justify-center transition-all ${activeThumb === idx ? 'border-primary' : 'border-slate-200 hover:border-slate-300'
                      }`}
                  >
                    <img src={img} className="max-w-full max-h-full object-contain" />
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
                      onClick={() => setSelectedVariation(variation)}
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
              <a href="#tech-specs" className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-white/10 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm">
                <span className="material-symbols-outlined text-primary text-xl">bolt</span>
                Dados Técnicos
              </a>
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

            {/* Links de Documentação */}
            {/* Links de Documentação */}
            {product.docs && product.docs.length > 0 ? (
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
            ) : (
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Especificações...</span>
                  <span className="material-symbols-outlined text-slate-400">picture_as_pdf</span>
                </div>
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

            {/* Detailed Technical Specs Table */}
            {product.detailedSpecs && (
              <div id="tech-specs" className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">handyman</span>
                  Especificações Técnicas
                </h3>
                <div className="border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-slate-200 dark:divide-white/10">
                      {Object.entries(product.detailedSpecs).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50 dark:bg-white/5' : 'bg-white dark:bg-transparent'}>
                          <th className="px-6 py-4 font-medium text-slate-900 dark:text-white w-1/3">{key}</th>
                          <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
