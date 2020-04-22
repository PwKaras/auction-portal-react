import React from 'react';
import { Header } from '../components/Header';
import { AddProductFrom } from '../components/AddProductForm';


export class AddAuctionView extends React.Component {

    render() {

        return (
            <>
                <Header />
                <AddProductFrom />
            </>)
    }
}

