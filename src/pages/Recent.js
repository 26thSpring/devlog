import React from 'react';
import Post from 'components/main/posts/Post';
import './Recent.scss';

const Recent = ({ match }) => {
   return (
      <div className="RecentTemplate">
         <div className="RecentSection">
            <h2>지금 뜨고 있는 포스트</h2>
            <div className="contents">
               <div className="RecentPosts">
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Recent;
