import React from 'react';
import Post from 'components/main/posts/Post';
import './Trending.scss';

const Trending = ({ match }) => {
   return (
      <div className="TrendingTemplate">
         <div className="TrendingSection">
            <h2>최근 뜨고 있는 포스트</h2>
            <div className="contents">
               <div className="TrendingPosts">
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

export default Trending;
