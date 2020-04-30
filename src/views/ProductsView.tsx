import React from 'react';
import { Product } from './Product';
import { Header } from '../components/Header';
import { Card } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import { PageTitle } from '../components/PageTitle';
import { CartContext } from '../providers/CartContext';

type P = {
}
type S = {
    products: Product[]
}


export class ProductsView extends React.Component<P, S> {

    state: S = {
        products: [],
    }
    componentDidMount() {
        this.loadProducts()
    }
    loadProducts = () => {
        fetch('http://localhost:9000/products')
            .then(a => a.json())
            .then((data: Product[]) => {
                this.setState({ products: data })
            })
    }

   
    static contextType = CartContext

    render() {
        return <div>

            <Header />
            <PageTitle>Lista naszych aukcji</PageTitle>
            <div className="card p-5">
                <div className="row row-cols-1 row-cols-md-4">
                    {this.state.products.map(product =>
                        <Card product={product} key={product.id}
                        onAddToCart={this.context.addToCart} />
                    )}
                </div>
            </div>
            <Footer />

        </div>
    }
}