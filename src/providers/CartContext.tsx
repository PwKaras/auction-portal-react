import React from 'react';
import { Product } from '../views/Product';

interface CartItem {
    id?: number | string;
    product: Product;

}

interface CartState {
    items: CartItem[],
    // total: number
}

type C = {
    product: Product | null;
    cartState: CartState | null;
    addToCart(product: Product | null): void
}

const initialCart: CartState = {
    items: [],
    // total: 0
}

export const CartContext = React.createContext<C>(
    {
        product: {
            name: "",
            description: "",
            image: "",
            price: 0
        },
        cartState: {
            items: [],
            // total: 0
        },
        addToCart() { }
    }
);

export class CartProvider extends React.Component {
    state = {
        cartState: { ...initialCart },
        product: {
            name: "",
            description: "",
            image: "",
            price: 0
        }
    }


    addToCart = (product: Product) => {
        console.log('Here I am')
        this.setState(() => ({ ...product }))
        // console.log({...product})
        initialCart.items.push({product})

        const quantity = 0
        initialCart.items.forEach(p =>{ 
            if (p.product.name == this.state.product.name)
            console.log({...product}) })
        // this.context.state.items.forEach((p: { id: any; }) => {
        //     if (p.id == product.id) {
        //         console.log('hello1')
        //         // const newId = items
        //     }
        // });
    }


        render() {
            return <CartContext.Provider value={{
                product: this.state.product,
                    cartState: this.state.cartState,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        }
    }


