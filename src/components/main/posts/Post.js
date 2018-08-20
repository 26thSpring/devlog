import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

class Post extends Component {
   render() {
      return (
         <div className="Post">
            <Link className="Post__thumbnail" to="/">
               <svg viewBox="0 0 5rem 4rem">
                  <use xlinkHref="img/defaultProfileImage.svg" />
               </svg>
               <div className="whiteSpace" />
            </Link>
            <div className="Post__head">
               <span className="Post__head__name">스물여섯번째 봄</span>
               <Link to="/">
                  <span className="Post__head__title">취업 좀 가즈아</span>
               </Link>
               <span className="Post__head__regdate">1일 전 · 2개의 댓글</span>
               <div className="Post__head__profile">
                  <img
                     className="Post__head__profileImage"
                     src="defaultProfileImage.png"
                     alt="defaultImage"
                  />
               </div>
            </div>
            <div className="Post__content">
               사람인 ok 잡코리아 ok 인크루트 ok 게임잡 ok 로켓펀치 ok
            </div>
         </div>
      );
   }
}

export default Post;
