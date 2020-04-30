import React from 'react';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { InfoCard } from '../components/InfoCard';
import { CartContext } from '../providers/CartContext'
import { ProductInBasket } from '../components/ProductInBasket';


export class BasketView extends React.Component {

    static contexType = CartContext

    render() {
        return (
            <>
                <Header />
                <PageTitle>Mój koszyk</PageTitle>
                <InfoCard>
                    <CartContext.Consumer>
                        {() => (
                            this.context.cartState ?
                                <>
                                    <span>Masz już pierwszy produkt</span>
                                    <ProductInBasket />
                                </>
                                : <span>chcemy tu być - twoje produkty</span>
                        )

                        }
                    </CartContext.Consumer>

                </InfoCard>
            </>
        )

    }
}