import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

type P = {}
type S = {
    id?: number;
    name: string;
    image?: string;
    description?: string;
    price?: number;
}

export class AddProductFrom extends React.Component<P, S> {
    state: S = {
        id: 0,
        name: '',
        image: '',
        description: '',
        price: 0
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        switch (name) {
            case 'name': this.setState({ name: value });
                break;
            case 'image': this.setState({ image: value });
                break;
            // case 'price': this.setState({price:value});
            // break;
        }
    }
    handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('jestem tekstem')
        const description = event.target.value
        this.setState({description})
    }

    addProduct = () => {
        const newProduct = {
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            // id?:
        }
        axios.post('http://localhost:9000/product', {
            ...newProduct
        })
            .then(resp => console.log(resp.data))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4">
                        <div className="imageIcon text-secondary text-center  fa-10x"><FontAwesomeIcon icon="image" /></div>
                        {/* <img src="imageIcon" className="card-img-top" alt="..." /> */}
                    </div>
                    <div className="col mb-4">
                        <div className="card-body">
                            <p className="card-text">Wypełnij wymagane poniżej dane aby wystawić przedmiot na naszym portalu aukcyjnym</p>
                            <form>
                                <label htmlFor="basic-addon1" className=" font-weight-bold">Nazwa aukcji</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <FontAwesomeIcon icon="edit" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"
                                        name="name"
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <label htmlFor="basic-addon2" className=" font-weight-bold">Zdjęcie przedmiotu</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">
                                            <FontAwesomeIcon icon="image" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon2"
                                        name='image'
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Opis aukcji</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                        name="description"
                                        onChange={this.handleText}></textarea>
                                </div>
                                <label htmlFor="basic-addon3" className=" font-weight-bold">Cena brutto</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">
                                            <FontAwesomeIcon icon="tag" />
                                        </span>
                                    </div>
                                    <input type="number" className="form-control" id="basic-addon3" aria-label="Amount (to the nearest dollar)"
                                        name="price"
                                        onChange={this.handleInput} />
                                </div>
                                <button type="submit" className="btn btn-primary float-right"
                                    onClick={this.addProduct}>
                                    <FontAwesomeIcon icon="gavel" />
                                    wystaw przedmiot
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}