import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faImage, faEdit, faTag, faGavel, faPlus, faShoppingBasket, faEnvelope, faKey, faUser, faUserCircle, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { ProductsView } from './views/ProductsView';
import { PromotionsView } from './views/PromotionsView';
import { SuggestionsViews } from './views/SuggestionsView';
import { AddAuctionView } from './views/AddAuctionView';
import { BasketView } from './views/BasketView';
import { LoginView } from './views/LoginView';
import './App.css';
import { UserProvider } from './providers/UserContext';
import  CartProvider  from './providers/CartContext';


library.add(faCartPlus, faImage, faEdit, faTag, faGavel, faPlus, faShoppingBasket, faSignInAlt, faEnvelope, faKey, faUser, faUserCircle, faSearch);

function App() {
  return (
    <UserProvider>
      <CartProvider>
      <Switch>
        <Route path="/" exact component={ProductsView} />
        <Route path="/promotions" component={PromotionsView} />
        <Route path="/suggestions" component={SuggestionsViews} />
        <Route path="/basket" component={BasketView} />
        <Route path="/log" component={LoginView} />
        <Route path="/addAuction" component={AddAuctionView} />
        <Route path="**" render={() => <h1>404 Page not found </h1>} />
      </Switch>
      </CartProvider>
    </UserProvider>);
}

export default App;
