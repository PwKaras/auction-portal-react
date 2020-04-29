import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { UserContext } from '../providers/UserContext';
import { InfoCard } from './InfoCard';

type P = {}
type S = {
    email: string,
    password: string
}

export class LoginForm extends React.Component<P, S>{

    static contextType = UserContext

    state: S = {
        email: '',
        password: ''
    }

    tryLogin = () => {
        axios.get('http://localhost:9000/users', {
            params: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(resp => {
                if (resp.data.length) {
                    this.context.setUser(resp.data)
                }
                else { console.log('try again') }
            })
    };

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        switch (name) {
            case
                'password': this.setState({ password: value })
                break;
            case
                'email': this.setState({ email: value })
                break;
        };
    };





    render() {
        return (
                    <InfoCard>
                    <label htmlFor="basic-addon1"
                        className=" font-weight-bold">
                        Adres e-mail
                     </label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="envelope" /></span>
                        </div>
                        <input type="e-mail"
                            className="form-control" placeholder="e-mail"
                            aria-label="e-mail" aria-describedby="basic-addon1"
                            name="email"
                            onChange={this.handleInput}
                        />
                    </div>
                    <label htmlFor="basic-addon2"
                        className=" font-weight-bold">
                        Hasło dostępu
                     </label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon2"><FontAwesomeIcon icon="key" /></span>
                        </div>
                        <input type="text"
                            className="form-control"
                            placeholder="Hasło dostępu" aria-label="password" aria-describedby="basic-addon2" name="password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary shadow  w-50"
                            onClick={this.tryLogin}
                        >
                            <FontAwesomeIcon icon="sign-in-alt" />
                            <span> Zaloguj</span>
                        </button>
                    </div>
                    </InfoCard>
        )
    }
}

