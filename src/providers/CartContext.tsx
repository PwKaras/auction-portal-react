import React from 'react';
import { Product } from '../views/Product';
import { UserContext } from './UserContext';

interface CartItem {
    id?: number | string;
    product: Product;

}

interface CartState {
    items: CartItem[],
    total: number
}

type C = {
    cartState: CartState | null;
    addToCart(product: Product | null): void
}

const initialCart: CartState ={
    items: [],
    total: 0
}

export const CartContext = React.createContext<C>(
    {
        cartState: {
            items: [],
            total: 0
        },
        addToCart() {}
    }
);

export class CartProvider extends React.Component {
    state = {
        cartState: null
    }
    addToCart = (product: Product) => {
        console.log('Here I am')
    }
    
    render() {
        return <CartContext.Provider value={{
            cartState: this.state.cartState,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </CartContext.Provider>
    }
}

