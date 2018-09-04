import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';
import defaultProfileImage from 'img/defaultProfileImage.svg';
import defaultThumbnailImage from 'img/defaultThumbnailImage.svg';
import LinesEllipsis from 'react-lines-ellipsis';

class Post extends Component {
   render() {
      return (
         <div className="Post">
            <div className="Post_top">
               <Link className="Post__thumbnail" to="/">
                  <div className="whiteSpace" />
                  <img
                     className={
                        this.props.data.thumnail && 'Post__thumbnail__img'
                     }
                     src={
                        this.props.data.thumnail
                           ? `http://localhost:3002/${
                              this.props.data.thumnail.split('\\')[2]
                           }`
                           : defaultThumbnailImage
                     }
                     alt="thumnail"
                  />
               </Link>
            </div>
            <div className="Post__wrapper">
               <div className="Post__head">
                  <span className="Post__head__name">{this.props.name}</span>
                  <Link className="Post__head__title" to="/">
                     <LinesEllipsis
                        text={this.props.data.title}
                        maxLine="1"
                        ellipsis=".."
                        trimRight
                        basedOn="letters"
                     />
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
                  <LinesEllipsis
                     text={this.props.data.content}
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
