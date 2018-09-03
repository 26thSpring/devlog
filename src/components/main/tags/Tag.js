import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Tag.scss';

class Tag extends Component {
   render() {
      return (
         <Link to={`/tags/${this.props.tagName}`}>
            <div className="Tag">{this.props.tagName}</div>
         </Link>
      );
   }
}

export default Tag;
