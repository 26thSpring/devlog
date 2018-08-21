import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';
import defaultProfileImage from 'img/defaultProfileImage.svg';
import defaultThumbnailImage from 'img/defaultThumbnailImage.svg';

class Post extends Component {
   render() {
      return (
         <div className="Post">
            <div className="Post__wrappper">
               <Link className="Post__thumbnail" to="/">
                  <div className="whiteSpace" />
                  <object type="image/svg+xml" data={defaultThumbnailImage}>
                     현재 브라우저는 iframe을 지원하지 않습니다.
                  </object>
               </Link>
               <div className="Post__head">
                  <span className="Post__head__name">스물여섯번째 봄</span>
                  <Link to="/">
                     <span className="Post__head__title">취업 좀 가즈아</span>
                  </Link>
                  <span className="Post__head__regdate">
                     1일 전 · 2개의 댓글
                  </span>
                  <div className="Post__head__profile">
                     <object type="image/svg+xml" data={defaultProfileImage}>
                        현재 브라우저는 iframe을 지원하지 않습니다.
                     </object>
                  </div>
               </div>
               <div className="Post__content">
                  <span>
                     사람인 ok 잡코리아 ok 인크루트 ok 게임잡 ok 로켓펀치 ok
                  </span>
               </div>
            </div>
         </div>
      );
   }
}

export default Post;
