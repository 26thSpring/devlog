import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';
import defaultProfileImage from 'img/defaultProfileImage.svg';
import defaultThumbnailImage from 'img/defaultThumbnailImage.svg';
import LinesEllipsis from 'react-lines-ellipsis';

class Post extends Component {
   render() {
      console.log(this.props);
      const { _id, thumnail, title, content } = this.props.data;
      const { nickname } = this.props.profile;
      const profileImage = this.props.profile.thumnail;
      return (
         <div className="Post">
            <div className="Post_top">
               <Link
                  className="Post__thumbnail"
                  to={`/post/${nickname}/${_id}`}
               >
                  <div className="whiteSpace" />
                  <img
                     className={thumnail && 'Post__thumbnail__img'}
                     src={
                        thumnail
                           ? `${process.env.REACT_APP_API_DOMAIN}/${
                              thumnail.split('\\')[2]
                           }`
                           : defaultThumbnailImage
                     }
                     alt="thumnail"
                  />
               </Link>
            </div>
            <div className="Post__wrapper">
               <div className="Post__head">
                  <Link
                     to={`/profile/@${nickname}`}
                     className="Post__head__name"
                  >
                     {nickname}
                  </Link>
                  <div className="Post__head__title">
                     <Link to={`/post/${nickname}/${_id}`}>
                        <LinesEllipsis
                           text={title}
                           maxLine="1"
                           ellipsis=".."
                           trimRight
                           basedOn="letters"
                           component="div"
                        />
                     </Link>
                  </div>
                  <span className="Post__head__regdate">
                     1일 전 · 2개의 댓글
                  </span>
                  <Link
                     className="Post__head__profile"
                     to={`/profile/@${nickname}`}
                  >
                     <img
                        className="profileWrapper"
                        //src={defaultProfileImage}
                        src={profileImage}
                        alt="defaultProfile"
                     />
                  </Link>
               </div>
               <div className="Post__content">
                  <LinesEllipsis
                     text={content}
                     maxLine="3"
                     ellipsis=".."
                     trimRight
                     basedOn="letters"
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Post;
