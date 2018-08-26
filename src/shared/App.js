import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import { hot } from 'react-hot-loader';
import { PostWriter } from 'pages/index.async';

class App extends Component {
   render() {
      return (
         <div className="App">
            <Switch>
               <Route path="/WritePost" component={PostWriter} />
               <Fragment>
                  <Header />
                  <Main />
               </Fragment>
            </Switch>
         </div>
      );
   }
}

export default hot(module)(App);
