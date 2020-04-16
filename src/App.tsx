import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { ProductsView } from './views/ProductsView';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (<>
   <div className="container">
     <h1>auction portal - main page</h1>
     <ProductsView />
   </div>
  </>);
}

export default App;
