import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" render={()=><Home/>}></Route>
            <Route path="/my-team" component={Team}></Route>
          </Switch>
          
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;

