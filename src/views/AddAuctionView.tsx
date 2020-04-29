import React from 'react';
import { Header } from '../components/Header';
import { AddProductFrom } from '../components/AddProductForm';
import { UserContext } from '../providers/UserContext';
import { InfoCard } from '../components/InfoCard';



export class AddAuctionView extends React.Component {

    static contextType = UserContext

    render() {

        return (
            <>
                <Header />
                <UserContext.Consumer>
                    {
                        () => (this.context.user ?
                            <AddProductFrom />
                            :
                            <InfoCard> dodawać produkty mogą tylko zalogowani użytkownicy</InfoCard>
                        )
                    }
                </UserContext.Consumer>
            </>)
    }
}

