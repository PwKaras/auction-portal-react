import React from 'react';
import { Navigation } from './Navigation';

export const Header = ( ) => (
    <div className="card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h1 className="card-title">Auction portal</h1>
            </li>
            <li className="list-group-item pl-3">
                <Navigation />
            </li>
        </ul>
    </div>
);