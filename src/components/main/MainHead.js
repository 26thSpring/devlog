import React from 'react';
import './MainHead.scss';

const MainHead = () => {
   return (
      <div className="MainHead">
         <div className="MainHead__notLogIn">
            <button className="MainHead__notLogIn__loginButton">로그인</button>
         </div>
         <div className="MainHead__logIn">
            <div className="MainHead__profileImage" />
            <div className="MainHead__settings" />
         </div>
      </div>
   );
};

export default MainHead;
