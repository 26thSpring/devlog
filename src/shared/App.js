import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import { hot } from 'react-hot-loader';
import { PostWriter, PostView, Profile, Login } from 'pages/index.async';

let user = localStorage.getItem('devlog_user');

class App extends Component {
   render() {
      user = 'dd';
      return (
         <div className="App">
            {!user ? (
               <Login />
            ) : (
               <Switch>
                  <Route path="/profile/@:username" component={Profile} />
                  <Route path="/postwrite" component={PostWriter} />
                  <Route path="/post/:name/:post_id" component={PostView} />
                  <Fragment>
                     <Header />
                     <Main />
                  </Fragment>
               </Switch>
            )}
         </div>
      );
   }
}

export default hot(module)(App);
