import React from 'react';
import './MainHead.scss';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
   console.log(response);
};

const MainHead = () => {
   return (
      <div className="MainHead">
         <div className="MainHead__notLogIn">
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

const onSignIn = googleUser => {
   // Useful data for your client-side scripts:
   let profile = googleUser.getBasicProfile();
   console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
   console.log('Full Name: ' + profile.getName());
   console.log('Given Name: ' + profile.getGivenName());
   console.log('Family Name: ' + profile.getFamilyName());
   console.log('Image URL: ' + profile.getImageUrl());
   console.log('Email: ' + profile.getEmail());

   // The ID token you need to pass to your backend:
   let id_token = googleUser.getAuthResponse().id_token;
   console.log('ID Token: ' + id_token);
};

export default MainHead;
