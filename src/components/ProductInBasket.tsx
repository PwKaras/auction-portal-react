import React from 'react';
import { Product } from '../views/Product';

type P = {
    product: Product,
    key: number | undefined
}

export const ProductInBasket = ({...props}) => (
    <>
        <div className="container">

            <div className="row">
                <div className="col-sm">
                    {props.product.name}
                </div>
                <div className="col-sm">
                    {props.product.price}
                </div>
                <div className="col-sm">
                    ilość 
                </div>
                <div className="col-sm">
                    total
                </div>
            </div>
        </div>
    </>
)