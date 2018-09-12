import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderTitle.scss';

class HeaderTitle extends Component {
   render() {
      return (
         <div className="HeaderTitle">
            <Link to="/">devlog</Link>
         </div>
      );
   }
}

export default HeaderTitle;
