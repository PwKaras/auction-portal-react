import React, { useContext } from 'react';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { InfoCard } from '../components/InfoCard';
import { CartContext } from '../providers/CartContext'
import { ProductInBasket } from '../components/ProductInBasket';
import { Product } from './Product';
import { type } from 'os';


interface Props { };

// type P = {
//     product: Product,
// }

export const BasketView = (props: Props) => {
    const { items } = useContext(CartContext)

    // static contextType = CartContext


    return (
        <>
            <Header />
            <PageTitle>Mój koszyk</PageTitle>

            <div className="container mt-5">
                <div className="card col-10 m-auto p-3 shadow text-center font-weight-bold">
                    
                    {items.length ?
                        <>
                            <span>Masz już pierwszy produkt
                    </span>
                            <div className="row">
                                <div className="col-sm">
                                    Produkt</div>
                                <div className="col-sm">
                                    Cena</div>
                                <div className="col-sm">
                                    Ilość</div>
                                <div className="col-sm">
                                    Suma</div>
                            </div>
                            {items.map((item: { id: string | number | undefined; product: any; }) => <ProductInBasket key={item.product.id} product = {item.product}/> )}
                    {/* items.map(item =>
                        <ProductInBasket
                            key={item.id}
                            product={item} /> */}

                        {/* {this.context.cartState.items.map((product: Product) => {
                                        let { name, price } = product
                                        console.log(price)
                                        console.table({ ...product })
                                        return (
                                        )
                                    }
                                    )} */}

                    
                    </>
                        :
                        <span>chcemy tu być - twoje produkty</span> 
                        }
                    {/* <CartContext.Consumer>
                        {() => (
                            cartState.items.length ?
                                <>
                                    <span>Masz już pierwszy produkt
                                    </span>
                                    <div className="row">
                                        <div className="col-sm">
                                            Produkt</div>
                                        <div className="col-sm">
                                            Cena</div>
                                        <div className="col-sm">
                                            Ilość</div>
                                        <div className="col-sm">
                                            Suma</div>
                                    </div>
                                   
                                    {this.context.cartState.items.map((product: Product) => {
                                        let { name, price } = product
                                        console.log(price)
                                        console.table({ ...product })
                                        return (
                                            <ProductInBasket
                                                key={product.id}
                                                product={product} />
                                        )
                                    }
                                    )}


                                </>
                                : <span>chcemy tu być - twoje produkty</span>
                        )
                        }
                    </CartContext.Consumer> */}
                </div>
            </div>


        </>
    )


}