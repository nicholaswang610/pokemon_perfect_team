import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Team from './Team.js'

class App extends Component
{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/my-team" component={Team}></Route>
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
