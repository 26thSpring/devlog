import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostViewHeader.scss';

class PostViewHeader extends Component {
   render() {
      return (
         <div className="PostViewHeader">
            <Link to="/">devlog</Link>
         </div>
      );
   }
}

export default PostViewHeader;
