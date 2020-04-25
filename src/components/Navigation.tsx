import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../UserContext';

export const Navigation = () => (

    <nav className="navbar navbar-expand navbar-light ml-0 pl-0">

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active ">
                    <NavLink exact to="/" className="nav-link text-primary" activeClassName="font-weight-bold">Aukcje<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink exact to="/promotions" className="nav-link text-primary" activeClassName="font-weight-bold">Promocje</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink exact to="/suggestions" className="nav-link text-primary" activeClassName="font-weight-bold">Podpowiadamy </NavLink>
                </li>
            </ul>
            <form className="navbar-nav">
                <NavLink exact to="/log" className="nav-link text-primary" activeClassName="font-weight-bold">
                    <Button><FontAwesomeIcon icon="sign-in-alt" /> Logowanie</Button>
                </NavLink>
                <NavLink exact to="/addAuction" className="nav-link text-primary" activeClassName="font-weight-bold">
                <Button><FontAwesomeIcon icon="plus" /> Dodaj produkt</Button>
                </NavLink>
                <NavLink exact to="/basket" className="nav-link text-primary" activeClassName="font-weight-bold">
                <Button><FontAwesomeIcon icon="shopping-basket" /> Koszyk</Button>
                </NavLink>
            </form>
        </div>
    </nav>

)