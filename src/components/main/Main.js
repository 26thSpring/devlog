import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Main.scss';
import { Recent, Trending, Sort, Tags } from 'pages/index.async.js';
import { MainHead } from 'components/index.async.js';

class Main extends Component {
   render() {
      return (
         <div className="Main">
            <MainHead />
            <Route path="/recent" component={Recent} />
            <Route path="/trending" component={Trending} />
            <Route path="/sort" component={Sort} />
            <Route path="/tags" component={Tags} />
         </div>
      );
   }
}

export default Main;
