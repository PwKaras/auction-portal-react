import React from 'react';
import { Product } from './Product';
import { Card } from '../components/ProductCard';

type P = {}
type S = {
    products: Product[]
}

export class ProductsView extends React.Component<P, S> {
    state: S = {
        products: []
    }
    componentDidMount() {
        this.loadProducts()
    }
    loadProducts = () => {
        fetch('http://localhost:9000/product')
            .then(a => a.json())
            .then((data: Product[]) => {
                this.setState({ products: data })
            })
    }

    render() {
        return <div>
            <div className="row row-cols-1 row-cols-md-4">

                {this.state.products.map(product =>
                    <Card product={product} key={product.id} />
                )}

            </div>

            {/* <ul>
                {this.state.products.map(product => {
                    return <ul key={product.id}>
                        <li>{product.name}</li>
                        <img src={product.image} alt="" />
                    </ul>
                })}
            </ul> */}

        </div>
    }
}