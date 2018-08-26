import React from 'react';
import './MainHead.scss';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
   console.log(response);
};

const MainHead = () => {
   return (
      <div className="MainHead">
         <div className="MainHead__notLogIn">
            <Link to="/WritePost">
               <div className="btn_writePost">새 포스트 작성</div>
            </Link>
            {/* <button
               className="MainHead__notLogIn__loginButton"
               onClick={onSignIn}
            >
               로그인
            </button> */}
            <GoogleLogin
               clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
               buttonText="Login"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
            />
         </div>
         <div className="MainHead__logIn">
            <div className="MainHead__profileImage" />
            <div className="MainHead__settings" />
         </div>
      </div>
   );
};

export default MainHead;
