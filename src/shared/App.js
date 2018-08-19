import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'App.scss';
import { Home, About, Posts } from 'pages/index.async.js';
import Header from 'components/header/Header';
import Main from 'components/main/Main';

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
            <Route path="/posts" component={Posts} />
         </div>
      );
   }
}

export default App;
