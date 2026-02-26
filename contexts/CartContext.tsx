import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';

export interface CartItem extends Product {
    cartItemId: string;
    selectedVariation?: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, selectedVariation?: string) => void;
    removeFromCart: (cartItemId: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCart = localStorage.getItem('clarity_cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('clarity_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product, selectedVariation?: string) => {
        setCartItems((prevItems) => {
            const cartItemId = selectedVariation ? `${product.id}-${selectedVariation}` : product.id;
            const existingItem = prevItems.find((item) => item.cartItemId === cartItemId);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            const finalImage = selectedVariation && product.variationImages && product.variationImages[selectedVariation]
                ? product.variationImages[selectedVariation]
                : product.image;

            return [...prevItems, { ...product, image: finalImage, cartItemId, selectedVariation, quantity: 1 }];
        });
    };

    const removeFromCart = (cartItemId: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
