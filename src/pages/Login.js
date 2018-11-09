import React, { Component } from 'react';
import './Login.scss';
import { LoginHeader, LoginBody } from 'components/index.async';

class Login extends Component {
   render() {
      return (
         <div className="LoginTemplate">
            <div className="LoginSection">
               <LoginHeader />
               <LoginBody />
            </div>
         </div>
      );
   }
}

export default Login;
