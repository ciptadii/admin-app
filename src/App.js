import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Realtime from './components/realtime/realtime';

// SPA
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div className="">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/home" exact component={Home} />
            <Route path="/realtime" exact component={Realtime} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;