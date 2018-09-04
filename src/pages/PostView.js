import React, { Component } from 'react';
import './PostView.scss';
import {
   PostViewHeader,
   PostViewMain,
   PostViewFooter
} from 'components/index.async';

class PostView extends Component {
   render() {
      return (
         <div className="PostViewTemplate">
            <div className="PostViewSection">
               <PostViewHeader />
               <PostViewMain />
               <PostViewFooter />
            </div>
         </div>
      );
   }
}

export default PostView;
