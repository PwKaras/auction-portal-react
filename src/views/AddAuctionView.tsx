import React from 'react';
import { Header } from '../components/Header';
import { AddProductFrom } from '../components/AddProductForm';


export class AddAuctionView extends React.Component {

// addProduct = (e) => {
//     console.log("hello")
// }
    render() {

        return (
            <>
                <Header />
                <AddProductFrom />
            </>)
    }
}

