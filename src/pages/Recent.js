import React from 'react';
import Post from 'components/main/posts/Post';
import './Recent.scss';

const Recent = ({ match }) => {
   return (
      <div className="RecentTemplate">
         <div className="RecentSection">
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
