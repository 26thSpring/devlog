import React, { Component } from 'react';
import { Post } from 'components/index.async';
import { PostListContainer } from 'containers/index.async';
import './Recent.scss';

class Recent extends Component {
   render() {
      return (
         <div className="RecentTemplate">
            <div className="RecentSection">
               <div className="contents">
                  <div className="RecentPosts">
                     <PostListContainer />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Recent;
