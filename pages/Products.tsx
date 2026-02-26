
import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const brandParam = searchParams.get('brand');

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state with URL param
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all');
    }

    if (brandParam) {
      setActiveBrand(brandParam);
    } else {
      setActiveBrand('all');
    }
  }, [categoryParam, brandParam]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesBrand = activeBrand === 'all' || (p.brand && p.brand.toLowerCase().includes(activeBrand.toLowerCase()));
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.series.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [activeCategory, activeBrand, searchQuery]);

  const categories = [
    { id: 'all', label: 'Todos', icon: 'grid_view' },
    { id: 'prefabricated_modular_dc', label: 'Data Center Pré-Fabricado', icon: 'domain' },
    { id: 'smart_modular_dc', label: 'Data Center Modular Inteligente', icon: 'dns' },
    { id: 'smart_power_supply', label: 'Energia Inteligente (UPS)', icon: 'bolt' },
    { id: 'smart_cooling', label: 'Resfriamento Inteligente', icon: 'ac_unit' },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-10 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 border-b border-slate-200 dark:border-white/10 pb-8">
        <div>
          <h2 className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Nosso Portfólio</h2>
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">Soluções de Energia</h1>
        </div>
        <div className="flex gap-4">
          <div className="relative w-full md:w-auto">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Buscar equipamento..."
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full md:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-24 flex flex-col gap-6 md:gap-8">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Categorias</h3>
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal ${activeCategory === cat.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-100 dark:border-white/5'
                      }`}
                  >
                    <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                    <span className="font-semibold text-sm">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl border border-primary/10 hidden lg:block">
              <h4 className="font-bold text-primary mb-2">Precisa de Dimensionamento?</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">Nossos engenheiros podem ajudar a encontrar o ajuste perfeito para sua infraestrutura específica.</p>
              <button className="text-primary font-bold text-sm underline decoration-2 underline-offset-4">Falar com Especialista</button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(p => (
                <Link to={`/product/${p.id}`} key={p.id} className="group bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 flex-shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    {p.badge && (
                      <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {p.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                  </div>
                  <div className="px-4 pb-6 flex-1 flex flex-col">
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{p.series}</p>
                    <h3 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-3">{p.name}</h3>
                    <div className="flex flex-col gap-2 mb-6 flex-1">
                      {p.specs.map(spec => (
                        <div key={spec} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                          <span className="material-symbols-outlined text-xs text-primary/70">check_circle</span>
                          {spec}
                        </div>
                      ))}
                    </div>
                    <div className="w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl text-center text-sm group-hover:bg-primary group-hover:text-white transition-all group-hover:shadow-lg">
                      Ver Detalhes
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">search_off</span>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Nenhum equipamento encontrado com esses termos.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
