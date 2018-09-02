import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';
import defaultProfileImage from 'img/defaultProfileImage.svg';
import defaultThumbnailImage from 'img/defaultThumbnailImage.svg';

class Post extends Component {
   render() {
      return (
         <div className="Post">
            <div className="Post_top">
               <Link className="Post__thumbnail" to="/">
                  <div className="whiteSpace" />
                  <img src={defaultThumbnailImage} alt="defaulThumnail" />
               </Link>
            </div>
            <div className="Post__wrapper">
               <div className="Post__head">
                  <span className="Post__head__name">스물여섯번째 봄</span>
                  <Link className="Post__head__title" to="/">
                     <span>노토 산스 코리아 / Apple SD Gothic Neo</span>
                  </Link>
                  <span className="Post__head__regdate">
                     1일 전 · 2개의 댓글
                  </span>
                  <Link className="Post__head__profile" to="/">
                     <img
                        className="profileWrapper"
                        src={defaultProfileImage}
                        alt="defaultProfile"
                     />
                  </Link>
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
