// this website was created By Ahmed Barakat
import Navbar from './components/navbar.js'; 
import './App.css';
import {BrowserRouter as Router,Switch ,Route} from "react-router-dom";
import React from 'react';
import Home from './components/pages/home.js';
import Services from './components/pages/Services.js';
import products from './components/pages/Products.js';
import Signup from './components/pages/Signup.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch> 
        <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={products} />
        <Route path='/Sign-up' component={Signup} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
