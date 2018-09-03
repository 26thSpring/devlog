import React, { Component } from 'react';
import './MainHead.scss';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import profileImage from 'img/defaultProfileImage.svg';

class MainHead extends Component {
   constructor() {
      super();
      sessionStorage.setItem('loginUser', 'foelsk56@gmail.com');
   }
   componentDidMount() {
      !sessionStorage.getItem('loginUser')
         ? this.setState({ login: false })
         : this.setState({ login: true });
   }
   state = {
      viewProfile: false,
      name: '',
      profileImage: ''
   };
   responseGoogle = response => {
      console.log(response);
      this.setState({
         login: true,
         name: response.profileObj.name,
         profileImage: response.profileObj.imageUrl
      });
      sessionStorage.setItem('loginUser', response.profileObj.email);
   };
   googleLogout = () => {
      console.log('googleLogout');
      this.setState({
         login: false,
         viewProfile: false
      });
      sessionStorage.removeItem('loginUser');
   };
   handleClick = () => {
      this.setState({ viewProfile: !this.state.viewProfile });
      //this.profileMenu.focus();
   };
   render() {
      return (
         <div className="MainHead">
            <Link to="/WritePost">
               <div className="btn_writePost">새 포스트 작성</div>
            </Link>
            {!this.state.login ? (
               <GoogleLogin
                  className="GoogleLogin"
                  clientId="725851416084-g4n4t67kgo93hu9ccmlt7314hretdvom.apps.googleusercontent.com"
                  buttonText="구글 계정으로 로그인"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
               />
            ) : (
               <div className="MainHead__profile">
                  <img
                     className="MainHead__profile__thumnail"
                     onClick={this.handleClick.bind(this)}
                     src={this.state.profileImage}
                     alt="aaa"
                  />
                  {this.state.viewProfile && (
                     <div className="settings__wrapper">
                        <div
                           ref={ref => {
                              this.profileMenu = ref;
                           }}
                           className={`MainHead__profile__content ${!this.state
                              .viewProfile && 'hidden'}`}
                           tabIndex={-1}
                        >
                           <div className="settings_item">내 프로필</div>
                           <div className="settings_item">새 글 작성</div>
                           <div className="settings_item">임시 글</div>
                           <div className="settings_item">설정</div>
                           <GoogleLogout
                              className="GoogleLogout"
                              buttonText="로그아웃"
                              onLogoutSuccess={this.googleLogout}
                           />
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
      );
   }
}

export default MainHead;
