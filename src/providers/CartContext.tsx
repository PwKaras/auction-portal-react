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
            console.log("flowers");
            cartState.items.map(function (item) { if (item.product.id === product.id && item.quantity) { item.quantity++ } });
            return
        };
        quantity++
        setCartState({
            ...setCartState,
            items: [...cartState.items, { product, quantity }],
            total: cartState.total++
        })
        // cartState.items.find(function (item) {
        //     if (product.id === item.product.id && item.quantity) {
        //         console.log(item)
        //         console.log(product.id)
        //         console.log(item.quantity)
        //         item.quantity++
        //         console.log(item.quantity)
        //     }
        //     console.log(item)
        //     return item
        // });
        // quantity++
        // setCartState({
        //     ...setCartState,
        //     items: [...cartState.items, { product, quantity }],
        //     total: cartState.total++
        // })
        // if (cartState.items.find(item => item.product.id === product.id && item.quantity)) {
        //     console.log("I`m here")
        //     console.log()

        //     console.log(product)
        //     console.log(cartState.items[0].quantity)
        //     console.log(quantity)
        //     quantity++
        //     console.log(quantity)
        // };
        // quantity++
        // setCartState({
        //     ...setCartState,
        //     items: [...cartState.items, { product, quantity }],
        //     total: cartState.total++
        // })

        // ) ||
        // quantity++
        // setCartState({
        //     ...setCartState,
        //     items: [...cartState.items, { product, quantity }],
        //     total: cartState.total++
        // })
        // cartState.items.find(item => {if (
        //     product.id === item.product.id && item.quantity)
        //     console.log("I`m here")
        //     quantity++
        // }) ||
        // quantity++
        // setCartState({
        //     ...setCartState,
        //     items: [...cartState.items, { product, quantity }],
        //     total: cartState.total++
        // })


        // const price = product.price
        // quantity++
        // setCartState({
        //     ...cartState,
        //     items: [...cartState.items, { product, quantity }],
        //     total: cartState.total + 2,
        // });

        // if (!cartState.items.length) {
        //     quantity++;
        //     console.log("hello");
        //     setCartState({
        //         ...cartState,
        //         items: [...cartState.items, { product, quantity }],
        //         total: cartState.total + 2,
        //     });
        // }
        // else if (cartState.items.find(function (item) {
        //     if (
        //         product.id === item.product.id && item.quantity
        //     ) {
        //         const ind = cartState.items.indexOf(item);
        //         console.log(ind)
        //         console.log(cartState.items[ind])
        //         console.log(item.quantity)
        //         item.quantity++
        //         return ind
        //     }
        //     else {
        //         quantity = 1
        //         console.log("else quantity")
        //         setCartState({
        //             ...cartState,
        //             items: [...cartState.items, { product, quantity }],
        //             total: cartState.total + 2,
        //         });
        //         console.log("else setCartSta")
        //     }
        // })) {
        //     return cartState.items
        // }
    }


    // const addToCart = (product: Product) => {
    //     cartState.items.find(item => {
    //         if (item.id === product.id) {
    //             console.log("I`have been there");
    //         } else {
    //             setCartState({
    //                 ...cartState,
    //                 items: [...cartState.items, { product }]
    //             })
    //         }
    //     })
    // }


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

