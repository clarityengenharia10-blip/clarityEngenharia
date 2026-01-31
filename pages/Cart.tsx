import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const handleWhatsAppCheckout = () => {
        if (cartItems.length === 0) return;

        const phoneNumber = "5511947483910";
        let message = "*Olá! Gostaria de solicitar um orçamento para os seguintes itens:*\n\n";

        cartItems.forEach((item, index) => {
            message += `${index + 1}. *${item.name}* (${item.series})\n   - Categoria: ${item.category}\n   - Quantidade: ${item.quantity}\n\n`;
        });

        message += "*Aguardo o retorno.*";

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] pt-24 pb-12 px-4 md:px-10 animate-in fade-in duration-500">
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8">
                    Seu Carrinho de Orçamento
                </h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">shopping_cart_off</span>
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-6">Seu carrinho está vazio.</p>
                        <Link to="/products" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all">
                            Ver Produtos
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center gap-6">
                                    <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700/50 rounded-lg p-2 flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                                    </div>
                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{item.series}</p>
                                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md uppercase">
                                            Qty: {item.quantity}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                        title="Remover item"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-white/5">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Resumo do Pedido</h3>

                                <div className="flex justify-between items-center mb-6 text-slate-600 dark:text-slate-300">
                                    <span>Total de Itens:</span>
                                    <span className="font-bold text-lg">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={handleWhatsAppCheckout}
                                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
                                    >
                                        <span className="material-symbols-outlined">chat</span>
                                        Finalizar no WhatsApp
                                    </button>

                                    <button
                                        onClick={clearCart}
                                        className="w-full text-slate-500 hover:text-red-500 text-sm font-semibold py-2 transition-colors"
                                    >
                                        Limpar Carrinho
                                    </button>
                                </div>

                                <p className="text-xs text-slate-400 text-center mt-4">
                                    Você será redirecionado para o WhatsApp para enviar seu pedido de orçamento.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
