import React from 'react';
import { Product } from '../views/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';


type P = {
    product: Product
}

export const Card = (props: P) => (

      <div className="col mb-4">
            <div className="card">
                <h5 className="card-header">{props.product.name}</h5>
                <img src={props.product.image} className="card-img-top" alt={props.product.name} />
                <div className="card-body">
                    <p className="card-text">{props.product.description}</p>
                    <div className="card-body d-flex justify-content-between">
                        <h5 className="card-title">{props.product.price} zł</h5>
                        <Button><FontAwesomeIcon icon="cart-plus" /></Button>
                        
                    </div>
                </div>
            </div>
     </div>

);
