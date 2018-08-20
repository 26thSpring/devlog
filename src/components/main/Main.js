import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import './Main.scss';
import { Recent, Trending, Sort, Tags } from 'pages/index.async.js';

class Main extends Component {
   render() {
      return (
         <Fragment>
            <Route path="/recent" component={Recent} />
            <Route path="/trending" component={Trending} />
            <Route path="/sort" component={Sort} />
            <Route path="/tags" component={Tags} />
         </Fragment>
      );
   }
}

export default Main;
