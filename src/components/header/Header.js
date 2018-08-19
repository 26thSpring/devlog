import React, { Component } from 'react';
import './Header.scss';
import HeaderTitle from './headerTitle/HeaderTitle';
import HeaderNav from './headerNav/HeaderNav';

class Header extends Component {
   render() {
      return (
         <div className="Header">
            <HeaderTitle />
            <HeaderNav />
         </div>
      );
   }
}

export default Header;
