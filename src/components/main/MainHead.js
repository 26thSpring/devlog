import React, { Component } from 'react';
import './MainHead.scss';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import profileImage from 'img/defaultProfileImage.svg';

class MainHead extends Component {
   constructor() {
      super();
      //localStorage.setItem('devlog_user', 'foelsk56@gmail.com');
      if (document.getElementsByClassName('settings__wrapper')[0])
         window.document.body.onclick = () => {
            document
               .getElementsByClassName('settings__wrapper')[0]
               .classList.remove('active_settings');
         };
   }
   componentDidMount() {
      !localStorage.getItem('devlog_user')
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
      if (response) {
      }
      this.setState({
         login: true,
         name: response.profileObj.name,
         profileImage: response.profileObj.imageUrl
      });

      localStorage.setItem('devlog_user', response.profileObj.email);
   };
   googleLogout = () => {
      console.log('googleLogout');
      this.setState({
         login: false,
         viewProfile: false
      });
      localStorage.removeItem('devlog_user');
   };
   handleProfileClick = () => {
      const settings = document.getElementsByClassName('settings__wrapper')[0];
      console.log(settings);
      settings.classList.toggle('active_settings');
   };
   render() {
      return (
         <div className="MainHead">
            <Link to="/postwrite">
               <div className="btn_writePost">새 포스트 작성</div>
            </Link>
            {!this.state.login ? (
               <GoogleLogin
                  className="GoogleLogin"
                  clientId="258535519525-703qujqlaq80t3k4bbqkre5pqftghsmm.apps.googleusercontent.com"
                  buttonText="구글 계정으로 로그인"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
               />
            ) : (
               <div className="MainHead__profile">
                  <img
                     className="MainHead__profile__thumnail"
                     onClick={this.handleProfileClick.bind(this)}
                     src={this.state.profileImage}
                     alt="aaa"
                  />

                  <div className="settings__wrapper">
                     <div
                        ref={ref => {
                           this.profileMenu = ref;
                        }}
                        className={'MainHead__profile__content'}
                        tabIndex={-1}
                     >
                        <Link to="/profile/@devlog" className="settings_item">
                           내 프로필
                        </Link>
                        <Link to="/postwrite" className="settings_item">
                           새 글 작성
                        </Link>
                        <div className="settings_item">임시 글</div>
                        <div className="settings_item">설정</div>
                        <GoogleLogout
                           className="GoogleLogout"
                           buttonText="로그아웃"
                           onLogoutSuccess={this.googleLogout}
                        />
                     </div>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

export default MainHead;
