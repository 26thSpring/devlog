import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.scss';
import { Recent, Trending, Sort, Tags } from 'pages/index.async.js';
import MainHead from './MainHead';

class Main extends Component {
   render() {
      console.log('환경변수');
      console.log(process.env);
      return (
         <div className="Main">
            <MainHead />
            <Switch>
               <Route path="/recent" component={Recent} />
               <Route path="/trending" component={Trending} />
               <Route path="/sort" component={Sort} />
               <Route path="/tags" component={Tags} />
               <Route path="/" component={Recent} />
            </Switch>
         </div>
      );
   }
}

export default Main;
