import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Header from './components/Header';


function App() {
  return (
    <Router>
    <Header />
      <div>
        <img src={require('./images/coopersLogo.png')} 
              alt="Coopers Logo" class="center"
        />
              <br/>
              <p><b>Site Under Development!! Please Visit Again!!</b></p>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </Router>    
      
  
  );
}

export default App;
