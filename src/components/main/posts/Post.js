import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';
import defaultProfileImage from 'img/defaultProfileImage.svg';
import defaultThumbnailImage from 'img/defaultThumbnailImage.svg';
import LinesEllipsis from 'react-lines-ellipsis';

class Post extends Component {
   render() {
      console.log(this.props);
      const { _id, thumnail, title, content, regdate } = this.props.data;
      const { nickname } = this.props.profile;
      const profileImage = this.props.profile.thumnail;

      let timelate = parseInt(
         (new Date().getTime() - new Date(regdate).getTime()) /
            1000 /
            60 /
            60 /
            24
      );
      let datelate = timelate + '일';
      if (timelate === 0) {
         let minutelate =
            (new Date().getTime() - new Date(regdate).getTime()) / 1000 / 60;
         datelate = parseInt(minutelate) + '분';

         if (minutelate < 4) {
            datelate = '방금';
         }
         if (parseInt(minutelate) >= 60) {
            minutelate = minutelate / 60;
            datelate = parseInt(minutelate) + '시간';

            if (minutelate > 21) {
               datelate = '1일';
            }
         }
      }
      if (timelate >= 30) {
         timelate = parseInt(timelate / 30);
         datelate = timelate + '달';

         if (timelate >= 12) {
            timelate = parseInt(timelate / 12);
            datelate = timelate + '년';
         }
      }
      //console.log(datelate);
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
                     onError={e => {
                        e.target.src = defaultThumbnailImage;
                        console.log(
                           e.target.classList.remove('Post__thumbnail__img')
                        );
                     }}
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
                     {datelate} 전 · 2개의 댓글
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
