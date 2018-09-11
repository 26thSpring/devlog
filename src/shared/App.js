import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import { hot } from 'react-hot-loader';
import { PostWriter, PostView } from 'pages/index.async';

class App extends Component {
   componentDidMount() {
      //   fetch('http://localhost:3002/api/users')
      //      .then(res => res.json())
      //      .then(json => console.log(json))
      //      .catch(err => console.log(err));
   }

   render() {
      return (
         <div className="App">
            <Switch>
               <Route path="/WritePost" component={PostWriter} />
               <Route path="/post/:name/:post_id" component={PostView} />
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
