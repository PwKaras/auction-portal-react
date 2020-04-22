import React from 'react';
import { Header } from '../components/Header';
import { AddProductFrom } from '../components/AddProductForm';


export class AddAuctionView extends React.Component {


    // handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     event.preventDefault()
    //     // addProduct = ()
    //     console.log('hello')
    // }
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

