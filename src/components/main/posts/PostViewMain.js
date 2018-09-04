import React, { Component } from 'react';
import './PostViewMain.scss';
import defaultProfileImage from 'img/defaultProfileImage.svg';
import emptyHeart from 'img/postView/emptyHeart.svg';
import fillHeart from 'img/postView/fillHeart.svg';

class PostViewMain extends Component {
   render() {
      return (
         <div className="PostViewMain">
            <div className="PostViewMain__writer">
               <div className="profileImageWrap">
                  <img src={defaultProfileImage} alt="profileImage" />
               </div>
               <div className="profileSection">
                  <div className="profileName">@devlog</div>
                  <div className="profileIntro">
                     프론트 엔드 개발자 지망생, React / Node.js / Mongodb 를
                     사용해서 개발합니다.
                  </div>
               </div>
            </div>
            <div className="PostViewMain__head">
               <span className="PostViewMain__head__title">
                  devlog 테스트 버전 1.98
               </span>
               <div className="flex">
                  <div className="PostViewMain__head__regdate">2일 전</div>
                  <span className="PostViewMain__head__like">
                     <img className="heartIcon" src={fillHeart} alt="" />
                     <span>3</span>
                  </span>
               </div>
            </div>
            <div className="PostViewMain__content">
               <h2>9/04 작업내용</h2>
               1.
               <br />
               포스트 목록 가져올 때 정렬 안되던 문제 해결
               <br />
               {`User.findOneAndUpdate(
                    { email },
                    {
                        $push: {
                        posts: { $each: [{ title, content, thumnail }], $sort: -1 }
                        }
                    }
                );`}
               <br />
               <br />
               2.
               <br />
               PostWriter 부분 submit 폼 구현 ( 미완 )<br />
               PostWriter > WriterHead > 작성하기 클릭 > 폼 애니메이션 slide in
               <br />
               <br />
               3.
               <br />
               PostView 페이지 작업 ( 미완 )<br />
               <br />
               <h2>앞으로 할 것들</h2>
               submit 폼 완성하기 > 다른 곳 클릭 시 slide out 처리 <br />
               댓글 컴포넌트 구현, 데이터 연동 작업 해야함 <br />
               태그 추가 기능 구현, 태그 페이지 작업 <br />
               로그인 세션 문제 해결해야 함 + 토큰으로 로그인 객체 생성
               <br />
               프로필 설정 페이지 작업
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
            </div>
         </div>
      );
   }
}

export default PostViewMain;
