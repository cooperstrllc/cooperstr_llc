import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import NavBar from './components/NavBar';
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (

    <Router>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      <Footer /> 
    </Router> 
  
  );
}

export default App;
