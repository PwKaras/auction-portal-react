import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

type P = {}
type S =
    {
        id?: number;
        name: string;
        image?: string;
        description?: string;
        price?: number | string;
    }

export class AddProductFrom extends React.Component<P, S> {
    state: S
        = {
            name: 'Please - give me name.',
            image: 'https://i.picsum.photos/id/696/200/300.jpg',
            description: 'Please, tell something about me.',
            price: 0,
        }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        switch (name) {
            case 'name': this.setState({ name: value });
                break;
            case 'image': this.setState({ image: value });
                break;
            case 'price': let intValue = parseInt(value) 
            this.setState({ price: intValue });
                break;
        }
    }
    handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const description = event.target.value
        this.setState({ description })
    }

    addProduct = () => {
        const newProduct = {
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            // id?:
        }
        axios.post('http://localhost:9000/products', {
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
                                    <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1"
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
                                    <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon2"
                                        name='image'
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="FormControlTextarea1">Opis aukcji</label>
                                    <textarea className="form-control" id="FormControlTextarea1"
                                        name="description"
                                        onChange={this.handleText}></textarea>
                                </div>
                                <label htmlFor="basic-addon3" className=" font-weight-bold">Cena brutto
                                </label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">
                                            <FontAwesomeIcon icon="tag" />
                                        </span>
                                    </div>
                                    <input
                                        name="price"
                                        type="number" className="form-control"
                                        onChange={this.handleInput} />
                                </div>
                                <button type="submit" className="btn btn-primary shadow float-right"
                                    onClick={this.addProduct}>
                                    <FontAwesomeIcon icon="gavel" />
                                    <span> wystaw przedmiot</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}