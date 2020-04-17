import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type P = {}
type S = {
    id?: number;
    name: string;
    image?: string;
    decription?: string;
    price?: number;
}

export class AddProductFrom extends React.Component<P, S> {
    state: S = {
        id: 0,
        name: '',
        image: '',
        decription: '',
        price: 0
    }

    handleButtonClick() {
        console.log('hello')
    }

    handleInput = (event: React.FormEvent<HTMLFormElement>) => {
        // const value = event.target.value
        // console.log('aaa', value)
        // this.setState( )
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4">
                        <div className="imageIcon text-secondary text-center fa-10x"><FontAwesomeIcon icon="image" /></div>
                        {/* <img src="imageIcon" className="card-img-top" alt="..." /> */}
                    </div>
                    <div className="col mb-4">
                        <div className="card-body">
                            <p className="card-text">Wypełnij wymagane poniżej dane aby wystawić przedmiot na naszym portalu aukcyjnym</p>
                            <form onChange={this.handleInput}>
                                <label htmlFor="basic-addon1" className=" font-weight-bold">Nazwa aukcji</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <FontAwesomeIcon icon="edit" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <label htmlFor="basic-addon2" className=" font-weight-bold">Zdjęcie przedmiotu</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">
                                            <FontAwesomeIcon icon="image" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon2" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Opis aukcji</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
                                </div>
                                <label htmlFor="basic-addon3" className=" font-weight-bold">Cena brutto</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon3">
                                            <FontAwesomeIcon icon="tag" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" id="basic-addon3" aria-label="Amount (to the nearest dollar)" />
                                </div>
                                <button type="submit" className="btn btn-primary float-right">
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