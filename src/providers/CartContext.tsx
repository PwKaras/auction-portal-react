import React, { useState } from 'react';
import { Product } from '../views/Product';


export const CartContext = React.createContext<any>(
    {
        items: [] as CartItem[],
        addToCart: (product: Product, quantity: CartItem["quantity"]) => { }
    }
);


interface CartItem {
    id?: number;
    quantity?: number;
    // productId: number;
    readonly product: Product;
};

interface CartState {
    items: CartItem[],
    total: number
};

const initialCart: CartState = {
    items: [],
    total: 0
};

const CartProvider = (props: { children: React.ReactNode; }) => {
    const [cartState, setCartState] = useState(initialCart);


    const addToCart = (product: Product, quantity: CartItem["quantity"] = 0) => {
        if (cartState.items.find(item => item.product.id === product.id)) {
            cartState.items.map(function (item) { if (item.product.id === product.id && item.quantity) { item.quantity++ } });
            setCartState({
                ...setCartState,
                items: [...cartState.items],
                total: cartState.total++
            })
            return
        };
        quantity++
        setCartState({
            ...setCartState,
            items: [...cartState.items, { product, quantity }],
            total: cartState.total++
        });
    }



    return (
        <>
            <CartContext.Provider value={{
                items: cartState.items,
                addToCart
            }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider

