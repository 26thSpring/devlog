import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'App.scss';
import { Home, About } from 'pages/index.async.js';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import { hot } from 'react-hot-loader';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Header />
            <Main />
            <Route exact path="/" component={Home} />
            <Switch>
               <Route path="/about/:name" component={About} />
               <Route path="/about" component={About} />
            </Switch>
         </div>
      );
   }
}

export default hot(module)(App);
