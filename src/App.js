import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Components/Home/Home';
import History from './Components/History/History';
import Navigation from './Components/Navigation';


class App extends Component {
 
    render() {
        return (
            <BrowserRouter>
              <div>
               <Navigation/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;