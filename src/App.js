import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.compoment';


function App() {
  return (
    <div className="App">
      <Header/> 
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
